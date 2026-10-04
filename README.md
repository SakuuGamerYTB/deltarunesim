# DELTARUNE Fight Simulator en local

Copie de la version **0.9.14 BETA du 4 octobre 2026** de https://deltarunesim.com/.
Environ **800 Mo**. Les fichiers du moteur, graphismes, musiques, vidéos, modules chargés à la demande et workers sont présents sur disque.

## Releases autonomes macOS et Windows

Les [releases GitHub](https://github.com/SakuuGamerYTB/deltarunesim-local/releases) proposent des archives macOS Apple Silicon, macOS Intel et Windows x64, avec le serveur et tous les fichiers embarqués. Consulter [OFFLINE.md](OFFLINE.md) pour le lancement et [CREDITS.md](CREDITS.md) pour les auteurs.

Pour reconstruire une archive sur son OS et son architecture cibles :

```sh
python -m pip install -r packaging/requirements.txt
python packaging/build.py --target macos-arm64
```

Remplacer la cible par `macos-x64` ou `windows-x64` sur le système correspondant. Le workflow GitHub Actions construit et teste les trois variantes lorsqu’un tag `v*` est poussé.

## Démarrer sur le Mac

Double-clique sur **Lancer.command**, puis garde la fenêtre du terminal ouverte.
Le jeu s’ouvre à **http://127.0.0.1:8765/**. Ferme le serveur avec **Ctrl+C**.

Autre possibilité, depuis ce dossier :

```sh
python3 serve.py --open
```

Si le port est déjà occupé, le serveur de cette conversation peut être encore actif : ouvre directement l’adresse ci-dessus. Pour démarrer une autre instance :

```sh
python3 serve.py --port 8766 --open
```

Python 3 est le seul prérequis du serveur, déjà présent sur le Mac utilisé. Aucune installation npm, aucune clé API et aucune connexion au site d’origine ne sont nécessaires au lancement. Utilise un navigateur récent. N’ouvre pas directement `site/index.html` en `file://`, car les modules JavaScript ont besoin du serveur HTTP.

## Version lisible et modifiable

Double-clique sur **Lancer-lisible.command** pour jouer avec le code de `readable/`, à **http://127.0.0.1:8766/**. Le lanceur normal continue d’utiliser les originaux de `site/`.

```sh
python3 serve.py --readable --port 8766 --open
```

Les **206 fichiers JavaScript** ont une copie déchiffrée et mise en forme. Le module principal passe de **11,21 Mo à 2,23 Mo**, et **24 221 noms explicites** sont récupérés à partir des informations encore présentes dans le bundle. Les assets sont partagés entre les deux modes.

Le guide `readable/README.md` donne les points d’entrée du moteur, des combats et de Tetris. `modules-index.json` aide à retrouver les objets et scripts du jeu. Les outils et leur verrouillage de versions se trouvent dans `deobfuscation/`. Les résultats vérifiés figurent dans `VALIDATION-LISIBLE.md`.

## Ce qui a été récupéré

- Le catalogue du jeu affiche **365 combats** et **7 jeux bonus**.
- Les **2 991 fichiers de jeu** du manifeste officiel destiné à l’application de bureau sont présents. Le manifeste contient aussi `_redirects`, une configuration d’hébergement Cloudflare qui renvoie HTTP 404 et n’est pas nécessaire à ce serveur.
- Les pages publiques `/fights`, `/fight/...`, `/about`, `/privacy`, `/schools`, `/updates`, `/stats`, `/home` et `/download` sont également copiées.
- Les crédits de puskevi, les mentions de Toby Fox et les notices des fichiers ont été conservés.

Il s’agit du **code web distribué**, conservé à l’identique dans `site/` pour le JavaScript, avec une copie transformée dans `readable/`. Ce dossier ne restitue pas le dépôt de développement original, tous ses noms locaux, ses commentaires de travail, fichiers TypeScript/GML ou historique Git. Le serveur local et la copie lisible sont modifiables.

## Fonctionnement hors ligne et limites

Le serveur écoute seulement sur `127.0.0.1`. Il ne contient aucun proxy et ne télécharge aucun fichier pendant une partie. Une politique CSP bloque les connexions, scripts et médias provenant de services extérieurs. Les requêtes de télémétrie `/api/` sont ignorées, sans enregistrement ni transmission.

- Les statistiques publiques sont un **instantané du 3 octobre 2026**, signalé sur `/stats`. Elles ne représentent pas les parties locales et ne se mettent pas à jour.
- La recherche et le téléchargement de nouvelles beatmaps depuis les services osu! externes ne peuvent pas fonctionner hors ligne. MANIA conserve son import de fichiers locaux et les contenus embarqués. Les liens vers Discord, X et les autres sites restent des liens externes.
- Les sauvegardes et réglages du navigateur sont propres à l’adresse locale. Ceux du site en ligne ne sont pas automatiquement transférés. Garde le même navigateur, l’adresse `127.0.0.1` et le même port pour les retrouver.
- La présence de tous les fichiers ne garantit pas l’absence de bugs du simulateur original. Chaque combat et chaque branche de jeu n’ont pas été joués jusqu’au bout.

## Vérifier les fichiers

```sh
python3 verify.py
```

Le script vérifie les tailles et SHA-256 contre `upstream-manifest.json`, sans réseau. `local-changes.json` décrit les adaptations HTML et l’omission de la configuration Cloudflare. Le JavaScript original du jeu est conservé sans modification.

## Organisation

| Emplacement | Rôle |
| --- | --- |
| `site/index.html` | Page de démarrage, manifestes de préchargement |
| `site/js/boot*.js` | Amorçage du jeu |
| `site/js/main-5HNX3WWC.js` | Module principal distribué |
| `site/js/c-*.js` et autres modules | Combats, chapitres, fonctionnalités et workers |
| `site/assets/data.json` | Descriptions des sprites et des polices |
| `site/assets/atlas_pages.json` et `atlas_*.png` | Index et planches de sprites |
| `site/assets/` | Sons, musiques, vidéos, images et données des jeux |
| `site/api/stats` | Instantané des statistiques publiques |
| `serve.py` | Serveur HTTP local, routes, lecture vidéo par plages et blocage réseau externe |
| `Lancer.command` | Lanceur Mac de la copie originale |
| `Lancer-lisible.command` | Lanceur Mac de la copie lisible |
| `readable/` | JavaScript déchiffré et mis en forme, sans duplication des assets |
| `readable/README.md` | Guide des points d’entrée et de modification |
| `deobfuscation/` | Pipeline reproductible et dépendances verrouillées |
| `modules-index.json` | Symboles publics des scripts et objets par module |

La copie n’ajoute aucune licence aux fichiers d’origine. Les droits et les crédits des auteurs restent ceux de leurs fichiers et du site.

## Dernière mise à jour

Le nouveau build 0.9.14 du 4 octobre à 14 h 05 est intégré ; les notes publiques de version sont inchangées. Voir `MISE-A-JOUR.md` et `update-report.json`. Recharger tout onglet ouvert avant cette mise à jour.

Compilation actuellement installée : **0.9.14, 4 octobre 2026 à 14 h 05 (Paris)**, identifiant `2026-10-04T12:05:05.264Z`. Le numéro de version est inchangé ; consulter `MISE-A-JOUR.md` pour cette nouvelle comparaison.
