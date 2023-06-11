import React from 'react';

// image
import background from '../../assets/images/under-construction.png'

// styles
import styles from "./PortfolioMain.module.css";

const PortfolioMain = () => {
    return (
        <div className={`${styles.background}`}>
            <img src={background} alt="Construction" className={`${styles.backgroundImage}`}/>
        </div>
    );
}

export default PortfolioMain;
