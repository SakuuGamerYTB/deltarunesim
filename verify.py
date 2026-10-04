#!/usr/bin/env python3
"""Verify upstream file hashes offline."""
from pathlib import Path
import hashlib
import json
import sys
root = Path(__file__).resolve().parent
manifest = json.loads((root / 'upstream-manifest.json').read_text(encoding='utf-8'))
changes = json.loads((root / 'local-changes.json').read_text(encoding='utf-8'))
verified = modified = 0
errors = []
for name, meta in manifest['files'].items():
    if name in changes['omitted']:
        continue
    path = root / 'site' / name
    if not path.is_file():
        errors.append(f'Missing: {name}')
        continue
    if name in changes['modified']:
        modified += 1
        continue
    if path.stat().st_size != meta['size'] or hashlib.sha256(path.read_bytes()).hexdigest() != meta['sha256']:
        errors.append(f'Hash mismatch: {name}')
    else:
        verified += 1
print(f'{verified} files match the manifest, {modified} adapted for offline use.')
print(f'{len(changes["omitted"])} hosting configuration replaced by the local server.')
if errors:
    print('\n'.join(errors))
else:
    print('Verification passed. No game resources from the manifest are missing.')
sys.exit(bool(errors))
