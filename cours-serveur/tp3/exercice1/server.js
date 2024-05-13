// importation du module http de node.js
const http = require("http");

// création du serveur
// req : request => pour les demandes vers serveur
// res : response => pour la réponse du serveur
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});

// écoute sur le port du serveur
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Le serveur ecoute sur le port http://localhost:${PORT}`);
});
