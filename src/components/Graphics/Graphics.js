import React, { useContext, useState } from 'react';
//import {DataCountryContext} from '../../context/DataCountryContext';
import { ValuesContext } from "../../context/ValuesContext";



const Graphics = () => {

    //const {setdataform, setconsult, dataCountry} = useContext(DataCountryContext);

    const { valueTotal } = useContext(ValuesContext);

    const informacion = valueTotal.Countries;

    return (  
        <div>
           <h1>Graficas</h1>
           
            

        </div>
        
    );
}
 
export default Graphics;