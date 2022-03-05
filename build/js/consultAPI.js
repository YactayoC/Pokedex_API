import createCardPokemon from './createCard.js';
import getRandom from './generateRandom.js';

const listPokemon = document.querySelector('.pokemon__grid');
const divSpinner = document.createElement('div');

// Consult
async function consultAPI(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    spinner();

    try {
        const reply = await fetch(url);
        const result = await reply.json();        
        createCardPokemon(result);
        if (listPokemon.children.length == 8) {
            divSpinner.style.display = 'none';
        }
    } catch (error) {
        console.log(error);
    }
}

async function consultsAPI(quantity) {
    for (let i = 0; i < quantity; i++) {
        await consultAPI(getRandom());
    }
}



// Consult
consultsAPI(8);


function spinner() {
    divSpinner.innerHTML = `
    <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
    </div>
  `;

    listPokemon.appendChild(divSpinner);
}