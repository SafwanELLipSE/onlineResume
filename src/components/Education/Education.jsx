import React, { useState } from 'react';
// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBuildingColumns, faSchool, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


// styles
import styles from './Education.module.css'

const Education = () => {

    const graduationCap = (
        <FontAwesomeIcon icon={faGraduationCap} className={`fa-3x text-primary me-2`}/>
    );

    const buildingColumns = (
        <FontAwesomeIcon icon={faBuildingColumns} className={`fa-3x text-primary me-2`}/>
    );

    const school = (
        <FontAwesomeIcon icon={faSchool} className={`fa-3x text-primary me-2`}/>
    );
    
    const education = [
        {
            degree: "Master in Computing and Technology with Advanced Practice",
            institution: "Northumbria University",
            link: "#0",
            startDate: "05 / 2022",
            endDate: "Current",
            dateTimeStart: "2022-05",
            dateTimeEnd: "2023-07",
            icon: graduationCap
        },
        {
            degree: "B.Sc. in Computer Science and Engineering",
            institution: "Independent University, Bangladesh(IUB)",
            link: "https://drive.google.com/file/d/1YT27WLngEL0mm8MZUaXnxPxWf3DMYdum/view?usp=sharing",
            startDate: " 01 / 2016",
            endDate: "01 / 2020",
            dateTimeStart: "2016-01",
            dateTimeEnd: "2020-01",
            icon: graduationCap
        },
        {
            degree: "Higher Secondary Certificate(HSC) in Science",
            institution: "St. Joseph Higher Secondary School",
            link: "https://drive.google.com/file/d/1Ha9xt79UibqBnsj8OdfqdwwQIeNnIrZm/view?usp=sharing",
            startDate: "05 / 2013",
            endDate: "07 / 2015",
            dateTimeStart: "2013-05",
            dateTimeEnd: "2015-07",
            icon: buildingColumns
        },
        {
            degree: "Secondary School Certificate(SSC) in Science",
            institution: "Mohammadpur Preparatory Higher Secondary School",
            link: "https://drive.google.com/file/d/1JE_AW4DZ_DDuTVHsWtPJg2m3CAOmrJrl/view?usp=sharing",
            startDate: " 01 / 2011",
            endDate: "04 / 2013",
            dateTimeStart: "2011-01",
            dateTimeEnd: "2013-04",
            icon: school
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className='text-center'> Education </h1>
                </Card.Header>
                <Card.Body>
                    {education.slice(0, 2).map((data, index) => (
                        <div key={index}>
                            <div className={`${styles.media} mb-2`}>
                                {data.icon}
                                <div className={`${styles.mediaBody}`}>
                                    <h4 className={`mb-1`}> {data.degree} </h4>
                                    <div className={`${styles.institution}`}>
                                        <h5 className="mb-0">
                                            <a target="_blank" href={`${data.link}`}>{data.institution}</a>
                                        </h5>
                                        <small className={`${styles.date}`}>
                                            <time dateTime={`${data.dateTimeStart}`}> {data.startDate} </time> &ndash; <time dateTime={`${data.dateTimeEnd}`}> {data.endDate} </time>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                    <Collapse in={open}>
                        <div id="collapse-education">
                            {education.slice(2, 4).map((data, index) => (
                                <div key={index}>
                                    <div className={`${styles.media} mb-2`}>
                                        {data.icon}
                                        <div className={`${styles.mediaBody}`}>
                                            <h4 className={`mb-1`}> {data.degree} </h4>
                                            <div className={`${styles.institution}`}>
                                                <h5 className="mb-0">
                                                    <a target="_blank" href={`${data.link}`}>{data.institution}</a>
                                                </h5>
                                                <small className={`${styles.date}`}>
                                                    <time dateTime={`${data.dateTimeStart}`}> {data.startDate} </time> &ndash; <time dateTime={`${data.dateTimeEnd}`}> {data.endDate} </time>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </Collapse>
                    <Button onClick={() => setOpen(!open)} variant="outline-primary" className='float-end' aria-controls="collapse-education" aria-expanded={open}>
                        Show All
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Education;
