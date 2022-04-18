import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center p-3 text-light bg-success mt-3 footer'>
            <p><small>Copyright &copy; {year} <b>Edu-Phillip</b> All Rights Reserved</small></p>
        </footer>
    );
};

export default Footer;