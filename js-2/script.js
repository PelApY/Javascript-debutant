//Notre requête AJAX
const xhttp = new XMLHttpRequest();
let city;
xhttp.onload = function () {
    const xmlDoc = xhttp.responseXML;
    city = xmlDoc.getElementsByTagName("CITY");
    loadCity();
};
xhttp.open("GET", "departement.xml");
xhttp.send();

//Notre fonction pour analyser notre XML et afficher sous forme de tableau
function loadCity() {
    let table = "<tr><th>Ville</th><th>Code postal</th><th>Adresse</th><th>Jour</th><th>Horaire</th></tr>";
    for (let i = 0; i < city.length; i++) {
        table += "<tr><td>";
        table += city[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
        table += "</td><td>";
        table += city[i].getElementsByTagName("ZIP")[0].childNodes[0].nodeValue;
        table += "</td><td>";
        table += city[i].getElementsByTagName("ADRESS")[0].childNodes[0].nodeValue;
        table += "</td><td>";
        table += city[i].getElementsByTagName("DAY")[0].childNodes[0].nodeValue;
        table += "</td><td>";
        table += city[i].getElementsByTagName("HOUR")[0].childNodes[0].nodeValue;
        table += "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}
