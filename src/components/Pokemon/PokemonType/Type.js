import React, { useEffect, useState } from 'react'


const Type = (props) => {

    const [hasError, setErrors] = useState(false);
    const [type, setType] = useState({})

    async function fetchData() {
        const res = await fetch(props.typeUrl);
        res
            .json()
            .then(res => setType(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData()
    }, [])

    const testing = type.damage_relations

    const answer = function () {
        if (typeof testing === 'object') {
            let output = ''
            for (const key in testing) {
                if (testing.hasOwnProperty(key)) {
                    const element = testing[key];
                    let combineElements = ''
                    for (const secKey in element) {
                        combineElements += `${element[secKey].name} `

                    }
                    // console.log(key, combineElements);
                    const dmgRelation = `
                    ${key} :
                    ${combineElements}
                    `
                    // console.log(dmgRelation);
                    // return dmgRelation
                    output = output + dmgRelation
                    // console.log(output);
                    // return output
                }
                // console.log(output);
            }
            return output
        }
    }

    console.log(answer());
    return (
        <>
            <h4>{props.typeName.toUpperCase()} </h4>
            <p>{answer()}</p>
        </>
    );
}

export default Type;