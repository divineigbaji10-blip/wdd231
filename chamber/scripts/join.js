document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');
if(menuButton && navMenu){
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        menuButton.textContent = isOpen ? '✕' : '☰';
        menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open Menu');
        menuButton.setAttribute('aria-expanded', isOpen);
    })
}
const timestampField = document.querySelector('#timestamp');
if(timestampField){
    timestampField.value = new Date().toISOString();
}
const infoButtons = document.querySelectorAll('.info-button');
infoButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.getElementById(button.dataset.modal);
        if(modal){
            modal.showModal();
        }
    })
})
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    })
})