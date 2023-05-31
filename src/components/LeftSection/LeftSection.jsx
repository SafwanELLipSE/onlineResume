import React from 'react';

// Components
import ProfileImage from '../ProfileImage/ProfileImage';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Language from '../Language/Language';
import Skills from '../Skills/Skills';
import Software from '../Software/Software';
import Hobby from '../Hobby/Hobby';

// Styles
import styles from './LeftSection.module.css';

const LeftSection = () => {
    return (
        <div>
            <ProfileImage />
            <ProfileInfo />
            <Skills />
            <Software />
            <Hobby />
            <Language />
        </div>
    );
}

export default LeftSection;
