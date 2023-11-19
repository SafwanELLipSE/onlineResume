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
    <FontAwesomeIcon icon={faCertificate} className={`${styles.certificateIcon}`}/>
  );

  const starIcon = (
    <FontAwesomeIcon icon={faStar} className={`${styles.certificateIcon}`}/>
  );

  const certificates = [
    {
        name: "Introduction to JavaScript",
        from: "Bohubrihi",
        link: "https://res.cloudinary.com/bohubrihi/image/upload/v1698795553/production/6541901dd559e87adf1ba3e5.pdf",
        type: "Certificate",
        date: "01/11/2023",
        dateTime: "2023-11-01",
        icon: certificateIcon
    },
    {
        name: "Introduction to Python Programming",
        from: "Bohubrihi",
        link: "https://res.cloudinary.com/bohubrihi/image/upload/v1698773614/production/65413a6bd559e87adf1ba3dc.pdf",
        type: "Certificate",
        date: "31/10/2023",
        dateTime: "2023-10-31",
        icon: certificateIcon
    },
    {
        name: "SEO Foundations",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/dace61a264fe99b8e25e0e225562078d724b79e8c73db90096e068658711f488?trk=share_certificate%20#searchengineoptimization.",
        type: "Certificate",
        date: "31/10/2023",
        dateTime: "2023-10-31",
        icon: certificateIcon
    },
    {
        name: "Python Basics (Coursera)",
        from: "University of Michigan",
        link: "https://www.coursera.org/account/accomplishments/verify/RJC5EX94638Q",
        type: "Certificate",
        date: "24/10/2023",
        dateTime: "2023-10-24",
        icon: certificateIcon
    },
    {
        name: "General Data Protection Regulation (GDPR)",
        from: "E-Learning At Work",
        link: "https://lms.elearningatwork.co.uk/certificate/check?name=k%20m%20safwan%20hassan&no=181008",
        type: "Certificate",
        date: "20/10/2023",
        dateTime: "2023-10-20",
        icon: certificateIcon
    },
    {
        name: "Developing a Critical Thinking Mindset",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/6b8b73a48f8b3476923c0d5c5e3f5c383479db4c7ca0a2ffb544a17cc5a7a991?trk=share_certificate%20#criticalthinking.",
        type: "Certificate",
        date: "17/10/2023",
        dateTime: "2023-10-17",
        icon: certificateIcon
    },
    {
        name: "GDPR Compliance: Essential Training",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/602a7da15f0d630a446ed7e345371c20105b7a37cfb3009898928b3a367cfd60?trk=share_certificate%20#legalcompliance%20#generaldataprotectionregulation.",
        type: "Certificate",
        date: "15/10/2023",
        dateTime: "2023-10-15",
        icon: certificateIcon
    },
    {
        name: "Privacy, Governance, and Compliance: Data Classification and Inventory",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/13356da48c2910eda413141a4735b6a057a5ec6576957c769677082b7ac9b5fe?trk=share_certificate%20#dataclassification.",
        type: "Certificate",
        date: "15/10/2023",
        dateTime: "2023-10-15",
        icon: certificateIcon
    },
    {
        name: "Improving Your Listening Skills",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/37819c602d46d0b59011fe3cc1157042a6d26fcd6f75aea14821ba84c764a92f?trk=share_certificate%20#activelistening.",
        type: "Certificate",
        date: "10/10/2023",
        dateTime: "2023-10-10",
        icon: certificateIcon
    },
    {
        name: "Laravel 9.0 Essential Training",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/3f2230aaa1eb136dd4c8d680d6a18de025dd50769eda7d5dca18487c137e9903?trk=share_certificate%20#laravel.",
        type: "Certificate",
        date: "26/09/2023",
        dateTime: "2023-09-26",
        icon: certificateIcon
    },
    {
        name: "Laravel Testing 101",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/6fd99f771be67b7e226ae9096f5154b9863e3f1c2e3527fa4baf62cfd3f271da?trk=share_certificate%20#softwaretesting%20#laravel.",
        type: "Certificate",
        date: "26/09/2023",
        dateTime: "2023-09-26",
        icon: certificateIcon
    },
    {
        name: "Level Up: Advanced SQL",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/c71b442a8ef49392b970c76de33e755d1dc1ba4af30004eec78f10e13b7659c4?trk=share_certificate%20#databasequeries%20#sql.",
        type: "Certificate",
        date: "20/09/2023",
        dateTime: "2023-09-20",
        icon: certificateIcon
    },
    {
        name: "Developing Your Emotional Intelligence",
        from: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/13cfcd59bf4994f8610a56cd1072efc723f331baf9210e0686a358d4b6611ccd?trk=share_certificate%20#emotionalintelligence.",
        type: "Certificate",
        date: "12/09/2023",
        dateTime: "2023-09-12",
        icon: certificateIcon
    },
    {
        name: "SQL for Data Science",
        from: "Bohubrihi",
        link: "https://res.cloudinary.com/bohubrihi/image/upload/v1690096800/production/64bcd49d376a5a32e7866d39.pdf",
        type: "Certificate",
        date: "23/07/2023",
        dateTime: "2023-07-23",
        icon: certificateIcon
    },
    {
        name: "HTML5, CSS3 & Bootstrap 4 For Web Development",
        from: "Bohubrihi",
        link: "https://res.cloudinary.com/bohubrihi/image/upload/v1689028627/production/64863d0e01f6dc21c02a23ee.pdf",
        type: "Certificate",
        date: "11/07/2023",
        dateTime: "2023-07-11",
        icon: certificateIcon
    },
    {
        name: "Introduction to Python Programming - Level 1 Course",
        from: "QA Ltd",
        link: "https://drive.google.com/file/d/1LLOwi3Y6UBapLDO6x2_M3jFQ8T0kyPI-/view?usp=sharing",
        type: "Certificate",
        date: "05/2023",
        dateTime: "2023-05",
        icon: certificateIcon
    },
    {
        name: "Tableau 2022 Advanced: Master Tableau in Data Science",
        from: "Udemy",
        link: "https://www.udemy.com/certificate/UC-7befc51a-548f-44ce-b266-7ed6cb87e32c/",
        type: "Certificate",
        date: "18/04/2023",
        dateTime: "2023-04-18",
        icon: certificateIcon
    },
    {
        name: "SQL (Intermediate)",
        from: "HackerRank",
        link: "https://www.hackerrank.com/certificates/8effb9688706",
        type: "Certificate",
        date: "12/03/2023",
        dateTime: "2023-03-12",
        icon: certificateIcon
    },
    {
        name: "SQL (Basic)",
        from: "HackerRank",
        link: "https://www.hackerrank.com/certificates/37a4dd39c39f",
        type: "Certificate",
        date: "11/02/2023",
        dateTime: "2023-03-11",
        icon: certificateIcon
    },
    {
        name: "Tableau 2022 A-Z Hands-On Tableau Training for Data Science",
        from: "Udemy",
        link: "https://www.udemy.com/certificate/UC-6c94896f-bf9b-4f75-9e71-475f67c031cf/",
        type: "Certificate",
        date: "23/02/2023",
        dateTime: "2023-02-23",
        icon: certificateIcon
    },
    {
        name: "Door Supervisors (Level 2)",
        from: "Highfield",
        link: "https://drive.google.com/file/d/1fHC5zpqPPYdKkX6pOdqnV_Q87iosCTVr/view?usp=sharing",
        type: "Certificate",
        date: "31/01/2023",
        dateTime: "2023-01-31",
        icon: certificateIcon
    },
    {
        name: "First Aid (Level 3)",
        from: "Lilly Angel",
        link: "#0",
        type: "Certificate",
        date: "31/01/2023",
        dateTime: "2023-01-31",
        icon: certificateIcon
    },
    {
        name: "Intermediate SQL",
        from: "datacamp",
        link: "https://drive.google.com/file/d/1_IZJ_uRZQnhOnnXVaZh-sCf61RLaH3M5/view?usp=sharing",
        type: "Accomplishment",
        date: "13/11/2022",
        dateTime: "2022-11-13",
        icon: starIcon
    },
    {
        name: "Introduction to SQL",
        from: "datacamp",
        link: "https://drive.google.com/file/d/1P1ZMAo3JdUJhT2QYr7vBe_f_dp9Rb2q_/view?usp=sharing",
        type: "Accomplishment",
        date: "27/10/2022",
        dateTime: "2022-10-27",
        icon: starIcon
    },
    {
        name: "Introduction to Python",
        from: "datacamp",
        link: "https://drive.google.com/file/d/1_ywNQaRC2gpmbguTFKH0ewSOktH1cEE9/view?usp=sharing",
        type: "Accomplishment",
        date: "26/10/2022",
        dateTime: "2022-10-26",
        icon: starIcon
    },
    {
        name: "Sandwich Artistry 2",
        from: "Subway",
        link: "https://drive.google.com/file/d/1sb5pSQu1SSUWJF6aRP4Ddsndt-8zPuo8/view?usp=sharing",
        type: "Certificate",
        date: "23 / 09 / 2022",
        dateTime: "2022-09-23",
        icon: certificateIcon
    },
    {
        name: "Food Safety – Allergens",
        from: "Subway",
        link: "https://drive.google.com/file/d/1EZcLrHahWKcneelOC8swJdUwESt4DdFi/view?usp=sharing",
        type: "Certificate",
        date: "23 / 09 / 2022",
        dateTime: "2022-09-23",
        icon: certificateIcon
    },
    {
        name: "Sandwich Artistry",
        from: "Subway",
        link: "https://drive.google.com/file/d/1DF_5V5zknM1SZMKj2WgjkK-k3P43RdL5/view?usp=sharing",
        type: "Certificate",
        date: "11 / 09 / 2022",
        dateTime: "2022-09-11",
        icon: certificateIcon
    },
    {
      name: "Project Management Fundamentals",
      from: "ITonlineLearning",
      link: "https://drive.google.com/file/d/1MruidpbcAGeSNvpZZFU4GuMTzMFkMi1M/view?usp=sharing",
      type: "Certificate",
      date: "10 / 09 / 2022",
      dateTime: "2022-09-10",
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
                          <h4 className={`${styles.onlineTitle}`}> {data.name} </h4>
                          <div className={`${styles.online}`}>
                              <div className={`${styles.onlineInner}`}>
                                <h5 className={`${styles.onlineLinkText}`}>
                                  <a target="_blank" href={`${data.link}`}> {data.from} </a>
                                </h5>
                                <h6 className={`${styles.textInner} text-muted mt-2`}> {data.type} </h6>
                              </div>
                                <small className={`${styles.dateText}`}>
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
              {certificates.slice(2, 28).map((data, index) => (
                  <div key={index}>
                      <div className={`${styles.media} mb-2`}>
                          {data.icon}
                          <div className={`${styles.mediaBody}`}>
                              <h4 className={`${styles.onlineTitle}`}> {data.name} </h4>
                              <div className={`${styles.online}`}>
                                  <div className={`${styles.onlineInner}`}>
                                    <h5 className={`${styles.onlineLinkText}`}>
                                      <a target="_blank" href={`${data.link}`}> 
                                        {data.from} 
                                      </a>
                                    </h5>
                                    <h6 className={`${styles.textInner} text-muted mt-2`}> {data.type} </h6>
                                  </div>
                                    <small className={`${styles.dateText}`}>
                                      <time dateTime={`${data.dateTime}`}> 
                                        {data.date} 
                                      </time>
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
