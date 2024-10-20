import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

const PaymentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">Confirm Payment Request</h2>
                    <AiOutlineCloseCircle
                        className="text-gray-500 text-2xl cursor-pointer"
                        onClick={onClose}
                    />
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    <p className="text-sm text-gray-600 mb-4">
                        To ensure a smooth and successful submission of your mobile banking request.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Side Details */}
                        <div>
                            <div className="flex justify-between mb-3">
                                <span className="text-teal-500 font-semibold">Payment Method</span>
                                <span>bKash</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span className="text-teal-500 font-semibold">Service Type</span>
                                <span>Personal</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span className="text-teal-500 font-semibold">Recipient Number</span>
                                <span>01637460805</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span className="text-teal-500 font-semibold">Amount</span>
                                <span>৳ 10000</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span className="text-teal-500 font-semibold">Charge</span>
                                <span>৳ 100</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span className="text-teal-500 font-semibold">Total Amount</span>
                                <span className="text-red-500 font-semibold">৳ 10100</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span className="text-teal-500 font-semibold">Note</span>
                                <span>Yes</span>
                            </div>
                        </div>

                        {/* Right Side - Verification */}
                        <div className="flex flex-col items-center justify-center">
                            <FaRegUserCircle className="text-6xl text-teal-500 mb-4" />
                            <p className="text-teal-500 font-semibold mb-2">Verify that it's you</p>
                            <div className="relative w-full">
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10"
                                    placeholder="Enter your Password"
                                />
                                <BsFillEyeFill className="absolute top-2.5 right-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-center p-4 border-t">
                    <button className="bg-blue-700 text-white rounded-lg px-6 py-2">
                        Send Payment Request
                    </button>
                </div>

                {/* Modal Bottom Text */}
                <p className="text-center text-xs text-gray-500 px-4 py-2">
                    Ensure all fields are correctly filled and double-check your entries before submitting the form to avoid any delays or issues with your transaction.
                </p>
            </div>
        </div>
    );
};

export default PaymentModal;
