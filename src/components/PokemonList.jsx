import PokemonCard from "./PokemonCard";

function PokemonList ({pokemons}){
    return(
        <div className="pokemonGrid">
            {pokemons.map(pokemon => {
                return(
                    <PokemonCard name={pokemon.name} key={pokemon.name}/>
                )
            })}
        </div>
    )
}

export default PokemonList;
