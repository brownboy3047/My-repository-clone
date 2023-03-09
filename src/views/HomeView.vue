<template>
  <div class="home">
    <!-- <h1>My Repositories</h1> -->

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="repos.length">
      <RepoList :repos="repos" />
    </div>

    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getRepos from "../composables/getRepos";
import RepoList from "../components/RepoList.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "HomeView",
  components: { RepoList, Spinner },
  setup() {
    const { repos, error, load } = getRepos();

    load();

    return { repos, error };
  },
};
</script>

<style scoped>
.home h1 {
  text-align: center;
  margin: 30px 0;
  text-transform: uppercase;
  font-weight: bold;
  color: #0c090d;
}

.error {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: black;
}
</style>
