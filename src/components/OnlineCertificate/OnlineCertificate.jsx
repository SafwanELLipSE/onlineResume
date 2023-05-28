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
      name: "Tableau 2022 Advanced: Master Tableau in Data Science",
      from: "Udemy",
      link: "https://drive.google.com/file/d/1ijD6C-bMKViO-Ap4AfkTpPQ54ersZp2G/view?usp=sharing",
      type: "Certificate",
      date: "18 / 03 / 2023",
      dateTime: "2023-03-18",
      icon: certificateIcon
    },
    {
        name: "SQL (Intermediate)",
        from: "HackerRank",
        link: "https://drive.google.com/file/d/1YoRsvbg5ONsyG6nHM7k0mFRDiKrOu_WC/view?usp=sharing",
        type: "Certificate",
        date: "12 / 03 / 2023",
        dateTime: "2023-03-12",
        icon: certificateIcon
    },
    {
        name: "SQL (Basic)",
        from: "HackerRank",
        link: "https://drive.google.com/file/d/10RQgMFtz0gZhxnOlD9I2HvoSNCFdKUed/view?usp=sharing",
        type: "Certificate",
        date: "11 / 02 / 2023",
        dateTime: "2023-03-11",
        icon: certificateIcon
    },
    {
        name: "Tableau 2022 A-Z Hands-On Tableau Training for Data Science",
        from: "Udemy",
        link: "https://drive.google.com/file/d/1x_Xbvi5vFDbSOBG_mkW3WxWkVYktIFM4/view?usp=sharing",
        type: "Certificate",
        date: "23 / 02 / 2023",
        dateTime: "2023-02-23",
        icon: certificateIcon
    },
    {
        name: "Door Supervisors (Level 2)",
        from: "Highfield",
        link: "https://drive.google.com/file/d/1M-PIfFsqawAo4AO7lRXdmMzkSv9Tn-V-/view?usp=sharing",
        type: "Certificate",
        date: "31 / 01 / 2023",
        dateTime: "2023-01-31",
        icon: certificateIcon
    },
    {
        name: "First Aid (Level 3)",
        from: "Lilly Angel",
        link: "",
        type: "Certificate",
        date: "31 / 01 / 2023",
        dateTime: "2023-01-31",
        icon: certificateIcon
    },
    {
        name: "Intermediate SQL",
        from: "datacamp",
        link: "https://drive.google.com/file/d/1WQtJjwB6szDZwdoCZfbbbN_8iLXG_0mR/view?usp=sharing",
        type: "Accomplishment",
        date: "13 / 11 / 2022",
        dateTime: "2022-11-13",
        icon: starIcon
    },
    {
        name: "Introduction to SQL",
        from: "datacamp",
        link: "https://drive.google.com/file/d/17TfEeb8FvhIUp-kVrZjSmAB3u91-MutD/view?usp=sharing",
        type: "Accomplishment",
        date: "27 / 10 / 2022",
        dateTime: "2022-10-27",
        icon: starIcon
    },
    {
        name: "Introduction to Python",
        from: "datacamp",
        link: "https://drive.google.com/file/d/1oB6mPYLh1l0b6zhRu8W_tYJoANvT86cI/view?usp=sharing",
        type: "Accomplishment",
        date: "26 / 10 / 2022",
        dateTime: "2022-10-26",
        icon: starIcon
    },
    {
        name: "Project Management Fundamentals",
        from: "ITonlineLearning",
        link: "https://drive.google.com/file/d/1sbtLp2cpMx8Br2WHRHHB_fBy0DOa2EFe/view?usp=sharing",
        type: "Certificate",
        date: "10 / 09 / 2022",
        dateTime: "2022-09-10",
        icon: certificateIcon
    },
    {
        name: "Sandwich Artistry 2",
        from: "Subway",
        link: "https://drive.google.com/file/d/19jQcfDzhySH8126ni8gkiSEKKYRlDNAB/view?usp=sharing",
        type: "Certificate",
        date: "23 / 09 / 2022",
        dateTime: "2022-09-23",
        icon: certificateIcon
    },
    {
        name: "Food Safety – Allergens",
        from: "Subway",
        link: "https://drive.google.com/file/d/1puRJnUt3ZWaqUFlIauVMa5YHM9ayjZba/view?usp=sharing",
        type: "Certificate",
        date: "23 / 09 / 2022",
        dateTime: "2022-09-23",
        icon: certificateIcon
    },
    {
        name: "Sandwich Artistry",
        from: "Subway",
        link: "https://drive.google.com/file/d/1wSgnJgMhfMXwxd1mKyMGopdp4TK77nlF/view?usp=sharing",
        type: "Certificate",
        date: "11 / 09 / 2022",
        dateTime: "2022-09-11",
        icon: certificateIcon
    }
  ];

  return (
    <div>
      <Card className='mb-3'>
        <Card.Header>
          <h1 className={`text-center ${styles.cardHeaderText}`}> 
            Certificates & Achievement 
          </h1>
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
              {certificates.slice(2, 12).map((data, index) => (
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
          <Button 
            onClick={() => setOpen(!open)} 
            className={`float-end ${styles.blueOutlineBtn}`} 
            aria-controls="collapse-certification" 
            aria-expanded={open}
          >
              Show All
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
