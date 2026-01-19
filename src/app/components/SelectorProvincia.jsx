'use client';
import React,  {Component} from "react";
export default class SelectorProvincia extends Component{
    
    render(){
        const handleSelectChange = (event) => {
            console.log(`Provincia seleccionada: ${event.target.value}`);
            onProvinciaChange(event.target.value);
        };
        
        return (
            <div>
                <form>
                <select name="provincias" id="provincia" onChange= {this.handleSelectChange}>
                    <option value="Ávila">Ávila</option>
                    <option value="Burgos">Burgos</option>
                    <option value="León">León</option>
                    <option value="Palencia">Palencia</option>
                    <option value="Salamanca">Salamanca</option>
                    <option value="Segovia">Segovia</option>
                    <option value="Soria">Soria</option>
                    <option value="Valladolid">Valladolid</option>
                    <option value="Zamora">Zamora</option>
                </select>
                </form>
                
            </div>
        );
    }
}