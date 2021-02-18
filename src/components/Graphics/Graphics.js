import React, { useContext } from 'react';
//import {DataCountryContext} from '../../context/DataCountryContext';
import { ValuesContext } from "../../context/ValuesContext";



const Graphics = () => {

    //const {setdataform, setconsult, dataCountry} = useContext(DataCountryContext);

    const { valueTotal } = useContext(ValuesContext);

    console.log(valueTotal)

    return (  
        <div>
           <h1>Graficas</h1>
           
            

        </div>
        
    );
}
 
export default Graphics;