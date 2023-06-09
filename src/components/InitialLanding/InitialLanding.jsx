import React from 'react';

import FlickerParticle from '../FlickerParticle/FlickerParticle';

import { TypeAnimation } from 'react-type-animation';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Image
import personalImage from '../../assets/images/profile-image.jpg';

// styles
import styles from "./InitialLanding.module.css";
import { Link } from 'react-router-dom';

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
                        <p>

                        </p>
                    </div>
                </div>
                <div className={`${styles.contentArea}`}>
                    <div className={`${styles.contentBody}`}>
                        <div className={`${styles.greetingText}`}>
                            Hi, My name is <br />
                            <span className={`${styles.GreetingName}`}> K M Safwan Hassan</span>
                        </div>
                        <div>
                            <TypeAnimation
                                sequence={[
                                   // Same String at the start will only be typed once, initially
                                    'I am Designer.',
                                    1000,
                                    'I am Developer.',
                                    1000,
                                    'I love Coding.',
                                    1000,
                                    'I love Gaming.',
                                    1000,
                                    'I am passionate Thinker.',
                                    1000,
                                    'I am interested in Renovation Technology.',
                                    1000,
                                    'I care for Environment.',
                                    1000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                className={`${styles.textAnimation}`}
                            />
                        </div>
                    </div>
                    <div className={`${styles.socialIconArea}`}>
                        <a 
                            href="https://www.linkedin.com/in/safwanhassan/"
                            target="_blank"
                            rel="noreferrer"
                            className={`${styles.linkedinLink}`}
                        >
                            <FontAwesomeIcon icon={faLinkedin} className={`${styles.linkedinIcon}`} />
                        </a>
                        <a 
                            href="https://github.com/SafwanELLipSE/"
                            target="_blank"
                            rel="noreferrer"
                            className={`${styles.githubLink}`}
                        >
                            <FontAwesomeIcon icon={faGithub} className={`${styles.githubIcon}`} />
                        </a>
                    </div>
                    <div className={`${styles.buttonArea}`}>
                        <Link to="/resume" className={`${styles.buttonResume}`}> Resume </Link>
                        <Link to="/portfolio" className={`${styles.buttonPortfolio}`}> Portfolio </Link>
                    </div>
                </div>
            </div>
            <div className={`${styles.bottomBackground}`}></div>
        </div>
    );
}

export default InitialLanding;
