import React from 'react'
import PokemonStat from './PokemonStat'
import './PokemonStats.scss'
const PokemonStats = (props) => {
    const { height, weight, stats } = props.pokemon
    // console.log(stats);

    const statsList = stats.map(stat => <PokemonStat key={stat.stat.name} title={stat.stat.name} amount={stat.base_stat} />)
    return (
        <div className='capitalized'>
            {statsList}
            <p>height: {height}</p>
            <p>weight: {weight}</p>
        </div>
    );
}

export default PokemonStats;