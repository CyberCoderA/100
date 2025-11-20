import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import TextField from '../components/TextField';
import '../App.css';

const Navbar = ({ activeRoute }) => {
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
        return siteRoutes.map((i) => {
            if (i == activeRoute) {
                return (<Link to={i}><li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer font-bold'>{formatRouteToText(i)}</li></Link>);
            } else {
                return (<Link to={i}><li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'>{formatRouteToText(i)}</li></Link>);
            }
        })
    }

    return (
        <div className="bg-primary-heavy p-5 h-30 flex items-center justify-between drop-shadow-md">
            <h1 className='text-xl font-bold text-dark-heavy hover:cursor-pointer'>100</h1>

            <ul className="hidden xl:flex flex-row gap-8 text-dark-heavy text-2xl h-20">
                {renderRoutes()}
            </ul>

            <TextField placeholder="Search..." />
            {handleMenuFunction()}

            {/* Navigation drawer */}
            <div className={`absolute xl:hidden top-24 left-0 w-full bg-primary-heavy flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "hidden"}`}
                style={{ transition: "transform 0.3s ease, opacity 0.3 ease" }}>
                <Link to={"/"}><li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer font-bold'>Home</li></Link>
                <Link to={"/explore"}><li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'>Explore</li></Link>
                <Link to={"/about"}><li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'>About</li></Link>
                <Link to={"/contact"}><li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'>Contact</li></Link>
                <li className='list-none w-full flex justify-center pb-5'><TextField placeholder="Search..." /></li>
            </div>
        </div>
    )
};

export default Navbar;