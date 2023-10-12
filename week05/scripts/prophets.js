const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
 }

async function displayProphets(prophets){
    const cards = document.querySelector('#cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ______________`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(portrait);

        cards.appendChild(card);
  }); 
} 

   
 getProphetData();


