const images = ["image1.jpg", "image2.jpg", "image3.png", "image4.jpg"];
const imageIdElt = document.querySelector("#imageId");
const prevBtnElt = document.querySelector("#prevBtn");
const nextBtnElt = document.querySelector("#nextBtn");
let currentIndex = 0;

function changeImage(index) {
  if (index < 0 || index >= images.length) {
    return;
  } else {
    currentIndex = index;
    imageIdElt.src = "images/" + images[currentIndex];
  }

  // Ou
  // if (index < 0 || index >= images.length) {
  //   return;
  // }
  // currentIndex = index;
  // imageIdElt.src = "images/" + images[currentIndex];
}

// bouton précédent
prevBtnElt.addEventListener("click", function (e) {
  //   affichage de la propriété src
  //   console.log(imageIdElt.src);
  //   changement de l'image d'une facon statique
  //   imageIdElt.src = "images/" + images[0];

  //   changement de l'image d'une facon dynamique
  // if (currentIndex > 0) {
  //   imageIdElt.src = "images/" + images[currentIndex - 1];
  //   currentIndex--;
  // } else {
  //   return;
  // }

  // utilisation d'une fonction automatique
  changeImage(currentIndex - 1);
});

// bouton suivant
nextBtnElt.addEventListener("click", function (e) {
  //   affichage de la propriété src
  //   console.log(imageIdElt.src);
  //   changement de l'image d'une facon statique
  //   imageIdElt.src = "images/" + images[1];

  //   changement de l'image d'une facon dynamique
  // if (currentIndex < images.length - 1) {
  //   imageIdElt.src = "images/" + images[currentIndex + 1];
  //   currentIndex++;
  // } else {
  //   return;
  // }

  // utilisation d'une fonction automatique
  changeImage(currentIndex + 1);
});
