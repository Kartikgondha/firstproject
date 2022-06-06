import React, { Component } from 'react';
import CityClass from './CityClass';

class ClassBase extends Component {
    constructor(props){
        super(props);

        this.state ={
            countryName: 'india'
        }
    }

    changeCountry = ()=>{
        this.setState({
            countryName: 'US'
        })
    }
    render() {
        
        return (
            <div>
               <h1>Country Class Base Component</h1> 
               <p>{this.state.countryName}</p>
               <button onClick={() => this.changeCountry()}>Change Country</button>
               <CityClass id="101" Country_Name={this.state.countryName === 'india' ? "tajmahal" : "statue of libertry"} />
            </div>
        )
    }
} 

export default ClassBase;