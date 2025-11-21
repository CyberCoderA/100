import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavUserAccountLink = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function NotLoginNavActions() {
        return (
            <ul className='hidden xl:flex flex-row items-center gap-3 text-dark-heavy text-2xl h-20'>
                <Link to={"/login"}><li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all xl:text-3xl cursor-pointer'>Login</li></Link>
                <li className="xl:text-xl"> | </li>
                <Link to={"/register"}><li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all xl:text-3xl cursor-pointer'>Register</li></Link>
            </ul>
        )
    }

    function handleIfUserIsLogin() {
        return isLoggedIn ? NotLoginNavActions : <p>Account</p>;
    }

    return (
        {handleIfUserIsLogin()}
    )
};

export default NavUserAccountLink;