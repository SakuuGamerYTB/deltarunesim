#!/bin/zsh
cd -- "${0:A:h}" || exit 1
if ! command -v python3 >/dev/null 2>&1; then
  print 'Python 3 est nécessaire pour démarrer le serveur local.'
  read '?Appuie sur Entrée pour fermer.'
  exit 1
fi
python3 serve.py --open
