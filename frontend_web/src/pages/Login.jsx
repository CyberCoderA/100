import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import TextField from '../components/TextField';
import InputField from '../components/InputField';
import '../App.css';

const Login = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='h-screen flex flex-col'>
            {/* Navbar */}
            <div className="bg-primary-heavy p-5 h-30 flex items-center justify-between drop-shadow-md">
                <h1 className=' text-5xl font-bold text-dark-heavy hover:cursor-pointer'>100</h1>

                <ul className=" hidden xl:flex flex-row gap-8 text-dark-heavy text-2xl">
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/"}>Home</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/explore"}>Explore</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
                    <li className='p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
                </ul>

                <TextField placeholder="Search..." />
                <Bars3Icon className='xl:hidden size-15 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />

                <div className={`absolute xl:hidden top-24 left-0 w-full bg-primary-heavy flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "hidden"}`}
                    style={{ transition: "transform 0.3s ease, opacity 0.3 ease" }}>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/"}>Home</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/explore"}>Explore</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/about"}>About</Link></li>
                    <li className='list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
                    {/* <li className='list-none w-full flex justify-center pb-5'><TextField placeholder="Search..." /></li> */}
                </div>
            </div>

            {/* Body */}
            <div className='background-img flex justify-center items-center'>
                {/* Login Modal */}
                <div className="flex flex-col justify-between xl:justify-around p-5 w-70 h-100 bg-white rounded-3xl border-1 xl:w-180 xl:h-180">
                    <h1 className='text-dark-heavy self-center font-bold text-2xl xl:text-6xl'>USER LOGIN</h1>
                    <div>
                       <InputField title="Email Address" placeholder="someone@gmail.com" /> 
                       <br/>
                       <InputField title="Password" placeholder="12xeP3aq0489" /> 
                       <p className="text-dark-light italic text-end mt-2 hover:text-dark-heavy transition-all cursor-pointer xl:text-2xl">Forgot Password?</p>
                    </div>
                    <div>
                        <button className='w-full h-10 text-dark-heavy font-bold bg-primary-light border-2 rounded-xl hover:cursor-pointer hover:bg-primary-heavy
                         xl:text-2xl xl:h-16 xl:border-3'>LOGIN</button>
                        <Link to={'/register'}><p className=" text-dark-light italic text-center mt-2 link-heavy xl:text-2xl xl:mt-5">No Account? Create one!</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;