class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

// Création d'un instance de la classe Personne
const personne1 = new Personne("TCHEROU Maliki", 30);
personne1.afficherDetails();
