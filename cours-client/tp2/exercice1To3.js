/***
 * Exercice 1
 * Fonction nommée
 */
function addition(a, b) {
  return a + b;
}
// test de la fonction
console.log(addition(6, 9));

/**
 * Exercice 2
 * Fonction anonyme
 */
const multiplication = function (x, y) {
  return x * y;
};

const mult1 = multiplication(7, 5);
console.log(mult1);
const mult2 = multiplication(9, 5);
console.log(mult2);

/**
 * Exercice 3
 * Fonction flechée
 */
const division = (numerateur, denominateur) => {
  if (denominateur !== 0) {
    return numerateur / denominateur;
  } else {
    return "Division par zéro impossible !";
  }
};
const div1 = division(8, 2);
console.log(div1);
const div2 = division(45, 9);
console.log(div2);
