import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const ValuesContext = createContext();

const ValuesProvider = (props) => {

    const [values, setvalues] = useState({
        Global:{}
    });


    useEffect(() => {

        const getValues = async () => {

            const url = 'https://api.covid19api.com/summary';
            
            try {
                const response = await axios.get(url, { 
                    params:{},
                    headers: {
                        "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"
                    }
                });
                setvalues(response.data);
            } catch (error) {
                console.log("error");
            }
        }

        getValues();
        
    }, [])

    return (  
        <ValuesContext.Provider
            value={{values}}
        >
            {props.children}
        </ValuesContext.Provider>
    );
}
 
export default ValuesProvider;