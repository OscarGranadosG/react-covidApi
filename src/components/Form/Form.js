import React, {useState} from 'react';
import styles from './Form.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {DataCountry} from '../../actions/country';
import DateFnsUtils from "@date-io/date-fns"; 
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const Form = () => {

    const [search, setsearch] = useState({
        country: ''
    });

    const [date, setdate] = useState(Date.now());

    const {country} = search;

    const handleChange = e => {
        setsearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleDateChange = (date) => {
        setdate(date);
        //Existe error de hora, ver console
      };



    const handleSubmit = e => {
        e.preventDefault();

        if(country.trim() === '' || date.trim() === '') {
            return;
        }

        DataCountry(country);
    }

    return (  
        <form 
            className={`${styles.fondo}`}
            onSubmit={handleSubmit}        
        >
        <div className="row "> 
            <div className= "col-12 col-sm-12 col-md-6 mt-2">
                <TextField 
                    required 
                    id="country"
                    name="country"
                    label="Escribe el nombre del pais" 
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
                        disableToolbar
                        variant="inline"
                        className={styles.date}  
                        format="MM/dd/yyyy"
                        label="Fecha inicial"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div className= {`${styles.inputDate} col-6 col-sm-6 col-md-3 mt-2 row`}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        className={styles.date}  
                        format="MM/dd/yyyy"
                        label="Fecha final"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleDateChange}
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