// Mon commentaire sur une ligne
/**
 * Mes commentaires sur plusieurs lignes
 * Premier commentaire
 * Deuxieme commentaire
 */

var b = "Hello world!";
console.log(`La valeur 1 de b = ${b}`);
console.log('Le type de la variable b est : '+ typeof b);
var b = "Maliki";
console.log(`La valeur 2 de b = ${b}`);

let d = 15;
console.log(`La valeur 1 de d = ${d}`);

d = 26;
console.log(`La valeur 2 de d = ${d}`);

// les objets
let utilisateur = {
    nom: "TCHEROU",
    prenom: "Maliki",
    email: "tcherou.maliki@gmail.com",
    adresse: [31, "Tarik Ibnou Ziad", 20030, "Casablanca"]
}
console.log(utilisateur);
console.log("Type de la variable utilisateur : " + typeof utilisateur);
console.log("Nom : "+ utilisateur.nom); // accéder à la clé nom
console.log("Prenom : "+ utilisateur.prenom);
console.log("Adresse : "+ utilisateur.adresse);
console.log("CP : "+ utilisateur.adresse[2]);

// les tableaux
let liste = [2, 4, 1, 5, 9, 7];
console.log(liste);
console.log(`Type de la variable liste : ${typeof liste}`);
console.log("Valeur de l'élément 4 = "+ liste[1]);

/**
 * Les opérateurs arithmetiques
 */
let variable1 = 56;
let variable2 = 15;
let sommeVar1Var2 = variable1 + variable2;
console.log(variable1 +" + "+ variable2 +" = "+ sommeVar1Var2);
console.log(`${variable1} + ${variable2} = ${sommeVar1Var2}`);

let diffeVar1Var2 = variable1 - variable2;
console.log(`${variable1} - ${variable2} = ${diffeVar1Var2}`);

/**
 * Les opérateurs logiques
 */
let variable3 = "56";
// double égale
let egalite1Var1Var2 = variable1 == variable3;
console.log(`${variable1}(${typeof variable1}) == ${variable3}(${typeof variable3}) => ${egalite1Var1Var2}`);

// triple égale
let egalite2Var1Var2 = variable1 === variable3;
console.log(`${variable1}(${typeof variable1}) === ${variable3}(${typeof variable3}) => ${egalite2Var1Var2}`);

// le contraire de : !
let variable4 = true;
console.log(`Le contraire de ${variable4} => ${!variable4}`);

// différence
let difference1Var1Var2 = variable1 != variable3;
console.log(`${variable1}(${typeof variable1}) != ${variable3}(${typeof variable3}) => ${difference1Var1Var2}`);

let difference2Var1Var2 = variable1 !== variable3;
console.log(`${variable1}(${typeof variable1}) !== ${variable3}(${typeof variable3}) => ${difference2Var1Var2}`);

/**
 * Les opérateurs conditionnels
 */

/**
 * Les fonctions
 */