
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
        let navbar = document.createElement("li");
        navbar.className = "menu__link";
        navbar.innerHTML = `<a href="#${sectionElement.id}">${sectionElement.dataset.nav}</a>`;
        
        // adding eventListener tied to the section elements id for the scroll function
        
        navbar.addEventListener("click", function(e) {
            e.preventDefault();
            sectionElement.scrollIntoView({behavior: "smooth"});
            if(navbar.className === "menu__link") {
                navbar.className = "menu__link__active";
            } else {
                navbar.className = "menu__link";
            }
        });
        
        
        document.getElementById("navbar__list").append(navbar);
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

function clickActive() {
    let navElements = document.getElementsByTagName("li");
        for (let navElement of navElements) {
            navElement.addEventListener("click", function() {
                if(navElement.className === "menu__link") {
                    navElement.className = "menu__link__active";
                } else {
                    navElement.className = "menu__link";
                }
                
            }
        )
    }
}

function myFunction(){
    isActive();
    clickActive();
    scrollTO();
}

// Scroll to anchor ID using scrollTO event

function scrollTO(e) {
    e.preventDefault();
    document.sectionElement.id.scrollIntoView({behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
*/

// Build menu 

window.onload = buildNav;

// Scroll to section on link click


// Set sections as active

window.onscroll = isActive;
