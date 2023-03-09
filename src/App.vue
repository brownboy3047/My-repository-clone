<template>
  <Navbar />

  <router-view />

  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  margin: 0;
  position: relative;
  min-height: 100%;
  padding-bottom: 100px;
  box-sizing: inherit;
  background-color: #646e78;
}
</style>
