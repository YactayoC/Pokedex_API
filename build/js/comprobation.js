function generateType(result) {
    const typeHTML = 'Type: <span class="pokemon__card-description--span">'
    if (result.length == 1) {
        return `${typeHTML} ${result[0].type.name}</span>`
    } else if (result.length == 2) {
        return `${typeHTML} ${result[0].type.name}, ${result[1].type.name}</span>`
    } else {
        return `${typeHTML} ${result[0].type.name}, ${result[1].type.name}, ${result[2].type.name}</span>`
    }
}

function generateAbilities(result) {
    const abilitiesHTML = 'Abilitie: <span class="pokemon__card-description--span">';
    if (result.length == 1) {
        return `${abilitiesHTML} ${result[0].ability.name}</span>`
    } else if (result.length == 2) {
        return `${abilitiesHTML} ${result[0].ability.name}, ${result[1].ability.name}</span>`
    } else {
        return `${abilitiesHTML} ${result[0].ability.name}, ${result[1].ability.name}, ${result[2].ability.name}</span>`
    }
}

export { generateType, generateAbilities }

