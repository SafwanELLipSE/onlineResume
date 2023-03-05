import React from 'react';
// All components
import Card from 'react-bootstrap/Card';

//styles
import styles from './ProfileImage.module.css';

// image
import image from '../../assets/images/CV.jpg';

const ProfileImage = () => {
    return (
        <div>
            <Card className='mb-3'>
                <img src={image} className={`rounded-circle my-3 mx-auto d-block ${styles.image}`} alt="safwan"/>
            </Card>
        </div>
    );
}

export default ProfileImage;
