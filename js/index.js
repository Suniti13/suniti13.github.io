const menuBtn = document.querySelector('.menu-btn');
/*const menuBtnWrapper = document.querySelector('.menu-btn-wrapper');*/
const overlayNav = document.getElementById('overlay-nav');
const logoContainer = document.querySelector('.logo-container')

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