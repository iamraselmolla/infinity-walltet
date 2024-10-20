import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const PaymentModal = ({ isOpen, onClose, values }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                {/* Modal Header */}
                <div className="flex bg-[#F8F9FA] flex-col rounded-t-3xl p-4 border-b">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Confirm Payment Request</h2>
                        <AiOutlineCloseCircle
                            className="text-red-500 text-2xl cursor-pointer"
                            onClick={onClose}
                        />
                    </div>
                    <p className="text-sm text-gray-600">
                        To ensure a smooth and successful submission of your mobile banking request.
                    </p>
                </div>

                {/* Modal Body */}
                <div className="bg-[#EAF2FA] p-8">
                    <div className="p-6 bg-[#F8F9FA] rounded-3xl">
                        {/* Left and Right Side Details */}
                        <div className="grid p-8  grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-teal-500 font-semibold">Payment Method</span>
                                    <span>{values.paymentMethod}</span>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-teal-500 font-semibold">Service Type</span>
                                    <span>{values.paymentType}</span>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-teal-500 font-semibold">Recipient Number</span>
                                    <span>{values.recipientNumber}</span>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-teal-500 font-semibold">Amount</span>
                                    <span>৳ {values.amount}</span>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-teal-500 font-semibold">Note</span>
                                    <span>{values.message || 'No notes provided'}</span>
                                </div>
                            </div>

                            {/* Right Side - Verification */}
                            <div className="flex flex-col items-center justify-center">
                                <FaRegUserCircle className="text-6xl text-teal-500 mb-4" />
                                <p className="text-teal-500 font-semibold mb-2">Verify that it's you</p>
                                <div className="relative w-full">
                                    <input
                                        type="password"
                                        className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10"
                                        placeholder="Enter your Password"
                                    />
                                    <BsFillEyeFill className="absolute top-2.5 right-4 text-gray-500" />
                                </div>
                            </div>
                        </div>

                        {/* Full-width Button */}
                        <button className="w-full mt-6 py-2 rounded-full bg-theme-bg text-white">
                            Send Payment Request
                        </button>
                    </div>
                </div>

                {/* Modal Bottom Text */}
                <p className="text-center text-xs text-gray-500 px-4 py-6">
                    Ensure all fields are correctly filled and double-check your entries before submitting the form to avoid any delays or issues with your transaction.
                </p>
            </div>
        </div>
    );
};

export default PaymentModal;
