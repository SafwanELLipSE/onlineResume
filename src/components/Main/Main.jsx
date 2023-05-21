import React, { useRef } from 'react'

// All components
import PersonalStatement from '../PersonalStatement/PersonalStatement';
import ProfileImage from '../ProfileImage/ProfileImage';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Language from '../Language/Language';
import Skills from '../Skills/Skills';
import Software from '../Software/Software';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Project/Project';
import AdditionalActivities from '../AdditionalActivities/AdditionalActivities';
import Awards from '../Award/Award';
import Workshops from '../Workshop/Workshop';
import OnlineCertificates from '../OnlineCertificate/OnlineCertificate';
import Hobby from '../Hobby/Hobby';

// Bootstraps
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

// ReactToPrint
import { useReactToPrint } from 'react-to-print';

//Document Link
import resume from '../../assets/Resume/K-M-Safwan-Hassan-Resume.docx';

// styles
import styles from "./Main.module.css";

export default function Main() {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'K-M-Safwan-Hassan-Resume'
    });

    const downloadResume = () => {
        const element = document.createElement("a");
        element.href = resume;
        element.download = "K M Safwan Hassan - Resume.docx";
        element.click();
    };

    return (
        <div>
            <div ref={componentRef} className='container-md mt-4'>
                <Row className='mt-3'>
                    <Col lg={4} md={4} sm={12}>
                        <ProfileImage />
                        <ProfileInfo />
                        <Skills />
                        <Software />
                        <Hobby />
                        <Language />
                        <div className={`mt-4 ${styles.groupButtonArea}`}>
                            <Button 
                                variant="outline-primary rounded-pill" 
                                className={`${styles.pulse} me-3`} 
                                value="download" 
                                onClick={downloadResume}
                            >
                                Resume <FontAwesomeIcon icon={faFileArrowDown} />
                            </Button>
                            <Button variant="outline-primary rounded-pill" className={`${styles.pulse}`} onClick={handlePrint}>
                                <FontAwesomeIcon icon={faDownload} />
                            </Button>
                        </div>
                    </Col>
                    <Col lg={8} md={8} sm={12}>
                        <PersonalStatement />
                        <WorkExperience />
                        <Education />
                        <Projects/>
                        <OnlineCertificates />
                        <AdditionalActivities />
                        <Awards />
                        <Workshops />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
