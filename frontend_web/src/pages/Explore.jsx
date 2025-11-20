import React, { useState } from 'react';
import '../App.css';
import CardPoem from '../components/CardPoem';
import Navbar from '../components/Navbar';

const Explore = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar activeRoute="/explore"/>

            <div className='flex flex-col gap-5 p-5'>
                <h1 className="text-3xl xl:text-7xl text-dark-heavy font-bold mt-5 mb-5">Trending Poems</h1>
                <div className=''>
                    <CardPoem avatar="blank" title="The Girl" writer="Adrian S. Pueblo" favoriteCount={11}/>
                </div>
            </div>
        </div>
    )
}

export default Explore;