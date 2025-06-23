<template>
  <div class="homepage">
    <p>Vous êtes sur la page d’accueil.</p>
    <div class="buttons">
      <BaseButton margin="0 1rem">BaseButton with custom margin</BaseButton>
      <BaseButton :disabled="true">BaseButton disabled</BaseButton>
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
