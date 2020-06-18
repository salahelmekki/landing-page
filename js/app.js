/**
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
 * Define Global Variables
 * 
*/

const navm=document.getElementById('navbar__list');

const section = document.querySelectorAll('section');
const secs =document.getElementsByTagName("section");
const nav_list=document.querySelector('ul');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
let inViewport = function(elemnt) {
	let bounding = elemnt.getBoundingClientRect();
	return (
		 bounding.top <= 50 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
		
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {
    for (let item of secs) {
        let li = document.createElement("li");
        li.className = "menu__item";
        li.innerHTML = `<a href="#${item.id}" class="menu__link">${item.dataset.nav}</a>`;
        navm.appendChild(li);
    }
}
buildNav();

// Add class 'active' to section when near top of viewport

	 
			
// this helper function is used to check if "section" is in the viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


