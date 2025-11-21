import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavUserAccountLink = () => {
    return (
        <ul className='hidden xl:flex flex-row items-center gap-8 text-dark-heavy text-2xl h-20'>
            <Link to={"/login"}><li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all xl:text-3xl cursor-pointer border-left-black'>Login</li></Link>
            <Link to={"/register"}><li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all xl:text-3xl cursor-pointer'>Register</li></Link>
        </ul>
    );
}

export default NavUserAccountLink;