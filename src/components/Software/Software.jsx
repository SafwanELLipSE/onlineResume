import React, { useState } from 'react';

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCode, faLaptop, faGear, faFileWord, faFileExcel, faFilePowerpoint, faBrain, faKeyboard, faChartGantt, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faTrello, faConfluence } from '@fortawesome/free-brands-svg-icons';

// styles
import styles from "./Software.module.css";

const Software = () => {

    const softwareIcon = (
        <FontAwesomeIcon icon={faGear} className={`text-muted me-2`}/>
    );

    const softwareList = [
        {
            name: "VS Code",
            progress: "75",
            icon: faLaptopCode
        },
        {
            name: "CodeBlock",
            progress: "50",
            icon: faCode
        },
        {
            name: "Netbeans",
            progress: "50",
            icon: faCode
        },
        {
            name: "Android Studio",
            progress: "50",
            icon: faAndroid
        },
        {
            name: "MS Office",
            progress: "75",
            icon: faFileWord
        },
        {
            name: "MS PowerPoint",
            progress: "50",
            icon: faFilePowerpoint
        },
        {
            name: "MS Excel",
            progress: "50",
            icon: faFileExcel
        },
        {
            name: "MatLab",
            progress: "25",
            icon: faBrain
        },
        {
            name: "Latex",
            progress: "50",
            icon: faKeyboard
        },
        {
            name: "tableau",
            progress: "75",
            icon: faChartGantt
        },
        {
            name: "Postman",
            progress: "50",
            icon: faTerminal
        },
        {
            name: "Confluence",
            progress: "50",
            icon: faConfluence
        },
        {
            name: "Trello",
            progress: "50",
            icon: faTrello
        }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className={`text-center ${styles.cardHeaderText}`}> 
                        <FontAwesomeIcon icon={faLaptop} className={`text-primary me-2`}/> Software Skills 
                    </h1>
                </Card.Header>
                <Card.Body>
                    <div className="mb-3">
                        <h3 className={`${styles.secondaryHeaderText}`}>{softwareIcon} Software </h3>
                        {softwareList.slice(0, 2).map((data, index) => (
                            <div key={index}>
                                <h4 className={`${styles.thirdText}`}>
                                    <FontAwesomeIcon icon={data.icon} className={`text-muted me-2`}/> 
                                    {data.name}
                                </h4>
                                <ProgressBar className='mb-3'>
                                    <ProgressBar striped animated variant="info" now={data.progress} label={`${data.progress}%`} />
                                </ProgressBar>
                            </div>
                        ))}

                        <Collapse in={open}>
                            <div id="collapse-software">
                                {softwareList.slice(2, 13).map((data, index) => (
                                    <div key={index}>
                                        <h4 className={`${styles.thirdText}`}>
                                            <FontAwesomeIcon icon={data.icon} className={`text-muted me-2`}/> 
                                            {data.name}
                                        </h4>
                                        <ProgressBar className='mb-3'>
                                            <ProgressBar striped animated  variant="info" now={data.progress} label={`${data.progress}%`} />
                                        </ProgressBar>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                        <Button 
                            onClick={() => setOpen(!open)} 
                            className={`float-end ${styles.blueOutlineBtn}`}  
                            aria-controls="collapse-software" 
                            aria-expanded={open}
                        >
                            Show All
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Software;
