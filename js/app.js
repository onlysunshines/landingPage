/**
 * /**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
const sectionElements = document.getElementsByTagName('section');

/*
 * Begin Main Functions
*/

// build the nav

function buildNav() {
    for (let sectionElement of sectionElements) {
        let navbar = document.createElement("li");
        navbar.className = "menu__link";
        navbar.innerHTML = `<a href="#${sectionElement.id}">${sectionElement.dataset.nav}</a>`;
       
        // adding onclick event tied to the section elemnts id for the scroll function
        
        navbar.onclick = scrollTO(sectionElement.id);

        document.getElementById("navbar__list").appendChild(navbar);
    }
};

// Add class 'active' to section when near top of viewport

function isActive() {
    for (let element of sectionElements) {
        if (item.getBoundingClientRect().top < 100) {
            item.className = "your-active-class";
        } else {
            item.className = "";
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollTO(e) {
    if (e && e.nodeName === "li") {
        let a = e.getElementsByTagName("a");
        let linknav = a.href;
        document.getElementById(linknav).scrollIntoView();
        // calling the is active function here
        isActive();
    }
}

/**
 * End Main Functions
 * Begin Events
*/

// Build menu 
window.onload = buildNav;

// Scroll to section on link click
document.getElementsByTagName("li").addEventListener("click", scrollTO);

// Set sections as active
window.onscroll = isActive;

