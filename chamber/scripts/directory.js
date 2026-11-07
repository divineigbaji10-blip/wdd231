const jsonUrl = 'data/members.json';
const membersSection = document.querySelector('#members');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

async function getMembers() {
    try{
        const response = await fetch(jsonUrl);
        if(response.ok) {
            const data = await response.json();
            displayMembers(data);
        } else{
            console.error('Failed to fetch members.json');
            membersSection.textContent = 'Unable to load business members.'
        }
    } catch(error) {
        console.error('Error fetching data:', error);
        membersSection.textContent = 'Something went wrong while loading the directory.'
    }
}

function displayMembers(members) {
    membersSection.innerHTML = '';
    members.forEach((member) => {
        const card = document.createElement('article');
        card.classList.add('member-card');

        let membershipText = 'Member';
        if(member.membership === 2) membershipText = 'Silver Member';
        if(member.membership === 3) membershipText = 'Gold Member';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="150" height="150">
            <div class="card-info">
                <h3>${member.name}</h3>
                <p class="tagline">${member.tagline}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}">${member.website}</a>
                <p class="membership">${membershipText}</p>
            </div>
        `;
        membersSection.appendChild(card);
    });
}

gridButton.addEventListener('click', () => {
    membersSection.classList.add('grid');
    membersSection.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    membersSection.classList.add('list');
    membersSection.classList.remove('grid');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');
if(menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        if(navMenu.classList.contains('open')) {
            menuButton.textContent = '✕';
            menuButton.setAttribute('aria-label', 'Close menu');
        } else{
            menuButton.textContent = '☰'
            menuButton.setAttribute('aria-label', 'Open menu');
        }

    })
}

getMembers();