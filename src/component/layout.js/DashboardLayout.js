import React from 'react';
import { AiOutlineDashboard, AiOutlinePlusCircle, AiOutlineClockCircle, AiOutlineLogout } from 'react-icons/ai';
import { Outlet, Link } from 'react-router-dom';
import DashboardHeader from '../pages/dashboard/dashboard-header/DashboardHeader';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-blue-800 to-blue-900 text-white p-6 flex flex-col justify-between">
                <div>
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
                        <span className="text-xl font-bold">Infinity</span>
                    </div>
                    <nav>
                        <ul className="space-y-4">
                            <li className="flex items-center bg-blue-700 rounded p-2">
                                <AiOutlineDashboard className="mr-2" />
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="flex items-center p-2">
                                <AiOutlinePlusCircle className="mr-2" />
                                <Link to="/dashboard/new-request">New Request</Link>
                            </li>
                            <li className="flex items-center p-2">
                                <AiOutlineClockCircle className="mr-2" />
                                <Link to="/dashboard/pending-orders">Pending Orders</Link>
                            </li>
                            <li className="flex items-center p-2">
                                <AiOutlineClockCircle className="mr-2" />
                                <Link to="/dashboard/order-history">Order History</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <button className="flex items-center bg-white text-blue-900 rounded p-2 w-full justify-center">
                    <AiOutlineLogout className="mr-2" />
                    <span>Logout</span>
                </button>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                <DashboardHeader />
                <main className="flex-1 p-6">
                    {/* Content for each route will be rendered here */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
