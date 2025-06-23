<template>
  <div class="homepage">
    <p>Vous êtes sur la page d’accueil.</p>

    <!-- Boutons statiques -->
    <div class="buttons">
      <BaseButton color="primary" margin="0 0.5rem">Primary</BaseButton>
      <BaseButton color="warn"    margin="0 0.5rem">Warn</BaseButton>
      <BaseButton color="danger"  margin="0 0.5rem">Danger</BaseButton>
      <BaseButton disabled        margin="0 0.5rem">Disabled</BaseButton>
    </div>

    <!-- AsyncButton avec délai croissant -->
    <div class="buttons" style="margin-top: 1.5rem;">
      <AsyncButton
          color="primary"
          :action="handleAsyncClick"
          margin="0 0.5rem"
      >
        Désactivé {{ delaySeconds }} s si cliqué
      </AsyncButton>
    </div>
  </div>
</template>

<script>
import BaseButton  from '@/components/BaseButton.vue'
import AsyncButton from '@/components/AsyncButton.vue'

export default {
  name: 'HomePage',
  components: { BaseButton, AsyncButton },
  data() {
    return {
      // délai actuel (en secondes) utilisé et incrémenté à chaque clic
      delaySeconds: 2
    }
  },
  methods: {
    handleAsyncClick() {
      const currentDelay = this.delaySeconds
      // incrémente pour le prochain clic
      this.delaySeconds++
      // renvoie une Promise qui se résout après currentDelay secondes
      return new Promise(resolve => {
        setTimeout(resolve, currentDelay * 1000)
      })
    }
  }
}
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
