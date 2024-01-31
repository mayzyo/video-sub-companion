# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['app.py'],
    pathex=[],
    binaries=[],
    datas=[('E:\\Projects\\video-sub-companion\\venv\\Lib\\site-packages\\webui\\webui-windows-msvc-x64\\webui-2.dll', '.\\webui\\webui-windows-msvc-x64'), ('E:\\Projects\\video-sub-companion\\assets', '.\\assets'), ('E:\\Projects\\video-sub-companion\\index.html', '.'), ('E:\\Projects\\video-sub-companion\\logo.svg', '.'), ('E:\\Projects\\video-sub-companion\\ffmpeg\\bin\\ffmpeg.exe', '.'), ('E:\\Projects\\video-sub-companion\\ffmpeg\\bin\\ffprobe.exe', '.')],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='app',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=True,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=['logo.ico'],
    contents_directory='.',
)
coll = COLLECT(
    exe,
    a.binaries,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='app',
)
