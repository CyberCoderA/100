import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

const CardPoem = () => {
  return (
    <div className='flex flex-col justify-center w-84 h-40 p-2 bg-white rounded-2xl border-2 xl:border-3 xl:w-140 xl:h-60 xl:p-5'>
        <div className='flex flex-row gap-3'>
            <div className="rounded-full h-25 w-25 bg-white-paste xl:h-50 xl:w-50"></div>
            <div className='xl:mt-5'>
                <p className="xl:text-2xl text-dark-heavy">Adrian Pueblo</p>
                <h1 className="text-2xl xl:text-3xl text-dark-heavy font-bold">The Girl</h1>
            </div>
            <div className='flex self-end justify-between gap-3'>
              <div className='flex flex-row items-center'>
                <HeartIcon className='size-7 text-dark-heavy xl:size-10 hover:cursor-pointer hover:text-dark-light hover:transition delay-100 duration-300 ease-in-out'/>
                <p className='text-xl text-dark-heavy xl:text-2xl'>10</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-dark-heavy xl:size-10 hover:cursor-pointer hover:text-dark-light hover:transition delay-100 duration-300 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
            </div>
        </div>
    </div>
  )
}

export default CardPoem;