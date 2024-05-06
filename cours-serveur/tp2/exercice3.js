const fs = require("fs");

fs.mkdir("nouveau_repertoire", (err) => {
  if (err) {
    console.error("erreur lors de la création du répertoire");
  } else {
    console.log("Répertoire créé avec succès");
  }
});
