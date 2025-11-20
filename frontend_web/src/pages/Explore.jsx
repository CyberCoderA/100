import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import TextField from '../components/TextField';
import '../App.css';
import CardPoem from '../components/CardPoem';
import Navbar from '../components/Navbar';

const Explore = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="h-screen flex flex-col">
            <Navbar activeRoute="/explore"/>

            <div className='flex flex-col gap-5 p-5'>
                <h1 className="text-3xl xl:text-7xl text-dark-heavy font-bold mt-5 mb-5">Trending Poems</h1>
                <div className=''>
                    <CardPoem />
                </div>
            </div>
        </div>
    )
}

export default Explore;