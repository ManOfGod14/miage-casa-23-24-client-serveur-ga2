/**
 * Exercice 1
 */
let nom = "Maliki";
console.log(nom);

/**
 * Exercie 2
 */
let a = 5;
let b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

/**
 * Exercie 3
 */
let monNom = "TCHEROU";
let monPrenom = "Maliki";
const nomComplet = monNom + " " + monPrenom;
console.log(nomComplet);

/**
 * Exercie 4
 */
function carre(x) {
  // return x * x;
  return x ** 2;
}
console.log(carre(9));
console.log(carre(18));

/**
 * Exercie 5
 */
function aireRectangle(longueur, largeur) {
  return longueur * largeur;
}
const long1 = 56;
const larg1 = 12;
console.log(
  `L'aire du rectangle L = ${long1} et l = ${larg1} donne aire = ${aireRectangle(
    long1,
    larg1
  )}`
);

/**
 * Exercie 6
 */
function comparaisonNombres(nbr1, nbr2) {
  if (nbr1 > nbr2) {
    return nbr1 + " est supérieur à " + nbr2;
  } else if (nbr1 < nbr2) {
    return nbr1 + " est inférieur à " + nbr2;
  } else {
    return nbr1 + " est égal à " + nbr2;
  }
}
console.log(comparaisonNombres(6, 9));
console.log(comparaisonNombres(10, 10));
console.log(comparaisonNombres(80, 1));

/**
 * Exercie 7
 */
function estPair(nbr) {
  if (nbr % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(estPair(9));
console.log(estPair(4));

/**
 * Exercie 8
 */
function estPair2(nbr) {
  return estPair(nbr) ? nbr + " est pair" : nbr + " est impair";
}
console.log(estPair2(49));
console.log(estPair2(50));

/**
 * Exercie 9
 */
function compareChaines(chaine1, chaine2) {
  if (chaine1 === chaine2) {
    return "Les deux chaines sont identiques";
  } else {
    return "Les deux chaines ne sont pas identiques";
  }
}
console.log(compareChaines("Hello", "Test"));
console.log(compareChaines("Test", "Test"));

/**
 * Exercie 10
 */
function verifierAge(age) {
  if (age >= 18) {
    console.log("Accès autorisé");
  } else {
    console.log("Accès interdit");
  }
}
verifierAge(17);
verifierAge(20);

/**
 * Exercie 11
 */
function conditionTernaire(nbr) {
  return nbr % 2 === 0 ? "Pair" : "Impair";
}
// test 1
const res = conditionTernaire(16);
console.log(res);
// test 2
console.log(conditionTernaire(15));

/**
 * Exercie 12
 */
// const nbrSaisi = prompt("Saisissez un nombre :");
// console.log(nbrSaisi);
function operateurLogique() {
  const nbrS1 = parseFloat(prompt("Saisissez le 1er nombre :"));
  // console.log(typeof nbrS1);
  const nbrS2 = parseFloat(prompt("Saisissez le 2ème nombre :"));

  if (nbrS1 > 0 && nbrS2 > 0) {
    console.log("Les deux nombres sont positifs");
  } else if (nbrS1 < 0 || nbrS2 < 0) {
    console.log("Au moin l'un des deux nombres est négatif");
  } else {
    console.log("Les deux nombres sonts nuls");
  }
}
operateurLogique();

/**
 * Exercie 13
 */
function jourDeSemaine(jour) {
  switch (jour) {
    case 1:
      console.log("Lundi");
      break;

    case 2:
      console.log("Mardi");
      break;

    case 3:
      console.log("Mercredi");
      break;

    case 4:
      console.log("Jeudi");
      break;

    case 5:
      console.log("Vendredi");
      break;

    case 6:
      console.log("Samedi");
      break;

    case 7:
      console.log("Dimanche");
      break;

    default:
      console.log("Jour inhexistant");
  }
}
jourDeSemaine(6);
jourDeSemaine(1);
jourDeSemaine(8);

/**
 * Exercie 14
 */
function saison(mois) {
  switch (mois) {
    case 1:
    case 2:
    case 12:
      console.log("On est en Hiver");
      break;

    case 3:
    case 4:
    case 5:
      console.log("On est en Printemps");
      break;

    case 6:
    case 7:
    case 8:
      console.log("On est en Eté");
      break;

    case 9:
    case 10:
    case 11:
      console.log("On est en Automne");
      break;

    default:
      console.log("Mois invalide");
  }
}
saison(12);
saison(8);
saison(4);

/**
 * Exercie 15
 */
let tabFruits = ["Orange", "Banane", "Ananas", "Pomme", "Fraise"];
// boucle for
for (let i = 0; i < tabFruits.length; i++) {
  console.log(tabFruits[i]);
}

// boucle while
let j = 0;
while (j < tabFruits.length) {
  console.log(tabFruits[j]);
  j++;
}

// boucle do while
let h = 0;
do {
  console.log(tabFruits[h]);
  h++;
} while (h < tabFruits.length);

/**
 * Exercie 16
 */
// déclration d'un tableau vide
let tableauVide = [];
console.log(tableauVide);

// ajout d'un élément dans un tableau
tableauVide.push("element 1");
tableauVide.push("element 2");
tableauVide.push("element 3");
console.log(tableauVide);

// suppression d'un élément dans un tableau
tableauVide.splice(1, 1);

/**
 * Exercie 17
 */
let personne = {
  prenom: "Maliki",
  nom: "TCHEROU",
  age: 30,
};
console.log(personne.prenom);
console.log(personne.nom);
console.log(personne.age);

/**
 * Exercie 18
 */
personne.message = function () {
  console.log(
    `Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`
  );
};
personne.message();
