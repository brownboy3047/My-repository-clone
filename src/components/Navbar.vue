<template>
  <header class="nav-bar">
    <h1>My Repository</h1>

    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.nav-bar a {
  text-decoration: none;
  margin-left: 20px;
}
</style>
