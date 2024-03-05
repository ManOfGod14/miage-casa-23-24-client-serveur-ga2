const compteurIdElt = document.querySelector("#compteurId");
const btnIdElt = document.querySelector("#btnId");

let compteur = 0;
// écouter l'evenement de clic sur le bouton
btnIdElt.addEventListener("click", function () {
  compteurIdElt.textContent = compteur++;
});
