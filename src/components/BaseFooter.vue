<template>
  <footer class="base-footer">
    <p>© 2025 MonApp. Tous droits réservés.</p>
    <p><a href="#">Mentions légales</a> | <a href="#">Confidentialité</a></p>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style scoped>
.base-footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  background: #f5f5f5;
  color: #555;
}
.base-footer a {
  color: inherit;
  text-decoration: underline;
}
</style>
