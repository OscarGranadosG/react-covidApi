import React, { createContext, useEffect, useState } from 'react';
import {dataCountryByDate} from '../actions/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DataCountryContext = createContext();

const DataCountryProvider = (props) => {

    const [dataCountry, setDataCountry] = useState({});

    const [dataform, setdataform] = useState({
        country: '',
        dateInitial: '',
        dateFinal: ''
    });

    const { country, dateInitial, dateFinal } = dataform

    const [consult, setconsult] = useState(false);

    useEffect(() => {

        if(consult) {
            const getDataCountry = async () => {

                try {
                    const req = await dataCountryByDate({country, dateInitial, dateFinal});
                    toast.success("Informacion encontrada de " + country)
                    setDataCountry(req.data);
                } catch (error) {
                    toast.error("No existe información de " + country)
                }
            }

            getDataCountry();
        }
    
    }, [dataform,country,dateInitial,dateFinal,consult])

    return (  
        <DataCountryContext.Provider
            value = {{
                setdataform,
                setconsult,
                dataCountry
            }}
        >
            {props.children}
        </DataCountryContext.Provider>    
    );
}
 
export default DataCountryProvider;