import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaInfinity } from 'react-icons/fa';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-white">
            {/* Left side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12">
                <div className="w-full max-w-md">
                    <div className="flex items-center mb-6 lg:mb-8">
                        <FaInfinity className="text-blue-600 text-3xl mr-2" />
                        <span className="text-2xl font-bold text-blue-600">Infinity</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl font-bold mb-2">Welcome back</h1>
                    <p className="text-gray-600 mb-6 lg:mb-8">We're delighted to have you</p>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your Email or Username"
                                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your Password"
                                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <FaEye className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm text-gray-600">Remember Me</span>
                            </label>
                            <a href="#" className="text-sm text-green-500 hover:underline">Forgot Password?</a>
                        </div>
                        <button className="w-full bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 transition duration-300">
                            Sign in
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <span className="text-gray-600">Or</span>
                    </div>

                    <button className="w-full mt-4 p-3 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300">
                        <FaGoogle className="mr-2 text-red-500" />
                        Sign in with Google
                    </button>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        You don't have any account yet?
                        <a href="#" className="text-green-500 ml-1 hover:underline">Contact Us</a>
                    </p>

                    <p className="mt-4 text-center text-xs text-gray-500">
                        By signing in, you agree to our
                        <a href="#" className="text-green-500 ml-1 hover:underline">Terms & Conditions</a> and
                        <a href="#" className="text-green-500 ml-1 hover:underline">Privacy Policy</a>.
                    </p>
                </div>
            </div>

            {/* Right side - Image and Text */}
            <div className="w-full lg:w-1/2 bg-blue-50 flex flex-col justify-between lg:px-12 py-8 lg:py-12">
                <div className="text-center lg:text-right lg:w-2/4 mx-auto lg:mx-0">
                    <h2 className="text-2xl font-light text-blue-900 mb-4 lg:mb-2">
                        Empowering connections through secure transactions.
                    </h2>
                </div>

                <div className="flex justify-center items-center flex-grow">
                    <img src="images/login.png" alt="Secure transactions illustration" className="max-w-full h-auto" />
                </div>

                <div className="text-center">
                    <p className="text-xl text-blue-900">Make a safe transaction with trust.</p>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm text-gray-500">
                <div>Copyright 2024 © All Rights Reserved</div>
                <div className="space-x-4">
                    <a href="#" className="hover:text-blue-600">About Us</a>
                    <a href="#" className="hover:text-blue-600">Contact</a>
                    <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-600">Terms & Condition</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
