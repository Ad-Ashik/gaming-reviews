import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='img-404 mt-1'>
            <h2 className="home-404">Go <span className='text-danger'>to</span> <Link className='home-link' to='/'>Home</Link></h2>
        </div>
    );
};

export default NotFound;