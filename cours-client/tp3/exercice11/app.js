const btnIdElt = document.querySelector("#btnId");

// écouter l'évenement de click sur le bouton de validation
btnIdElt.addEventListener("click", function (e) {
  let selectedOption = document.querySelector("input[name='q1']:checked");
  //   console.log(selectedOption);
  if (selectedOption && selectedOption.value && selectedOption.value) {
    // console.log(selectedOption.value);
    const resultQ1Elt = document.querySelector("#resultQ1");
    if (selectedOption.value === "Rabat") {
      resultQ1Elt.textContent = "Response correct";
      resultQ1Elt.style.color = "green";
    } else {
      resultQ1Elt.textContent = "Response incorrect";
      resultQ1Elt.style.color = "red";
    }
  } else {
    alert("Veuillez choisir une réponse !");
  }
});
