class Personne {
  constructor(n, a) {
    this.nom = n;
    this._age = a;
  }

  getAge() {
    return this._age;
  }

  setAge(nouvelAge) {
    if (nouvelAge >= 0) {
      this._age = nouvelAge;
    } else {
      console.error("L'age ne doit pas etre négatif !");
    }
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this._age} ans.`);
  }
}

// test
const personne1 = new Personne("TCHEROU Maliki", 30);
// récupérer l'age
const ageP1 = personne1.getAge();
console.log(ageP1);
personne1.afficherDetails();

// modifier l'age
personne1.setAge(31);
console.log(personne1.getAge());
personne1.afficherDetails();
