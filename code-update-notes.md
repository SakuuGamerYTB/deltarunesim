# Rebuild 0.9.14 du 4 octobre 2026 à 12:05 UTC

Le numéro de version et les notes publiques restent identiques. Les 199 bundles hachés ont été remplacés, mais un changement de hash ne démontre pas un correctif de jeu : les identifiants et tables d’obfuscation sont générés à nouveau.

## Comparaison vérifiée avec le build 0.9.14 précédent

La comparaison AST apparie 202 modules. Après renommage canonique des bindings résolus, alignement des imports hachés, suppression des commentaires et évaluation exacte des remplacements de chaînes constants par RegExp, 154 modules appariés sont identiques. Les propriétés publiques, chaînes de jeu, opérateurs et ordre des instructions sont conservés dans cette comparaison.

Quelques exemples vérifiés, chemins relatifs à `readable/` :

| Fonctionnalité | Ancien module | Nouveau module | Résultat |
| --- | --- | --- | --- |
| Moteur et restauration audio | js/c-SLGRRSKQ.js | js/c-FMIAGHDE.js | AST identique, incluant music_state, music_restore et sfx_rewind |
| Capture/restauration de snapshots | js/c-R2GJWZ54.js | js/c-VD4WD5M6.js | AST identique |
| Façade du moteur | js/gm-JB6FZJWS.js | js/gm-DVHMTG3U.js | AST identique |
| Détection des collisions | js/collisions-PQXA53S3.js | js/collisions-PYGJA7YX.js | AST identique |
| Worker de planification | js/beamworker-735SSPWV.js | js/beamworker-3JHFDG5I.js | AST identique |
| Affichage des mises à jour | assets/updates/view.js | assets/updates/view.js | AST identique malgré un fichier upstream différent |
| Encodeur GIF | js/capture_gifworker-PHWF5YRI.js | js/capture_gifworker-DC4XPPZT.js | Le diff montre uniquement le label de boucle x devenu v et le break correspondant |

48 modules appariés diffèrent encore sous la normalisation, notamment à cause de résidus de proxy/contrôle anti-obfuscation et des décalages de numérotation des bindings. Quatre modules de scripts ayant les mêmes noms publics restent ambigus. Ce travail ne prouve donc pas une équivalence globale et ne permet pas d’attribuer un nouveau correctif métier précis au rebuild. Le rapport détaillé est dans `semantic-comparison.json`.

## Pipeline et validation

206 fichiers sont lisibles et validés avec les mêmes imports/exports publics. Les contrôles rejettent toute référence résiduelle à un décodeur webcrack, tout marqueur de récupération et la regex self-defending catastrophique. Le smoke bootstrap dans une VM Node passe les trois scripts, avec un DOM simulé ; il ne remplace pas le test Chrome.

Un seul nouveau cas de table proxy a nécessité une adaptation : une table créée par affectations pures successives et un alias constant dans la même portée empêchait de prouver une branche morte. Le nettoyage regroupe ces affectations et suit cet alias tout en rejetant les mutations ou échappements observables. Quatre tests vérifient la branche morte, une mutation, un échappement et une portée qui masque le nom original. Ils passent tous avec les mêmes résultats avant/après. Cette adaptation fait partie du pipeline livré, sans changement de code métier.
