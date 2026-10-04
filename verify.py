#!/usr/bin/env python3
"""Vérifie hors ligne les empreintes des fichiers du manifeste officiel."""
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
        errors.append(f'Absent : {name}')
        continue
    if name in changes['modified']:
        modified += 1
        continue
    if path.stat().st_size != meta['size'] or hashlib.sha256(path.read_bytes()).hexdigest() != meta['sha256']:
        errors.append(f'Empreinte différente : {name}')
    else:
        verified += 1
print(f'{verified} fichiers conformes au manifeste, {modified} adapté(s) pour le mode local.')
print(f'{len(changes["omitted"])} configuration d’hébergement remplacée par le serveur local.')
if errors:
    print('\n'.join(errors))
else:
    print('Vérification réussie. Aucune ressource de jeu manquante dans le manifeste.')
sys.exit(bool(errors))
