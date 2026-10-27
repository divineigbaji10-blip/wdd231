const navbutton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navLinks.classList.toggle('show');
});
