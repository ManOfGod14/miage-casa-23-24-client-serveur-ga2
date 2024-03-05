class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }

  async attendre() {
    console.log("Attendre...");
    await new Promise((resolve) => setTimeout(resolve, 5000)); // milisecondes
    console.log("Attente terminée ...");
  }
}

const alice = new Personne("Alice", 25);
alice.attendre().then(() => alice.afficherDetails());
