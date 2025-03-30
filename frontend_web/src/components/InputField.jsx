import React from 'react'

const InputField = (props) => {
    const {title, placeholder} = props;

    return (
        <div className='flex flex-col'>
            <h1 className='text-dark-heavy font-bold text-xl xl:text-4xl'>{title}</h1>
            <input className='p-2 mt-1 border-3 rounded-md placeholder:italic xl:text-2xl xl:mt-3' type='text' placeholder={placeholder} />
        </div>
    )
}

export default InputField