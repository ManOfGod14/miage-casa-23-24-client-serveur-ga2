import fetch from "node-fetch";

async function fetchTodo(url) {
  try {
    // await permet d'attendre que la promesse soit résolue
    const response = await fetch(url);
    /**
     * le format de la reponse du serveur n'est pas
     * très lisible pour cela nous allons dire au serveur
     * de nous retourner un format json qui est lisible
     */
    // console.log(response);

    // reponse au format json
    // console.log(response.json());
    const data = await response.json();
    console.table(data);
  } catch (err) {
    console.error("Erreur : ", err);
  }
}

// test de la fonction
const todos = "https://jsonplaceholder.typicode.com/todos?_limit=5";
fetchTodo(todos);
