class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  /**
   * info = {nom: "John", age: 27}
   */
  static creerPersonne(info) {
    return new Personne(info.nom, info.age);
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

// ancien exemple
// const personne1 = new Personne("TCHEROU Maliki", 30);

// nouveau exemple
const personne2 = Personne.creerPersonne({ nom: "John", age: 27 });
personne2.afficherDetails();
