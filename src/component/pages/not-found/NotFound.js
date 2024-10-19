import React from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
            <AiOutlineWarning className="text-8xl mb-4" />
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/dashboard"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg transition hover:bg-gray-100 hover:text-blue-700"
            >
                Back to Dashboard
            </Link>
        </div>
    );
};

export default NotFound;
