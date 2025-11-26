import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const Login = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <div className='h-screen flex flex-col'>
            <Navbar activeRoute="/login" isLoggedIn={isLoggedIn}/>

            {/* Body */}
            <div className='background-img flex justify-center items-center relative h-screen overflow-hidden'>
                {/* Login Modal */}
                <div className='h-[80%] max-h-[1000px] flex flex-col justify-center backdrop-blur-lg bg-white rounded-lg w-11/12 max-w-96 lg:max-w-[900px] min-h-[400px] shadow-2xl items-center p-6'>
                    <h1 className='text-dark-heavy self-center font-bold text-2xl xl:text-6xl'>USER LOGIN</h1>
                    <div>
                        <InputField title="Email Address" placeholder="someones@gmail.com" /> 
                        <br/>
                        <PasswordField title="Password" placeholder="12xeP3aq0489" /> 
                        <p className="text-dark-light italic text-end mt-2 hover:text-dark-heavy transition-all cursor-pointer xl:text-2xl">Forgot Password?</p>
                    </div>
                    <div>
                        <button className='w-full h-10 text-dark-heavy font-bold bg-primary-light border-2 rounded-xl hover:cursor-pointer hover:bg-primary-heavy
                         xl:text-2xl xl:h-16 xl:border-3 hover:transition delay-100 duration-300 ease-in-out'>LOGIN</button>
                        <Link to={'/register'}><p className=" text-dark-light italic text-center mt-2 link-heavy xl:text-2xl xl:mt-5">No Account? Create one!</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;