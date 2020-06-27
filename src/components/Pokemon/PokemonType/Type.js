import React, { useEffect, useState } from 'react'
import { Badge, Col } from 'react-bootstrap'

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
        if (typeof type.damage_relations === 'object') {
            let output = []
            for (const key in testing) {
                if (testing.hasOwnProperty(key)) {
                    const element = testing[key];
                    let combineElements = ''
                    for (const secKey in element) {
                        combineElements += `${element[secKey].name} `

                    }
                    // console.log(key, combineElements);
                    const dmgRelationName = key.replace(/_/g, ' ')

                    console.log(key.replace(/_/g, ' '));

                    output.push({ dmgRelationName, combineElements })

                }
            }
            return output
        }
    }
    let damageRelation = answer()

    return (
        <Col>
            <h4>{props.typeName.toUpperCase()} </h4>
            {damageRelation ? damageRelation.map(ar => ar.combineElements.length > 0 ? <p><Badge variant='primary'>{ar.dmgRelationName.toUpperCase()}</Badge> : <br /> <Badge pill variant='warning'>{ar.combineElements} </Badge></p> : null) : null}
        </Col>
    );
}

export default Type;