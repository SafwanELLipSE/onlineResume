import React, { useState } from 'react'

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faStar } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from "./OnlineCertificate.module.css";

export default function OnlineCertificates() {
  const [open, setOpen] = useState(false);

  const certificateIcon = (
    <FontAwesomeIcon icon={faCertificate} className={`fa-3x text-primary me-3 mt-3`}/>
  );

  const starIcon = (
    <FontAwesomeIcon icon={faStar} className={`fa-3x text-primary me-3 mt-3`}/>
  );

  const certificates = [
    {
        name: "Door Supervisors (Level 2)",
        from: "Highfield International",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Certificate",
        date: "31 / 01 / 2023",
        dateTime: "2023-01-31",
        icon: certificateIcon
    },
    {
        name: "First Aid (Level 3)",
        from: "Highfield International",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Certificate",
        date: "31 / 01 / 2023",
        dateTime: "2023-01-31",
        icon: certificateIcon
    },
    {
        name: "Sandwich Artistry",
        from: "Subway",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Certificate",
        date: "11 / 09 / 2022",
        dateTime: "2022-09-11",
        icon: certificateIcon
    },
    {
        name: "Sandwich Artistry 2",
        from: "Subway",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Certificate",
        date: "23 / 09 / 2022",
        dateTime: "2022-09-23",
        icon: certificateIcon
    },
    {
        name: "Food Safety – Allergens",
        from: "Subway",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Certificate",
        date: "23 / 09 / 2022",
        dateTime: "2022-09-23",
        icon: certificateIcon
    },
    {
        name: "Project Management Fundamentals",
        from: "ITonlineLearning",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Certificate",
        date: "10 / 09 / 2022",
        dateTime: "2022-09-10",
        icon: certificateIcon
    },
    {
        name: "Introduction to Python",
        from: "datacamp",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Accomplishment",
        date: "26 / 10 / 2022",
        dateTime: "2022-10-26",
        icon: starIcon
    },
    {
        name: "Introduction to SQL",
        from: "datacamp",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Accomplishment",
        date: "27 / 10 / 2022",
        dateTime: "2022-10-27",
        icon: starIcon
    },
    {
        name: "Intermediate SQL",
        from: "datacamp",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        type: "Accomplishment",
        date: "13 / 11 / 2022",
        dateTime: "2022-11-13",
        icon: starIcon
    }
  ];

  return (
    <div>
      <Card className='mb-3'>
        <Card.Header>
          <h1 className='text-center'> Certificates & Achievement </h1>
        </Card.Header>
        <Card.Body>
          {certificates.slice(0, 2).map((data, index) => (
              <div key={index}>
                  <div className={`${styles.media} mb-2`}>
                      {data.icon}
                      <div className={`${styles.mediaBody}`}>
                          <h4 className={`mb-1`}> {data.name} </h4>
                          <div className={`${styles.online}`}>
                              <div className={`${styles.onlineInner}`}>
                                <h5 className="mb-0">
                                  <a target="_blank" href={`${data.link}`}> {data.from} </a>
                                </h5>
                                <h6 className={`${styles.textInner} text-muted mt-2`}> {data.type} </h6>
                              </div>
                                <small className={`${styles.date}`}>
                                  <time dateTime={`${data.dateTime}`}> {data.date} </time>
                                </small>
                          </div>
                      </div>
                  </div>
                  <hr />
              </div>
          ))}

          <Collapse in={open}>
            <div id="collapse-certification">
              {certificates.slice(2, 10).map((data, index) => (
                  <div key={index}>
                      <div className={`${styles.media} mb-2`}>
                          {data.icon}
                          <div className={`${styles.mediaBody}`}>
                              <h4 className={`mb-1`}> {data.name} </h4>
                              <div className={`${styles.online}`}>
                                  <div className={`${styles.onlineInner}`}>
                                    <h5 className="mb-0">
                                      <a target="_blank" href={`${data.link}`}> {data.from} </a>
                                    </h5>
                                    <h6 className={`${styles.textInner} text-muted mt-2`}> {data.type} </h6>
                                  </div>
                                    <small className={`${styles.date}`}>
                                      <time dateTime={`${data.dateTime}`}> {data.date} </time>
                                    </small>
                              </div>
                          </div>
                      </div>
                      <hr />
                  </div>
              ))}
            </div>
          </Collapse>
          <Button onClick={() => setOpen(!open)} variant="outline-primary" className='float-end' aria-controls="collapse-certification" aria-expanded={open}>
              Show All
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
