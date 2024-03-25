const clockElt = document.querySelector("#clock");

// fonciton pour changer l'heure
function updatedClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // format de l'horloge
  let timeString = hours + ":" + minutes + ":" + seconds;
  clockElt.textContent = timeString;
}

// setInterval appel à chaque 1000 msec la fonction updatedClock
setInterval(updatedClock, 1000);
