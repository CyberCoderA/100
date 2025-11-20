import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
import TextField from '../components/TextField';
import '../App.css'
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar activeRoute="/contact"/>

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