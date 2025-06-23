<template>
  <header class="base-header">
    <BaseButton
        :primaryColor="buttonColor"
        margin="0"
        @click="$emit('go-home')"
    >
      <font-awesome-icon :icon="['fas','home']" />
      <span class="button-text">Accueil</span>
    </BaseButton>
    <div class="user-info">
      Invité
    </div>
  </header>
</template>

<script>
import BaseButton from './BaseButton.vue'
import { FontAwesomeIcon } from '../lib/fontAwesome'

export default {
  name: 'BaseHeader',
  components: {
    BaseButton,
    FontAwesomeIcon
  },
  data() {
    return {
      // couleur identique au header pour ne faire apparaître que le bouton
      buttonColor: '#42d392'
    }
  }
}
</script>

<style scoped>
.base-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #42d392;
}

/* Style du texte dans le bouton */
.base-header .button-text {
  margin-left: 0.5rem;
  color: black;
  font-weight: bold;
  line-height: 1;
}

/* Ajuste la taille de l’icône maison */
.base-header .fa-home {
  font-size: 1.2rem;
  color: black;
}

.user-info {
  color: black;
  font-size: 0.9rem;
}
</style>
