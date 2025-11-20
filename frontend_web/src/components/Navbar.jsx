import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import TextField from '../components/TextField';
import '../App.css';

const Navbar = ({setIsMenuOpen, isMenuOpen}) => {
    handleMenuFunction = () => {
        return isMenuOpen ? <XMarkIcon className='xl:hidden size-15 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}/> :
        <Bars3Icon className='xl:hidden size-15 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />;
    };

    <div className="bg-primary-heavy p-5 h-30 flex items-center justify-between drop-shadow-md">
        <h1 className=' text-5xl font-bold text-dark-heavy hover:cursor-pointer'>100</h1>

        <ul className=" hidden xl:flex flex-row gap-8 text-dark-heavy text-2xl">
            <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer font-bold' >Home</li>
            <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/explore"}>Explore</Link></li>
            <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
            <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
        </ul>

        <TextField placeholder="Search..." />
        {handleMenuFunction()}

        {/* Navigation drawer */}
        <div className={`absolute xl:hidden top-24 left-0 w-full bg-primary-heavy flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "hidden"}`}
            style={{ transition: "transform 0.3s ease, opacity 0.3 ease" }}>
            <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer font-bold'>Home</li>
            <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/explore"}>Explore</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
            <li className='list-none w-full flex justify-center pb-5'><TextField placeholder="Search..." /></li>
        </div>
    </div>
};

export default Navbar;