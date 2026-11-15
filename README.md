# Frame Studio 2.1 — Animation Engine Update

## Added in this build
- Per-shape tween clips with frame range, X/Y translation, rotation, scale and opacity interpolation.
- Cubic Bezier timing interpolation using the Graph Editor curve.
- Graph curve can be saved globally or on the selected tween.
- Tween editing, deletion and jump-to-start/end controls.
- WebM animation export using MediaRecorder (browser support required).
- Project JSON backup and import.
- Existing frame-by-frame drawing and projects are retained; older projects are migrated with empty tween lists.

## Limitations / next engineering work
- A tween targets the selected shape index on one layer. Editing/reordering shapes or inserting frames can require updating tween targets/ranges.
- MP4 and GIF encoding are not included; this build exports WebM and PNG.
- Existing project storage remains localStorage; IndexedDB migration and robust quota/error handling are still needed.
- This is a web source package, not a signed APK. Build via the included GitHub Actions workflow.

Open `index.html` through localhost or HTTPS. For APK build, push the folder to GitHub and run the Build APK workflow.
