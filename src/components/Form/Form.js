import React, {useContext, useState} from 'react';

import styles from './Form.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import DateFnsUtils from "@date-io/date-fns"; 
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from 'moment';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {DataCountryContext} from '../../context/DataCountryContext';

const Form = ( {setCountry, setSubmitForm} ) => {

    //States
    const [search, setsearch] = useState({
        country: '',
        dateInitial: moment().subtract(2, 'days').format(),
        dateFinal: moment().subtract(1, 'days').format()
    });

    const {country, dateInitial, dateFinal} = search;

    const {setdataform, setconsult} = useContext(DataCountryContext);

    //Inputs Form
    const handleChange = e => {
        setsearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleChangeDateInitial = (dateInitial) => {
        setsearch({
            ...search,
            dateInitial: moment(dateInitial).format()
        })
    }

    const handleChangeDateFinal = (dateFinal) => {
        setsearch({
            ...search,
            dateFinal: moment(dateFinal).format()
        })
    }

    //submit form 
    const handleSubmit = e => {
        e.preventDefault();

        if(country.trim() === '' || dateInitial.trim() === '' || dateFinal.trim() === '') {
            return;
        }

        if(dateInitial > dateFinal || moment(dateInitial).format("YYYY-MM-DD") === moment(dateFinal).format("YYYY-MM-DD") ) {
            toast.error("La fecha inicial no puede ser igual o mayor a fecha final");
            return;
        }

        setCountry(country);
        axiosDataCountry(country, dateInitial, dateFinal);  
        setSubmitForm(true);
    }

    //api request
    const axiosDataCountry = async (country, dateInitial, dateFinal) => {

        try {
            setdataform(search);
            setconsult(true);
        } catch (error) {
        }
    }


    return (  
        <form 
            className={`${styles.fondo}`}
            onSubmit={handleSubmit}        
        >
        <ToastContainer />
        <div className="row "> 
            <div className= "col-12 col-sm-12 col-md-6 mt-2">
                <TextField 
                    required 
                    id="country"
                    name="country"
                    label="Escribe el nombre o dominio del pais" 
                    variant="filled"
                    size="small"
                    color="primary"
                    onChange={handleChange} 
                    className={styles.input}  
                    InputProps = {{
                        endAdornment:
                        (
                            <IconButton 
                                type="submit"  
                                className={styles.iconButton} 
                                aria-label="search" 
                                color="primary">
                                <SearchIcon />
                            </IconButton> 
                        ) 
                    }} 
                />  
            </div>
            <div className= {`${styles.inputDate} col-6 col-sm-6 col-md-3 mt-2 row`}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        required
                        className={styles.date}  
                        format="yyyy-MM-dd"
                        label="Fecha inicial"
                        name="dateInitial"
                        value={dateInitial}
                        onChange={handleChangeDateInitial}
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div className= {`${styles.inputDate} col-6 col-sm-6 col-md-3 mt-2 row`}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        required
                        className={styles.date}  
                        format="yyyy-MM-dd"
                        label="Fecha final"
                        name="dateFinal"
                        value={dateFinal}
                        onChange={handleChangeDateFinal}
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
        </div>
            
        </form>
    );
}
 
export default Form;