// Exercice 5
const maPromesse = new Promise((resolve, reject) => {
  /**
   * l'argument resolve : est une fonction
   * permettant de savoir si la promesse est resolue
   *
   * l'argument reject : est une fonction
   * permettant de savoir si la promesse est rejetée
   */

  // logique de l'exercice
  setTimeout(() => {
    resolve("Promesse resolue avec succès !");
  }, 3000);
});

// exécution d'une promesse
maPromesse.then((result) => {
  console.log(result);
});
