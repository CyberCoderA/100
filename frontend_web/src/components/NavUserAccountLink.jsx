import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavUserAccountLink = ({ isLoggedIn, activeRoute }) => {
    const navRoutes = ['/login', '/register'];

    function formatRouteToText(route) {
        return route.replace('/', "").charAt(0).toUpperCase() + route.substring(2);
    }

    function handleRoutes() {
        return navRoutes.map((route, i) => {
            return (
                <>
                    {i == navRoutes.length / 2 ? <h1 className='text-4xl font-bold'>|</h1> : ''}
                    <Link to={route} key={i}><li className={`p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all xl:text-3xl cursor-pointer ${route == activeRoute ? 'font-bold' : ''}`}>{formatRouteToText(route)}</li></Link>
                </>
            ) 
        })
    }

    function NotLoginNavActions() {
        return (
            <ul className='hidden xl:flex flex-row items-center gap-3 text-dark-heavy text-2xl h-20'>
                {handleRoutes()}
            </ul>
        );
    }

    function LoginNavActions() {
        return (
            <div className="flex flex-row gap-4 items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="h-20" alt="account_profile" />
                <h1 className="text-3xl font-bold text-dark-heavy">User</h1>
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