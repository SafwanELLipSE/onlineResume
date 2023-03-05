import React from 'react'
// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

//styles
import "./PersonalStatement.css";

const PersonalStatement = () => {

    const data = {
        name: 'K. M. Safwan Hassan',
        header: 'Web Designer and Developer in front end and back end development. Well-versed in numerous programming languages including HTML5, PHP OOP, JavaScript, CSS, MySQL. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. To make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.',
        second: 'I am interested in learning new skills. Hard-working individual with proficiency in HTML, JavaScript, and CSS, as well as ability to communicate effectively in a team setting, and possessing a strong willingness to learn.',
        blockquote:[
            {
                text: 'Anyone who has never made a mistake has never tried anything new.',
                person: 'Albert Einstein.'
            },
            {
                text: 'Once you stop learning, you start dying.',
                person: 'Albert Einstein.'
            },
            {
                text: 'Imagination is more important than knowlegede.',
                person: 'Albert Einstein.'
            },
            {
                text: 'My goal is not to be better than anyone else, but to be better than I used to be.',
                person: 'Wayne Dyer.'
            },
            {
                text: 'Not until we are lost do we begin to understand ourselves.',
                person: 'Henry David Thoreau.'
            },
            {
                text: 'Success is not Final, Failure is not Fatal: It is the courage to continue that counts.',
                person: 'Winston Churchill.'
            },
            {
                text: 'Nobody can go back and start a new beginning, but anyone can start today and make a new ending.',
                person: 'Maria Robinson.'
            },
            {
                text: 'What I hear, I forgot. What I see, I remember. What I do, I understand.',
                person: 'Confucius.'
            },
        ]
    }

    return (
        <div>
            <Card className='mb-3'>
                <Card.Header>
                    <h1 className='text-center'> {data.name} </h1>
                </Card.Header>
                <Card.Body>
                        <p className={`card-text lead personal-card-text-justify lh-sm fs-4`}>
                            {data.header}
                        </p>
                        <p className={`card-text personal-card-text-justify lh-sm fs-5`}>
                            {data.second}
                        </p>

                        <Carousel className='carouselStyles' slide={false}>
                            {
                                data.blockquote.map((data, index) => (
                                    <Carousel.Item key={index} className="mb-1">
                                        <blockquote className="blockquote text-center d-flex flex-column justify-content-center">
                                            <p className="mb-0">{data.text}</p>
                                            <footer className="blockquote-footer mt-1">{data.person}</footer>
                                        </blockquote>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PersonalStatement;