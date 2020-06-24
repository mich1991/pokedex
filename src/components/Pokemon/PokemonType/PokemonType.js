import React from 'react'
import Type from './Type'
const PokemonType = (props) => {

    // Transform data into easier to access array.
    const { types } = props
    const arr = []
    for (let key in types) {
        let singleType = types[key].type
        arr.push(singleType)
    }
    const typeList = arr.map(type => <Type key={type.name} typeName={type.name} typeUrl={type.url} />)


    return (
        <div>
            {typeList}
        </div>
    );
}

export default PokemonType;