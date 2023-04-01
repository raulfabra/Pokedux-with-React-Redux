import axios from "axios";

function getPokemons () {
    return(
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.data.results)
    .catch(err => console.log(err))
    )
}

export default getPokemons;