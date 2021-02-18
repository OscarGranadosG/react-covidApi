import React, { createContext, useEffect, useState } from 'react';
import {dataCountryByDate} from '../actions/api';

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
                    setDataCountry(req.data);
                } catch (error) {
                    console.log(error)
                }
    
            }

            getDataCountry();
        }
    
    }, [dataform])

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