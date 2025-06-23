<template>
  <header class="base-header">
    <nav>
      <a href="#" class="logo">MonApp</a>
      <ul class="nav-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Profil</a></li>
      </ul>
    </nav>
    <div class="user-info">
      <span>Invité</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader'
}
</script>

<style scoped>
.base-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #2d8f64;
  color: black;
}
.base-header .nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
.base-header a {
  color: black;
  text-decoration: none;
}
</style>
