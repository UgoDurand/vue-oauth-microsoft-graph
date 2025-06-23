<template>
  <div class="homepage">
    <p>Vous êtes sur la page d’accueil.</p>
    <div class="buttons">
      <BaseButton color="primary" margin="0 1rem">Primary</BaseButton>
      <BaseButton color="warn"    margin="0 1rem">Warn</BaseButton>
      <BaseButton color="danger"  margin="0 1rem">Danger</BaseButton>
      <BaseButton disabled         margin="0 1rem">Disabled</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'HomePage',
  components: { BaseButton }
}
</script>

<style scoped>
.buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}
</style>
