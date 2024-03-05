/**
 * Observation du super objet window et de l'objet document
 */
// super objet window en javascript
// console.log(window);

// console.log(window.alert("Test"));
/**
 * tous les objets dans "window" peuvent etre utilisés
 * sans faire appel au super objet window
 */
// console.log(alert("Autre alert"));

//observons l'objet document
// console.log(document);

/***
 * Correction de l'exo1
 */

// récupération de l'element p par son id
const paraIdElt = document.getElementById("paraId");
console.log(paraIdElt);

// récupération de l'element button par son id
const btnIdElt = document.getElementById("btnId");
console.log(btnIdElt);

// ecoute d'evenement de clic sur le bouton
btnIdElt.addEventListener("click", function (e) {
  //   console.log(e);

  // modification du contenu de l'element p
  paraIdElt.textContent = "Le message a été modifié avec succès !";
});
