// importation du module readline avec du commonjs
const readline = require("readline");

// création de l'interface de lecture
const rlApp = readline.createInterface({
  input: process.stdin, // entrée
  output: process.stdout, // sortie
});

// test de notre interface
// rlApp.question("Saisissez votre nom : ", (nom) => {
//   console.log(nom);
// });

/**
 * Solution de l'exercice
 */
let contacts = [];

// fonction pour ajouter un contact
function addContact() {
  rlApp.question("Saisissez le nom du contact : ", (name) => {
    rlApp.question("Saisissez le n° de téléphone : ", (phone) => {
      contacts.push({ name, phone });
      console.log("\nContact ajouté avec succès");
      showContacts();
    });
  });
}

// fonction pour afficher la liste des contacts
function showContacts() {
  console.log("-------------------------------------------------------------------");
  console.log("*********************** Liste de contacts  ************************");
  console.log("-------------------------------------------------------------------");

  if (contacts.length > 0) {
    // solution 1
    console.table(contacts);

    // solution 2
    // contacts.forEach((contactItem, contactIndex) => {
    //   console.log(`${contactIndex + 1} - ${contactItem.name} - ${contactItem.phone}`);
    //   console.log("___________________________________________________");
    // });
  } else {
    console.log("Aucun contact trouvé !");
  }

  // réaffichage du menu
  main();
}

// fonction pour recherche un contact
function searchContact() {
  rlApp.question("\nSaisissez le nom du contact : ", (name) => {
    const contact = contacts.find((c) => c.name === name);
    if (contact) {
      console.log("-------------------------------------------------------------------");
      console.log("*********************** Info sur le contact  **********************");
      console.log("-------------------------------------------------------------------");
      console.log("Nom contact  : " + contact.name);
      console.log("N° téléphone : " + contact.phone);
    } else {
      console.log("\nContact non trouvé !");
    }

    // réaffichage du menu
    main();
  });
}

// fonction pour quiter l'application
function exitApp() {
  console.log("\nMerci d'avoir utilisé l'application, au revoir !");
  rlApp.close();
}

// fonction principale
function main() {
  console.log("\nChoisissez une option en saisissant le chiffre correspondant :");
  console.log("1 - Ajouter un contact");
  console.log("2 - Afficher la liste des contacts");
  console.log("3 - Chercher un contact");
  console.log("4 - Quitter l'application");

  rlApp.question("\nTapez votre choix : ", (choix) => {
    switch (choix) {
      case "1":
        addContact();
        break;

      case "2":
        showContacts();
        break;

      case "3":
        searchContact();
        break;

      case "4":
        exitApp();
        break;

      default:
        console.log("Choix invalide, veuillez choisir une option valide !");
        main();
    }
  });
}

// exécution de la fonction principale
console.log("*******************************************************************");
console.log("******* Bienvenu dans l'application de gestion des contacts *******");
console.log("*******************************************************************");
main();
