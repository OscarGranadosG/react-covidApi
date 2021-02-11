import React from 'react';
import styles from './Header.module.css';

const Header = ({tittle}) => {
    return (
        <div className={`${styles.fondo} `}>
            <h2 className={`${styles.tittle} text-center`}>{tittle}</h2>
        </div>
        

    );
}
 
export default Header;