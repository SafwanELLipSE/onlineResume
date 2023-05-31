import React from 'react';

// Components\
import PersonalStatement from '../PersonalStatement/PersonalStatement';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Project/Project';
import AdditionalActivities from '../AdditionalActivities/AdditionalActivities';
import Awards from '../Award/Award';
import Workshops from '../Workshop/Workshop';
import OnlineCertificates from '../OnlineCertificate/OnlineCertificate';

// Styles
import styles from './RightSection.module.css';

const RightSection = () => {
    return (
        <div>
            <PersonalStatement />
            <WorkExperience />
            <Education />
            {/* <Projects/> */}
            <OnlineCertificates />
            <AdditionalActivities />
            <Awards />
            <Workshops />
        </div>
    );
}

export default RightSection;
