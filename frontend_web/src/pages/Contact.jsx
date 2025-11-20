import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
import TextField from '../components/TextField';
import '../App.css'


const Contact = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <div className="bg-primary-heavy p-5 h-30 flex items-center justify-between drop-shadow-md">
                <h1 className=' text-5xl font-bold text-dark-heavy hover:cursor-pointer'>100</h1>

                <ul className=" hidden xl:flex flex-row gap-8 text-dark-heavy text-2xl">
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer' ><Link to={"/"}>Home</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/explore"}>Explore</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer font-bold'>Contact</li>
                </ul>

                <TextField placeholder="Search..." />
                <Bars3Icon className='xl:hidden size-15 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                
                <div className={`absolute xl:hidden top-24 left-0 w-full bg-primary-heavy flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "hidden"}`} 
                style={{transition: "transform 0.3s ease, opacity 0.3 ease"}}>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/"}>Home</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/explore"}>Explore</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer font-bold'>Contact</li>
                    {/* <li className='list-none w-full flex justify-center pb-5'><TextField placeholder="Search..." /></li> */}
                </div>
            </div>

            <div className='flex flex-col justify-center items-center h-full gap-20 m-10 md:flex-row'>
                <div className="rounded-full h-60 w-60 bg-white-paste md:h-100 md:w-100"></div>
                <div className='flex flex-col md:mt-10'>
                    <h1 className="text-3xl xl:text-7xl text-dark-heavy font-bold">Adrian Pueblo</h1>
                    <p className='text-dark-heavy mb-30 w-80 mt-5 xl:text-4xl xl:w-230'>
                    I’m a 4<sup>th</sup> year IT student creating projects to build up my portfolio. You can contact me from the provided information below.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact