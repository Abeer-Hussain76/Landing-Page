
/*-------------------- Define Global Variables --------------------*/

const sections = document.querySelectorAll('section');
const navBarMenu = document.getElementById('navbar__list');

/*-------------------- Helper Functions --------------------*/

// create Nav Items and Links
const createItems = function () {
    // create off-screen document
    const fragment = document.createDocumentFragment();
    //looping through all sections
    sections.forEach((section) => {
        //Get the ID and Data valu of each section to add them to the created links
        let secID = section.getAttribute('id');
        let secName = section.getAttribute('data-nav');
        //create the list item => li
        const listItem = document.createElement('li');
        //append the list link => a insid the list item => li
        listItem.innerHTML = `<a class = "menu__link" href = "#${secID}">${secName}</a>`;
        //append the whole list items inside the fragment document
        fragment.appendChild(listItem); 
    });
    //append the fragment document to the on-screen document inside => ul 
     navBarMenu.appendChild(fragment);
}
// Get the active section when the scrolling the window
const secActivation = function (){
    
    sections.forEach(section => {
        // Define the position of each section from the viewport
        let secPosition = section.getBoundingClientRect().top;

        if(secPosition > 0 && secPosition <= 200){
            //testing for the active section
            if(section.classList.contains('your-active-class')){
                //remove all the active class from all sectins
                section.classList.remove('your-active-class');
            } else {
                //add the active class to the active section only
                section.classList.add('your-active-class');
                activLink(section);
            }
        }
    });
}
// Link the active link with the active section  
const activLink = function(section){
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach((link) => {
        link.classList.remove('your-active-class');
        if(link.textContent === section.getAttribute('data-nav')) {
            link.classList.add('your-active-class');
        }
                    
    });
}

// Build the nav
createItems();
/*-------------------- Adding Scroll Event On the Window Object --------------------*/
// Add class 'active' to section when near top of viewport, and get the active link 
window.addEventListener('scroll',secActivation);


