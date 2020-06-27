import React, { useState, useEffect } from 'react'

const Description = (props) => {

    const [hasError, setErrors] = useState(false);
    const [spiecies, setSpecies] = useState()

    async function fetchData() {
        const res = await fetch(props.url);
        res
            .json()
            .then(res => setSpecies(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData()
        // console.log('updated', props.url);
    }, [props.url])

    let description = ''
    if (typeof spiecies !== 'undefined') {
        description = spiecies.flavor_text_entries[0].flavor_text
    }


    return (
        <p> {description}</p>
    );
}

export default Description;