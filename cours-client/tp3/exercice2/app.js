// récupération de l'element p par son nom avec querySelector
const eltP = document.querySelector("p");
console.log(eltP);

// récupération de l'element button par son nom avec querySelector
const eltBtn = document.querySelector("button");
console.log(eltBtn);

// ecoute d'évenement sur le bouton
eltBtn.addEventListener("click", modifierStyle);
function modifierStyle() {
  eltP.style.color = "blue";
  eltP.style.fontSize = "3em";
}
