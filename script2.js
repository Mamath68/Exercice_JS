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

var estCoupable = "Coupable";
switch (estCoupable) {
    case "Coupable":
        console.log("Tu va en prison, tu passe pas par la case départ et tu touche pas tes 20 000 €");
        break;
    case "Innocent":
        console.log("Tu peux tirer une carte chance !");
        break;
    default:
        console.log("T'as de la chance, t'es libre, casse toi.");
        break;
}

var table = 7;

for (var i = 1; i < 11; i++) {
    console.log(i + " fois " + table + " est égale à " + i * table);
}

var compteur = 10;

do {
    console.log("Il reste " + compteur + " étapes avant la fin du compte à rebours")

    compteur--;

} while (compteur > -1);

var nbRepas = 0, repas = "Biscuit";
while (nbRepas <= 13) {
    if (nbRepas > 1) {
        repas = "Biscuits";
    }
    console.log("Vous avez mangé " + nbRepas + " " + repas)
    nbRepas++;
}

var bouton = document.getElementById("bouton");

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World!";
}
bouton.addEventListener("click", myFunction, false)

var a = 5;
var b = 4
console.log(a + b)

a += b;
console.log(a)

var a = 5;
var b = 4
console.log(a * b)

a *= b;
console.log(a)

var a = 5;
var b = "du text"
console.log(a + b)

var a = "Du texte à concaténer ";
var b = "et encors du text à concaténer.";
console.log(a + b)

var a = 5;
var b = 23;
var c = "du texte"
console.log(a + b);
console.log(a * b);
console.log(b / a);

console.log(a + c);


var a = 5;
var b = 23;
console.log(a % b);
console.log(b % a);

var nombre1 = 10;
var nombre2 = 100;
var nombre3 = 50;

if (nombre2 > nombre3 && nombre1 > nombre3) {

}
if (nombre2 > nombre3 || nombre1 > nombre3) {
}

console.log(!nombre2);
console.log(!nombre2 == !nombre2);

var nombre1 = 10;
var nombre2 = "10";

console.log(nombre1 == nombre2);
console.log(nombre1 === nombre2);
console.log(nombre1 = nombre2);

var nombre1 = 10;
var nombre2 = "10";
var nombre3 = 50;

console.log(nombre1 != nombre3);
console.log(nombre1 != nombre2);
console.log(nombre1 !== nombre2);

var nombre1 = 10;
var nombre2 = 50;
var nombre3 = 50;

console.log(nombre1 > nombre2);
console.log(nombre1 < nombre2);
console.log(nombre2 >= nombre3);

var nombre1 = 10;
nombre1++;
console.log(nombre1);

var nombre2 = 5;
nombre2--;
console.log(nombre2--);

var texte = "Ceci est une chaîne de caractère";
console.log(texte / length);

var extrait = texte.slice(5, 20);
console.log(extrait);

var paragraphe = 'je me sentais si cruellement démuni que j\'envisageai de chercher du "\secours\" au vilage.\n\r Puis je me souvins que j\'avais une sorte d\'aide très particulière à porté de main.'

document.getElementById("zone_texte").innerHTML = paragraphe;

var tableau = ["Pomme", "Banane", "Abricot", "Fraise"];

console.log(tableau[1]);
console.log(tableau[3]);
console.log(tableau.length);

for (var i = 0; i < 4; i++) {
    console.log(tableau[i]);
}

var fruit = ["pommes", "bananes", "Cerises"];
fruit.sort();
console.log(fruit);

var score = [1, 2, 10, 21];
score.sort()
console.log(score);

var choses = ["mot", "Mot", "1 Mot", "2 Mots"];
choses.sort()
console.log(choses);

var tableau = [
["brocoli", "chou-fleur", "pates"],
["Recettes", "Repas", "Diner"],
[1, 2, 3]
]

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        console.log(tableau[i][j]);
    }
}

var association = {
    "Prénom ": " Jean-Claude ",
    "Nom ": " Van Damme ",
    10: "Mawashi ",
    "Catchphrase": ["Je suis aware", " Un Serpent, c'est gentil"]
}

for (var key in association) {
    var valeur = association[key];
    console.log(key + " = " + valeur);
}