<template>
  <div class="repo-list">
    <div v-for="repo in paginatedData" :key="repo.id" class="repo-list-card">
      <router-link :to="{ name: 'RepoDetails', params: { name: repo.name } }">
        <h2>{{ repo.name }}</h2>
      </router-link>

      <p class="repo-list-text">{{ repo.description }}</p>

      <p class="repo-list-language">#{{ repo.language }}</p>
    </div>

    <div class="pagination">
      <button @click="backPage">prev</button>
      <button
        v-for="item in Math.ceil(repos.length / perPage)"
        :key="item"
        @click="() => goToPage(item)"
      >
        {{ item }}
      </button>

      <button @click="nextPage">next</button>
    </div>
  </div>
</template>

<script>
import handlePagination from "../composables/handlePagination";
export default {
  props: ["repos"],

  setup(props) {
    const { paginatedData, perPage, page, nextPage, backPage, goToPage } =
      handlePagination(props.repos);

    return { paginatedData, perPage, page, nextPage, backPage, goToPage };
  },
};
</script>

<style>
.repo-list-card {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  /* background-color: gray; */
  /* border-radius: 10px; */

  border-bottom: 1px dashed black;
}

.repo-list-card a {
  text-decoration: none;
  text-transform: uppercase;
}

.repo-list-card h2 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: #77c4f1;
  margin-bottom: 10px;
  max-width: 400px;
}
.repo-list-card h2::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #4a4a4c;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

.repo-list-text {
  color: #011627;
  font-weight: bold;
}

.repo-list-language {
  width: 100px;
  padding: 10px;
  /* background-color: white; */
  background-color: rgb(198, 197, 197);
  border-radius: 30px;
  text-align: center;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 40px auto;
}

.pagination button {
  cursor: pointer;
  padding: 10px;
  width: 50px;
  border: none;
  outline: none;
  border-radius: 6px;
}

.pagination button:hover {
  background-color: gray;
}
</style>
