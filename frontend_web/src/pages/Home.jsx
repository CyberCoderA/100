import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import TextField from '../components/TextField';
import '../App.css';

const Home = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <div className="bg-primary-heavy p-5 h-30 flex items-center justify-between drop-shadow-md">
                <h1 className=' text-5xl font-bold text-dark-heavy hover:cursor-pointer'>100</h1>

                <ul className=" hidden xl:flex flex-row gap-8 text-dark-heavy text-2xl">
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer' >Home</li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><a href="#">Explore</a></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
                </ul>

                <TextField placeholder="Search..." />
                <Bars3Icon className='mr-10 xl:hidden size-15 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                
                <div className={`absolute xl:hidden top-24 left-0 w-full bg-primary-heavy flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "hidden"}`} 
                style={{transition: "transform 0.3s ease, opacity 0.3 ease"}}>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer font-bold'>Home</li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'>Explore</li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
                    {/* <li className='list-none w-full flex justify-center pb-5'><TextField placeholder="Search..." /></li> */}
                </div>
            </div>

            <div className='background-img flex justify-center items-center'>
                <div className=' flex flex-col items-center text-center'>
                    <h1 className='text-white text-3xl font-bold italic mb-10 xl:text-7xl'>A hundred poem, just for you...</h1>
                    <p className='text-gray-200 mb-30 w-150 xl:text-4xl xl:w-230'>100 is a collection of untold stories, insightful proses, and captivating rhythms that ensnares the mind. Read the poem of your heart to your delight.</p>

                    <button className="text-white font-bold w-50 border-2 xl:text-4xl p-5 xl:w-100 rounded-4xl hover:cursor-pointer hover:bg-white hover:text-dark-heavy hover:transition delay-100 duration-300 ease-in-out">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Home;