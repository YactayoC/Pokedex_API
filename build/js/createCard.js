import { generateType, generateAbilities} from './comprobation.js';
const listPokemon = document.querySelector('.pokemon__grid');

function createCardPokemon(result) {
    // Card
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon__card');

    // Image
    const pokemonImage = document.createElement('div');

    const image = document.createElement('img');
    image.classList.add('pokemon__card-image');
    image.src = result.sprites.front_default;

    pokemonImage.appendChild(image);

    // Info
    const pokemonInfo = document.createElement('div');

    const name = document.createElement('h3');
    name.classList.add('pokemon__card-name');
    name.innerText = result.name;

    const type = document.createElement('p')
    type.classList.add('pokemon__card-description');
    type.innerHTML = generateType(result.types)

    const abilities = document.createElement('p')
    abilities.classList.add('pokemon__card-description');
    abilities.innerHTML = generateAbilities(result.abilities)

    pokemonInfo.appendChild(name);
    pokemonInfo.appendChild(type);
    pokemonInfo.appendChild(abilities);

    // Add
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonInfo);
    listPokemon.appendChild(pokemonCard);
}
export default createCardPokemon;