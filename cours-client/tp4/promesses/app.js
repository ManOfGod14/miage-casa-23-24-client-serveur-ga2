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
// maPromesse.then((result) => {
//   console.log(result);
// });

// Exercice 6
const success = true;
const maPromesse2 = new Promise((resolve, reject) => {
  if (success) {
    resolve("Promesse resolue");
  } else {
    reject("Promesse rejetée");
  }
});

// execution de la promesse
// maPromesse2
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Exercice 7
const premierePromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

const deuxiemePromesse = premierePromesse.then((valeur) => {
  return valeur * 2;
});

// execution de la deuxiemePromesse
// deuxiemePromesse.then((result) => {
//   console.log(result);
// });

// Exercice 8
const promesse1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesse 1 resolue");
  }, 2000);
});
const promesse2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesse 2 resolue");
  }, 4000);
});
const promesse3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesse 3 resolue");
  }, 6000);
});

// exécution de plusieurs promesses
// Promise.all([promesse1, promesse2, promesse3]).then((results) => {
//   console.log(results);
// });

// Exercice 9
const promesseErreur = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Erreur !");
  }, 1000);
});

promesseErreur
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Exercice 10
const promesseFinally = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Succès !");
  }, 2000);
});

promesseFinally
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Fin de l'exercice 10 !");
  });
