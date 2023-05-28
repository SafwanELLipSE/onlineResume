import React, { useState } from 'react'

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from "./AdditionalActivities.module.css";

export default function AdditionalActivities() {
  const [open, setOpen] = useState(false);

  const handshakeAngle = (
    <FontAwesomeIcon icon={faHandshakeAngle} className={`fa-3x text-primary me-3`}/>
  );

  const activities = [
    {
        name: "Member of Jukti Club",
        from: "Jukti Club at Independent University, Bangladesh(IUB)",
        icon: handshakeAngle
    },
    {
        name: "Volunteer",
        from: "Physics Olympiad of Independent University, Bangladesh(IUB) in 2017",
        icon: handshakeAngle
    }
  ];

  return (
    <div>
      <Card className='mb-3'>
        <Card.Header>
          <h1 className={`text-center ${styles.cardHeaderText}`}> 
            Additional Activities 
          </h1>
        </Card.Header>
        <Card.Body>
          {activities.slice(0, 1).map((data, index) => (
            <div key={index}>
              <div className={`${styles.media} mb-2`}>
                {data.icon}
                <div className={`${styles.mediaBody}`}>
                    <div className={`${styles.mediaBody}`}>
                      <h4 className={`mb-1`}> {data.name} </h4>
                      <div className={`${styles.additionalActivities}`}>
                        <h5 className="mb-0">
                          <a href="#0">{data.from}</a>
                        </h5>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          ))}

          <Collapse in={open}>
            <div id="collapse-addition-activities">
              {activities.slice(1, 2).map((data, index) => (
                <div key={index}>
                  <div className={`${styles.media} mb-2`}>
                    {data.icon}
                    <div className={`${styles.mediaBody}`}>
                        <div className={`${styles.mediaBody}`}>
                          <h4 className={`mb-1`}> {data.name} </h4>
                          <div className={`${styles.additionalActivities}`}>
                            <h5 className="mb-0">
                              <a href="#0">{data.from}</a>
                            </h5>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Collapse>
          <Button onClick={() => setOpen(!open)} className={`float-end ${styles.blueOutlineBtn}`} aria-controls="collapse-addition-activities" aria-expanded={open}>
              Show All
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
