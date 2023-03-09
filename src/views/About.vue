<template>
  <div class="about">
    <h1>FrontEnd Engineering Third Semester Examination Project</h1>
    <h3>Exam Question:</h3>

    <ol>
      <li>
        Create a new vue js application then using the GitHub API, fetch your
        GitHub repositories using this endpoint:
        "https://api.github.com/users/USERNAME/repos".
      </li>

      <li>
        show a page with a list of all your repositories on GitHub(the page
        should have some form of pagination).
      </li>

      <li>
        Then create another page showing data for a single repo clicked from the
        list of repos using nested routes.
      </li>

      <li>
        Make sure to implement a wildcard route to catch 404 pages.
        <br />
        NB: Good UI and Designs are important.
      </li>
    </ol>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  max-width: 600px;
  margin: 30px auto;
}

.about h1 {
  color: #a2a0a0;
}

.about h3 {
  color: #0d0c0c;
  letter-spacing: 2px;
}

.about ol li {
  color: #0d0c0c;
  margin: 20px 0;
  /* font-weight: 700; */
}
</style>
