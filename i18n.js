/*
 * English / Arabic switch for Frame Studio.
 * The app is written in Arabic. This file translates the visible text (HTML text,
 * placeholders, titles, labels), native dialogs (alert/confirm/prompt) and text that
 * the app renders later. Language is stored per device; switching reloads the page.
 */
(function () {
  'use strict';

  const EN = {
    'استوديو الرسوم المتحركة': 'Animation studio',
    'مرحباً بك في Frame Studio': 'Welcome to Frame Studio',
    'دخول': 'Log in',
    'حساب جديد': 'New account',
    'اسم المستخدم': 'Username',
    'كلمة المرور (4 أحرف على الأقل)': 'Password (at least 4 characters)',
    'بياناتك وحسابك محفوظة على هذا الجهاز': 'Your data and account are stored on this device',
    'مشاريعي': 'My projects',
    'خروج': 'Log out',
    '+ مشروع جديد': '+ New project',
    'رجوع إلى المشاريع': 'Back to projects',
    'رجوع': 'Back',
    'اسم المشروع': 'Project name',
    'محفوظ': 'Saved',
    'حالة الحفظ': 'Save status',
    'تراجع': 'Undo',
    'إعادة': 'Redo',
    'تشغيل': 'Play',
    'إيقاف': 'Pause',
    'تصغير الخط الزمني': 'Zoom out timeline',
    'تصغير': 'Zoom out',
    'تكبير الخط الزمني': 'Zoom in timeline',
    'تكبير': 'Zoom in',
    'إضافة إطار': 'Add frame',
    '+ إطار': '+ Frame',
    'نسخ الإطار': 'Duplicate frame',
    'نسخ': 'Copy',
    'تحديد': 'Select',
    'فرشاة': 'Brush',
    'ممحاة': 'Eraser',
    'نص': 'Text',
    'استيراد صورة': 'Import image',
    'اللون': 'Color',
    'الحجم': 'Size',
    'حذف المحدد': 'Delete selected',
    'خط': 'Line',
    'مستطيل': 'Rectangle',
    'دائرة': 'Circle',
    '+ طبقة': '+ Layer',
    'نسخ الطبقة': 'Duplicate layer',
    'حذف الطبقة': 'Delete layer',
    'إعادة تسمية': 'Rename',
    '↑ أعلى': '↑ Up',
    '↓ أسفل': '↓ Down',
    'اختيار لون مخصص': 'Pick a custom color',
    'لوحة الألوان': 'Color palette',
    '+ حفظ اللون': '+ Save color',
    'مسح الإطار': 'Clear frame',
    'حذف الإطار': 'Delete frame',
    'قشرة الإطار السابق': 'Onion skin',
    'خصائص الحركة': 'Motion properties',
    'إنشاء حركة': 'Create motion',
    'حذف الحركة': 'Delete motion',
    'إطار البداية': 'Start frame',
    'إطار النهاية': 'End frame',
    'مفتاح هنا': 'Keyframe here',
    'حذف مفتاح': 'Delete keyframe',
    'سرعة التشغيل': 'Playback speed',
    '+ استيراد صوت (MP3/WAV)': '+ Import audio (MP3/WAV)',
    'مستوى الصوت': 'Volume',
    'من': 'from',
    'إلى': 'to',
    'صورة PNG': 'PNG image',
    'شريط PNG': 'PNG strip',
    'تسلسل PNG': 'PNG sequence',
    'تصدير GIF': 'Export GIF',
    'تصدير فيديو': 'Export video',
    'نسخة المشروع': 'Project copy',
    'استيراد مشروع': 'Import project',
    'معاينة': 'Preview',
    'جارٍ التصدير...': 'Exporting...',
    'إلغاء': 'Cancel',
    'رسم': 'Draw',
    'أشكال': 'Shapes',
    'طبقات': 'Layers',
    'إطارات': 'Frames',
    'ألوان': 'Colors',
    'حركة': 'Motion',
    'صوت': 'Audio',
    'تصدير': 'Export',
    'شريط الإطارات': 'Frame strip',
    'إغلاق': 'Close',
    'خصائص الحركة — قنوات مستقلة': 'Motion properties — independent channels',
    'Position X من': 'Position X from',
    'Position X إلى': 'Position X to',
    'Position Y من': 'Position Y from',
    'Position Y إلى': 'Position Y to',
    'Rotation من °': 'Rotation from °',
    'Rotation إلى °': 'Rotation to °',
    'Scale X من %': 'Scale X from %',
    'Scale X إلى %': 'Scale X to %',
    'Scale Y من %': 'Scale Y from %',
    'Scale Y إلى %': 'Scale Y to %',
    'Opacity من %': 'Opacity from %',
    'Opacity إلى %': 'Opacity to %',
    'حفظ / تحديث الحركة': 'Save / update motion',
    'منحنى التوقيت والتسارع': 'Timing and easing curve',
    'منحنى Bezier قابل للتحرير': 'Editable Bezier curve',
    'إعادة الضبط': 'Reset',
    'حفظ المنحنى': 'Save curve',
    'إنشاء الحساب': 'Create account',
    'أدخل اسماً وكلمة مرور من 4 أحرف على الأقل': 'Enter a name and a password of at least 4 characters',
    'هذا الاسم مستخدم بالفعل': 'This name is already taken',
    'الحساب غير موجود': 'Account not found',
    'كلمة المرور غير صحيحة': 'Wrong password',
    'تعذّر التحقق. افتح التطبيق عبر رابط https': 'Could not verify. Open the app through an https link',
    'لا توجد مشاريع بعد. ابدأ بإنشاء مشروع جديد.': 'No projects yet. Start by creating a new project.',
    'حذف': 'Delete',
    'تأكيد الحذف': 'Confirm delete',
    'مشروع': 'Project',
    'تعذر إنشاء المشروع — قد تكون مساحة التخزين ممتلئة': 'Could not create the project. Storage may be full.',
    'المشروع غير موجود': 'Project not found',
    'تعذر فتح المشروع': 'Could not open the project',
    'تغييرات غير محفوظة': 'Unsaved changes',
    'خطأ في الحفظ': 'Save error',
    'هناك تغييرات غير محفوظة. هل تريد المغادرة؟': 'There are unsaved changes. Leave anyway?',
    'بدون اسم': 'Untitled',
    'طبقة 1': 'Layer 1',
    'حدد عنصراً أولاً.': 'Select an item first.',
    'أدخل النص:': 'Enter text:',
    'طبقة': 'Layer',
    '(نسخة)': '(copy)',
    'اسم الطبقة:': 'Layer name:',
    'إظهار أو إخفاء': 'Show or hide',
    'قفل الطبقة': 'Lock layer',
    'اضغط مرتين لإعادة التسمية': 'Double-tap to rename',
    'تصدير تسلسل PNG...': 'Exporting PNG sequence...',
    'تصدير MP4...': 'Exporting MP4...',
    'تعذر تصدير MP4:': 'Could not export MP4:',
    'تسجيل الفيديو غير مدعوم في هذا المتصفح. جرّب Chrome حديثاً.': 'Video recording is not supported in this browser. Try a recent Chrome.',
    'هذا المتصفح لا يدعم تصدير MP4 أو WebM.': 'This browser supports neither MP4 nor WebM export.',
    'تصدير فيديو...': 'Exporting video...',
    'تعذر تصدير الفيديو:': 'Could not export video:',
    'التصدير قد يحتاج ذاكرة كبيرة. هل تريد المتابعة؟': 'Export may need a lot of memory. Continue?',
    'تصدير GIF...': 'Exporting GIF...',
    'تعذر تصدير GIF:': 'Could not export GIF:',
    'ملف مشروع غير صالح': 'Invalid project file',
    'مشروع مستورد': 'Imported project',
    '- نسخة': '- copy',
    'تعذر استيراد المشروع:': 'Could not import project:',
    'اختر رسماً أولاً باستخدام أداة التحديد.': 'Select a drawing first with the selection tool.',
    'يجب أن يكون الإطار الأخير بعد الإطار الأول.': 'The end frame must come after the start frame.',
    'تم إنشاء الحركة وربطها بالعنصر (ID ثابت).': 'Motion created and linked to the item (fixed ID).',
    'تم تحديث الحركة.': 'Motion updated.',
    'تم حذف الحركة.': 'Motion deleted.',
    'تم حفظ المنحنى للحركة المحددة.': 'Curve saved for the selected motion.',
    'تم حفظ المنحنى الافتراضي للمشروع.': 'Default project curve saved.',
    'لا توجد مقاطع صوتية بعد.': 'No audio clips yet.',
    'إطار بداية': 'Start frame',
    'تمت إضافة مقطع صوتي.': 'Audio clip added.',
    'تعذر استيراد الصوت': 'Could not import audio',
    'الطبقة مقفلة': 'Layer is locked',
    'اختر ملف صورة': 'Choose an image file',
    'تعذر استيراد الصورة': 'Could not import image',
    '● إظهار/إخفاء · 🔒 قفل الطبقة · اضغط الاسم مرتين لإعادة التسمية': '● Show/hide · 🔒 Lock layer · Double-tap the name to rename',
    'اختر عنصراً. استخدم «مفتاح هنا» لإضافة keyframe على الإطار الحالي لكل القنوات النشطة.': 'Select an item. Use “Keyframe here” to add a keyframe on the current frame for all active channels.',
    'الصوت يتزامن مع التشغيل. اضبط إطار البداية لكل مقطع من القائمة.': 'Audio plays in sync with playback. Set the start frame for each clip in the list.',
    'GIF محلي. الفيديو MP4 (H.264) عبر المتصفح، وإن تعذر يُصدَّر WebM. حدد نطاق الإطارات وFPS قبل التصدير.': 'GIF is made locally. Video is MP4 (H.264) through the browser; if that fails, WebM is exported. Set the frame range and FPS before exporting.',
    'إن لم يبدأ التنزيل، اضغط مطولاً على الصورة لحفظها في معرض هاتفك': 'If the download does not start, long-press the image to save it to your phone gallery.',
    'كل قناة (X, Y, Rotation, Scale X/Y, Opacity) مستقلة. المنحنى في Graph Editor يتحكم بتوقيت الحركة. حدد عنصراً بأداة التحديد أولاً.': 'Each channel (X, Y, Rotation, Scale X/Y, Opacity) is independent. The curve in Graph Editor controls the motion timing. Select an item with the selection tool first.',
    'اسحب مقابض التحكم لتعديل المنحنى. يتم حفظ الإعداد مع المشروع.': 'Drag the handles to edit the curve. The setting is saved with the project.',
    'المتصفح لا يدعم MP4 عبر MediaRecorder؛ تم تصدير WebM. يمكنك تحويله لاحقاً إلى MP4 بأدوات خارجية.': 'This browser does not support MP4 through MediaRecorder, so WebM was exported. You can convert it to MP4 later with external tools.',
    'منحنى Bezier': 'Bezier curve',
    'إن لم يبدأ': 'If it does not start',
  };

  // Patterns with numbers or names filled in at runtime.
  const RULES = [
    [/إطار (\d+) من (\d+) · (.+)/g, 'Frame $1 of $2 · $3'],
    [/تم إضافة\/تحديث مفاتيح على الإطار (\d+) لكل القنوات\./g, 'Keyframes added/updated on frame $1 for all channels.'],
    [/حُذف (\d+) مفتاح من الإطار (\d+)\./g, 'Deleted $1 keyframe(s) from frame $2.'],
    [/فيديو (\d+)\/(\d+)/g, 'Video $1/$2'],
    [/لون (\d+)/g, 'Color $1'],
    [/طبقة (\d+)/g, 'Layer $1'],
    [/^مشروع (\d+)$/g, 'Project $1'],
    [/^أهلاً (.+)$/g, 'Hello $1'],
  ];

  const KEYS = Object.keys(EN).filter((k) => k.length >= 6).sort((a, b) => b.length - a.length);

  let lang = 'ar';
  try { lang = localStorage.getItem('fs_lang') === 'en' ? 'en' : 'ar'; } catch (e) { /* storage blocked */ }

  function tr(text) {
    if (typeof text !== 'string' || lang !== 'en') return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    if (EN[trimmed]) return text.replace(trimmed, EN[trimmed]);
    let out = trimmed;
    for (const [re, rep] of RULES) out = out.replace(re, rep);
    for (const k of KEYS) if (out.includes(k)) out = out.split(k).join(EN[k]);
    return text.replace(trimmed, out);
  }

  const ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];

  function walk(node) {
    if (node.nodeType === 3) {
      const v = node.nodeValue;
      const n = tr(v);
      if (n !== v) node.nodeValue = n;
      return;
    }
    if (node.nodeType !== 1) return;
    for (const a of ATTRS) {
      if (node.hasAttribute(a)) {
        const v = node.getAttribute(a);
        const n = tr(v);
        if (n !== v) node.setAttribute(a, n);
      }
    }
    for (const c of node.childNodes) walk(c);
  }

  function setLang(next) {
    try { localStorage.setItem('fs_lang', next); } catch (e) { /* ignore */ }
    location.reload();
  }

  function applyDirection() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  }

  // Native dialogs: translate the message, keep the default value and return values intact.
  const nativeAlert = window.alert.bind(window);
  const nativeConfirm = window.confirm.bind(window);
  const nativePrompt = window.prompt.bind(window);
  window.alert = (msg) => nativeAlert(tr(String(msg)));
  window.confirm = (msg) => nativeConfirm(tr(String(msg)));
  window.prompt = (msg, def) => nativePrompt(tr(String(msg)), def);

  function init() {
    applyDirection();

    const btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.type = 'button';
    btn.textContent = lang === 'en' ? 'عربي' : 'English';
    btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
    btn.style.cssText = 'position:fixed;top:max(6px,env(safe-area-inset-top));inset-inline-end:6px;z-index:9999;' +
      'padding:4px 10px;border-radius:999px;border:1px solid #2c2c38;background:#20202a;color:#eeeef4;' +
      'font:600 12px Tajawal,system-ui,sans-serif;opacity:.85';
    btn.addEventListener('click', () => setLang(lang === 'en' ? 'ar' : 'en'));
    document.body.appendChild(btn);
    // The switch sits over the editor's top bar, so hide it while the editor is open.
    const st = document.createElement('style');
    st.textContent = 'body:has(#editor:not([hidden])) #langToggle{display:none}';
    document.head.appendChild(st);

    if (lang !== 'en') return;

    walk(document.body);
    new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === 'childList') m.addedNodes.forEach((n) => walk(n));
        else if (m.type === 'characterData') walk(m.target);
        else if (m.type === 'attributes') walk(m.target);
      }
    }).observe(document.body, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ATTRS,
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.FSI18n = { tr, get lang() { return lang; } };
})();
