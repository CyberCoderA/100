import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/Navbar';

const Home = () => {

    return (
        <div className="h-screen flex flex-col">
            <Navbar/>

            <div className='background-img flex justify-center items-center'>
                <div className=' flex flex-col items-center text-center'>
                    <h1 className='text-white text-2xl font-bold italic mb-10 xl:text-7xl'>A hundred poem, just for you...</h1>
                    <p className='text-gray-200 mb-30 w-80 xl:text-4xl xl:w-230'>100 is a collection of untold stories, insightful proses, and captivating rhythms that ensnares the mind. Read the poem of your heart to your delight.</p>

                    <Link to={'/login'}><button className="text-white font-bold w-50 border-2 xl:text-4xl p-5 xl:w-100 rounded-4xl hover:cursor-pointer hover:bg-white hover:text-dark-heavy hover:transition delay-100 duration-300 ease-in-out">Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;