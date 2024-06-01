// Продължи с твоя vanilla JavaScript код тук.

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

function openHamburger() {
    hamburgerBtn.classList.toggle("open");
    navMenu.classList.toggle("not-visible");
}

const navbar = document.getElementById("nav");

// Get the offset position of the navbar
const offset = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navBehavior() {
    // console.log(sticky);
    if (window.scrollY > offset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.addEventListener("scroll", navBehavior);
