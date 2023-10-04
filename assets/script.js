// Déclarations des variables globales : 
const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var img = document.querySelector(".banner-img");
let arrowleft = document.querySelector(".arrow_left");
let arrowright = document.querySelector(".arrow_right");
let slidenow = 0;
let dot = [
	document.getElementById("dot0"),
	document.getElementById("dot1"),
	document.getElementById("dot2"),
	document.getElementById("dot3")
];
let p_banner = document.getElementById("p_banner");

async function delay(t) {
	return new Promise(resolve => setTimeout(resolve, t));
  };  // Fonction de delay (Permet de mettre un délai dans une fonction async)

  function dotclick(v){
	slidenow = v;
	img.src=slides[v].image;
	p_banner.innerHTML = slides[v].tagLine;
	for (let index = 0; index < dot.length; index++) {
		if (index != v) {
			dot[index].classList.remove("dot_selected");	
		}  else {
			dot[index].classList.add("dot_selected");
		}}
}; // Déclanche le défilement en changeant les dots

async function autodefile(t){
	
	for (slidenow; slidenow < slides.length+1; slidenow++) {
		if (slidenow == 4) {
			slidenow = 0	
		}
		dotclick(slidenow);
		
		await delay(t);
		
	}
}; // Fonction de défilementt automatique du carroussel 

function rightArrow() {
	if (slidenow < 3) {
		dotclick(slidenow+=1);	
	} else {
		dotclick(0);
	}
}; // Flèche de gauche

function leftArrow() {
	if (slidenow > 0) {
		dotclick(slidenow-=1);		
	} else {
		dotclick(3);
	}
}; // Flèche de droite

function detectdot(){
	for (let index = 0; index < dot.length; index++) {
		dot[index].addEventListener("click", function(){
			dotclick(dot.indexOf(this))
	})
}} // Ajoute un écouteur dévenement sur tous les dots du array via une boucle for

autodefile(5000); // Défilement automatique de l'image ici changer le chiffre pour régler le temps en ms (Actuellement 5 secondes donc 5 000ms)

detectdot(); // Ici on appel les écouteurs d'évenement sur les points

arrowleft.addEventListener("click", function(){
	leftArrow()
}); // Ecoute le clique de l'utilisateur sur la flèche de gauche

arrowright.addEventListener("click", function(){
	rightArrow()
}); // Ecoute le clique de l'utilisateur sur la flèche de droite

