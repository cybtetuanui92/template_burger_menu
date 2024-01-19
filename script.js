
// DECLARATION VARIABLE (node list ou tableau des liste dropdown menu)
const links = document.querySelectorAll("nav li");
// debug de la <div> des icônes
console.log(icons);

// selecter la div + ecoute d'evenement click + méthode classList.toggle d'une classe active à une autre
icons.addEventListener('click', () => {
    nav.classList.toggle("active");
});

// à partir du tableau déclaré, chaque index(link) du tableau sera écouté par click + remove de la classe active inclut dans <nav>
links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("active")
    });
});