import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiDollarSign, FiUser, FiPhone } from 'react-icons/fi';
import PaymentModal from '../../../shared/PaymentConfirmationModal';
import { Link } from 'react-router-dom';

const PaymentRequestForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formValues, setFormValues] = useState(null); // State to hold form values

    const formik = useFormik({
        initialValues: {
            paymentMethod: '',
            paymentType: '',
            recipientNumber: '',
            amount: '',
            customerName: '',
            message: '',
        },
        validationSchema: Yup.object({
            paymentMethod: Yup.string().required('Payment method is required'),
            paymentType: Yup.string().required('Payment type is required'),
            recipientNumber: Yup.string()
                .required('Recipient number is required')
                .matches(/^[0-9]{11}$/, 'Must be exactly 11 digits'),
            amount: Yup.number()
                .required('Amount is required')
                .positive('Amount must be a positive number'),
            customerName: Yup.string(),
            message: Yup.string(),
        }),
        onSubmit: (values) => {
            setFormValues(values); // Store form values
            setIsModalOpen(true);
        },
    });

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                {/* Form */}
                <div className="md:col-span-2 bg-[#F8F9FA] rounded-3xl shadow-lg p-6">
                    <h2 className="text-lg text-theme-color font-semibold mb-4">Enter Payment Information</h2>
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        {/* Payment Method and Payment Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">Choose payment method</label>
                                <div className="relative">
                                    <select
                                        id="paymentMethod"
                                        name="paymentMethod"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.paymentMethod}
                                        className={`block w-full rounded-full border ${formik.touched.paymentMethod && formik.errors.paymentMethod ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 p-2 pr-10`}
                                    >
                                        <option value="">Select</option>
                                        <option value="creditCard">Credit Card</option>
                                        <option value="bankTransfer">Bank Transfer</option>
                                    </select>
                                    {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.paymentMethod}</p>
                                    ) : null}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="paymentType" className="block text-sm font-medium text-gray-700 mb-2">Choose Type</label>
                                <div className="relative">
                                    <select
                                        id="paymentType"
                                        name="paymentType"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.paymentType}
                                        className={`block w-full rounded-full border ${formik.touched.paymentType && formik.errors.paymentType ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 p-2 pr-10`}
                                    >
                                        <option value="">Select</option>
                                        <option value="oneTime">One-time</option>
                                        <option value="recurring">Recurring</option>
                                    </select>
                                    {formik.touched.paymentType && formik.errors.paymentType ? (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.paymentType}</p>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* Recipient Number and Amount */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="recipientNumber" className="block text-sm font-medium text-gray-700 mb-2">Recipient Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="recipientNumber"
                                        name="recipientNumber"
                                        placeholder="017XX XXX XXX"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.recipientNumber}
                                        className={`block w-full rounded-full border px-6 ${formik.touched.recipientNumber && formik.errors.recipientNumber ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 p-2 pr-10`}
                                    />
                                    <FiPhone className="absolute right-5 my-auto inset-y-0 text-gray-400 pointer-events-none" />

                                </div>
                                {formik.touched.recipientNumber && formik.errors.recipientNumber ? (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.recipientNumber}</p>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        placeholder="Enter the amount"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.amount}
                                        className={`block w-full pl-8 rounded-full border ${formik.touched.amount && formik.errors.amount ? 'border-red-500' : 'border-gray-300'} bg-white shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 p-2 pr-10`}
                                    />
                                    <FiDollarSign className="absolute right-3 my-auto inset-y-0 text-gray-400 pointer-events-none" />

                                </div>
                                {formik.touched.amount && formik.errors.amount ? (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.amount}</p>
                                ) : null}
                            </div>
                        </div>

                        {/* Customer Name and Message */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">Name & Message (Optional)</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="customerName"
                                        name="customerName"
                                        placeholder="Enter Customer Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.customerName}
                                        className="block w-full pl-8 rounded-full border border-gray-300 bg-white shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 p-2 pr-10"
                                    />
                                    <FiUser className="absolute right-3 my-auto inset-y-0 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="Additional Notes..."
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                    className="block w-full rounded-2xl border border-gray-300 bg-white shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 p-2 pr-10"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-theme-bg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>

                {/* Quick Links */}
                <div className="w-full">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-semibold text-theme-color mb-4">Quick Links</h2>
                        <ul className="space-y-6">
                            <li className="flex items-center">
                                <img src="/images/icon.png" alt="Transaction History" className="mr-2 w-6 h-6" /> {/* Transaction history icon */}
                                <Link to="/transaction-history" className="text-gray-700 hover:text-teal-500">
                                    Transaction History
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/icon.png" alt="Recent Payments" className="mr-2 w-6 h-6" /> {/* Recent payments icon */}
                                <Link to="/recent-payments" className="text-gray-700 hover:text-teal-500">
                                    Recent Payments
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/icon.png" alt="Account Settings" className="mr-2 w-6 h-6" /> {/* Account settings icon */}
                                <Link to="/account-settings" className="text-gray-700 hover:text-teal-500">
                                    Account Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <PaymentModal isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    values={formValues}
                />
            )}

        </div>
    );
};

export default PaymentRequestForm;
