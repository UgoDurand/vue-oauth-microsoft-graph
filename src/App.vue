<template>
  <div id="app">
    <!-- On affiche directement la HomePage pour l’instant -->
    <HomePage />
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
</style>
