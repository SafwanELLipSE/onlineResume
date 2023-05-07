import React, {useState} from 'react';
// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from "./WorkExperience.module.css";

const WorkExperience = () => {

    const briefCase = (
        <FontAwesomeIcon icon={faBriefcase} className={`fa-3x text-primary me-2`}/>
    );

    const arrowRight = (
        <FontAwesomeIcon icon={faArrowRight} className={`text-primary mt-1`}/>
    );

    const education = [
        {
            job: "Admissions Officer (Part-Time)",
            company: "Elizabeth School of London",
            location: "Canary Wharf, London, United Kingdom",
            link: "https://elizabethschool.com/",
            startDate: "01 / 04 / 2023",
            endDate: "Present",
            dateTimeStart: "2023-04-01",
            dateTimeEnd: "Present",
            icon: briefCase,
            responsibilities: [
                "Analyse files and address inconsistencies as soon as possible.", 
                "Ensure that all agency and student inquiries are handled professionally and expeditiously.",
                "Implement and maintain systems and processes to guarantee that all databases include correct and thorough information.", 
                "Checks products in the sandwich unit area and restocks items to ensure a sufficient supply throughout the shift.",
                "To protect student privacy, ensure that correct releases are on file."                           
            ]
        },
        {
            job: "Team Member (Part-Time)",
            company: "Subway",
            location: "Surbiton Rd, Kingston upon Thames, London, United Kingdom",
            link: "https://www.subway.com/en-GB",
            startDate: "24 / 02 / 2023",
            endDate: "31 / 03 / 2023",
            dateTimeStart: "2023-02-24",
            dateTimeEnd: "2023-03-31",
            icon: briefCase,
            responsibilities: [
                "Maintains excellent standards of food preparation while working in a fast-paced setting.", 
                "Prepares food ingredients by washing, cutting, slicing, chopping, and grating them.",
                "Prepare meal orders neatly according to customer requests.", 
                "Always keeps a clean and ordered workspace.",
                "Sanitises all utensils and dishes thoroughly before each use.",
                "Follows all food safety guidelines when storing, preparing, and serving food.",  
                "Handling cash and credit card transactions."                            
            ]
        },
        {
            job: "Team Member (Part-Time)",
            company: "Subway",
            location: "Stratford the Mall, London, United Kingdom",
            link: "https://www.subway.com/en-GB",
            startDate: "25 / 08 / 2022",
            endDate: "06 / 11 / 2022",
            dateTimeStart: "2022-08-25",
            dateTimeEnd: "2022-11-06",
            icon: briefCase,
            responsibilities: [
                "Open the store and the register and begin prepping all the bread, meats, and veggies and then also make the sandwiches and cashier.", 
                "Learned a lot about meat, bread, and produce handling skills used in customer service and fast-paced work skills.",
                "Always Keeping the area clean making sure costumers are satisfied with their sandwiches.", 
                "Checks products in the sandwich unit area and restocks items to ensure a sufficient supply throughout the shift.",
                "Demonstrated integrity and honesty while interacting with guests, team members, and managers.",
                "Greeted customers and provided excellent customer service."                              
            ]
        },
        {
            job: "Software Engineer",
            company: "JhoroTEK",
            location: "Wakil Tower (Level-8), TA-131, Gulshan-1, Dhaka-1212, Bangladesh",
            link: "https://jhorotek.com/",
            startDate: "01 / 02 / 2021",
            endDate: "09 / 06 / 2022",
            dateTimeStart: "2021-02-01",
            dateTimeEnd: "2022-06-09",
            icon: briefCase,
            responsibilities: [
                "Last 7 months, worked as a Frontend developer with React Js in the Hazrat Shahjalal International Airport project.", 
                "Made an online Fire and Electrical Safety Survey portal for company demonstration with attendance management system.",
                "Redesign Health Bridge (admin panel) with AdminLTE template having 90% of function and design similar.", 
                "User testing on web and mobile application creating backlog and reporting bugs and error.",
                "Creating wireframe and prototypes draw.io and lucid chart.",
                "Developing Technical documentation, report, user, and instruction manual for application."                              
            ]
        },
        {
            job: "Web Development Internship",
            company: "JhoroTEK",
            location: "Wakil Tower (Level-8), TA-131, Gulshan-1, Dhaka-1212, Bangladesh",
            link: "https://jhorotek.com/",
            startDate: "02 / 2020",
            endDate: "06 / 2022",
            dateTimeStart: "2021-02",
            dateTimeEnd: "2022-06",
            icon: briefCase,
            responsibilities: [
                "Design, develop, and deliver code that is necessary to support new feature developments and enhancements in an agile environment.", 
                "All fundamental knowledge about Laravel framework.",
                "Experience integrating 3rd party API's.", 
                "Database and Mail notification integration.",
                "Solid understanding of OOP and model view controller (MVC).",
                "Use of composer packages and implementation."                              
            ]
        }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className='text-center'> Work Experience </h1>
                </Card.Header>
                <Card.Body>
                    {education.slice(0, 1).map((data, index) => (
                        <div key={index}>
                            <div className={`${styles.media} mb-2`}>
                                {briefCase}
                                <div className={`${styles.mediaBody}`}>
                                    <h4 className={`mb-1`}> {data.job} </h4>
                                    <div className={`${styles.company}`}>
                                        <div className={`${styles.onlineInner}`}>
                                            <h5 className="mb-0">
                                                <a target="_blank" href={`${data.link}`}> {data.company} </a>
                                            </h5>
                                            <h6 className={`${styles.textInner} text-muted mt-2`}> {data.location} </h6>
                                        </div>
                                        <small className={`${styles.date}`}>
                                            <time dateTime={`${data.dateTimeStart}`}> {data.startDate} </time> &ndash; <time dateTime={`${data.dateTimeEnd}`}> {data.endDate} </time>
                                        </small>
                                    </div>
                                    <ul className={`list-unstyled mt-3`}>
                                        {data.responsibilities.map((data, index) => (
                                            <span key={index}>
                                                <li className='d-flex align-items-start'>
                                                    {arrowRight} 
                                                    <p className='ms-2 mb-0'>{data}</p>
                                                </li>
                                            </span>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                    <Collapse in={open}>
                        <div id="collapse-work-experience">
                            {education.slice(1, 5).map((data, index) => (
                                <div key={index}>
                                    <div className={`${styles.media} mb-2`}>
                                        {briefCase}
                                        <div className={`${styles.mediaBody}`}>
                                            <h4 className={`mb-1`}> {data.job} </h4>
                                            <div className={`${styles.company}`}>
                                                <div className={`${styles.onlineInner}`}>
                                                    <h5 className="mb-0">
                                                        <a target="_blank" href={`${data.link}`}> {data.company} </a>
                                                    </h5>
                                                    <h6 className={`${styles.textInner} text-muted mt-2`}> {data.location} </h6>
                                                </div>
                                                <small className={`${styles.date}`}>
                                                    <time dateTime={`${data.dateTimeStart}`}> {data.startDate} </time> &ndash; <time dateTime={`${data.dateTimeEnd}`}> {data.endDate} </time>
                                                </small>
                                            </div>
                                            <ul className={`list-unstyled mt-3`}>
                                                {data.responsibilities.map((data, index) => (
                                                    <span key={index}>
                                                        <li className='d-flex align-items-start'>
                                                            {arrowRight}                                                                
                                                            <p className='ms-2 mb-0'>{data}</p>
                                                        </li>
                                                    </span>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </Collapse>
                    <Button onClick={() => setOpen(!open)} variant="outline-primary" className='float-end' aria-controls="collapse-work-experience" aria-expanded={open}>
                        Show All
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default WorkExperience;
