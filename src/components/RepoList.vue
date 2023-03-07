<template>
  <div class="repo-list">
    <div v-for="repo in repos" :key="repo.id">
      <h1>{{ repo.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["repos"],

  setup() {},
};
</script>

<style></style>
