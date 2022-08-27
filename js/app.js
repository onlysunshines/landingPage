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


/*
let buildNav = () => {
    sectionElements.forEach(section => {
        let navbar = document.createElement('li');
        navbar.className = 'menu__link';
        navbar.innerHTML = `<a href='#${sectionElement.id}'>${sectionElements.dataset.nav}</a>`;
    });
    navbar.onclick = scrollTo(sectionElement.id);

    document.getElementById('navbar__list').append(navbar);
}
*/

/*
sectionElements.forEach(section => {
    let navbar = document.createElement('li');
    navbar.className = 'menu__link';
    navbar.innerHTML = `<a href='#${sectionElement.id}'>${sectionElements.dataset.nav}</a>`;
    
    navbar.onclick = scrollTO(sectionElement.id);

    document.getElementById('navbar__list').append(navbar);
});
*/

// Add class 'active' to section when near top of viewport

function isActive() {
    for (let element of sectionElements) {
        if (element.getBoundingClientRect().top < 100) {
            element.className = "your-active-class";
        } else {
            element.className = "";
        }
    }
}

/*
let isActive = () => {
    sectionElements.forEach(section => {
        if (section.getBoundingClientRect().top < 100) {
            section.className = 'your-active-class';
        } else {
            section.className = '';
        }
    })
};
*/

/*
sectionElements.forEach(section => {
    if (section.getBoundingClientRect().top < 100) {
        section.className = 'your-active-class';
    } else {
        section.className = '';
    }
});
*/


// Scroll to anchor ID using scrollTO event
function scrollTO(e) {
    if (e && e.nodeName === "li") {
        let a = e.getElementsByTagName("a");
        let navElement = a.href;
        document.getElementById(navElement).scrollIntoView();
        // calling the is active function here
        isActive();
    }
}

/*
let scrollTO = (e) => {
    if (e && e.nodName === 'li') {
        let a = e.getElementsByTagName('a');
        let navElement = a.href;
        document.getElementById(navElement).scrollIntoView();
        // active function called here
        isActive;
    }
}
*/

/**
 * End Main Functions
 * Begin Events
*/

// Build menu 

window.onload = buildNav;

// Scroll to section on link click

// the navbar has the 'li' elements and is tying the eventlistener with the onclick event in buildNav
// navbar.onclick = scrollTO(sectionElement.id);

//document.getElementsByTagName('li').addEventListener('click', scrollTO);

// Set sections as active

window.onscroll = isActive;

