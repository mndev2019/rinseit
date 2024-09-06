//import React from 'react'
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import twitter from '../assets/twitter.png';
import register from '../assets/login_register.jpeg';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'
import mail from '../assets/email.png'
import vehicle from '../assets/vehicle.png'
import { useState } from 'react';
import passwordIcon from '../assets/password.png';


const Register = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        vehiclenumber: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const togglePasswordType = () => {
        setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const upperCaseValue = name === 'vehiclenumber' ? value.toUpperCase() : value;
        setFormValues({ ...formValues, [name]: upperCaseValue });
    };

    const handleFormSubmit = (e) => {
        
        e.preventDefault();
        if (validateForm()) {
            // Proceed with form submission logic, e.g., send data to the server
        }
    };

    const validateForm = () => {
        const { name, email, password, vehiclenumber } = formValues;
        if (!name || !email || !password || !vehiclenumber) {
            setErrorMessage('All fields are required.');
            return false;
        }

        setErrorMessage('');
        return true;
    };
    return (
        <>
            <section className="">
                <div className=" mx-auto">
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-5">
                        <div className="lg:col-span-4 col-span-1">
                            <div className="w-full lg:pl-20 p-5">
                                <div className="w-full lg:py-3 py-2 lg:text-left text-center ">
                                    <img src={logo} alt="image" className='h-[70px] inline-block' />
                                </div>
                                <div className="w-full mb-3 lg:text-left text-center">
                                    <h1 className='text-black font-[700] text-4xl lg:py-4 py-3  '>Register</h1>
                                    <p className='lg:text-lg text-sm text-[#ABA9A9]'>Register to create your first account and start exploring the services</p>
                                </div>
                                <div className="w-full">
                                    <form onSubmit={handleFormSubmit} className="w-full">
                                        {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
                                        <div className="lg:mb-3 mb-2">
                                            <label htmlFor="name" className="block font-medium mb-1">
                                                Name
                                            </label>
                                            <div className="input-group flex items-center w-full border border-[#8A8A8A] rounded-lg justify-between px-2 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                                                <div className="field w-full">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter your first name"
                                                        value={formValues.name}
                                                        onChange={handleInputChange}
                                                        className="mt-1 block w-full text-sm rounded-md shadow-sm bg-transparent focus:outline-none"
                                                    />
                                                </div>
                                                <div className="icon">
                                                    <img src={user} alt="image" className="h-[18px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:mb-3 mb-2">
                                            <label htmlFor="email" className="block font-medium mb-1">
                                                Email
                                            </label>
                                            <div className="input-group flex items-center w-full border border-[#8A8A8A] rounded-lg justify-between px-2 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                                                <div className="field w-full">
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter your Email"
                                                        value={formValues.email}
                                                        onChange={handleInputChange}
                                                        className="mt-1 text-sm block w-full rounded-md shadow-sm focus:outline-none"
                                                    />
                                                </div>
                                                <div className="icon">
                                                    <img src={mail} alt="image" className="h-[18px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:mb-3 mb-2">
                                            <label htmlFor="password" className="block font-medium mb-1">
                                                Password
                                            </label>
                                            <div className="input-group flex items-center w-full border border-[#8A8A8A] rounded-lg justify-between px-2 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                                                <div className="field w-full">
                                                    <input
                                                        type={passwordType}
                                                        id="password"
                                                        name="password"
                                                        placeholder="Enter your Password"
                                                        value={formValues.password}
                                                        onChange={handleInputChange}
                                                        className="mt-1 text-sm block w-full rounded-md shadow-sm focus:outline-none"

                                                    />
                                                </div>
                                                <div className="icon cursor-pointer" onClick={togglePasswordType}>
                                                    {passwordType === 'password' ? (
                                                        <img src={passwordIcon} alt="Toggle password visibility" className="h-[18px]" />
                                                    ) : (
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px]">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#B8B8B8"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z" fill="#B8B8B8"></path>
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:mb-3 mb-2">
                                            <label htmlFor="vehiclenumber" className="block font-medium mb-1">
                                                Vehicle Number
                                            </label>
                                            <div className="input-group flex items-center w-full border border-[#8A8A8A] rounded-lg justify-between px-2 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                                                <div className="field w-full">
                                                    <input
                                                        type="text"
                                                        id="vehiclenumber"
                                                        name="vehiclenumber"
                                                        placeholder="Enter your Vehicle Number"
                                                        value={formValues.vehiclenumber}
                                                        maxLength={10}
                                                        onChange={handleInputChange}
                                                        className="mt-1 text-sm block w-full rounded-md shadow-sm focus:outline-none"
                                                    />
                                                </div>
                                                <div className="icon">
                                                    <img src={vehicle} alt="image" className="h-[18px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <button type="submit" className="bg-primary text-white rounded-lg py-2 text-center w-full">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                    <div className="flex items-center w-full mb-2">
                                        <div className="flex-grow border-t border-[#8A8A8A]"></div>
                                        <p className="px-4 text-center font-semibold">OR</p>
                                        <div className="flex-grow border-t border-[#8A8A8A]"></div>
                                    </div>

                                    <div className="w-full flex gap-2 justify-center mb-2">
                                        <img src={google} alt='image' className='h-[25px] ' />
                                        <img src={facebook} alt='image' className='h-[25px]' />
                                        <img src={twitter} alt='image' className='h-[25px]' />
                                    </div>
                                    <div className="w-full text-center">
                                        <p className='text-[#ABA9A9] text-xs'>Already have an Account ? <Link to='/login' className='text-[#FF914D]'>Log In</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 lg:block hidden">
                            <div className=" flex w-full   justify-end">
                                <img src={register} alt='image' className='h-screen w-full' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Register