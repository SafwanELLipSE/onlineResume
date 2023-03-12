import React from 'react';

// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGuitar, faMusic, faGamepad, faCat, faBug, faChess, faFilm, faBook, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
// React Icon
import { GiMeditation } from "react-icons/gi";

// styles
import styles from "./Hobby.module.css";

const Hobby = () => {
    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className='text-center'> <FontAwesomeIcon icon={faGuitar} className={`text-primary me-2`}/> Hobbies </h1>
                </Card.Header>
                <Card.Body>
                    <div className={`${styles.media} mb-1`}>
                        <ul className={`${styles.mediaBody} list-unstyled mt-3`}>
                            <li><FontAwesomeIcon icon={faMusic} className={`text-muted ms-5`} /> Songs and Music</li>
                            <li><FontAwesomeIcon icon={faGamepad} className={`text-muted ms-5`} /> Gamer</li>
                            <li><FontAwesomeIcon icon={faCat} className={`text-muted ms-5`} /> Loves Cat</li>
                            <li><GiMeditation className={`text-muted ms-5`} /> Meditation</li>
                            <li><FontAwesomeIcon icon={faBug} className={`text-muted ms-5`} /> Loves Coding</li>
                            <li><FontAwesomeIcon icon={faChess} className={`text-muted ms-5`} /> Chess</li>
                            <li><FontAwesomeIcon icon={faTicket} className={`text-muted ms-5`} /> Movies and Series</li>
                            <li><FontAwesomeIcon icon={faBook} className={`text-muted ms-5`} /> Read History and Science Books</li>
                            <li><FontAwesomeIcon icon={faReadme} className={`text-muted ms-5`} /> Read Manga and Comic</li>
                            <li><FontAwesomeIcon icon={faFilm} className={`text-muted ms-5`} /> Love Anime (Otaku)</li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Hobby;
