pyinstaller --onedir  --contents-directory . `
    --icon=logo.ico `
    --add-data E:\Projects\video-sub-companion\venv\Lib\site-packages\webui\webui-windows-msvc-x64\webui-2.dll:.\webui\webui-windows-msvc-x64 app.py `
    --add-data E:\Projects\video-sub-companion\assets:.\assets `
    --add-data E:\Projects\video-sub-companion\index.html:. `
    --add-data E:\Projects\video-sub-companion\vite.svg:.