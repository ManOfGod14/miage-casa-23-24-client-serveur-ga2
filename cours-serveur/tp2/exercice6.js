const fs = require("fs");

// suppression d'un fichier
fs.unlink("fichier_a_supprimer.txt", (err) => {
  if (err) {
    console.error("Erreur lors de la suppression", err);
  } else {
    console.log("Fichier supprimé avec succès");
  }
});
