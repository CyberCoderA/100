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
        );
    }

    function LoginNavActions() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        );
    }

    function handleIfUserIsLogin() {
        return isLoggedIn ? LoginNavActions : NotLoginNavActions;
    }

    return (
        <>
            {handleIfUserIsLogin()}
        </>
    )
};

export default NavUserAccountLink;