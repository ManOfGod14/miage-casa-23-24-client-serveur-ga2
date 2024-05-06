// importation de la librairie filesystem
const fs = require("fs");

// chemin vers le nom du fichier
const filePath = "hello.txt";

// contenu du fichier
const content = "Hello, World!";

// écriture dans le fichier
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Erreur lors de l'écriture dans le fichier");
  } else {
    console.log("Fichier créé et contenu écrit avec succès");
  }
});
