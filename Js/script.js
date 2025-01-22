document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.getElementById('menu-hamburger');
    const navMenu = document.getElementById('nav-menu');

    menuHamburger.addEventListener ('click', () => {
        console.log('cliquei')
        navMenu.classList.toggle ('active');
        menuHamburger.classList.toggle ('active');
    });
});
