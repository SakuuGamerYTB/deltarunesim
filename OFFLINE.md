# Jouer hors ligne

Télécharger l’archive correspondant à votre ordinateur, puis **extraire tout le dossier** avant de lancer le jeu.

- **macOS Apple Silicon** : archive `macos-arm64`, ouvrir `Lancer.command`.
- **macOS Intel** : archive `macos-x64`, ouvrir `Lancer.command`.
- **Windows x64** : archive `windows-x64`, ouvrir `DeltaruneSim.exe`.

Le lanceur ouvre le navigateur à http://127.0.0.1:8766/. Garder sa fenêtre de terminal ouverte pendant la partie ; Ctrl+C arrête le serveur. Aucun Python, Node.js ou téléchargement supplémentaire n’est nécessaire. Le navigateur utilise les fichiers embarqués dans `site/` et le JavaScript lisible de `readable/`.

Les exécutables ne sont pas signés avec un certificat éditeur ni notariés. macOS ou Windows peuvent donc afficher un avertissement ou empêcher leur ouverture selon leurs réglages de sécurité. Les archives SHA-256 permettent de vérifier le téléchargement. La copie source peut aussi être exécutée avec Python 3.9 ou plus récent : `python3 serve.py --readable --port 8766 --open`.

Les sauvegardes restent dans le navigateur, associées à `127.0.0.1:8766`. Conserver le même navigateur et cette adresse pour les retrouver. Si le port est occupé par une autre application, utiliser `DeltaruneSim --port 8767` dans un terminal ; les sauvegardes de ce nouveau port seront distinctes.

Les liens vers des sites externes et le téléchargement de beatmaps depuis osu! nécessitent Internet. Les statistiques sont un instantané du 3 octobre 2026. Le jeu et ses contenus embarqués fonctionnent sans connexion ; chaque combat n’a pas été testé intégralement.

Consulter `CREDITS.md` pour les auteurs et les droits des fichiers.
