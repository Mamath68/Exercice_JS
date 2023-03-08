var a = 56, b = 25;
if (a < b) {
    console.log(a)
} else {
    console.log(b)
}

var maVariable01 = 'du texte';
console.log(maVariable01);

var unPeuDeTexte = "Un peu de texte";
var bonjourToutLeMonde = "Bonjour tout le monde";
var number = 56;

console.log(bonjourToutLeMonde + ", " + unPeuDeTexte)

var
    lundi = "Des patates",
    mardi = "Des pâtes",
    mercredi = "Risotto aux cèpes", jeudi = "Des frites",
    vendredi = "Des sushis";

function afficherRepas(jour) {
    console.log("Le repas d'aujourd'hui est le suivant : " + jour);
}
afficherRepas(vendredi)

var nombre1 = 156;
var nombre2 = 350;

if (nombre1 > nombre2) {
    console.log("Le chiffre " + nombre1 + "est plus grand que le chiffre " + nombre2)
} else {
    console.log("Le chiffre " + nombre2 + " est plus grand que le chiffre " + nombre1)
}

var estMembre = false;
var text = "Le prix est de :";

var resultat = (estMembre ? " 15 € " : " 30€ ")

console.log(text + resultat);

