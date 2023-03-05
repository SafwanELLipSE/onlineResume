import React, { useState } from 'react'

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from "./Award.module.css";

export default function Awards() {
  const [open, setOpen] = useState(false);

  const awardIcon = (
    <FontAwesomeIcon icon={faAward} className={`fa-3x text-primary me-3`}/>
  );

  const awards = [
    {
        name: "Renewable Energy",
        from: "School of Environmental Science and Management(SESM) at Independent University, Bangladesh(IUB)",
        link: "https://drive.google.com/file/d/1RB0rcuTVRDbAxrNuWCR21GnPVb8gTJKD/view",
        startDate: "27 / 06 / 2018",
        endDate: "28 / 06 / 2018",
        dateTimeStart: "2018-06-27",
        dateTimeEnd: "2018-06-28",
        icon: awardIcon
    },
    {
        name: "Book Reading Competition 2016",
        from: "Independent University, Bangladesh(IUB)",
        link: "https://drive.google.com/file/d/1YT27WLngEL0mm8MZUaXnxPxWf3DMYdum/view?usp=sharing",
        startDate: "08 / 2016",
        endDate: "08 / 2016",
        dateTimeStart: "2016-08",
        dateTimeEnd: "2016-08",
        icon: awardIcon
    }
  ];

  return (
    <div>
      <Card className='mb-3'>
        <Card.Header>
          <h1 className='text-center'> Awards </h1>
        </Card.Header>
        <Card.Body>
          {awards.slice(0, 1).map((data, index) => (
              <div key={index}>
                  <div className={`${styles.media} mb-2`}>
                      {data.icon}
                      <div className={`${styles.mediaBody}`}>
                          <h4 className={`mb-1`}> {data.name} </h4>
                          <div className={`${styles.award}`}>
                              <h5 className="mb-0">
                                  <a target="_blank" href={`${data.link}`}>{data.from}</a>
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
            <div id="collapse-award">
              {awards.slice(1, 2).map((data, index) => (
                  <div key={index}>
                      <div className={`${styles.media} mb-2`}>
                          {data.icon}
                          <div className={`${styles.mediaBody}`}>
                              <h4 className={`mb-1`}> {data.name} </h4>
                              <div className={`${styles.award}`}>
                                  <h5 className="mb-0">
                                      <a target="_blank" href={`${data.link}`}>{data.from}</a>
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
          <Button onClick={() => setOpen(!open)} variant="outline-primary" className='float-end' aria-controls="collapse-award" aria-expanded={open}>
              Show All
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
