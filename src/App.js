import React, { useState } from 'react';

//Components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import Graphics from './components/Graphics/Graphics';

//Context
import ValuesProvider from './context/ValuesContext';
import DataCountryProvider from './context/DataCountryContext'


function App() {

    //Pais del form
    const [country, setCountry] = useState('');

    //Valida si se envia data al form para buscar pais en el summary}
    const [submitForm, setSubmitForm] = useState(false);

    return (
        <ValuesProvider>
            <Header
                tittle ={"COVID-19"}
            />
            <DataCountryProvider>
                <Form 
                    setCountry = {setCountry}
                    setSubmitForm = {setSubmitForm}
                />
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="col-md-6">
                                <Cards 
                                    country = {country}
                                    submitForm = {submitForm}
                                />
                            </div>
                            <div className="col-md-6">
                                <Graphics />     
                            </div>
                        </div>
                    </div>
            </DataCountryProvider>     
        </ValuesProvider>      
    );
}

export default App;


