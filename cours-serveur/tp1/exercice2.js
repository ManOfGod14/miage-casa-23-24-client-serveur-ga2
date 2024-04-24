// importation du module readline avec du commonjs
const readline = require("readline");

// création de l'interface de lecture
const rlApp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
