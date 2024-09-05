const pokemonList = document.querySelector(".pokemons");
const loadMoreButton = document.querySelector(".pagination button")
const limit = 5;
let offset = 0;
const maxRecords = 250;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number.toString().padStart(3, '0')}</span>
                <span class="name">${pokemon.name}</span>
                    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}  
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <span class="abilities">${pokemon.abilities.map((ability) => ability).join(', ')}</span>
                <span class="height">${pokemon.height}'</span>
                <span class="weight">${pokemon.weight} lbs</span>
                <span class="hp">${pokemon.hp}</span>
                <span class="attack">${pokemon.attack}</span>
                <span class="defense">${pokemon.defense}</span>
                <span class="special-attack">${pokemon.specialAttack}</span>
                <span class="special-defense">${pokemon.specialDefense}</span>
                <span class="speed">${pokemon.speed}</span>
            </li>
        `).join('');
        pokemonList.innerHTML += newHtml;
    })
}

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
})

loadPokemonItens(offset, limit);