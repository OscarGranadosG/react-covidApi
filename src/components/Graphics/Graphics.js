import React, {useContext} from 'react';
import { Pie } from 'react-chartjs-2';
import { ValuesContext } from "../../context/ValuesContext";

const Graphics = () => {

    const { valueTotal } = useContext(ValuesContext);

    return (  
           <Pie 
                data={{
                    labels: ['CONFIRMADOS', 'MUERTES', 'RECUPERADOS'],
                    datasets : [
                        {
                            label: 'Casos totales',
                            data: [valueTotal.Global.TotalConfirmed, valueTotal.Global.TotalDeaths, valueTotal.Global.TotalRecovered],
                            backgroundColor: [
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(75, 192, 192, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 3
                        }
                    ]
                }}
                height={450}
                width={660}    
           />         
    );
}
 
export default Graphics;