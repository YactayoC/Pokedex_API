import createCardPokemon from './createCard.js';
import getRandom from './generateRandom.js';

const listPokemon = document.querySelector('.pokemon__grid');
const divSpinner = document.createElement('div');


eventQuantity();
async function consultAPI(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    spinner();
    try {
        divSpinner.style.display = 'block';
        const reply = await fetch(url);
        const result = await reply.json();
        createCardPokemon(result);
        divSpinner.style.display = 'none';

    } catch (error) {
        const message = document.createElement('h1')
        divSpinner.style.display = 'none';
        message.textContent = 'No se encontraron resultados'
        message.style = 'grid-column: 1/5; text-align: center'
        listPokemon.appendChild(message)
        setTimeout(function () {
            listPokemon.removeChild(message)
        }, 2000)
    }
}

async function consultsAPI(quantity) {
    for (let i = 0; i < quantity; i++) {
        await consultAPI(getRandom());
    }
}

// Filter
function eventQuantity() {
    const form = document.querySelector('#form');
    const search = document.querySelector('#filter-search');

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (search.trim === '' || search === '') {
            console.log('Campos vacios')
            return;
        }
        clearHTML();
        consultAPI(search.value)
        form.reset();
    })

    const quantity = document.querySelector('#filter-quantity');
    quantity.addEventListener('change', e => {
        const quantityValue = e.target.value
        clearHTML();
        if (listPokemon.children.length === quantityValue) {
            divSpinner.style.display = 'none';
        }
        consultsAPI(quantityValue);
    });
}

function clearHTML() {
    while (listPokemon.firstChild) {
        listPokemon.removeChild(listPokemon.firstChild);
    }
}


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


