import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
    return (
        <header className="bg-white p-4 flex justify-between items-center border-b">
            <div>
                <h1 className="text-2xl font-bold text-blue-900">Welcome to Infinity Wallet</h1>
                <p className="text-sm text-gray-600">Empowering connections through secure transactions.</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="pl-10 pr-4 py-2 border rounded-full w-64"
                    />
                    <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="flex items-center">
                    <img src="/images/user.png" alt="User" className="w-10 h-10 rounded-full mr-2" />
                    <div>
                        <p className="font-semibold">Mohammad Amir Khan</p>
                        <Link to="/dashboard"><p className="text-sm text-blue-500">@amirkhan023</p></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
