// src/lib/fontAwesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

// Ajoute les icônes que tu veux utiliser
library.add(faHome)

// Exporte le composant à enregistrer globalement
export { FontAwesomeIcon }
