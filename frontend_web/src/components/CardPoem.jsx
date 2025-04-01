import React from 'react';

const CardPoem = () => {
  return (
    <div className='flex flex-col justify-center w-84 h-40 p-2 bg-white rounded-2xl border-2 xl:border-3 xl:w-140 xl:h-60 xl:p-5'>
        <div className='flex flex-row gap-3'>
            <div className="rounded-full h-25 w-25 bg-white-paste xl:h-50 xl:w-50"></div>
            <div className='xl:mt-5'>
                <p className="text-xl xl:text-3xl text-dark-heavy">Adrian Pueblo</p>
                <h1 className="text-2xl xl:text-3xl text-dark-heavy font-bold">The Girl</h1>
            </div>
        </div>
    </div>
  )
}

export default CardPoem;