# Validation de la version lisible

Build **0.9.14**, `2026-10-04T12:05:05.264Z`. Contrôles réalisés le 4 octobre 2026 avec Chrome, Node.js et Python 3.

## Code

- 206/206 fichiers JavaScript analysés sans erreur ; imports et exports publics conservés.
- Aucun décodeur non résolu, marqueur de récupération ou garde anti-formatage bloquante résiduel.
- 24 221 noms récupérés ; 64 996 433 → 49 015 539 octets.
- Module principal `js/main-5HNX3WWC.js` : 11 210 021 → 2 226 017 octets.
- Les trois scripts de démarrage passent dans une VM avec DOM simulé.
- Quatre tests ciblés passent pour la reprise du nettoyage des tables proxy aliasées.

## Chrome

1. Chargement de l’écran titre et catalogue de 365 combats.
2. Hammer of Justice : personnages, décor, défense et dialogue ennemi.
3. Audio : une piste `ch4_extra_boss` active, volume 0,7.
4. REWIND 5S : frame 781 avant, puis 638 après le saut de 150 frames et la reprise. La même piste reste active, sans duplication.
5. Copie originale : démarrage ; page Roaring Knight avec toutes ses images chargées.

Aucune exception JavaScript ni erreur console observée dans le scénario de combat testé. Aucune ressource extérieure dans les entrées de performance de ce scénario. Les services distants restent bloqués par la CSP locale.

Preuves : `apercu-lisible.png`, `apercu-pages.png`, `browser-validation.json`, `readable-validation.json`, `bootstrap-smoke.json`.

## Limites

Ces essais ne couvrent pas les 365 combats intégralement. La comparaison des builds ne prouve pas l’équivalence globale et ne permet pas d’identifier un nouveau correctif métier précis. Les fonctionnalités nécessitant les services externes restent indisponibles hors ligne ; les statistiques restent l’instantané du 3 octobre.
