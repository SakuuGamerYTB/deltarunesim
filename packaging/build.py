"""Build a standalone archive on the target platform."""
import argparse
import hashlib
import json
import platform
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--target', required=True, choices=['macos-arm64', 'macos-x64', 'windows-x64'])
    args = parser.parse_args()
    expected = {'macos-arm64': ('Darwin', 'arm64'), 'macos-x64': ('Darwin', 'x86_64'), 'windows-x64': ('Windows', 'AMD64')}
    if (platform.system(), platform.machine()) != expected[args.target]:
        parser.error('Build each archive on its target operating system and architecture.')
    build = ROOT / 'build' / args.target
    version = json.loads((ROOT / 'upstream-manifest.json').read_text(encoding='utf-8'))['version']
    name = f'deltarunesim-offline-{version}-{args.target}'
    stage = build / name
    if stage.exists():
        shutil.rmtree(stage)
    subprocess.run([sys.executable, '-m', 'PyInstaller', '--noconfirm', '--clean', '--onefile', '--console',
                    '--name', 'DeltaruneSim', '--paths', str(ROOT), '--distpath', str(stage),
                    '--workpath', str(build / 'pyinstaller'), '--specpath', str(build),
                    str(ROOT / 'packaging/offline.py')], check=True, cwd=ROOT)
    for folder in ('site', 'readable'):
        shutil.copytree(ROOT / folder, stage / folder)
    for filename in ('upstream-manifest.json', 'readable-manifest.json', 'supplementary-manifest.json',
                     'local-changes.json', 'verify.py', 'README.md'):
        shutil.copy2(ROOT / filename, stage / filename)
    if platform.system() == 'Darwin':
        launcher = stage / 'Launch.command'
        launcher.write_text('#!/bin/bash\ncd -- "$(dirname -- "$0")" || exit 1\n./DeltaruneSim "$@"\n')
        launcher.chmod(0o755)
    executable = stage / ('DeltaruneSim.exe' if platform.system() == 'Windows' else 'DeltaruneSim')
    subprocess.run([sys.executable, str(ROOT / 'packaging/smoke.py'), str(executable)], check=True)
    output = ROOT / 'dist'
    output.mkdir(exist_ok=True)
    archive = output / f'{name}.zip'
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as z:
        for file in sorted(stage.rglob('*')):
            if file.is_file():
                z.write(file, file.relative_to(build))
    digest = hashlib.sha256(archive.read_bytes()).hexdigest()
    archive.with_suffix('.zip.sha256').write_text(f'{digest}  {archive.name}\n')
    print(archive)

if __name__ == '__main__':
    main()
