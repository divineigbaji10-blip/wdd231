const membersUrl = "data/members.json";
async function getSpotlights() {
    const response = await fetch(membersUrl);
    const members = await response.json();

    const eligibleMembers = members.filter(member => member.membership !== 1);
    const selectedMembers = [];
    while(selectedMembers.length < 3){
        const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
        const member = eligibleMembers[randomIndex];
        selectedMembers.push(member);
        eligibleMembers.splice(randomIndex, 1);
    }
    const spotlightContainer = document.querySelector("#spotlight-container");
    selectedMembers.forEach(member => {
        const card = document.createElement("article")
        card.classList.add("spotlight-card");

        const name = document.createElement("h3");
        name.textContent = member.name;

        const tagline = document.createElement("p");
        tagline.textContent = member.tagline;

        const address = document.createElement("p");
        address.textContent = member.address;

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";

        const image = document.createElement("img");
        image.src = `images/${member.image}`;
        image.alt = `${member.name} logo`;

        const membership = document.createElement("p");
        membership.textContent = member.membership === 3 ? "Gold member" : "Silver Memeber";

        card.append(image, name, tagline, address, website, membership);
        spotlightContainer.appendChild(card);
    })
}
getSpotlights();   