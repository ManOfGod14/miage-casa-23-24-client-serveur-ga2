// déclaration de la classe Personne
class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }
}

// Création d'un instance de la classe Personne
const personne1 = new Personne("TCHEROU Maliki", 30);
console.log(personne1); // affichage de tout l'objet
console.log(personne1.nom);
console.log(personne1.age);
