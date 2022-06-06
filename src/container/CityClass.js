import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';

class CityClass extends Component {
    constructor(props) {
        super(props);
       
        this.state ={
            cityName : 'Surat'
        }
    }

    ChangeCity = ()=>{
        this.setState({
            cityName: 'Vadodara'
        })
    }
    
    render() {
        return (
            <div>
                <h1>City Class Base component</h1>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.ChangeCity()}>Change City Name</button>
                <p>{this.props.id} {this.props.Country_Name}</p>

            </div>
        );
    }
}

export default CityClass;