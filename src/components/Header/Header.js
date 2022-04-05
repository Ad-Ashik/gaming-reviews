import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='mt-4 fs-5'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <CustomLink to="/" className="nav-link">Home</CustomLink>
                </li>
                <li className="nav-item">
                    <CustomLink to="/reviews" className="nav-link">Reviews</CustomLink>
                </li>
                <li className="nav-item">
                    <CustomLink to="/dashboard" className="nav-link">Dashboard</CustomLink>
                </li>
                <li className="nav-item">
                    <CustomLink to="/blogs" className="nav-link">Blogs</CustomLink>
                </li>
                <li className="nav-item">
                    <CustomLink to="/about" className="nav-link">About</CustomLink>
                </li>
            </ul>
        </nav>

    );
};

export default Header;