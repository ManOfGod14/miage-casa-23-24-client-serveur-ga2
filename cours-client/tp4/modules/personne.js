// déclaration d'une classe exportable
export class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  afficherDetails() {
    console.log(`Nom : ${this.nom}, Age: ${this.age}`);
  }
}
