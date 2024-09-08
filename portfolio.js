const navMenu = document.getElementById('menu-nav');
const navClose = document.getElementById('nav-close');
const toggler = document.getElementById('nav-toggle');
const navLink = document.querySelectorAll(".nav__link");
const skillSets = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header');

// Show the navigation menu on clicking the hamburger menu icon when it's closed
if(toggler){
    toggler.addEventListener('click', function(){
        navMenu.classList.add('show-menu')
    });
}

// Close the navigation menu on clicking the close button when it's open
if(navClose){
    navClose.addEventListener('click', function() {
        navMenu.classList.remove('show-menu');
      });
}
function linkAction(){
     navMenu.classList.remove("show-menu") 
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// Close the navigation menu when clicking anywhere on the body (except the menu itself)
document.addEventListener('click', function (event) {
    const isClickInside = navMenu.contains(event.target) || toggler.contains(event.target);

    if (!isClickInside) {
        navMenu.classList.remove('show-menu');
    }
});



// =====open skills when clicked==================
function skillsToggler(){

    let itemClass = this.parentNode.className;
    for(i =0; i < skillSets.length; i++) {
        skillSets[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach(skills =>{
    skills.addEventListener('click',skillsToggler)
})

// ============SERVICES MODAL=============================

const servicesModalViews = document.querySelector('.services__modal');
const servicesModalBtn = document.querySelector('.services__button');
const servicesModalClose = document.querySelector('.services__modal-close');

 function openModal (){
    servicesModalViews.classList.add('active')
}

function removeModal (){
    servicesModalViews.classList.remove('active')
}

// servicesModalBtn.forEach((modalBtn, index) =>{
//     modalBtn.addEventListener('click', function(){
//         modal(index);
//     });
// })

let currentIndex = 0;
function showPortfolio (index){
    const carousel = document.querySelector('.portfolio-swiper');
    const slides = carousel.children;
    const totalSlides = slides.length;


    if(index >= totalSlides){
        currentIndex = 0;
    }else if(index < 0){
        currentIndex = totalSlides - 1;
        
    }else{
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showPortfolio(currentIndex + 1);
  }
  
  // Function to go to the previous slide
  function prevSlide() {
    showPortfolio(currentIndex - 1);
  }

servicesModalBtn.addEventListener('click', openModal)
servicesModalClose.addEventListener('click', removeModal)


