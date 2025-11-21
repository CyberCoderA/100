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
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_1144760&psig=AOvVaw2OBV6_DdhU1LpCoQZORLMg&ust=1763780275449000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDS9-SfgpEDFQAAAAAdAAAAABAE" alt="account_profile" />
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