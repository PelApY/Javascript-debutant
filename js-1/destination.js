// L’objet window.history
// const back = document.getElementById('back');

// back.addEventListener('click', () => {
//   window.history.back();
// });

// L’objet window.document.cookie
const back = document.getElementById('back');

back.addEventListener('click', () => {
    window.history.back();
});

//document.cookie est une chaîne qui contient tous les cookies séparés par "; "
//Nous utilisons la méthode split pour créer un tableau contenant les cookies
let tableauId = document.cookie.split("; ");

//Nous utilisons la méthode split pour séparer les clés des valeurs dans un forEach et ajouter les clés et valeurs à un tableau identifiants
let identifiants = new Array();

tableauId.forEach((ligne) => {
    let tab = ligne.split("=");
    identifiants.push([tab[0], tab[1]]);
});

//Nous pouvons afficher le tableau dans la console
console.log(identifiants);