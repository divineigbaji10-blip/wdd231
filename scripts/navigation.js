const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navMenu.classList.toggle("open");
})