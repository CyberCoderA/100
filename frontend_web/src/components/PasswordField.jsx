import React from 'react';

const PasswordField = (props) => {
    const {title, placeholder} = props;

    return (
        <div className='flex flex-col'>
            <h1 className='text-dark-heavy font-bold text-xl xl:text-4xl'>{title}</h1>
            <input type="password" className='p-2 mt-1 border-3 rounded-md placeholder:italic placeholder:text-dark-light xl:text-2xl xl:mt-3' placeholder={placeholder} />
        </div>
    )
}

export default PasswordField;