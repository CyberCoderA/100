import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import TextField from '../components/TextField';
import InputField from '../components/InputField';
import '../App.css';

const Register = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='h-screen flex flex-col'>
            {/* Navbar */}
            <div className="bg-primary-heavy p-5 h-30 flex items-center justify-between drop-shadow-md">
                <h1 className=' text-5xl font-bold text-dark-heavy hover:cursor-pointer'>100</h1>

                <ul className=" hidden xl:flex flex-row gap-8 text-dark-heavy text-2xl">
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/"}>Home</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><a href="#">Explore</a></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
                </ul>

                <TextField placeholder="Search..." />
                <Bars3Icon className='xl:hidden size-15 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />

                <div className={`absolute xl:hidden top-24 left-0 w-full bg-primary-heavy flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "hidden"}`}
                    style={{ transition: "transform 0.3s ease, opacity 0.3 ease" }}>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/"}>Home</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'>Explore</li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
                    {/* <li className='list-none w-full flex justify-center pb-5'><TextField placeholder="Search..." /></li> */}
                </div>
            </div>

            {/* Body */}
            <div className='background-img flex justify-center items-center'>
                {/* Register Modal */}
                <div className="bg-white p-5 w-70 h-110 rounded-2xl md:h-150 md:w-250 xl:h-200 xl:w-350 xl:rounded-4xl">
                    <div><h1 className='text-xl text-center font-bold text-dark-heavy xl:text-5xl'>USER REGISTRATION</h1></div>
                    <div className='mt-10 gap-20 flex flex-row'>
                        <div className='w-1/2 flex flex-col gap-10'>
                            <InputField title="Full Name" placeholder="Jesus H. Roosevelt" />
                        </div>
                        <div className='w-1/2 flex flex-col gap-10'>
                            <InputField title="Email Address" placeholder="someone@gmail.com" />
                            <InputField title="Password" placeholder="12xeP3aq0489" />
                            <InputField title="Confirm Password" placeholder="12xeP3aq0489" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Register;