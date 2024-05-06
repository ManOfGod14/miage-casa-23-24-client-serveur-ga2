const fs = require("fs");

// récupération des informations sur un fichier
fs.stat("hello.txt", (err, stats) => {
  if (err) {
    console.error("Erreur lors de la récupération des infos", err);
  } else {
    console.log("Information sur le fichier : ", stats);
  }
});
