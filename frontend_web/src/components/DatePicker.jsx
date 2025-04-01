import React from 'react'

const DatePicker = (props) => {
    const {title} = props;

    return (
        <div className='flex flex-col'>
            <h1 className='text-dark-heavy font-bold text-xl xl:text-4xl'>{title}</h1>
            <input type="date" id="birthdate" className='mt-1 p-2 border-3 rounded-md italic text-dark-light text-xl'/>
        </div>
    )
}

export default DatePicker