import React  from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Global from './components/Global/Global';
import ValuesProvider from './context/ValuesContext'

function App() {

    return (
        <ValuesProvider>
            <Header
                tittle ={"Coronavirus Data"}
            />
            <Form />
                <div className="mt-5 col-12">
                    <div className="row">
                        <div className="col-md-6">
                            <Global />
                        </div>
                        <div className="col-md-6">
                            <h2>Data</h2>     
                        </div>
                    </div>
                </div>
        </ValuesProvider>      
    );
}

export default App;
