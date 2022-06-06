import React, { useState } from 'react';
import CityFun from './CityFun';

function FunctionBase(props) {
    const [countryName, setCountryName]=useState('india');

    const changeCountry =() =>{
        setCountryName ('Us');
    }
    return (
        <div>
            <h1>Country Function Base Component</h1>
            <p>{countryName}</p>
            <button onClick={() => changeCountry()}>Change Country</button>
            <CityFun id ="105" Country_Name={countryName === 'india' ? "tajmahal" : "statue of libertry"}/>
        </div>
    );
}

export default FunctionBase;