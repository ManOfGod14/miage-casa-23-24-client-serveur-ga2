const fs = require("fs");

// Lecture du fichier
fs.readFile("mon_fichier.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier");
  } else {
    console.log("Contenu du fichier : ", data);
  }
});
