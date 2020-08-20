const menuBtn = document.querySelector('.menu-btn');
/*const menuBtnWrapper = document.querySelector('.menu-btn-wrapper');*/
const overlayNav = document.getElementById('overlay-nav');
const logoContainer = document.querySelector('.logo-container');
const main_container = document.querySelector('.main');

const homeNav = document.getElementsByClassName('home-nav');
const projectsNav = document.getElementsByClassName('projects-nav');
const aboutNav = document.getElementsByClassName('about-nav');
const contactNav = document.getElementsByClassName('contact-nav');

let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen) {
        /*menuBtnWrapper.classList.add('menu-active');*/
        logoContainer.classList.add('menu-active-logo');
        menuBtn.classList.add('open');
        overlayNav.style.height = "100%";
        menuOpen = true;
    }
    else {
        /*menuBtnWrapper.classList.remove('menu-active');*/
        logoContainer.classList.remove('menu-active-logo');
        menuBtn.classList.remove('open');
        overlayNav.style.height = "0";
        menuOpen = false;
    }
});

for(var i=0; i<homeNav.length; i++) {
    projectsNav[i].addEventListener('click', () => {
        logoContainer.classList.remove('menu-active-logo');
        menuBtn.classList.remove('open');
        overlayNav.style.height = "0";
        menuOpen = false;
    });

    contactNav[i].addEventListener('click', () => {
        logoContainer.classList.remove('menu-active-logo');
        menuBtn.classList.remove('open');
        overlayNav.style.height = "0";
        menuOpen = false;
    });

}