document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector (".hamburger-menu");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a");

    hamburgerMenu.addEventListener ("click", () => {
        nav.classList.toggle ("active");

        if (nav.classList.contains("active")) {
            hamburgerMenu.classList.add("menu-active");
        } else {
            hamburgerMenu.classList.remove("menu-active");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            hamburgerMenu.classList.remove("menu-active");
        });
    })
});
