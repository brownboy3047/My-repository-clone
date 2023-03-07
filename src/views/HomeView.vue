<template>
  <div class="home">
    <h1>Home</h1>

    <div v-if="repos.length">
      <RepoList :repos="repos" />
    </div>

    <div v-else>Loading</div>
  </div>
</template>

<script>
import getRepos from "../composables/getRepos";
import RepoList from "../components/RepoList.vue";
export default {
  name: "HomeView",
  components: { RepoList },
  setup() {
    const { repos, error, load } = getRepos();

    console.log(repos);

    load();

    return { repos, error };
  },
};
</script>
