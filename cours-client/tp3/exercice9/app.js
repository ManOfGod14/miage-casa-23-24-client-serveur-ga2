const textIdElt = document.querySelector("#textId");
const inputIdElt = document.querySelector("#inputId");
const btnIdElt = document.querySelector("#btnId");

btnIdElt.addEventListener("click", function () {
  //   console.log(inputIdElt.value);
  textIdElt.textContent = inputIdElt.value;
  inputIdElt.value = "";
});
