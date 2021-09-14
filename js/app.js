
/*-------------------- Define Global Variables --------------------*/
//get all sections
const sections = document.querySelectorAll('section');
//get ul
const navBarMenu = document.getElementById('navbar__list');

/*------------------------  Build the nav ------------------------*/
(function() {
    // create off-screen document
   const fragment = document.createDocumentFragment();
   //looping through all sections(NodeList)
   for(let i = 1; i <= sections.length; i++){
       //create the list item => li
       const listItem = document.createElement('li');
        //create the list link => a
       const listLink = document.createElement('a');
        //set attributes to list link [class, href] and it's content
        listLink.setAttribute('class','menu__link');
        listLink.setAttribute('href',`#section${i}`);
        listLink.textContent = `Section ${i}`; 
        //append the list link => a insid the list item => li
        listItem.appendChild(listLink)
        //listItem.insertAdjacentHTML('beforeend',`<a class = "menu__link" href = "#${secID}">${secData}</a>`);
         //append the whole list items inside the fragment document
        fragment.appendChild(listItem);
   }//);
   //append the fragment document to the on-screen document inside => ul
   navBarMenu.appendChild(fragment);
})();

// Get the active section when scrolling the window
const defineActiveSec = function (){
    sections.forEach(section => {
        // Define the position of each section from the viewport
        let secPosition = section.getBoundingClientRect().top;
        //remove all the active class from all sections
        section.classList.remove('your-active-class');
        //testing for the active section
        if(secPosition >= 0 && secPosition < 100){
            //add the active class to the active section only
             section.classList.add('your-active-class');
                // Link the active link with the active section*/  
                activLink(section);
        }
    });
}
const activLink = function(section){
    // get all links 
     const links = document.querySelectorAll('.navbar__menu a');
    //looping through all links(NodeList) 
    links.forEach((link) => {
        //remove all the active class from all links
        link.classList.remove('your-active-class');
        //check if the content of link = data attribute of section
            if(link.textContent === section.getAttribute('data-nav')) {
                //add the active class on the link that corresponding to the active section only
                link.classList.add('your-active-class');
            }                              
    });
}
/*-------------------- Adding Scroll Event On the Window Object --------------------*/
// Add class 'active' to section when near top of viewport, and get the active link 
window.addEventListener('scroll', defineActiveSec);



