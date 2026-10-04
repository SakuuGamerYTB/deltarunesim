# Lire et modifier le JavaScript

Ce dossier contient une copie déchiffrée et mise en forme du JavaScript web distribué avec DELTARUNE Fight Simulator 0.9.14. Les originaux restent dans `../site/`. Les noms de fichiers hachés restent identiques pour conserver les imports et les chargements dynamiques.

Pour exécuter les modifications de ce dossier, utiliser `../Lancer-lisible.command` ou, depuis le dossier parent :

```sh
python3 serve.py --readable --port 8766 --open
```

Le serveur utilise ce JavaScript et les mêmes graphismes, sons et données que la copie originale. Modifier un fichier ici, puis recharger le navigateur. Une actualisation forcée permet de vider le cache des modules. Le lanceur normal utilise toujours `site/`.

## Points d’entrée

| Fichier | À lire pour |
| --- | --- |
| `js/main-5HNX3WWC.js` | Écran titre, menus, parties, musique, intégration du moteur ; chercher `startFight`, `GAME_SPEEDS` et `DR` |
| `js/boot0-6507ab0f.js`, `boot1-f3626d0a.js`, `boot2-fcf25262.js` | Amorçage, compatibilité du navigateur, préchargement et messages d’erreur |
| `js/gm-DVHMTG3U.js` | Index des exports du moteur : instances, entrée clavier, collisions, audio, sprites et simulation |
| `js/battle-BT4B2MQU.js`, `fightsetup-MYY3L3NB.js` | Exports du déroulement des combats et de leur préparation |
| `js/fights-7SUHM6IN.js`, `ut_fights-OCHEGZKB.js` | Catalogues des combats DELTARUNE et UNDERTALE |
| `js/heart-3C2QCZDY.js`, `bullets-OIROYDZK.js`, `collisions-PYGJA7YX.js` | Cœur du joueur, projectiles et collisions |
| `js/globals-Y7HSE7MN.js` | Accès aux variables globales du jeu |
| `js/c-P4DGRHJ4.js` | Objets du mini-jeu Tetris, dont `obj_tetrisfield`, `obj_tetris_enemy` et `obj_tetrisfx` |
| `js/c-PIEPTJTC.js` | Petits auxiliaires du bundle : exports, initialisation des modules et noms des fonctions |

Certains fichiers portant un nom clair sont des façades d’exports. Suivre leur instruction `from "./c-….js"` pour lire l’implémentation. `../modules-index.json` liste les objets et scripts `obj_*` et `scr_*` par module. `../recovered-names.json` indique les noms récupérés et leur origine.

## Transformations et limites

Le pipeline décode les deux couches de tables de chaînes RC4, remet le code en forme, remplace les indirections simples par leurs opérations, supprime les branches dont le test constant est démontré et récupère les noms explicites encore présents dans les exports, dictionnaires et auxiliaires de nommage des fonctions. Il travaille sur l’arbre syntaxique, avec les portées JavaScript, et conserve les imports/exports publics.

Les noms locaux supprimés à la compilation restent souvent courts, par exemple `L01`. Les sources TypeScript/GML originales, commentaires de développement, structure du dépôt et historique Git ne peuvent pas être reconstitués. Certaines indirections complexes et du code mort peuvent subsister. Les commentaires d’architecture présents dans les bundles ont été conservés comme texte d’origine ; cette documentation s’appuie sur le code exécutable et ses exports, pas sur ces commentaires.

Les notices et crédits d’origine sont conservés. Cette copie ne crée aucune licence et ne constitue pas le dépôt source original. Aucune publication n’a été effectuée.

## Recréer le résultat

Node.js 24.16.0 et Python 3 ont été utilisés. Le jeu et le serveur n’ont pas besoin de Node.js ; il sert uniquement au pipeline de transformation. Dans le dossier parent :

```sh
npm ci --prefix deobfuscation
python3 deobfuscation/rebuild.py --work ./work/deobfuscation
```

Les versions d’outils sont verrouillées dans `deobfuscation/package-lock.json`. `webcrack` utilise `isolated-vm`, dont l’installation peut nécessiter les outils de compilation natifs de Node.js. Les fichiers originaux ne sont jamais écrasés. Toutes les sorties sont préparées dans un dossier temporaire et copiées dans `readable/` seulement quand chaque transformation a réussi.

Après avoir installé les dépendances, vérifier la syntaxe et les interfaces :

```sh
node deobfuscation/validate.mjs
```

Cette commande s’exécute depuis le dossier parent. Les rapports `../readable-validation.json` et `../VALIDATION-LISIBLE.md` décrivent les contrôles réellement effectués. Tester dans le navigateur après une modification du gameplay reste nécessaire.

Le pipeline détecte désormais l’auxiliaire de nommage par sa structure. Si le décodeur rencontre un appel invalide dans une branche factice, une reprise contrôlée exige la disparition de tous ses marqueurs après simplification ; sinon elle échoue sans livrer le résultat.

Compilation actuellement installée : **0.9.14, 4 octobre 2026 à 14 h 05 (Paris)**, identifiant `2026-10-04T12:05:05.264Z`. Le numéro de version est inchangé ; consulter `../MISE-A-JOUR.md` pour cette nouvelle comparaison.
