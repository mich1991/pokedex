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
    }, [props.url])

    // Finding english description in database
    let description = ''
    let index = -1
    if (typeof spiecies !== 'undefined') {
        index = spiecies.flavor_text_entries.findIndex(index => index.language.name === "en");
        description = spiecies.flavor_text_entries[index].flavor_text
    }


    return (
        <p> <i> {hasError ? <p>error: something went wrong</p> : description} </i> </p>
    );
}

export default Description;