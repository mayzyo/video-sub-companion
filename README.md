# Video Sub Companion

## Instructions

Manually download ffmpeg and put it in the root directory if you would like to bundle ffmpeg.
Remove `--add-data E:\Projects\video-sub-companion\ffmpeg\bin\ffmpeg.exe:.` and `--add-data E:\Projects\video-sub-companion\ffmpeg\bin\ffprobe.exe:.` from the build command if you would like to not bundle a ffmpeg.

Note, the bundle only works when you run the app.exe in the folder, shortcut won't work. Otherwise it would not detect the bundled ffmeg.