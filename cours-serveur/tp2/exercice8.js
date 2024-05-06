const fs = require("fs");

// copie du fichier
fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) {
    console.error("Erreur lors de la copie du fichier", err);
  } else {
    console.log("Fichier copié avec succès");
  }
});
