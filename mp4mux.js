/*
 * Minimal MP4 (ISO BMFF) writer for H.264 video.
 * Input : AVCC samples (4-byte length-prefixed NAL units, as produced by WebCodecs
 *         VideoEncoder with avc.format = 'avc') and the avcC record from the encoder.
 * Output: a Uint8Array holding a complete .mp4 file (moov before mdat, so it plays
 *         while downloading and on every common player).
 * Fully local: no network, no dependencies.
 */
(function (root) {
  'use strict';

  function concat(parts) {
    let n = 0;
    for (const p of parts) n += p.length;
    const out = new Uint8Array(n);
    let o = 0;
    for (const p of parts) {
      if (p instanceof Uint8Array) {
        out.set(p, o);
      } else {
        for (let i = 0; i < p.length; i++) out[o + i] = p[i];
      }
      o += p.length;
    }
    return out;
  }

  const u16 = (n) => [(n >>> 8) & 0xff, n & 0xff];
  const u32 = (n) => [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff];
  const str4 = (s) => [s.charCodeAt(0), s.charCodeAt(1), s.charCodeAt(2), s.charCodeAt(3)];
  const zeros = (n) => new Array(n).fill(0);

  function box(type, ...parts) {
    const body = concat(parts);
    return concat([u32(body.length + 8), str4(type), body]);
  }

  function fullBox(type, version, flags, ...parts) {
    return box(type, [version, (flags >>> 16) & 0xff, (flags >>> 8) & 0xff, flags & 0xff], ...parts);
  }

  // Unity transformation matrix (fixed-point 16.16 and 2.30 values).
  const MATRIX = [...u32(0x00010000), ...zeros(4), ...u32(0x00010000), ...zeros(4), ...u32(0x40000000)];

  function build(opts) {
    const { width, height, fps, avcC, samples } = opts;
    if (!avcC || !samples || samples.length === 0) throw new Error('No encoded video to write');

    const n = samples.length;
    const timescale = fps * 1000; // one frame = 1000 units, exact for any integer fps
    const frameUnits = 1000;
    const trackDuration = n * frameUnits;
    const movieTimescale = 1000;
    const movieDuration = Math.round((n * 1000) / fps);

    const keyframes = [];
    samples.forEach((s, i) => { if (s.key) keyframes.push(i + 1); });

    const avc1 = box(
      'avc1',
      zeros(6), u16(1),
      u16(0), u16(0), zeros(12),
      u16(width), u16(height),
      u32(0x00480000), u32(0x00480000),
      u32(0), u16(1),
      zeros(32),
      u16(0x0018), u16(0xffff),
      box('avcC', avcC)
    );

    const buildMoov = (firstSampleOffset) => {
      const mvhd = fullBox('mvhd', 0, 0,
        u32(0), u32(0), u32(movieTimescale), u32(movieDuration),
        u32(0x00010000), u16(0x0100), u16(0), u32(0), u32(0),
        MATRIX, zeros(24), u32(2));

      const tkhd = fullBox('tkhd', 0, 3,
        u32(0), u32(0), u32(1), u32(0), u32(movieDuration), u32(0), u32(0),
        u16(0), u16(0), u16(0), u16(0),
        MATRIX, u32(width * 65536), u32(height * 65536));

      const mdhd = fullBox('mdhd', 0, 0,
        u32(0), u32(0), u32(timescale), u32(trackDuration), u16(0x55c4), u16(0));

      const hdlr = fullBox('hdlr', 0, 0,
        u32(0), str4('vide'), u32(0), u32(0), u32(0),
        [...'VideoHandler'].map((c) => c.charCodeAt(0)), [0]);

      const vmhd = fullBox('vmhd', 0, 1, u16(0), u16(0), u16(0), u16(0));
      const dinf = box('dinf', fullBox('dref', 0, 0, u32(1), fullBox('url ', 0, 1)));

      const stsd = fullBox('stsd', 0, 0, u32(1), avc1);
      const stts = fullBox('stts', 0, 0, u32(1), u32(n), u32(frameUnits));
      const stss = fullBox('stss', 0, 0, u32(keyframes.length), ...keyframes.map((k) => u32(k)));
      // All samples live in one chunk, so one stsc entry and one stco offset are enough.
      const stsc = fullBox('stsc', 0, 0, u32(1), u32(1), u32(n), u32(1));
      const stsz = fullBox('stsz', 0, 0, u32(0), u32(n), ...samples.map((s) => u32(s.data.length)));
      const stco = fullBox('stco', 0, 0, u32(1), u32(firstSampleOffset));

      const stbl = box('stbl', stsd, stts, stss, stsc, stsz, stco);
      const minf = box('minf', vmhd, dinf, stbl);
      const mdia = box('mdia', mdhd, hdlr, minf);
      const trak = box('trak', tkhd, mdia);
      return box('moov', mvhd, trak);
    };

    const ftyp = box('ftyp', str4('isom'), u32(512),
      str4('isom'), str4('iso2'), str4('avc1'), str4('mp41'));

    // The stco value is a fixed-size u32, so the moov length does not depend on it.
    const moovLength = buildMoov(0).length;
    const firstSampleOffset = ftyp.length + moovLength + 8; // 8 = mdat header
    const moov = buildMoov(firstSampleOffset);

    const payloadLength = samples.reduce((sum, s) => sum + s.data.length, 0);
    const mdatHeader = concat([u32(payloadLength + 8), str4('mdat')]);

    return concat([ftyp, moov, mdatHeader, ...samples.map((s) => s.data)]);
  }

  const api = { build };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.Mp4Mux = api;
})(typeof self !== 'undefined' ? self : this);
