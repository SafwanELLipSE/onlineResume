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
        <FontAwesomeIcon icon={faGraduationCap} className={`${styles.eduactionIcon}`}/>
    );

    const buildingColumns = (
        <FontAwesomeIcon icon={faBuildingColumns} className={`${styles.eduactionIcon}`}/>
    );

    const school = (
        <FontAwesomeIcon icon={faSchool} className={`${styles.eduactionIcon}`}/>
    );
    
    const education = [
        {
            degree: "Master in Computing and Technology with Advanced Practice",
            institution: "Northumbria University",
            link: "#0",
            startDate: "05/2022",
            endDate: "10/2023",
            dateTimeStart: "2022-05",
            dateTimeEnd: "2023-10",
            icon: graduationCap
        },
        {
            degree: "B.Sc. in Computer Science and Engineering",
            institution: "Independent University, Bangladesh (IUB)",
            link: "https://drive.google.com/file/d/13DUfnzeVSRrz12fAJqlgYn6gqOfnao05/view?usp=sharing",
            startDate: " 01/2016",
            endDate: "01/2021",
            dateTimeStart: "2016-01",
            dateTimeEnd: "2021-01",
            icon: graduationCap
        },
        {
            degree: "Higher Secondary Certificate (HSC) in Science",
            institution: "St. Joseph Higher Secondary School",
            link: "https://drive.google.com/file/d/1tvxLTGXY8ZizexXmqyVt2m4k-ybCuV93/view?usp=sharing",
            startDate: "05/2013",
            endDate: "07/2015",
            dateTimeStart: "2013-05",
            dateTimeEnd: "2015-07",
            icon: buildingColumns
        },
        {
            degree: "Secondary School Certificate (SSC) in Science",
            institution: "Mohammadpur Preparatory Higher Secondary School",
            link: "https://drive.google.com/file/d/17kP0ZdUuoZV8tRCb4rE5fss0C8mJiF0S/view?usp=sharing",
            startDate: " 01/2011",
            endDate: "04/2013",
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
                    <h1 className={`text-center ${styles.cardHeaderText}`}> 
                        Education 
                    </h1>
                </Card.Header>
                <Card.Body>
                    {education.slice(0, 2).map((data, index) => (
                        <div key={index}>
                            <div className={`${styles.media} mb-2`}>
                                {data.icon}
                                <div className={`${styles.mediaBody}`}>
                                    <h4 className={`${styles.institutionTitle}`}> {data.degree} </h4>
                                    <div className={`${styles.institution}`}>
                                        <h5 className={`${styles.institutionLinkText}`}>
                                            <a target="_blank" href={`${data.link}`}>{data.institution}</a>
                                        </h5>
                                        <small className={`${styles.dateText}`}>
                                            <time dateTime={`${data.dateTimeStart}`}> {data.startDate} </time> &ndash; 
                                            <time dateTime={`${data.dateTimeEnd}`}> {data.endDate} </time>
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
                                            <h4 className={`${styles.institutionTitle}`}> {data.degree} </h4>
                                            <div className={`${styles.institution}`}>
                                                <h5 className={`${styles.institutionLinkText}`}>
                                                    <a target="_blank" href={`${data.link}`}>{data.institution}</a>
                                                </h5>
                                                <small className={`${styles.dateText}`}>
                                                    <time dateTime={`${data.dateTimeStart}`}> {data.startDate} </time> &ndash; 
                                                    <time dateTime={`${data.dateTimeEnd}`}> {data.endDate} </time>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </Collapse>
                    <Button 
                        onClick={() => setOpen(!open)} 
                        className={`float-end ${styles.blueOutlineBtn}`} 
                        aria-controls="collapse-education" 
                        aria-expanded={open}
                    >
                        Show All
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Education;
