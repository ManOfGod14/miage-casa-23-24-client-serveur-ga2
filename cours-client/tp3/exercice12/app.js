const progessMoinsElt = document.querySelector("#progessMoins");
const progessPlusElt = document.querySelector("#progessPlus");
const barElt = document.querySelector("#bar");
let progressWidthValue = 0;

// progress plus
progessPlusElt.addEventListener("click", function (e) {
  if (progressWidthValue < 100) {
    progressWidthValue += 10;
    barElt.style.width = progressWidthValue + "%";
    barElt.style.backgroundColor = "green";
  }
});

// progress moins
progessMoinsElt.addEventListener("click", function (e) {
  if (progressWidthValue > 0) {
    progressWidthValue -= 10;
    barElt.style.width = progressWidthValue + "%";
    barElt.style.backgroundColor = "red";
  }
});
