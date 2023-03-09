<template>
  <header class="nav-bar">
    <h1>GITHUB</h1>

    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">Question</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  padding: 20px;
  background-color: #161b22;

  /* position: sticky;
  top: 0;
  z-index: 100; */
}

.nav-bar h1 {
  color: #f0f6fc;
}

.nav-bar a {
  text-decoration: none;
  margin-left: 50px;
  color: #676565;
  /* font-size: 20px; */
}

.nav-bar a.router-link-active {
  color: #f0f6fc;
  font-weight: bold;
}
</style>
