// importation du module http de node.js
const http = require("http");

// création du serveur
// req : request => pour les demandes vers serveur
// res : response => pour la réponse du serveur
const server = http.createServer((req, res) => {
  //   console.log("Affichage de l'objet request : ", req);
  console.log("Request url :", req.url);
  console.log("Request method :", req.method);
  console.log("Request headers :", req.headers);

  // reponse du serveur
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Response du serveur");
});

// écoute sur le port du serveur
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Le serveur ecoute sur le port http://localhost:${PORT}`);
});
