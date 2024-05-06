const fs = require("fs");

// chemin vers le nom du fichier à lire
const filePath = "hello.txt";

// Lecture du fichier
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log("Erreur lors de la lecture du fichier");
  } else {
    console.log("Donnée récuperé : ", data);
  }
});
