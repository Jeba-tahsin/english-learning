import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className=' d-flex  justify-content-center align-items-center pt-5'>
            <h1 className='english'>Learn English With Us</h1>
            </div>
            <div>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/service'>Service</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;