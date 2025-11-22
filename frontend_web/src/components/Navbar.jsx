import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavUserAccountLink from './NavUserAccountLink.jsx';
import '../App.css';

const Navbar = ({ activeRoute, isLoggedIn }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const siteRoutes = ["/", "/explore", "/about", "/contact"];

    function handleMenuFunction() {
        return isMenuOpen ? <XMarkIcon className='xl:hidden size-15 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} /> :
            <Bars3Icon className='xl:hidden size-15 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />;
    };

    function formatRouteToText(route) {
        return route == "/" ? "Home" : route.replace('/', "").charAt(0).toUpperCase() + route.substring(2);
    }

    function renderRoutes() {
        return siteRoutes.map((route, i) => {
            if (route == activeRoute) {
                return (<Link to={route} key={i}><li className='p-4 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer xl:text-4xl font-bold'>{formatRouteToText(route)}</li></Link>);
            } else {
                return (<Link to={route} key={i}><li className='p-4 hover:bg-gray-600 hover:text-white rounded-md transition-all xl:text-3xl cursor-pointer'>{formatRouteToText(route)}</li></Link>);
            }
        });
    }

    function renderMobileRoutes() {
        return siteRoutes.map((route, i) => {
            if (i == activeRoute) {
                return <Link to={route} key={i}><li className='w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer font-bold'>{formatRouteToText(route)}</li></Link>
            } else {
                return <Link to={route} key={i}><li className='w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'>{formatRouteToText(route)}</li></Link>
            }
        });
    }

    return (
        <div className="bg-primary-heavy p-5 h-24 xl:h-32 flex items-center justify-between drop-shadow-md fixed top-0 left-0 w-full z-50 overflow-hidden">
            <h1 className='text-3xl xl:text-5xl font-bold text-dark-heavy hover:cursor-pointer'>100</h1>

            <ul className="hidden xl:flex flex-row items-center gap-6 text-dark-heavy text-xl xl:text-2xl h-full">
                {renderRoutes()}
            </ul>

            <NavUserAccountLink isLoggedIn={isLoggedIn} activeRoute={activeRoute} />

            {handleMenuFunction()}

            {/* Navigation drawer */}
            <ul className={`absolute xl:hidden top-24 left-0 w-full bg-primary-heavy flex flex-col items-center gap-6 font-semibold text-lg transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-100" : "hidden"}`}>
                {renderMobileRoutes()}
            </ul>
        </div>
    );
};

export default Navbar;