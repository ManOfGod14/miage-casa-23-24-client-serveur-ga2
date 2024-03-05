const textIdElt = document.querySelector("#textId");
const changerIdElt = document.querySelector("#changerId");
const afficherMasquerIdElt = document.querySelector("#afficherMasquerId");

// changement de couleur
changerIdElt.addEventListener("click", changerCouleur);
function changerCouleur() {
  // affichage de l'elt p
  //   console.log(textIdElt);
  textIdElt.style.color = "red";
}

// afficher/masquer
afficherMasquerIdElt.addEventListener("click", afficherMasquer);
function afficherMasquer() {
  if (textIdElt.style.display == "none") {
    textIdElt.style.display = "block";
  } else {
    textIdElt.style.display = "none";
  }
}
