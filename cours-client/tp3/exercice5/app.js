// const textElt = document.getElementById("text");
const textElt = document.querySelector("#text");
const btnElt = document.querySelector("#btn");
const listElt = document.querySelector("#list");

btnElt.addEventListener("click", function () {
  //   console.log(textElt.value);
  if (textElt.value) {
    // création d'un élement html en javascript
    const newLi = document.createElement("li");
    // console.log(newLi);

    // ajouter un contenu dans l'élement li crée
    newLi.textContent = textElt.value;
    // console.log(newLi);

    // mettre l'element li crée et son contenu dans son parent ul
    listElt.appendChild(newLi);

    // initialiser le champ input
    textElt.value = "";
  } else {
    alert("Veuillez remplir le champ input");
  }
});
