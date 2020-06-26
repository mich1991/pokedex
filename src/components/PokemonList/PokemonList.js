import React from 'react'
import SinglePokemon from './SinglePokemon'
import './PokemonList.scss'

const PokemonList = (props) => {
    const { pokemonList, } = props
    // Create list of all pokemons in generation.
    const list = pokemonList.map(item => <SinglePokemon click={props.click} key={item.name} name={item.name} url={item.url} />)

    return (
        <ol >
            {list}
        </ol>
    );
}

export default PokemonList;