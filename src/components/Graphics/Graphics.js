import React, { useContext, useState,useEffect } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { ValuesContext } from "../../context/ValuesContext";
import { DataCountryContext } from "../../context/DataCountryContext";
import moment from 'moment';

const Graphics = ({submitForm}) => {

    const { valueTotal } = useContext(ValuesContext);
    const { dataCountry } = useContext(DataCountryContext);
    const [ dataGraph, setdataGraph ] = useState(false);
    const [ countryDate, setcountryDate ] = useState({});
    const [ countryConfirmed, setcountryConfirmed ] = useState({});
    const [ countryDeath, setcountryDeath ] = useState({});
    const [ countryRecovered, setcountryRecovered ] = useState({});

    useEffect(() => {

        if(submitForm) {

            setdataGraph(true)

            const arrayDate = () => {
                var dateArray = [];

                Object.values(dataCountry).map(data=>{
                    dateArray.push(moment(data.Date).format('MMM DD YY'));
                    return dateArray
                });
                return dateArray;
            }

            const arrayConfirmed = () => {
                var confirmedArray = [];

                Object.values(dataCountry).map(data=>{
                    confirmedArray.push(data.Confirmed);
                    return confirmedArray;
                });
                return confirmedArray;
            }

            const arrayDeath = () => {
                var deathArray = [];

                Object.values(dataCountry).map(data=>{
                    deathArray.push(data.Deaths);
                    return deathArray;
                });
                return deathArray;
            }

            const arrayRecovered = () => {
                var recoveredArray = [];

                Object.values(dataCountry).map(data=>{
                    recoveredArray.push(data.Recovered);
                    return recoveredArray;
                });
                return recoveredArray;
            }

            setcountryDate(arrayDate());
            setcountryConfirmed(arrayConfirmed());
            setcountryDeath(arrayDeath());
            setcountryRecovered(arrayRecovered());
        }

    }, [submitForm,dataCountry])


    return (
        
        <div>
        {
            (dataGraph)
            ? (
                <Line 
                    data={{
                        labels: countryDate,
                        datasets : [
                            {
                                label: ['CONFIRMADOS'],
                                data: countryConfirmed,
                                borderColor: 'orange',
                                backgroundColor: 'transparent',
                            },
                            {
                                label: ['MUERTES'],
                                data: countryDeath,
                                borderColor: 'red',
                                backgroundColor: 'transparent',
                            },
                            {
                                label: ['RECUPERADOS'],
                                data: countryRecovered,
                                borderColor: 'green',
                                backgroundColor: 'transparent',
                            }
                        ]
                    }}
                    height={450}
                    width={660}    
                />             
            )
            : (
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
            )
        }

            
        </div>
                   
    );
}
 
export default Graphics;