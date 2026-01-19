'use client';
import SelectorProvincia from "@/app/components/SelectorProvincia";
import { useState, useEffect } from "react";

export default function Dashboard() {
const[provincia, setProvincia]= useState("");
  //Petición a la API de datos abiertos de la Junta de Castilla y León
   
    useEffect(() => {
    if(!provincia){
      let datos=fetch("https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/directorio-de-centros-docentes/records").then(res => res.json())
      .then(objeto => console.log(objeto));
    }
  }, [provincia]);

  return (
    <div>
        
        <SelectorProvincia onProvinciaChange={setProvincia} />
       
       <div>
        <p></p>
       </div>
        
    </div>
    
    
  );
}