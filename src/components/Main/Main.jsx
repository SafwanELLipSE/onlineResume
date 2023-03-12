import React from 'react'

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

// Bootstraps
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hobby from '../Hobby/Hobby';


export default function Main() {
    return (
        <div>
            <div className='container-md mt-4'>
                <Row className='mt-3'>
                    <Col lg={4} md={4} sm={12}>
                        <ProfileImage />
                        <ProfileInfo />
                        <Skills />
                        <Software />
                        <Hobby/>
                        <Language />
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
