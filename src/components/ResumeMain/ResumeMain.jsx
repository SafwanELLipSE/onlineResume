import React, { useRef } from 'react'

// All components
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';

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
import styles from "./ResumeMain.module.css";

export default function ResumeMain() {
    const componentRef = useRef();

    const width = window.innerWidth;

    const breakpoint = 500;

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

    const buttonSection = (
        <div className={`mt-4 mb-3 ${styles.groupButtonArea}`}>
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
    );

    const leftSide = (
        <Col lg={4} md={4} sm={12}>
            <LeftSection />
            {buttonSection}
        </Col>
    );

    const rightSide = (
        <Col lg={8} md={8} sm={12}>
            <RightSection />
        </Col>
    );

    return (
        <div>
            <div ref={componentRef} className='container-md mt-4'>
                <Row className='mt-3'>
                    {width > breakpoint ? leftSide : null }
                    {rightSide}
                    {width < breakpoint ? leftSide : null }
                </Row>
            </div>
        </div>
    )
}
