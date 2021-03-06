import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, picture, description, balance } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='g-2 col-sm-12 col-md-6 col-lg-4 '>
            <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "20rem" }}>
                <img src={picture} className="card-img-top img-fluid" alt="..." />
                <div className='card-body'>
                    <h5 className="card-title">{name}</h5>
                    <p>Price:{balance}</p>
                    <p className="card-text">{description}</p>
                    {/* <a href="#"></a> */}
                    <Link to="/checkout">
                    <button onClick={() => navigateToServiceDetail(id)} className='btn btn-success text-white'>Buy : {name} pack</button>
                </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Service;