const fs = require("fs");

const filePath = "hello.txt";

if (fs.existsSync(filePath)) {
  console.log("Le fichier existe");
} else {
  console.error("Le fichier n'existe pas");
}
