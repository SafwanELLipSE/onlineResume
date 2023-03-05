import React, { useState } from 'react'

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from "./Workshop.module.css";

export default function Workshops() {
  const [open, setOpen] = useState(false);

  const wrench = (
    <FontAwesomeIcon icon={faWrench} className={`fa-3x text-primary me-3`}/>
  );

  const workshops = [
    {
        name: "MatLab",
        from: "Department of EEE at Independent University, Bangladesh (IUB)",
        link: "https://drive.google.com/file/d/1ZVyGbggt5ss8_QvwRhfxeUe0w-RgrCLV/view",
        startDate: "02 / 2017",
        endDate: "02 / 2017",
        dateTimeStart: "2018-07",
        dateTimeEnd: "2018-07",
        icon: wrench
    },
    {
        name: "Arduino Based Embedded System",
        from: "Department of EEE at Bangladesh University of Business and Technology(BUBT)",
        link: "https://drive.google.com/file/d/1b6KJQOls63g4DeSg8rGnZgL7ruylecA7/view",
        startDate: "27 / 12 / 2017",
        endDate: "28 / 12 / 2017",
        dateTimeStart: "2017-12-27",
        dateTimeEnd: "2017-12-28",
        icon: wrench
    },
    {
        name: "Line Following Robot",
        from: "Department of EEE at Independent University, Bangladesh (IUB)",
        link: "https://drive.google.com/file/d/1b6KJQOls63g4DeSg8rGnZgL7ruylecA7/view",
        startDate: "18 / 03 / 2018",
        endDate: "19 / 03 / 2018",
        dateTimeStart: "2018-03-18",
        dateTimeEnd: "2018-03-19",
        icon: wrench
    },
    {
        name: "Obstacle Robot",
        from: "Department of EEE at Independent University, Bangladesh (IUB)",
        link: "#0",
        startDate: "15 / 03 / 2018",
        endDate: "15 / 03 / 2018",
        dateTimeStart: "2018-03-15",
        dateTimeEnd: "2018-03-15",
        icon: wrench
    },
    {
        name: "Illustrator by Debuggers Studio",
        from: "Department of CSE at Independent University, Bangladesh (IUB)",
        link: "#0",
        startDate: "04 / 10 / 2018",
        endDate: "04 / 10 / 2018",
        dateTimeStart: "2018-10-04",
        dateTimeEnd: "2018-10-04",
        icon: wrench
    },
    {
        name: "WordPress by Debuggers Studio",
        from: "Department of CSE at Independent University, Bangladesh (IUB)",
        link: "#0",
        startDate: "18 / 10 / 2018",
        endDate: "18 / 10 / 2018",
        dateTimeStart: "2018-10-18",
        dateTimeEnd: "2018-10-18",
        icon: wrench
    },
    {
        name: "Andriod",
        from: "Department of CSE at Independent University, Bangladesh (IUB)",
        link: "#0",
        startDate: "09 / 2018",
        endDate: "11 / 2018",
        dateTimeStart: "2018-09",
        dateTimeEnd: "2018-11",
        icon: wrench
    },
    {
        name: "SketchUp",
        from: "Department of CSE at Independent University, Bangladesh (IUB)",
        link: "#0",
        startDate: "08 / 2019",
        endDate: "08 / 2019",
        dateTimeStart: "2019-08",
        dateTimeEnd: "2019-11",
        icon: wrench
    }
  ];

  return (
    <div>
      <Card className='mb-3'>
        <Card.Header>
          <h1 className='text-center'> Awards </h1>
        </Card.Header>
        <Card.Body>
          {workshops.slice(0, 2).map((data, index) => (
              <div key={index}>
                  <div className={`${styles.media} mb-2`}>
                      {data.icon}
                      <div className={`${styles.mediaBody}`}>
                          <h4 className={`mb-1`}> {data.name} </h4>
                          <div className={`${styles.workshop}`}>
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
              {workshops.slice(2, 8).map((data, index) => (
                  <div key={index}>
                      <div className={`${styles.media} mb-2`}>
                          {data.icon}
                          <div className={`${styles.mediaBody}`}>
                              <h4 className={`mb-1`}> {data.name} </h4>
                              <div className={`${styles.workshop}`}>
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
