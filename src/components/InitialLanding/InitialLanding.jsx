import React from 'react';

import FlickerParticle from '../FlickerParticle/FlickerParticle';

import personalImage from '../../assets/images/profile-image.jpg';

// styles
import styles from "./InitialLanding.module.css";

const InitialLanding = () => {

    return (
        <div className={`${styles.mainBackground}`}>
            <div className={`${styles.topBackground}`}>
                <FlickerParticle />
            </div>  
            <div className={`${styles.profileCard}`}>
                <div className={`${styles.profileImageArea}`}>
                    <div className={`${styles.imageArea}`}> 
                        <img src={personalImage} alt="Personal Image" className={`${styles.image}`}/>
                    </div>
                    <div className={`${styles.nameArea}`}>
                        <h4 className={`${styles.name}`}>
                            K M Safwan Hassan
                        </h4>
                        <h5 className={`${styles.position}`}>
                            Web Developer
                        </h5>
                    </div>
                </div>
                <div className={styles.contentArea}>

                </div>
            </div>
            <div className={`${styles.bottomBackground}`}></div>
        </div>
    );
}

export default InitialLanding;
