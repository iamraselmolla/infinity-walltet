import React, { useState } from 'react';
import { CiUser, CiLock } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaCircleCheck } from "react-icons/fa6";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col md:flex-row h-screen bg-white">
            {/* Left side - Login Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12">
                <div className="w-full max-w-md">
                    {/* Infinity Logo */}
                    <div className="flex items-center justify-start mb-8 md:mb-12">
                        <img src="images/logo.png" alt="Infinity" className="h-6 md:h-8" />
                    </div>

                    {/* Welcome Text */}
                    <div className="lg:pl-8 xl:pl-24">
                        <h1 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-left">Welcome back</h1>
                        <p className="text-gray-600 mb-4 md:mb-8 text-left">We're delighted to have you</p>

                        <form className="space-y-3 md:space-y-4">
                            {/* Email or Username Input */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <CiUser className="text-gray-500" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter your Email or Username"
                                    className="w-full pl-10 p-2 md:p-3 border border-gray-300 rounded-full bg-white"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <CiLock className="text-gray-500" />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your Password"
                                    className="w-full pl-10 p-2 md:p-3 border border-gray-300 rounded-full bg-white"
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

                            <div className="flex justify-between items-center text-theme-color text-sm">
                                <label className="flex gap-2 items-center">
                                    <FaCircleCheck />
                                    <span>Remember Me</span>
                                </label>
                                <a href="#" className="hover:underline">Forgot Password?</a>
                            </div>

                            <button className="w-full bg-blue-900 text-white p-2 md:p-3 rounded-full">
                                Sign in
                            </button>
                        </form>

                        <div className="mt-4 md:mt-6 text-center">
                            <span className="text-gray-600">Or</span>
                        </div>

                        <button className="w-full mt-2 md:mt-4 p-2 md:p-3 border border-gray-300 rounded-full flex items-center justify-center">
                            <FcGoogle className="mr-2" />
                            Sign in with Google
                        </button>

                        <p className="mt-4 md:mt-6 text-center text-sm text-gray-600">
                            You don't have an account yet?
                            <a href="#" className="text-theme-color ml-1 hover:underline">Contact Us</a>
                        </p>

                        <p className="mt-2 md:mt-4 text-center text-xs text-gray-500">
                            By signing in, you agree to our
                            <a href="#" className="text-theme-color ml-1 hover:underline">Terms & Conditions</a>
                            and
                            <a href="#" className="text-theme-color ml-1 hover:underline">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side - Image and Text */}
            <div className="w-full md:w-1/2 bg-blue-50 flex flex-col justify-center items-center p-6 md:px-12 md:py-12 relative">
                <div className="text-center md:text-right w-full mb-4 md:mb-12">
                    <h2 className="text-xl md:text-2xl font-light text-blue-900">
                        Empowering connections through secure transactions.
                    </h2>
                </div>

                <div className="flex justify-center items-center flex-grow">
                    <img src="images/login.png" alt="Secure transactions illustration" className="max-w-full h-auto" />
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center text-xs md:text-sm text-gray-500">
                    <div className="flex space-x-2 md:space-x-4">
                        <a href="#" className="hover:text-blue-600">About Us</a>
                        <a href="#" className="hover:text-blue-600">Contact</a>
                        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
