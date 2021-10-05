import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Abroad = () => {
    // state declare and data load
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('./abroad.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="row row-cols-3 mt-5">

            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Abroad;