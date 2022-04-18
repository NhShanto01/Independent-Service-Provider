import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../image/404/traffic-sign-page-404.png';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <Link to="/home" className='btn btn-success'> Back To Home</Link>
        </div>
    );
};

export default NotFound;