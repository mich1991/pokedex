import React from 'react'

const PokemonStat = (props) => {
    return (
        <p>{props.title} : {props.amount}</p>
    );
}

export default PokemonStat;