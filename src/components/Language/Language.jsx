import React, { useState } from 'react';

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from "./Language.module.css";

const Language = () => {

    const languageIcon = (
        <FontAwesomeIcon icon={faLanguage} className={`text-muted me-2`}/>
    );

    const languageList = [
        {
            type: "Bangla (Mother Tongue)",
            progress: "100"
        },
        {
            type: "English",
            progress: "75"
        }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className={`text-center ${styles.cardHeaderText}`}> 
                        <FontAwesomeIcon icon={faLanguage} className={`text-primary me-2`}/> Language Skills 
                    </h1>
                </Card.Header>
                <Card.Body>
                    <div className="mb-3">
                        <h3 className="h5 mb-3">Languages</h3>
                        {languageList.slice(0, 1).map((data, index) => (
                            <div key={index}>
                                <h4 className="h6 text-muted">{languageIcon} {data.type}</h4>
                                <ProgressBar className='mb-3'>
                                    <ProgressBar striped animated variant="success" now={data.progress} label={`${data.progress}%`} />
                                </ProgressBar>
                            </div>
                        ))}
                        <Collapse in={open}>
                            <div id="collapse-language">
                            {languageList.slice(1, 2).map((data, index) => (
                                <div key={index}>
                                    <h4 className="h6 text-muted">{languageIcon} {data.type}</h4>
                                    <ProgressBar className='mb-3'>
                                        <ProgressBar striped animated variant="success" now={data.progress} label={`${data.progress}%`} />
                                    </ProgressBar>
                                </div>
                            ))}
                            </div>
                        </Collapse>
                        <Button 
                            onClick={() => setOpen(!open)} 
                            className={`float-end ${styles.blueOutlineBtn}`}  
                            aria-controls="collapse-language" 
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

export default Language;
