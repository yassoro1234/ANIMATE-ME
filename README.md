# Frame Studio 2.3

استوديو رسوم متحركة 2D للهاتف.

## تشغيل
```bash
npx serve .
```
استخدم localhost أو HTTPS.

## الميزات الرئيسية
- رسم، أشكال، نص، استيراد صور
- طبقات + Timeline + Onion Skin
- حركة بقنوات مستقلة و keyframes
- Graph Editor (Bezier)
- صوت متزامن مع التشغيل
- تصدير PNG / GIF / فيديو / JSON
- IndexedDB + PWA

## بناء APK
ارفع إلى GitHub → Actions → Build APK → نزّل Artifact.

## القيود
- MP4 يعتمد على المتصفح (وإلا WebM)
- الفيديو المُصدَّر بدون مسار صوت مدمج حالياً
- راجع CHANGELOG للتفاصيل
