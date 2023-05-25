import React, { useState } from 'react';

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faCode, faDatabase, faC, faUsers, faSatelliteDish, faPersonCircleQuestion, faEarthAmericas, faPeopleGroup, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { faJava, faHtml5, faCss3Alt, faJs, faPhp, faBootstrap, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons';

// styles
import styles from "./Skills.module.css";


const Skills = () => {

    const skillIcon = (
        <FontAwesomeIcon icon={faCode} className={`text-muted me-2`}/>
    );

    const userIcon = (
        <FontAwesomeIcon icon={faUsersGear} className={`text-muted me-2`}/>
    );
    
    const earthAmericas = (
        <FontAwesomeIcon icon={faEarthAmericas} className={`text-muted me-2`}/>
    );

    const skillList = [
        {
            name: "HTML/HTML5",
            progress: "75",
            icon: faHtml5
        },
        {
            name: "CSS/CSS3",
            progress: "75",
            icon: faCss3Alt
        },
        {
            name: "Object Oriented and Programming (OPP)",
            progress: "75",
            icon: faCode
        },
        {
            name: "JAVA",
            progress: "50",
            icon: faJava
        },
        {
            name: "PHP",
            progress: "75",
            icon: faPhp
        },
        {
            name: "SQL",
            progress: "75",
            icon: faDatabase
        },
        {
            name: "JavaScript (Js)",
            progress: "50",
            icon: faJs
        },
        {
            name: "C++",
            progress: "50",
            icon: faC
        }
        
    ];

    const interpersonalList = [
        {
            name: "People Skills",
            progress: "75",
            icon: faUsers
        },
        {
            name: "Communication Skills",
            progress: "50",
            icon: faSatelliteDish
        },
        {
            name: "Innovative Thinking",
            progress: "75",
            icon: faPersonCircleQuestion
        },
        {
            name: "Teamwork",
            progress: "50",
            icon: faPeopleGroup
        },
    ];

    const librariesList = [
        {
            name: "Laravel",
            progress: "75",
            icon: faLaravel
        },
        {
            name: "React Js",
            progress: "50",
            icon: faReact
        },
        {
            name: "Bootstraps",
            progress: "75",
            icon: faBootstrap
        },
        {
            name: "Tailwind",
            progress: "25",
            icon: faCode
        },
        {
            name: "Material UI",
            progress: "25",
            icon: faCode
        }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className={`text-center ${styles.cardHeaderText}`}> 
                        <FontAwesomeIcon icon={faGears} className={`text-primary me-2`}/> Skills 
                    </h1>
                </Card.Header>
                <Card.Body>
                    <div className="mb-3">
                        {/* Programming Skills */}
                        <h3 className="h5 mb-3">{skillIcon} Programming Skills</h3>
                        {skillList.slice(0, 2).map((data, index) => (
                            <div key={index}>
                                <h4 className="h6 text-muted">
                                    <FontAwesomeIcon icon={data.icon} className={`text-muted me-2`}/> 
                                    {data.name}
                                </h4>
                                <ProgressBar className='mb-3'>
                                    <ProgressBar striped animated variant="primary" now={data.progress} label={`${data.progress}%`} />
                                </ProgressBar>
                            </div>
                        ))}
                        <Collapse in={open}>
                            <div id="collapse-language">
                            {skillList.slice(2, 8).map((data, index) => (
                                <div key={index}>
                                    <h4 className="h6 text-muted">
                                        <FontAwesomeIcon icon={data.icon} className={`text-muted me-2`}/> 
                                        {data.name}
                                    </h4>
                                    <ProgressBar className='mb-3'>
                                        <ProgressBar striped animated variant="primary" now={data.progress} label={`${data.progress}%`} />
                                    </ProgressBar>
                                </div>
                            ))}
                            <h3 className="h5 mb-3">{userIcon} Interpersonal Skills</h3>
                            {interpersonalList.map((data, index) => (
                                <div key={index}>
                                    <h4 className="h6 text-muted">
                                        <FontAwesomeIcon icon={data.icon} className={`text-muted me-2`}/> 
                                        {data.name}
                                    </h4>
                                    <ProgressBar className='mb-3'>
                                        <ProgressBar striped animated variant="primary" now={data.progress} label={`${data.progress}%`} />
                                    </ProgressBar>
                                </div>
                            ))}
                            <h3 className="h5 mb-3">{earthAmericas} Framework & Library</h3>
                            {librariesList.map((data, index) => (
                                <div key={index}>
                                    <h4 className="h6 text-muted">
                                        <FontAwesomeIcon icon={data.icon} className={`text-muted me-2`}/>
                                        {data.name}
                                    </h4>
                                    <ProgressBar className='mb-3'>
                                        <ProgressBar striped animated variant="primary" now={data.progress} label={`${data.progress}%`} />
                                    </ProgressBar>
                                </div>
                            ))}
                            </div>
                        </Collapse>
                        <Button onClick={() => setOpen(!open)} variant="outline-primary" className='float-end' aria-controls="collapse-language" aria-expanded={open}>
                            Show All
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Skills;
