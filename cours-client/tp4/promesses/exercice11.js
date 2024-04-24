/**
 * initialisation d'un projet node :
 * npm init -y
 *
 * installation du package node-fetch :
 * npm install node-fetch
 */
// importation de l'api fetch venant du package node-fetch
import fetch from "node-fetch";

// solution 1
function fetchApi(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La requête a échoué !");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const url = "https://jsonplaceholder.typicode.com/todos/1";
// fetchApi(url)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("Erreur : ", err.message);
//   });

// solution 2
const todos = "https://jsonplaceholder.typicode.com/todos?_limit=10";
fetch(todos)
  .then((response) => response.json())
  .then((data) => {
    console.table(data);
  })
  .catch((err) => {
    console.error("Erreur : ", err);
  });
