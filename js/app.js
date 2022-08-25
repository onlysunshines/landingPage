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
const sectionItems = document.getElementsByTagName('section');

/*
 * Begin Main Functions
*/

// build the nav
function buildNav() {
    for (let sectionItem of sectionItems) {
        let navBar = document.createElement("li");
        navBar.className = "menu__link";
        navBar.innerHTML = `<a href="#${sectionItem.id}">${sectionItem.dataset.nav}</a>`;

        navBar.onclick = scrollTO(sectionItem.id);

        document.getElementById("navbar__list").appendChild(navBar);
    }
};

// Add class 'active' to section when near top of viewport
function toggleActive() {
    for (let item of sectionItems) {
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
        let linkNav = a.href;
        document.getElementById(linkNav).scrollIntoView();
        toggleActive();
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
window.onscroll = toggleActive;

