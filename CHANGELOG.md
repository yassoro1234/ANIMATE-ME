# Changelog — Frame Studio 2.3

## Implemented in 2.3

### Storage
- IndexedDB primary store + localStorage fallback + auto-migration

### Timeline
- Zoom, playhead, layer lock / rename / duplicate / reorder
- Tween range markers

### Animation
- Stable object IDs
- Independent Scale X / Scale Y
- **Channel keyframes**: add/delete keys at current frame for X, Y, Rotation, ScaleX, ScaleY, Opacity
- Graph Editor curves applied to interpolation
- Legacy tweens still supported

### Audio
- Import MP3 / WAV
- Volume control
- Per-clip start frame
- Sync with timeline playback

### Drawing / media
- Text tool
- Image import (PNG/JPEG/WebP) as movable objects

### Export
- Frame range + FPS settings
- Progress bar + cancel
- PNG sequence
- GIF with range
- Video MP4 attempt → WebM fallback (honest messaging)
- Project JSON import/export

### UX
- Press animations, no blue highlight, smarter Back, save indicator

## Remaining limitations
- Video export does not mux audio into the file (browser MediaRecorder limits without complex WebAudio wiring).
- Per-channel curves in Graph Editor are shared per key segment (not a full multi-curve UI yet).
- No waveform visualization.
- APK via GitHub Actions only.
