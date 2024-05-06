const fs = require("fs");

fs.appendFile("journal.txt", "\nJournal 2", (err) => {
  if (err) {
    console.error("Erreur lors de l'ajout ", err);
  } else {
    console.log("Contenu ajouté avec succès");
  }
});
