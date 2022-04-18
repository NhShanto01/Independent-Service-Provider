import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            
            <Services></Services>
        </section>
    );
};

export default Home;