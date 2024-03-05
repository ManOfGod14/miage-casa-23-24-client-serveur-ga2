// récuperation de l'element p
const eltP = document.querySelector("p");
console.log(eltP);

// récupération de l'element button par son nom avec querySelector
const eltBtn = document.querySelector("button");
console.log(eltBtn);

eltBtn.addEventListener("click", function () {
  if (eltP.style.display == "none") {
    eltP.style.display = "block";
  } else {
    eltP.style.display = "none";
  }
});
