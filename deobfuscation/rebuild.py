#!/usr/bin/env python3
"""Recréer la copie JavaScript lisible sans modifier les originaux."""
from pathlib import Path
import argparse
import json
import subprocess
import shutil
import tempfile

TOOLS = Path(__file__).resolve().parent
ROOT = TOOLS.parent

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=ROOT / 'site')
    parser.add_argument('--output', type=Path, default=ROOT / 'readable')
    parser.add_argument('--work', type=Path, default=Path.cwd() / 'work' / 'deobfuscation')
    args = parser.parse_args()
    if not (TOOLS / 'node_modules' / 'webcrack').is_dir():
        parser.exit(1, f'Installer les outils : cd "{TOOLS}" && npm ci\n')
    args.work.mkdir(parents=True, exist_ok=True)
    files = sorted(args.source.rglob('*.js'), key=lambda p: p.stat().st_size)
    reports = []
    with tempfile.TemporaryDirectory(prefix='build-', dir=args.work) as temporary:
        stage = Path(temporary)
        for index, original in enumerate(files):
            relative = original.relative_to(args.source)
            decoded = stage / 'decoded' / relative
            final = stage / 'readable' / relative
            decoded.parent.mkdir(parents=True, exist_ok=True)
            final.parent.mkdir(parents=True, exist_ok=True)
            def run(script, *paths):
                return subprocess.run(['node', '--max-old-space-size=6144', str(TOOLS / script), *map(str, paths)],
                                      capture_output=True, text=True, check=True, timeout=300)
            decoding = run('deobfuscate-file.mjs', original, decoded)
            cleanup = run('cleanup.mjs', decoded, final)
            if '__DECODE_' in final.read_text():
                cleanup = run('cleanup-extended.mjs', decoded, final)
            guards = run('remove-self-defending.mjs', final)
            reports.append({'file': str(relative), 'before': original.stat().st_size,
                            'after': final.stat().st_size, 'decoding': decoding.stdout,
                            'cleanup': cleanup.stdout, 'selfDefending': guards.stdout})
            print(f'{index + 1}/{len(files)} {relative}', flush=True)
        helpers = stage / 'name-helpers.json'
        run('index-helpers.mjs', stage / 'readable', helpers)
        for report in reports:
            naming = run('rename.mjs', stage / 'readable' / report['file'], helpers)
            report['names'] = json.loads(naming.stdout)
            report['names']['file'] = report['file']
            report['after'] = (stage / 'readable' / report['file']).stat().st_size
        validation = stage / 'validation.json'
        subprocess.run(['node', '--max-old-space-size=6144', str(TOOLS / 'validate.mjs'),
                        str(args.source), str(stage / 'readable'), str(validation)], check=True, timeout=300)
        smoke = stage / 'bootstrap-smoke.json'
        if len(list((stage / 'readable' / 'js').glob('boot[012]-*.js'))) == 3:
            run('smoke-bootstrap.mjs', stage / 'readable', smoke)
        # Ne copier les résultats qu'après la réussite de tous les fichiers et des interfaces.
        shutil.copytree(stage / 'readable', args.output, dirs_exist_ok=True)
        shutil.copyfile(validation, ROOT / 'readable-validation.json')
        if smoke.exists():
            shutil.copyfile(smoke, ROOT / 'bootstrap-smoke.json')
    (ROOT / 'recovered-names.json').write_text(json.dumps([r['names'] for r in reports], indent=2, ensure_ascii=False) + '\n')
    (ROOT / 'rebuild-report.json').write_text(json.dumps(reports, indent=2, ensure_ascii=False) + '\n')
    print(f'{len(files)} fichiers recréés dans {args.output}')

if __name__ == '__main__':
    main()
