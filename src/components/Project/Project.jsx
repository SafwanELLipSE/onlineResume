import React from 'react'
// Bootstraps 5
import Card from 'react-bootstrap/Card';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLaptopFile, faHouseLaptop, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from "./Project.module.css";

export default function Projects() {

  const laptopFile = (
      <FontAwesomeIcon icon={faLaptopFile} className={`fa-3x text-primary me-3`}/>
  );

  const houseLaptop = (
    <FontAwesomeIcon icon={faHouseLaptop} className={`fa-3x text-primary me-3`}/>
  );

  const arrowRight = (
    <FontAwesomeIcon icon={faArrowRight} className={`text-primary me-2`}/>
  );

  const projects = [
    {
      name: "Online Application Portal",
      for: "JhoroTEK",
      icon: laptopFile,
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
      name: "Coaching Management System",
      icon: houseLaptop,
      for: "Personal"
    },
    {
      name: "Ticket Management System",
      icon: laptopFile,
      for: "JhoroTEK (Internship)"
    },
    {
      name: "Coaching Management System",
      icon: houseLaptop,
      for: "Personal"
    },
    {
      name: "Invertory Management System",
      icon: houseLaptop,
      for: "Personal"
    },
    {
      name: "Invertory Management System",
      icon: houseLaptop,
      for: "Personal"
    }, 
    {
      name: "Invertory Management System",
      icon: houseLaptop,
      for: "Personal"
    }
];

  return (
    <div>
      <Card className='mb-3'>
        <Card.Header>
          <h1 className={`text-center ${styles.cardHeaderText}`}> 
            Project 
          </h1>
        </Card.Header>
        <Card.Body>
          {projects.slice(0, 2).map((data, index) => (
            <div key={index}>
              <div className={`${styles.media} mb-2`}>
                {data.icon}
                <div className={`${styles.mediaBody}`}>
                    <div className={`${styles.mediaBody}`}>
                      <h4 className={`mb-1`}> {data.name} </h4>
                      <div className={`${styles.project}`}>
                        <h5 className="mb-0">
                          <a href="#0">{data.for}</a>
                        </h5>
                      </div>

                    </div>
                </div>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  )
}
