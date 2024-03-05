const myFormElt = document.querySelector("#myForm");
const msgErreurElt = document.querySelector("#msgErreur");
const contenuElt = document.querySelector("#contenu");

// écoute d'événement sur l'element form
myFormElt.addEventListener("submit", function (evt) {
  evt.preventDefault(); // annuler le comportement par défaut d'un element html

  // récuperation des elements input
  const nom = document.querySelector("#nom");
  const prenom = document.querySelector("#prenom");
  const email = document.querySelector("#email");
  // console.log(nom.value, prenom.value, email.value);
  if (
    nom.value.trim() === "" ||
    prenom.value.trim() === "" ||
    email.value.trim() === ""
  ) {
    msgErreurElt.textContent = "Veuillez remplir tous les champs !";
  } else {
    contenuElt.innerHTML = `Données validées avec succès : <br/> Nom : ${nom.value} <br/> Prénom : ${prenom.value} <br/> Email : ${email.value}`;

    /**
     * Réinitialiser les champs
     */
    // proposition 1
    // nom.value = "";
    // prenom.value = "";
    // email.value = "";

    // proposition 2
    myFormElt.reset();
  }
});
