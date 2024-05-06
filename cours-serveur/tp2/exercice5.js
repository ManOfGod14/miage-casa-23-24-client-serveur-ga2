const fs = require("fs");

// renommage d'un fichier
fs.rename("ancien_nom.txt", "nouveau_nom.txt", (err) => {
  if (err) {
    console.error("Erreur lors du renommage du fichier", err);
  } else {
    console.log("Fichier renommé avec succès");
  }
});
