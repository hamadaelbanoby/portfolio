/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll("section"));
const menu = document.getElementById("navbar__list"); 

// Go to top btn 

const toTop = document.getElementById("to-top");

// Hide header for scroll

const header = document.querySelector(".page__header");

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling

toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation

//window.onscroll = () =>  window.scrollY > 500 ? toTop.style.opacity = 1 : toTop.style.opacity = 0;

/**
 * End Global Variables
*/

// Create List Item for menu navbar 
function createListItem() {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        // Create item for ech one
        listItem = document.createElement('li');
        // Add the txt item
        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;
        //Add List Item In The Menu
        menu.appendChild(listItem);
		
		
    }
}
// build the nav
createListItem();
// End Create List Item for menu navbar 

// Add class 'active' to section when near top of viewport
//window.onscroll  = function() {
//    document.querySelectorAll('section').forEach(function (active) {
//        
//        if (
//            active.getBoundingClientRect().top >= 0 &&
//            active.getBoundingClientRect().top <= 410
//        ) {
//            active.classList.add('your-active-class');
//        } else {
//            active.classList.remove('your-active-class');
//        }
//    });
//};
// End Add class 'active' to section when near top of viewport

// Set sections as active
window.addEventListener("scroll", listLinkActive);
function listLinkActive(){
  sections.forEach(section =>{
  const sectionTop = section.getBoundingClientRect().top;
 const link = document.querySelector(`a[href="#${section.id}"]`);
  if(sectionTop >= 0 && sectionTop <= 410){
    link.classList.add("active-link");
	section.classList.add('your-active-class');
 }else{
    link.classList.remove("active-link");
	section.classList.remove('your-active-class');
 }
});
}
// End sections as active

// Hide header for scroll (display : none)

window.addEventListener('scroll', () =>{
	const scrollable = document.documentElement.scrollHeight - window.innerHeight;
	const scrolled = window.scrollY ;
	if ((scrolled) >= 2000 && scrollable) {
		header.style.display = "none";
		
	}
	else {
		header.style.display = "block";
		header.style.behavior = "smooth";
	}
})


//let isScrolling;
//document.onscroll = () => {
//  header.style.display = "block"
//  clearTimeout(isScrolling)
//   isScrolling = setTimeout(() => {
//    header.style.display = "none";
//  }, 4000);
//
//  window.scrollY > 800
//    ? (toTop.style.display = "block")
//    : (toTop.style.display = "none");
//};
// End hide header

