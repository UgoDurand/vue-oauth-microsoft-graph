import { createApp } from 'vue'
import App from './App.vue'

// importe et enregistre ton module FontAwesome
import { FontAwesomeIcon } from './lib/fontAwesome'

const app = createApp(App)

// composant <font-awesome-icon> dispo partout
app.component('font-awesome-icon', FontAwesomeIcon)

app.config.devtools = true
app.mount('#app')
