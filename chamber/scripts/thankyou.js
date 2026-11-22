document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');
if(menuButton && navMenu){
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        menuButton.textContent = isOpen ? '✕' : '☰';
        menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        menuButton.setAttribute('aria-expanded', isOpen);
    });
}
const params = new URLSearchParams(window.location.search);
document.querySelector('#show-first-name').textContent = params.get('first-name');
document.querySelector('#show-last-name').textContent = params.get('last-name');
document.querySelector('#show-email').textContent = params.get('email');
document.querySelector('#show-phone').textContent = params.get('phone');
document.querySelector('#show-business').textContent = params.get('business');
const timestamp = new Date(params.get('timestamp'));
document.querySelector('#show-timestamp').textContent = isNaN(timestamp)
    ? 'Not available'
    : timestamp.toLocaleString('en-NG', {dateStyle: 'long', timeStyle: 'short'});