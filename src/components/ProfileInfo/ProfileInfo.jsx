import React, { useState } from 'react';
// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPerson, faCalendarDays, faIdCard, faMosque, faRing, faAt, faSquarePhone, faAddressCard, faHouse, faAddressBook, faHouseChimney, faMars, faUserTie, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faFacebookSquare, faGithub  } from '@fortawesome/free-brands-svg-icons';

// styles
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    const [open, setOpen] = useState(false);
    const mobileTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            (+44)-7868090089
        </Tooltip>
    );
    const linkedInTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            safwanhassan
        </Tooltip>
    );
    const facebookTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            safwan.rubab
        </Tooltip>
    );
    const gitHubTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            SafwanELLipSE
        </Tooltip>
    );

    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className={`text-center ${styles.cardHeaderText}`}> 
                        <FontAwesomeIcon icon={faCircleUser} className={`text-primary me-2`}/> Personal Info 
                    </h1>
                </Card.Header>
                <Card.Body>
                    <div className={`${styles.media} mb-2`}>
                        <div className={`${styles.fontAwesomeSize} fa-fw me-3`}>
                            <FontAwesomeIcon icon={faPerson} className={`text-primary`}/>
                        </div>
                        <div className={`${styles.mediaBody} text-center mt-3`}>
                            K. M. Safwan Hassan
                            <hr />
                        </div>
                    </div>
                    <div className={`${styles.media} mb-2`}>
                        <div className={`${styles.fontAwesomeSize} fa-fw me-3`}>
                            <FontAwesomeIcon icon={faCalendarDays} className={`text-primary`}/>
                        </div>
                        <div className={`${styles.mediaBody} text-center mt-3`}>
                            <time dateTime="1997-12-06">12th of February 1997</time>
                            <hr />
                        </div>
                    </div>
                    <div className={`${styles.media} mb-2`}>
                        <div className={`${styles.fontAwesomeSize} fa-fw me-3`}>
                            <FontAwesomeIcon icon={faUserTie} className={`text-primary`}/>
                        </div>
                        <ul className={`${styles.mediaBody} list-unstyled mt-3`}>
                            <li><FontAwesomeIcon icon={faDroplet} className={`text-muted`} /> Blood Group: A (+)</li>
                            <li><FontAwesomeIcon icon={faMars} className={`text-muted`} /> Gender: Male</li>
                            <li><FontAwesomeIcon icon={faIdCard} className={`text-muted`} /> Nationality: Bangladeshi</li>
                            <li><FontAwesomeIcon icon={faMosque} className={`text-muted`} /> Religion: Islam</li>
                            <li><FontAwesomeIcon icon={faRing} className={`text-muted`} /> Married Status: single</li>
                            <li><FontAwesomeIcon icon={faAt} className={`text-muted`} /> Email: Safwanhassan13@gmail</li>
                            <li>
                                <hr />
                            </li>
                        </ul>
                    </div>
                    <Collapse in={open}>
                        <div id="collapse-profileInfo">
                            <div className={`${styles.media} mb-2`}>
                                <div className={`${styles.fontAwesomeSize} fa-fw me-3`}>
                                    <FontAwesomeIcon icon={faSquarePhone} className={`text-primary`}/>
                                </div>
                                <ul className={`${styles.mediaBody} list-unstyled mt-3`}>
                                    <li className={`mb-2`}><a href="tel:+447868090089"> (+44)-7868090089 </a></li>
                                    <li><FontAwesomeIcon icon={faWhatsapp} className={`text-muted`} /> 
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={mobileTooltip}
                                            >
                                            <a href="#0"> What's App</a>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                            <div className={`${styles.media} mb-2`}>
                                <div className={`${styles.fontAwesomeSize} fa-fw me-3`}>
                                    <FontAwesomeIcon icon={faAddressCard} className={`text-primary`}/>
                                </div>
                                <ul className={`${styles.mediaBody} list-unstyled mt-3`}>
                                    <li className={`mb-2`}>
                                        <FontAwesomeIcon icon={faLinkedin} className={`text-muted me-2`} /> 
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 150 }}
                                            overlay={linkedInTooltip}
                                            >
                                            <a href="https://www.linkedin.com/in/safwanhassan/">LinkedIn.User</a>
                                        </OverlayTrigger>
                                    </li>
                                    <li className={`mb-2`}>
                                        <FontAwesomeIcon icon={faFacebookSquare} className={`text-muted me-2`} />
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 150 }}
                                            overlay={facebookTooltip}
                                            >
                                            <a href="https://www.facebook.com/safwan.rubab">Facebook.User</a>
                                        </OverlayTrigger> 
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faGithub} className={`text-muted me-2`} /> 
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 150 }}
                                            overlay={gitHubTooltip}
                                            >
                                            <a href="https://github.com/SafwanELLipSE/">GitHub</a>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                            <div className={`${styles.media} mb-2`}>
                                <div className={`${styles.fontAwesomeSize} fa-fw me-3`}>
                                    <FontAwesomeIcon icon={faHouse} className={`text-primary`}/>
                                </div>
                                <div className={`${styles.mediaBody} mt-3`}>
                                    <FontAwesomeIcon icon={faAddressBook} className={`text-muted`} />  <span className='fw-bold'>Current Address: </span>
                                    <address className="mb-0"> 
										799A, Romford Road <br/> 
										Manor Park, East London <br/> 
										United Kingdom
									</address>
                                    <FontAwesomeIcon icon={faHouseChimney} className={`text-muted`} /> <span className='fw-bold'>Home Address:</span> 
                                    <address className="mb-0"> 
										458, West Sherwapara <br/> 
										Mirpur, Dhaka-1216 <br/> 
										Bangladesh
									</address>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    </Collapse>
                    <Button 
                        onClick={() => setOpen(!open)} 
                        className={`float-end ${styles.blueOutlineBtn}`} 
                        aria-controls="collapse-profileInfo" 
                        aria-expanded={open}
                    >
                        Show All
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileInfo;
