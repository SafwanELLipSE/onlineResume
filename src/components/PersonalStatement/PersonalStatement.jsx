import React from 'react'
// Bootstraps 5
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

//styles
import "./PersonalStatement.css";

const PersonalStatement = () => {

    const data = {
        name: 'K. M. Safwan Hassan',
        header: `I have a tremendous desire to design dynamic and visually appealing websites. I am committed to assisting businesses in establishing a strong online presence, and I have a solid foundation in web development technologies and a passion for creating outstanding user experiences. I was searching for a suitable developer position with an ambitious and exciting organization where my abilities will be put to good use while giving me the opportunity to develop professionally.`,
        second: `I've spent my career honing my abilities in HTML, CSS, JavaScript, and numerous frontend frameworks, allowing me to create responsive and user-friendly websites. I am skilled in translating creative thoughts into usable websites that provide seamless navigation and excellent performance across several devices and browsers. I have important information on the development of web applications utilizing Laravel and React Js. I have a variety of knowledge and a strong desire to create high-quality web apps. I'm obsessed with staying up to speed on the latest web technologies and always improving my abilities.`,
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