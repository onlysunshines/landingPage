
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

//const clickLi = document.getElementsByTagName('li');


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
        
        navbar.addEventListener('click', scrollTO(sectionElement.id));
        navbar.onclick = isActive(sectionElement.id);

        document.getElementById('navbar__list').append(navbar);
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

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isActive() {
    for (let sectionElement of sectionElements) {
        if (isInViewport(sectionElement)) {
            sectionElement.className = 'your-active-class';
        } else {
            sectionElement.className = '';
        }
    }
}

/*

for (let sectionElement of sectionElements) {
        if (sectionElement.getBoundingClientRect().top < 100 ) {
            sectionElement.className = 'your-active-class';
        } else {
            sectionElement.classList.remove('your-active-class');
        }
    }
    
    for (let sectionElement of sectionElements) {
        if (sectionElement.className === 'your-active-class') {
            console.log('my work here is done');
        } else {
            sectionElement.classList.remove('your-active-class');
        }
    };

function isInViewport() {

    for (let sectionElement of sectionElements) {
        let distance = sectionElement.getBoundingClientRec();
        if (distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= (window.innerWidth || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                sectionElement.className = 'your-active-class';
            } else {
                sectionElement.className = '';
            }
            
    }

};


let isInViewport = function (e) {
    let distance = e.getBoundingClientRec();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerWidth || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

sections.forEach(section => {
  section.addEventListener('click', () => {

    // I loop again to remove the 'section--active' from all others sections
    // To avoid confusion, I use 'el' as a name for each section in sections
    sections.forEach(el => el.classList.remove('section--active'))

    // Then I add the 'section--active' to the clicked element
    section.classList.add('section--active')
  })
})

function removeClass() {
    let activeElements = document.getElementsByClassName('your-active-class')
    for (element of activeElements) {
       if (element !== sectionElements.getBoundingClientRect().top < 100){
        sectionElements.className = 'your-active-class';
       } else {
        sectionElements.classList.remove('your-active-class')
    }
 }
}


let myElement = document.getElementById('my-element');
let bounding = myElement.getBoundingClientRect();

function elementInViewport() {

    let bounding = myElement.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        console.log('Element is in the viewport!');
    } else {

        console.log('Element is NOT in the viewport!');
    }
}


let myElement = document.getElementById('my-element');
let bounding = myElement.getBoundingClientRect();

if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

    console.log('Element is in the viewport!');
} else {

    console.log('Element is NOT in the viewport!');
}



function isActive() {
        let a = sectionElements;
        for (let i = 0, length = a.length; i < length; i++) {
            a[i].onclick = function() {
                let b = document.querySelector('.your-active-class li');
                if (b) b.classList.remove('your-active-class');
                this.parentNode.classList.add('your-active-class');
              };
        }
    }


*/

/*
function isActive() {
    clickLi.forEach(clickLi => {
        clickLi.addEventListener('click', function() {
            clickLi.forEach(li.classList.remove('your-active-class'));
            this.classList.add('your-active-class')
        })
    })
}
*/

/*
function isActive() {

    for (let i = 0; i < clickLi.length; i++) {
        clickLi[i].addEventListener('click', function() {
            let current = document.getElementsByClassName('your-active-class');
            current[0].className = current[0].className.replace('your-active-class', '');
            this.className += 'your-active-class';
        });
    }

}
*/

/*

function isActive() {

    for (let sectionElement of sectionElements) {
            if (sectionElement.getBoundingClientRect().top < 100) {
                sectionElement.className = "your-active-class";
            } else {
                sectionElement.className = "";
            }
        }
}

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
    if (e && e.nodeName === 'li') {
        let a = e.getElementsByTagName('a');
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


/*
clickLi.addEventListener('click', function() {
    console.log('this has been clicked')
});
*/
// 
//navbar.onclick = scrollTO(sectionElement.id);
// document.getElementsByTagName("li").addEventListener("click", scrollTO);

// Set sections as active

window.onscroll = isActive;
