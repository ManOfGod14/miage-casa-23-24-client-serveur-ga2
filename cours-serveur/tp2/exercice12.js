const fs = require("fs");
const path = require("path");

function listFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Erreur lors de la lecture du répertoire", err);
    } else {
      files.forEach((fileItem, fileIdenx) => {
        const filePath = path.join(directory, fileItem);
        fs.stat(filePath, (error, stats) => {
          if (error) {
            console.error("Erreur lors de l'obtention des infos sur le fichier :", error);
          } else {
            if (stats.isDirectory()) {
              console.log(filePath + "/");
              listFiles(filePath);
            } else {
              console.log(filePath);
            }
          }
        });
      });
    }
  });
}

listFiles("./");
