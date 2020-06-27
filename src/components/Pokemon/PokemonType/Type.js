import React, { useEffect, useState } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'

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

    const dmgRel = type.damage_relations

    const answer = function () {
        if (typeof dmgRel === 'object') {
            let output = []
            for (const key in dmgRel) {
                if (dmgRel.hasOwnProperty(key)) {
                    const element = dmgRel[key];
                    let combineElements = ''
                    for (const secKey in element) {
                        combineElements += `${element[secKey].name} `

                    }
                    // console.log(key, combineElements);
                    const dmgRelationName = key.replace(/_/g, ' ')

                    // console.log(key.replace(/_/g, ' '));

                    output.push({ dmgRelationName, combineElements })

                }
            }
            return output
        }
    }
    let damageRelation = answer()

    return (

        <Col sm={6} md={6} lg={12}>
            {hasError ? <p>Error: something went wrong </p> : null}
            <h4 className='text-center mt-2 bg-dark text-danger'>{props.typeName.toUpperCase()} </h4>
            {damageRelation ? damageRelation.map(ar => ar.combineElements.length > 0 ?
                <div className='capitalized' key={ar.dmgRelationName}><Badge variant='primary'>{ar.dmgRelationName.toUpperCase()} :</Badge> <br /> {ar.combineElements}</div> : null) : null}
        </Col>

    );
}

export default Type;