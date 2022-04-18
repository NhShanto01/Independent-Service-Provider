import React from 'react';
import { Carousel } from 'react-bootstrap';
import teacher1 from '../../../image/teacher/elder-professor.png';
import teacher2 from '../../../image/teacher/senior-male-professor.jpg';
import teacher3 from '../../../image/teacher/serious-male-teacher.png';

const Banner = () => {
    return (
        <section className='container'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teacher1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark'>My little study experience bio</h3>
                        <p className='text-dark fw-bold'>I am a proffesor and passionate IT graduate interested in subjects such as Computing and Mathematics  PHd.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teacher2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Suggest for you</h3>
                        <p className='text-dark fw-bold'>I've many experience for many event learnig services.
                            If you wanna learn or  you are interested in any of my services, join now</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teacher3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Learn Experience</h3>
                        <p className='text-dark fw-bold'>I used to be an academic person, and it felt great when I was able to receive help from my peers, be it my school teacher, friend, or coach. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Banner;