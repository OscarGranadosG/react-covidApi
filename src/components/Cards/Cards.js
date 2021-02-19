import React, { useContext, Fragment, useState, useEffect } from 'react';
import styles from './Cards.module.css';
import {Card, CardContent} from '@material-ui/core';
import { ValuesContext } from "../../context/ValuesContext";

const Cards = ({ country, submitForm }) => {

    const { valueTotal } = useContext(ValuesContext);

    const countryTotal = valueTotal.Countries;

    //Estado consulta el foreach de busqueda de pais del Summary
    const [exiscountryTotal, setcountryTotal] = useState(false);

    //Valores de la busqueda de existCountry
    const [existCountry, setdataCountry] = useState({})


    useEffect(() => {

        if(submitForm) {
            const existCountry = (country) => {
                countryTotal.some(data => {
                    if( (data["Country"] === country.charAt(0).toUpperCase() + country.slice(1)) || (data["CountryCode"] === country.toUpperCase())) {
                        setdataCountry(data);
                        setcountryTotal(true);
                    }
                 })
            }
            existCountry(country)
        } 
    }, [submitForm, country, countryTotal])

    const CARDS = [
        {
            id: '1',
            title: 'CONFIRMADOS',
            titleTotal: 'Total',
            totalGlobal: `${Intl.NumberFormat("co-CO").format(valueTotal.Global.TotalConfirmed)}`,
            totalCountry: `${Intl.NumberFormat("co-CO").format(existCountry.TotalConfirmed)}`,
            titleNew: 'Nuevos',
            newGlobal: `${Intl.NumberFormat("co-CO").format(valueTotal.Global.NewConfirmed)}`,
            newCountry: `${Intl.NumberFormat("co-CO").format(existCountry.NewConfirmed)}`,
            style: `${styles.cardcontentConfirm}`
        },
        {
            id: '2',
            title: 'MUERTES',
            titleTotal: 'Total',
            totalGlobal: `${Intl.NumberFormat("co-CO").format(valueTotal.Global.TotalDeaths)}`,
            totalCountry: `${Intl.NumberFormat("co-CO").format(existCountry.TotalDeaths)}`,
            titleNew: 'Nuevos',
            newGlobal: `${Intl.NumberFormat("co-CO").format(valueTotal.Global.NewDeaths)}`,
            newCountry: `${Intl.NumberFormat("co-CO").format(existCountry.NewDeaths)}`,
            style: `${styles.cardcontentDeath}`
        },
        {
            id: '3',
            title: 'RECUPERADOS',
            titleTotal: 'Total',
            totalGlobal: `${Intl.NumberFormat("co-CO").format(valueTotal.Global.TotalRecovered)}`,
            totalCountry: `${Intl.NumberFormat("co-CO").format(existCountry.TotalRecovered)}`,
            titleNew: 'Nuevos',
            newGlobal: `${Intl.NumberFormat("co-CO").format(valueTotal.Global.NewRecovered)}`,
            newCountry: `${Intl.NumberFormat("co-CO").format(existCountry.NewRecovered)}`,
            style: `${styles.cardcontentSaved}`
        },
    ]



    return (
        <div className= "text-center">
            {CARDS.map(card => (
                <div className={`${styles.cards} row pb-2`} key={card.id}>
                    <div className="col-12 col-md-10 col-sm-10">
                        <Card variant="outlined" >
                            <CardContent className={card.style} >
                                <h4 className={styles.titleCard}>{card.title}</h4>
                                <div className={styles.content}>
                                    <Fragment >
                                        <div className="row">
                                            <div className={`${styles.title} col-4`}>Pais</div>
                                            <div className={`${styles.value} col-8`}>{ exiscountryTotal ? existCountry.Country : 'Global'} </div>
                                        </div>
                                        <div className="row">
                                            <div className={`${styles.title} col-4`}>{card.titleTotal}</div>
                                            <div className={`${styles.value} col-8`}>{ exiscountryTotal ? card.totalCountry : card.totalGlobal}</div>
                                        </div>
                                        <div className="row">
                                            <div className={`${styles.title} col-4`}>{card.titleNew}</div>
                                            <div className={`${styles.value} col-8`}>{ exiscountryTotal ? card.newCountry : card.newGlobal} </div>
                                        </div>
                                    </Fragment>
                            
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}  
        </div>
    );
}
 
export default Cards;