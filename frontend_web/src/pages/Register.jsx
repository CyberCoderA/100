import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InputField from '../components/InputField';
import DatePicker from '../components/DatePicker';
import '../App.css';

const Register = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <div className='h-screen flex flex-col'>
            <Navbar activeRoute="/register" isLoggedIn={isLoggedIn}/>

            {/* Body */}
            <div className='background-img flex justify-center items-center'>
                {/* Register Modal */}
                <div className='flex flex-col bg-white h-120 w-80 rounded-2xl justify-around overflow-y-scroll md:h-270 md:w-230 md:overflow-y-hidden xl:overflow-y-hidden xl:h-3/4 xl:w-3/4'>
                    <h1 className='text-center text-xl text-dark-heavy font-bold md:text-3xl xl:text-6xl'>USER REGISTRATION</h1>
                    <div className='flex flex-col p-5 gap-5 md:gap-20 xl:flex-row xl:justify-between xl:gap-10'>
                        <div className="flex flex-col gap-2 w-full xl:gap-10">
                            <div className='flex flex-col gap-2 xl:gap-10'>
                                <InputField title="Full Name" placeholder="Jesus H. Roosevelt" />
                                <DatePicker title="Birth Date" />
                            </div>
                            <div className='w-full'>
                                <h1 className='text-dark-heavy font-bold text-xl xl:text-4xl'>Sex</h1>
                                <div className='flex flex-col xl:flex-row xl:gap-10 xl:mt-5'>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="sex" id="male" className='size-4'/>
                                        <label htmlFor="male" className='text-dark-heavy text-xl'>Male</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="sex" id="female" className='size-4'/>
                                        <label htmlFor="female" className='text-dark-heavy text-xl'>Female</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="sex" id="neutral" className='size-4'/>
                                        <label htmlFor="neutral" className='text-dark-heavy text-xl'>Prefer not to say</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className='flex flex-col gap-2 w-full xl:gap-10'>
                            <InputField title="Email Address" placeholder="someone@gmail.com" />
                            <InputField title="Password" placeholder="12xeP3aq0489" />
                            <InputField title="Confirm Password" placeholder="12xeP3aq0489" />
                        </div>
                    </div>

                    <div className='flex flex-col p-3 gap-2'>
                        <button className='w-full h-10 text-dark-heavy font-bold bg-primary-light border-2 rounded-xl hover:cursor-pointer xl:text-2xl xl:h-16 xl:border-3'>CREATE ACCOUNT</button>
                        <Link to={'/login'}><p className=" text-dark-light italic text-center link-heavy xl:text-2xl">Already have an account? Login!</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;