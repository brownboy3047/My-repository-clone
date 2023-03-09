import { ref } from "vue";

const getRepo = (name) => {
  const repo = ref(null);

  const error = ref(null);

  const load = async () => {
    try {
      //*simulate delay
      //   await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      //   });

      let data = await fetch(
        "https://api.github.com/repos/brownboy3047/" + name
      );

      if (!data.ok) {
        throw Error("No data is available");
      }

      repo.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { repo, error, load };
};

export default getRepo;
