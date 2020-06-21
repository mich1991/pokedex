import React from 'react'
import SinglePokemon from './SinglePokemon'
import './PokemonList.scss'
const PokemonList = (props) => {
    const { pokemonList } = props
    console.log(pokemonList);
    const list = pokemonList.map(item => <SinglePokemon key={item.name} name={item.name} />)
    return (
        <ol>
            {list}
        </ol>
    );
}

export default PokemonList;