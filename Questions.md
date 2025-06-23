1.
L’installation locale ajoute le paquet uniquement au projet courant, tandis que l’installation globale le rend accessible partout. Les bibliothèques comme vue ou axios sont installées localement, alors que les outils en ligne de commande comme vite ou vue-cli sont installés globalement.

2.
Webpack est utilisé pour regrouper tous les fichiers JavaScript et gérer les fichiers .vue afin de créer un seul bundle compatible avec le navigateur.

3.
Babel convertit le code JavaScript moderne en code compatible avec d’anciens navigateurs, et browserslist définit les navigateurs à cibler dans cette conversion.

4.
ESLint est un outil qui vérifie la qualité du code JavaScript. Les règles appliquées peuvent être définies dans un fichier eslint.config.js ou dans package.json.

5.
Le CSS scoped s’applique uniquement au composant, alors que le CSS non-scoped s’applique globalement et peut affecter d’autres éléments.

6.
Lorsque le template a un seul élément racine, les attributs non-props sont automatiquement appliqués à cet élément.

7.
Le composant enfant détecte la Promise retournée par le parent. La méthode .finally() s'exécute une fois la Promise terminée, peu importe son résultat, ce qui permet d'assurer un comportement final cohérent (comme cacher un loader).

8.
Si inheritAttrs: false est absent, les attributs sont appliqués à l’élément racine au lieu de l’élément souhaité, ce qui peut créer des bugs d’affichage ou de comportement.