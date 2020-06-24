import React from 'react'
import PokemonStat from './PokemonStat'

const PokemonStats = (props) => {
    const { height, weight, stats } = props.pokemon
    // console.log(stats);

    const statsList = stats.map(stat => <PokemonStat key={stat.stat.name} title={stat.stat.name} amount={stat.base_stat} />)
    return (
        <div>
            {statsList}
            <p>height: {height}</p>
            <p>weight: {weight}</p>
        </div>
    );
}

export default PokemonStats;