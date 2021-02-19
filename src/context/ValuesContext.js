import React, { createContext, useState, useEffect } from 'react';
import {summaryGlobal} from '../actions/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ValuesContext = createContext();

const ValuesProvider = (props) => {

    const [valueTotal, setvalues] = useState({
        Global:{
            Date: '',
            NewConfirmed: '',
            NewDeaths: '',
            NewRecovered: '',
            TotalConfirmed: '',
            TotalDeaths: '',
            TotalRecovered: ''
        }
    });


    useEffect(() => {

        const getValues = async () => {
            
            try {
                const req = await summaryGlobal();
                setvalues(req.data);
            } catch (error) {
                toast.error("Upss!! \n Recarga la pagina en unos instantes")
            }
        }
        getValues(); 

    }, [])

    return (  
        <ValuesContext.Provider
            value={{valueTotal}}
        >
            {props.children}
        </ValuesContext.Provider>
    );
}
 
export default ValuesProvider;