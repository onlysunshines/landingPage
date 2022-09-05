
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

const sectionElements = document.getElementsByTagName("section");

/*
 * Begin Main Functions
*/

// build the nav

function buildNav() {
    for (let sectionElement of sectionElements) {
        let navbarElement = document.createElement("li");
        navbarElement.className = "menu__link";
        navbarElement.innerHTML = `<a href="#${sectionElement.id}">${sectionElement.dataset.nav}</a>`;
        
// eventListener tied to navbarElement that hold each section elements id to smooth scroll to
        
        navbarElement.addEventListener("click", function(event) {
            event.preventDefault();
            sectionElement.scrollIntoView({behavior: "smooth"});
        });

// highlights the navElement that corresponds with the sectionElement in view

        if(isInViewport(navbarElement) && (isInViewport(sectionElement))) {
            navbarElement.className = "menu__link__active";
        } else {
            navbarElement.className = "menu__link";
        };

        navbarElement.addEventListener("scroll", function() {
            if(isInViewport(navbarElement) && (isInViewport(sectionElement))) {
                navbarElement.className = "menu__link__active";
            } else {
                navbarElement.className = "menu__link";
            };
        })
        
        document.getElementById("navbar__list").append(navbarElement);
    }
};

// Add class 'active' to section when near top of viewport

function isInViewport(e) {
    let rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function isActive() {
    for (let sectionElement of sectionElements) {
        if (isInViewport(sectionElement)) {
            sectionElement.className = "your-active-class";
        } else {
            sectionElement.className = "";
        }
    }
};

// Scroll to anchor ID using scrollTO event

// attempting this inside the buildNav function

/**
 * End Main Functions
 * Begin Events
*/

// Build menu 

window.onload = buildNav;

// Scroll to section on link click

// this is occurring inside of the buildNav function
/*

navbar.addEventListener("click", function(e) {
            e.preventDefault();
            sectionElement.scrollIntoView({behavior: "smooth"})
        })

*/

// Set sections as active

window.onscroll = isActive;
