const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-bar nav ul");

menu.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
    nav.classList.toggle("show-nav");
})

