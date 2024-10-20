import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { Outlet, Link, useLocation } from 'react-router-dom';
import DashboardHeader from '../pages/dashboard/dashboard-header/DashboardHeader';

const DashboardLayout = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-[#00456D] via-[#004E70] to-[#004E70] text-white p-6 pr-0 flex flex-col justify-between rounded-tr-[20px] rounded-br-[20px]">
                <div>
                    <div className="flex items-center mb-8">
                        <span className="text-xl font-bold">
                            <img src="/images/logo-white.png" alt="Infinity" />
                        </span>
                    </div>
                    <nav>
                        <ul className="space-y-3">
                            <li className={`flex items-center relative  py-3 rounded ${isActive('/dashboard') ? 'bg-[#003366] pl-12 rounded-tl-3xl rounded-bl-3xl  active-dashboard-item' : 'pl-6'}`}>
                                <img src="/images/Dashboard - Solid.png" alt="Dashboard" className="mr-2" />
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className={`flex items-center relative py-3 rounded ${isActive('/dashboard/new-request') ? 'bg-[#003366] pl-12 rounded-tl-3xl rounded-bl-3xl  active-dashboard-item' : 'pl-6'}`}>
                                <img src="/images/Add - Solid.png" alt="New Request" className="mr-2" />
                                <Link to="/dashboard/new-request">New Request</Link>
                            </li>
                            <li className={`flex items-center relative  py-3 rounded ${isActive('/dashboard/pending-orders') ? 'bg-[#003366] pl-12 rounded-tl-3xl rounded-bl-3xl  active-dashboard-item' : 'pl-6'}`}>
                                <img src="/images/Pending - Solid.png" alt="Pending Orders" className="mr-2" />
                                <Link to="/dashboard/pending-orders">Pending Orders</Link>
                            </li>
                            <li className={`flex items-center relative  py-3 rounded ${isActive('/dashboard/order-history') ? 'bg-[#003366] pl-12 rounded-tl-3xl rounded-bl-3xl  active-dashboard-item' : 'pl-6'}`}>
                                <img src="/images/Order History - Solid.png" alt="Order History" className="mr-2" />
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
                <main className="flex-1 p-6 bg-[#EAF2FA]">
                    {/* Content for each route will be rendered here */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
