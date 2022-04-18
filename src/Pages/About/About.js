import React from 'react';
import myself from '../../image/about me/My-self.jpg';
import './About.css';

const About = () => {
    return (
        <div className='container mt-5 mb-5 flex-column-reverse flex-md-row d-flex  justify-content-between align-items-center about'>
            <div className='about-font'>
                <h1 className=''>My Goal</h1>
                <p className='fw-bold text-start'>
                    My self Md Nur Hossain Shanto , I am now a student of <span style={{color:'#af5eff'}} >Programming Hero</span>. I had a dream for many days that I would do such things without any hesitation. Coming here is in the words of my elder brother, as a result of which I am able to do these things today even though I have to go a long way. I wish I could be a better web developer since I'm on this path. I will continue my best efforts to fulfill my dream in the coming days.
                </p>
            </div>
            <div>
                <img src={myself} alt="" />
            </div>
        </div>
    );
};

export default About;