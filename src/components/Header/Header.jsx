import React from 'react';
import Navbar from './Navbar';
import Slider from '../Slider/Slider';

const Header = () => {
    return (
        <div className='bg-base-100 pt-5'>
            <nav className='w-11/12 mx-auto bg-primary rounded-2xl text-white'><Navbar></Navbar></nav>
           
        </div>
    );
};

export default Header;