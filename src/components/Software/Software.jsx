import React, { useState } from 'react';

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCode, faLaptop, faGear, faFileWord, faFileExcel, faFilePowerpoint, faBrain, faKeyboard, faChartGantt  } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

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
            progress: "50",
            icon: faChartGantt
        }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className='text-center'> 
                        <FontAwesomeIcon icon={faLaptop} className={`text-primary me-2`}/> Language Skills 
                    </h1>
                </Card.Header>
                <Card.Body>
                    <div className="mb-3">
                        <h3 className="h5 mb-3">{softwareIcon} Coding Languages</h3>
                        {softwareList.slice(0, 2).map((data, index) => (
                            <div key={index}>
                                <h4 className="h6 text-muted">
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
                                {softwareList.slice(2, 10).map((data, index) => (
                                    <div key={index}>
                                        <h4 className="h6 text-muted">
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
                        <Button onClick={() => setOpen(!open)} variant="outline-primary" className='float-end' aria-controls="collapse-software" aria-expanded={open}>
                            Show All
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Software;
