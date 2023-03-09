<template>
  <div class="not-found">
    <h1>404</h1>
    <h3>Ooops!!</h3>
    <p>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE</p>

    <div class="not-found-link">
      <router-link :to="{ name: 'Home' }">GO TO HOME</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.not-found {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.not-found h1 {
  font-size: 100px;
  font-weight: bold;
  letter-spacing: 5px;
  color: #e7dbdb;
}

.not-found h3 {
  font-size: 30px;
  color: #e7dbdb;
}

.not-found p {
  margin: 40px 0;
  color: black;
  font-weight: bold;
}

.not-found-link {
  margin: 20px 0;
}

.not-found-link a {
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 6px;
  background-color: #161b22;
  padding: 20px;
}

.not-found-link a:hover {
  background-color: #e7dbdb;
  color: #161b22;
}
</style>
