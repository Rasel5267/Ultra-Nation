import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,flag,capital,population,region} = props.country;
    const addCountryHandler = props.addBtnHandler;
    return (
        <div className="country">
            <h1>Country: {name}</h1>
            <h4>Region: {region}</h4>
            <img src={flag} alt="country-flag"/>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <button onClick={() =>addCountryHandler(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;