<template>
  <div id="app">
    <BaseHeader />
    <HomePage />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import HomePage   from './pages/HomePage.vue'
import BaseFooter from './components/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    HomePage,
    BaseFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#app > *:not(header):not(footer) {
  flex: 1;
}
</style>
