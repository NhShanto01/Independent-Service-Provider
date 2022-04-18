import React from 'react';
import { Link } from 'react-router-dom';
import Andrew from '../../../image/Andrew.png'
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='container mt-5 mb-5 flex-column flex-md-row d-flex  justify-content-between align-items-centerhome-container'>

                <div className=''>
                        <img src={Andrew} alt="" />
                    </div>

                    <div className=' home-text'>
                        <h2 className='text-success fw-bold mt-5'>I'm Andrew Pilliph</h2>
                        <p className='text-success fs-5'>
                            I am a passionate IT graduate interested in subjects such as Computing and Mathematics, and I have also studied Physics and Chemistry for my A levels. I used to be an academic person, and it felt great when I was able to receive help from my peers, be it my school teacher, friend, or coach.I particularly give focus on clearing the concepts of individuals in every detail. I try to make students think, think about what they read and learn. Making foundation of basics of students stronger is my almost priority.
                        </p>
                        <Link to="/about" className='btn btn-success mt-4 ps-4 pe-4'> About Me</Link>
                    </div>

                </div>
               
            </div>
            <hr className='text-success fw-bold'></hr>
            <Services></Services>
        </div>
    );
};

export default Home;