import { ref } from "vue";

const getRepos = () => {
  const repos = ref([]);

  const error = ref(null);

  const load = async () => {
    try {
      //*simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      let data = await fetch("https://api.github.com/users/brownboy3047/repos");

      if (!data.ok) {
        throw Error("No data is available");
      }

      repos.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { repos, error, load };
};

export default getRepos;
