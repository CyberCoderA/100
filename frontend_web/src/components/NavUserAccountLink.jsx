import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavUserAccountLink = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            <div className="flex flex-row gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="h-20" alt="account_profile" />
                <h1 className="text-xl font-bold text-dark-heavy">User</h1>
            </div>
        );
    }

    function handleIfUserIsLogin() {
        return isLoggedIn ? LoginNavActions() : NotLoginNavActions();
    }

    return (
        <>
            {handleIfUserIsLogin()}
        </>
    )
};

export default NavUserAccountLink;