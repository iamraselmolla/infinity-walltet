import React from 'react';
import { FaTimes, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';

const PaymentConfirmationModal = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-navy-900">Confirm Payment Request</h2>
                        <button className="text-gray-500 hover:text-gray-700">
                            <FaTimes className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">
                        To ensure a smooth and successful submission of your mobile banking request.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-sm font-medium text-teal-500">Payment method</p>
                            <p className="text-sm text-gray-900">bKash</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-teal-500">Service Type</p>
                            <p className="text-sm text-gray-900">Personal</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-teal-500">Recipient Number</p>
                            <p className="text-sm text-gray-900">01637460805</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-teal-500">Amount</p>
                            <p className="text-sm text-gray-900">৳ 10000</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-teal-500">Charge</p>
                            <p className="text-sm text-gray-900">৳ 100</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-teal-500">Total Amount</p>
                            <p className="text-sm font-semibold text-red-600">৳ 10100</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-teal-500">Note</p>
                            <p className="text-sm text-gray-900">Yes</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex justify-center mb-2">
                            <div className="bg-teal-100 p-3 rounded-full">
                                <FaUser className="w-6 h-6 text-teal-600" />
                            </div>
                        </div>
                        <p className="text-center text-sm font-medium text-gray-700">Verify that it's you</p>
                        <div className="mt-2 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your Password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <button
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <FaEye className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>

                    <button className="w-full bg-navy-900 text-white py-3 rounded-md hover:bg-navy-800 transition duration-300">
                        Send Payment Request
                    </button>
                </div>

                <div className="bg-gray-50 px-6 py-3 rounded-b-lg">
                    <p className="text-xs text-gray-500 text-center">
                        Ensure all fields are correctly filled and double-check your entries before submitting the form to avoid any delays or issues with your transaction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirmationModal;