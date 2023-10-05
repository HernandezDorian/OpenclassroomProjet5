// Déclarations des variables globales : 
const slides = [
	{
		"image": "assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const img = document.querySelector(".banner-img");
const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
const dot = document.querySelectorAll('.dot')
const p_banner = document.getElementById("p_banner");

let slidenow = 0;

function dotclick(v) {
	slidenow = v;
	img.src = slides[v].image;
	p_banner.innerHTML = slides[v].tagLine;
	dot.forEach((element, index) => {
		if (index != v) {
			element.classList.remove("dot_selected");
		} else {
			element.classList.add("dot_selected");
		}
	})
} // Déclanche le défilement en changeant les dots

function autodefile(t) {
	setInterval(rightArrow, t);
} // Fonction de défilementt automatique du carroussel 

function rightArrow() {
	if (slidenow < 3) {
		dotclick(++slidenow);
	} else {
		dotclick(0);
	}
} // Flèche de gauche

function leftArrow() {
	if (slidenow > 0) {
		dotclick(--slidenow);
	} else {
		dotclick(3);
	}
} // Flèche de droite

function detectdot() {
	dot.forEach((element, index) => {
		element.addEventListener("click", function () {
			dotclick(index)
		})
	})
} // Ajoute un écouteur dévenement sur tous les dots du array via une boucle for

autodefile(5000); // Défilement automatique de l'image ici changer le chiffre pour régler le temps en ms (Actuellement 5 secondes donc 5 000ms)

detectdot(); // Ici on appel les écouteurs d'évenement sur les points

arrowleft.addEventListener("click", leftArrow); // Ecoute le clique de l'utilisateur sur la flèche de gauche

arrowright.addEventListener("click", rightArrow); // Ecoute le clique de l'utilisateur sur la flèche de droite