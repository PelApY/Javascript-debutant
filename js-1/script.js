// Méthodes open() et close().

// Ouverture en fonction d’un Event Listener qui écoute quand le button ayant pour id bouton
// const button = document.getElementById("bouton");
// button.addEventListener('click', () => {
//   window.open("destination.html");
// });

// Ouverture avec une taille de 500 / 500 px
// const button = document.getElementById("bouton");
// button.addEventListener('click', () => {
//   window.open("destination.html", 'destination', 'width=500, height=500');
// });


// Ouverture avec une taille de 500 / 500 px + Fermeture fonction close()
// const button = document.getElementById("bouton");

// button.addEventListener('click', () => {
//     let fenetre = window.open("destination.html", 'destination', 'width=500, height=500');

//     fenetre.addEventListener('load', () => {
//         let button2 = fenetre.document.getElementById('bouton2');

//         button2.addEventListener('click', () => {
//             fenetre.close();
//         });
//     });
// });


// // Méthode alert()
// const button = document.getElementById("bouton");

// button.addEventListener('click', () => {
//     window.alert("Message"); //ou alert("Message")
// });


// // Méthode prompt()
// const button = document.getElementById("bouton");

// button.addEventListener('click', () => {
//   let mot = window.prompt("Quel mot afficher ?", "mot de votre choix");
//   window.alert(mot);
// });


// L’objet screen
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);
// console.log(screen.colorDepth);
// console.log(screen.pixelDepth);


// L’objet location
// let destination = document.getElementById('destination');
// const forward = document.getElementById('forward');

// destination.addEventListener('click', () => {
//     destination = window.location.assign('destination.html');
// });

// forward.addEventListener('click', () => {
//     window.history.forward();
// });


// L’objet window.document.cookie
// Créer et récupérer la valeur de cookies
const destination = document.getElementById('destination');
const forward = document.getElementById('forward');

destination.addEventListener('click', () => {
    const destination = window.location.assign('destination.html');
});

forward.addEventListener('click', () => {
    window.history.forward();
});

//création d’un objet Date pour créer une date d’expiration :
const dateExp = new Date();
dateExp.setMonth(dateExp.getMonth() + 1); //nous ajoutons 1 mois à la date

//nous interrogeons l’utilisateur sur son username et son mdp avec window.prompt()
const username = prompt("Username");
const mdp = prompt("Mot de passe");

//creation des cookies
document.cookie = `username=${username} ; expires=${dateExp.toUTCString()}`;
document.cookie = `mdp=${mdp} ; expires=${dateExp.toUTCString()}`;

