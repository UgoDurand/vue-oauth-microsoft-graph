<template>
  <BaseLayout>
    <HomePage />
  </BaseLayout>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue'
import HomePage   from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    BaseLayout,
    HomePage
  }
}
</script>

<style>
</style>
