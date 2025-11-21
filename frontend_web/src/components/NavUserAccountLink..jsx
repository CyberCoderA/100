import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavUserAccountLink = () => {
    return (
        <ul className='flex flex-row gap-10'>
            <Link to={"/login"}><li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all xl:text-3xl cursor-pointer border-left-black'>Login</li></Link>
            <Link to={"/register"}></Link>
        </ul>
    );
}

export default NavUserAccountLink;