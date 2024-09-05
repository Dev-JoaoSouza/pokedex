const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()

    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.type = type
    pokemon.types = types

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    const pokeAbilities = pokeDetail.abilities.map((ability) => ability.ability.name)

    pokemon.abilities = pokeAbilities

    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight

    const status = pokeDetail.stats.map((status) => status.base_stat)

    pokemon.hp = status[0]
    pokemon.attack = status[1]
    pokemon.defense = status[2]
    pokemon.specialAttack = status[3]
    pokemon.specialDefense = status[4]
    pokemon.speed = status[5]

    return pokemon
}

pokeApi.getpokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getpokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}