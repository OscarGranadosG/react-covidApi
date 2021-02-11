import React, {useState} from 'react';
import styles from './Form.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Form = () => {

    const [search, setsearch] = useState({
        country: ''
    });

    const {country} = search;

    const handleChange = e => {
        setsearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(country);
    }

    return (  
        <form 
            className={`${styles.fondo}`}
            onSubmit={handleSubmit}        
        >
            <div className= "col-sm-12 col-md-6">
                <TextField 
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
        </form>
    );
}
 
export default Form;