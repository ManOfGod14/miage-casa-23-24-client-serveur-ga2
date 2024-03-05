// const textElt = document.getElementById("text");
const textElt = document.querySelector("#text");
const btnElt = document.querySelector("#btn");
const listElt = document.querySelector("#list");

btnElt.addEventListener("click", function () {
  //   console.log(textElt.value);
  const newLi = document.createElement("li");
  newLi.textContent = textElt.value;
  listElt.appendChild(newLi);
  textElt.value = "";
});
