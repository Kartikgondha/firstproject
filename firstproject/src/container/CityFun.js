import React, { useState } from 'react';

function CityFun(props) {
    const[CityFun, setCityName]=useState('Surat');

    const ChangeCity =() =>{
        setCityName ('vadodara');
    }
    return (
        <div>
            <h1>City Function Base Component</h1>
            <p>{CityFun}</p>
            <button onClick={()=>ChangeCity()}>Change City Name</button>
            <p>{props.id} {props.Country_Name}</p>
        </div>
    );
}

export default CityFun;