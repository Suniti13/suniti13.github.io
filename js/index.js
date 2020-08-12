const menuBtn = document.querySelector('.menu-btn');
const menuBtnWrapper = document.querySelector('.menu-btn-wrapper');
const overlayNav = document.getElementById('overlay-nav');

let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen) {
        menuBtnWrapper.classList.add('menu-active');
        menuBtn.classList.add('open');
        overlayNav.style.height = "100%";
        menuOpen = true;
    }
    else {
        menuBtnWrapper.classList.remove('menu-active');
        menuBtn.classList.remove('open');
        overlayNav.style.height = "0";
        menuOpen = false;
    }
});