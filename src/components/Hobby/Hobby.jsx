import React from 'react';

// Bootstraps 5
import Card from 'react-bootstrap/Card';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGuitar, faMusic, faGamepad, faCat, faBug, faChess, faFilm, faBook, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

// React Icon
import { GiMeditation } from "react-icons/gi";

// styles
import styles from "./Hobby.module.css";

const Hobby = () => {
    const hobbies = [
        {
            text: "Songs and Music",
            icon: faMusic
        },
        {
            text: "Gamer",
            icon: faGamepad
        },
        {
            text: "Loves Cat",
            icon: faCat
        },
        {
            text: "Loves Coding",
            icon: faBug
        },
        {
            text: "Chess",
            icon: faChess
        },
        {
            text: "Movies and Series",
            icon: faTicket
        },
        {
            text: "Read History and Science Books",
            icon: faBook
        },
        {
            text: "Read Manga and Comic",
            icon: faReadme
        },
        {
            text: "Love Anime (Otaku)",
            icon: faFilm
        }
    ]
    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className={`text-center ${styles.cardHeaderText}`}> 
                        <FontAwesomeIcon icon={faGuitar} className={`text-primary me-2`}/> Hobbies 
                    </h1>
                </Card.Header>
                <Card.Body>
                    <div className={`${styles.media} mb-1`}>
                        <ul className={`${styles.mediaBody} list-unstyled mt-3`}>
                            {hobbies.map((data, index) => (
                                <li key={index}>
                                    <FontAwesomeIcon icon={data.icon} className={`text-muted ${styles.iconLeftSpacing}`} /> {data.text}
                                </li>
                            ))}
                            <li><GiMeditation className={`text-muted ${styles.iconLeftSpacing}`} /> Meditation</li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Hobby;
