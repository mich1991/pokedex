import React from 'react'

const SinglePokemon = (props) => {
    return (
        <li><a href='/' data-url={props.url} onClick={props.click}>{props.name}</a></li>
    );
}

export default SinglePokemon;