const textIdElt = document.querySelector("#textId");
const inputIdElt = document.querySelector("#inputId");
const btnIdElt = document.querySelector("#btnId");

btnIdElt.addEventListener("click", function () {
  //   console.log(inputIdElt.value);
  if (inputIdElt.value.trim() !== "") {
    textIdElt.textContent = inputIdElt.value;
    inputIdElt.value = "";
  } else {
    alert("Veuillez remplir le champ input !");
  }
});
