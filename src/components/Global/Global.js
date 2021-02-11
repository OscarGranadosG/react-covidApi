import React, { Fragment, useContext } from 'react';
import styles from './Global.module.css';
import {Card, CardContent, Typography} from '@material-ui/core';
import { ValuesContext } from "../../context/ValuesContext";



const Global = () => {

    const { values } = useContext(ValuesContext);

    const CARDS = [
        {
            id: '1',
            title: 'CONFIRMADOS',
            titleTotal: 'Total',
            total: `${Intl.NumberFormat("co-CO").format(values.Global.TotalConfirmed)}`,
            titleNew: 'Nuevos',
            new: `${Intl.NumberFormat("co-CO").format(values.Global.NewConfirmed)}`,
            style: `${styles.cardcontentConfirm}`
        },
        {
            id: '2',
            title: 'MUERTES',
            titleTotal: 'Total',
            total: `${Intl.NumberFormat("co-CO").format(values.Global.TotalDeaths)}`,
            titleNew: 'Nuevos',
            new: `${Intl.NumberFormat("co-CO").format(values.Global.NewDeaths)}`,
            style: `${styles.cardcontentDeath}`
        },
        {
            id: '3',
            title: 'RECUPERADOS',
            titleTotal: 'Total',
            total: `${Intl.NumberFormat("co-CO").format(values.Global.TotalRecovered)}`,
            titleNew: 'Nuevos',
            new: `${Intl.NumberFormat("co-CO").format(values.Global.NewRecovered)}`,
            style: `${styles.cardcontentSaved}`
        },
    ]


    return (  
        <div className= "text-center">
            {CARDS.map(card => (
                <Fragment>
                    <h2>{card.title}</h2>
                    <div className="row pb-4 pt-2">
                        <div className="col-md-6">
                            <Card variant="outlined">
                                <CardContent className={card.style}>
                                    <Typography variant="h5">   
                                        {card.titleTotal}
                                    </Typography>
                                    <Typography className="pt-2">   
                                        {card.total}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card variant="outlined">
                                <CardContent className={card.style}>
                                    <Typography variant="h5">   
                                        {card.titleNew}
                                    </Typography>
                                    <Typography className="pt-2">   
                                        {card.new}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Fragment>
            ))}  
        </div>
    );
}
 
export default Global;