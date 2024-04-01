const heuresIdElt = document.querySelector("#heuresId");
const minutesIdElt = document.querySelector("#minutesId");
const secondesIdElt = document.querySelector("#secondesId");
const msecondesIdElt = document.querySelector("#millisecondesId");

const startIdElt = document.querySelector("#startId");
const stopIdElt = document.querySelector("#stopId");
const resetIdElt = document.querySelector("#resetId");

let timerId; // stocker l'id du timer
let heure = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

// fonction pour afficher 2 chiffres lorsqu'on a 1 seul chiffre
function formatNumber(nbr) {
  return nbr.toString().padStart(2, "0");
}
