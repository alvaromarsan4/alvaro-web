import React, {Component} from "react";
import NavBar from '@/app/components/NavBar';
export default class EncabezadoH2 extends Component{
    render(){
        return (
            // Lo que tenga la cabecera
            <h2 className="text-2xl font-bold mb-4">
                Área de Usuario. Bienvenido{this.props.nombre}.
            </h2>
        );
    }
}