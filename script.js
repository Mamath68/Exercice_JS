// var(variable)
var a = 56, b = 25;
// if(si) a est plus petit que b, console.log(afficher dans la console) a affichera A, else(sinon)console.log(afficher dans la console) b affichera B
if (a < b) {
    console.log(a);
} else {
    console.log(b);
}

// maVariable01 correspond a : 
var maVariable01 = "Voici du texte";
//  console.log(afficher dans la console) maVariable01 affichera maVariable01
console.log(maVariable01)

var unPeuDeTexte = "voici un peu de texte.";
var bonjourToutLeMonde = "Bonjour tout le monde, ";
var number = 56;
// concaténation des variable : bonjourToutLeMonde, unPeuDeTexte.
console.log(bonjourToutLeMonde + unPeuDeTexte);

// Asignation d'un ingrédiant a chaque jour de semaine. //On déclare toutes les variables
var lundi = "Des patates", mardi = "Des pâtes", mercredi = "Risotto aux cèpes", jeudi = "Des frites", vendredi = "Des sushis";
// fonction afficherRepas est programmé de sorte a afficher une phrase qui présente le repas de la journée.//On déclare la fonction avec un paramètre
function afficherRepas(jour) {
    console.log("Le repas d'aujourd'hui est le suivant: " + jour);
    //la commande « console.log » permet d’afficher ce qui est entre les parenthèses dans la console du navigateur
    //On veut que la fonction affiche dans la console une phrase, suivie du contenu du paramètre 'jour' passé en fonction
}
// appel de la fonction afficherRepas.//On exécute la fonction avec une des variables placée en paramètre. Essayez de varier le paramètre avec les différents noms de variables!
afficherRepas(mercredi);

var nombre1 = 156;
var nombre2 = 350;
if (nombre1 > nombre2) { //On teste si « nombre1 » est plus grand que « nombre2 »
    console.log(nombre1); //Si c’est le cas, on affiche dans la console la valeur de « nombre1 »
} else {
    console.log(nombre2); //Sinon on affiche dans la console la valeur de « nombre2 »
}

var estMembre = false; //On définit la variable estMembre avec la valeur booléenne "False"
var texte = "Le prix est : " //On définit une phrase qui apparaîtra en console
var resultat = (estMembre ? "15 €" : "30 €") //On teste si estMembre est vrai ou faux, puis on stocke la réponse dans la variable "résultat". "estMembre" étant faux, la valeur stockée sera "30 €".
console.log(texte + resultat); //On affiche le résultat

var estCoupable = "coupable" //Testez aussi avec la valeur "innocent" à la place de "coupable".
switch (estCoupable) {
    case "coupable":
        console.log("Vous allez sur la case prison, ne passez pas par la case départ, ne touchez pas 20 000 €");
        break;
    case "innocent":
        console.log("Tirez une carte chance !");
        break;
    default:
        console.log("Vous échappez à la justice.");
        break;
}

//Dans la boucle qui suit, on souhaite afficher une table de multiplication
var table = 7; //On cherchera à afficher la table de 7
for (var i = 0; i <= 10; i++) {
    //On définit un compteur, une limite afin de pouvoir stopper la boucle et enfin une incrémentation
    console.log(i + ' fois ' + table + ' est égale à ' + i * table);
    //On affiche dans la console les variable, le calcul et du texte pour formater joliment la réponse.
}

var compteur = 10; // On définit un compteur
do { //On indique la liste d’instructions
    console.log('Il reste ' + compteur + ' étapes avant la fin du compte à rebours') //Ici, on lui demande d’afficher la variable « compteur » accompagnée de texte
    compteur--; // On décrémente « compteur »
} while (compteur > -1); // La boucle continuera jusqu’à ce que « compteur » arrive au chiffre indiqué dans while

var nbRepas = 0, repas = "biscuit"; //On définit les variables
while (nbRepas <= 12) {
    //Tant que « nbRepas » est plus petit que 13
    if (nbRepas > 1) {
        //Le but ici est de définit si « biscuit » prend un « s » ou pas, en fonction du nombre présent
        repas = "biscuits";
    }
    console.log('Vous avez mangé ' + nbRepas + ' ' + repas);
    //On affiche le résultat
    nbRepas++; //On incrémente la variable
}

var bouton = document.getElementById("bouton");
//On prépare une variable qui cible le bouton
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
    //On prépare la fonction qui va permettre d’insérer du texte dans la balise « p »
}
bouton.addEventListener('click', myFunction, false);
//On met en place le « listener » qui va attendre le clic sur le bouton pour déclencher la fonction

var a = 5;
var b = 4;
console.log(a + b); //Renvoie 9
a += b;
console.log(a); //Renvoie 9
var a = 5;
var b = 4;
console.log(a * b); //Renvoie 20
a *= b;
console.log(a); //Renvoie 20
var a = 5;
var b = 'du texte';
console.log(a + b); //Renvoie « 5du texte »

var a = 'du texte à concaténer';
var b = ' et encore du texte à concaténer';
console.log(a + b);
//Renvoie une chaîne de caractère unique « du texte à concaténer et encore du texte à concaténer »

var a = 5;
var b = 23;
var c = 'du texte';
console.log(a + b); // Renvoie 28
console.log(a * b); // Renvoie 115
console.log(b / a); // Renvoie 4,6
console.log(a + c); // Attention ceci renverra du texte !

var a = 5;
var b = 23;
console.log(a % b);// Renvoie 5
console.log(b % a); // Renvoie 3

var nombre1 = 10;
var nombre2 = 100;
var nombre3 = 50;
if (nombre2 > nombre3 && nombre1 > nombre3) { // Renvoie faux car seule une des conditions est vraie.

}
if (nombre2 > nombre3 || nombre1 > nombre3) { // Renvoie vrai car au moins une des conditions est vraie.

}
console.log(!nombre2); // Renvoie « false »
console.log(!nombre2 == !nombre2); // Renvoie « true »

var nombre1 = 10; // Ceci est bien un nombre
var nombre2 = '10'; // Ceci est du texte
console.log(nombre1 == nombre2); // Renvoie true car on ne vérifie pas le type de la variable
console.log(nombre1 === nombre2); // Renvoie false
// Attention à ne pas juste mettre un seul symbole '=' sinon vous attribuerez à 'nombre1' la valeur 'de nombre2'
console.log(nombre1 = nombre2); // Renvoie 10

var nombre1 = 10;
var nombre2 = '10';
var nombre3 = 50;
console.log(nombre1 != nombre3); // Renvoie true
console.log(nombre1 != nombre2); // Renvoie false car on ne compare pas le type des variables
console.log(nombre1 !== nombre2); // Renvoie true, car le type des variables n'est pas le même

var nombre1 = 10;
var nombre2 = 50;
var nombre3 = 50;
console.log(nombre1 > nombre2); // Renvoie false
console.log(nombre1 < nombre2); // Renvoie true
console.log(nombre2 >= nombre3); // Renvoie true

var nombre1 = 10;
nombre1++;
console.log(nombre1); // Renvoie 11
var nombre2 = 5;
nombre2--;
console.log(nombre2--); // Renvoie 4

var texte = 'Ceci est une chaîne de caractère';
console.log(texte.length); // Renvoie 32
var extrait = texte.slice(5, 20);
console.log(extrait); // Renvoie 'est une chaîne'

var paragraphe = 'Je me sentais si cruellement démuni que j\'envisageai de chercher du \"secours\" au village.\n\r Puis je me souvins que j\'avais une sorte d\'aide très particulière à portée de main.'
document.getElementById("zone_texte").innerHTML = paragraphe;

var tableau = ['pomme', 'banane', 'abricot', 'fraise'];
console.log(tableau[1]); // Renvoie 'banane'
console.log(tableau[3]); // Renvoie 'fraise'
console.log(tableau.length); // Renvoie 4
for (var i = 0; i < 4; i++) {
    console.log(tableau[i]);
}
// Renvoie ‘pomme’, ‘banane’, ‘abricot’, ‘fraise’

var fruit = ["pommes", "bananes", "Cerises"];
fruit.sort();
console.log(fruit); // ["Cerises", "bananes", "pommes"];
var scores = [1, 2, 10, 21];
scores.sort();
console.log(scores); // [1, 10, 2, 21]
// Attention 10 vient avant 2 selon l'ordre Unicode
var choses = ["mot", "Mot", "1 Mot", "2 Mots"];
choses.sort();
console.log(choses); // ["1 Mot", "2 Mots", "Mot", "mot"]
// En Unicode, les nombres arrivent avant les majuscules, qui elles-mêmes arrivent avant les minuscules.

var tableau = [['brocoli', 'chou-fleur', 'pates'], ['Recettes', 'Repas', 'Diner'], [1, 2, 3]]; // Ceci est un tableau à plusieurs dimensions
for (var i = 0; i < 3; i++) { // On parcourt le tableau
    for (var j = 0; j < 3; j++) { // On parcourt chaque tableau
        console.log(tableau[i][j]); // On affiche chaque résultat
    }
}

var association = {
"prenom" : "Jean Claude",
"nom" : "Van Damme",
10 : "Mawashi",
"catchphrase" : ["Je suis aware", " Un serpent, c'est gentil"]
}
for (var key in association){
var valeur = association[key];
console.log(key + " = " + valeur);
}