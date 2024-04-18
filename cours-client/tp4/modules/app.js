/**
 * Importation des modules
 * Leur utilisation dans un autre fichier
 */
import { geometrie } from "./formules.js";
import { addition, division, multiplication, soustraction } from "./operations.js";
// importation de toutes les fonctions d'un module
import * as op from "./operations.js";
import { Personne } from "./personne.js";
import genererNombreAleatoire from "./utilitaires.js";

/**
 * Test des modules
 */
console.log("** test du module operations **");
console.log(addition(8, 15));
console.log(soustraction(8, 15));
console.log(multiplication(8, 15));
console.log(division(8, 15));
// autre exemple
console.log(op.addition(84, 15));

console.log("** test du module utilitaires **");
console.log(genererNombreAleatoire());
console.log(genererNombreAleatoire());

console.log("** test du module formules **");
console.log(geometrie.aireCarre(9));
console.log(geometrie.perimetreCarre(9));

console.log("** test du module personne **");
// instanciation de la classe personne
let maliki = new Personne("Maliki TCHEROU", 31);
maliki.afficherDetails();
