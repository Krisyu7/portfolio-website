// InfoFillForm.jsx
import React, { useEffect, useState } from 'react';

function InfoFillForm({ onUpdate }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        province: '',
        payment: ''
    });

    const [errors, setErrors] = useState({});

    const provinceList = [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Nova Scotia',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Northwest Territories',
        'Nunavut',
        'Yukon'
    ];

    useEffect(() => {
        onUpdate(formData);
    }, [formData, onUpdate]);

    const validateField = (field, value) => {
        let newErrors = { ...errors };
        
        switch (field) {
            case 'name':
                if (!value.trim()) {
                    newErrors.name = 'Name is required';
                } else if (value.trim().length < 2) {
                    newErrors.name = 'Name must be at least 2 characters';
                } else {
                    delete newErrors.name;
                }
                break;
            case 'email':
                { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(value)) {
                    newErrors.email = 'Please enter a valid email';
                } else {
                    delete newErrors.email;
                }
                break; }
            case 'address':
                if (!value.trim()) {
                    newErrors.address = 'Address is required';
                } else {
                    delete newErrors.address;
                }
                break;
            case 'city':
                if (!value.trim()) {
                    newErrors.city = 'City is required';
                } else {
                    delete newErrors.city;
                }
                break;
            case 'province':
                if (!value) {
                    newErrors.province = 'Please select a province';
                } else {
                    delete newErrors.province;
                }
                break;
        }
        
        setErrors(newErrors);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        validateField(field, value);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-3 h-full overflow-y-auto">
            <div className="flex items-center mb-2">
                <div className="bg-blue-600 rounded-full p-1 mr-2">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h2 className="text-sm font-bold text-gray-800">Shipping Details</h2>
            </div>

            <form className="space-y-2">
                {/* Name Input */}
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        className={`w-full px-2 py-1 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-xs ${
                            errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className={`w-full px-2 py-1 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-xs ${
                            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
                </div>

                {/* Address Input */}
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                        Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="123 Main Street, Apt 4B"
                        className={`w-full px-2 py-1 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-xs ${
                            errors.address ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-0.5">{errors.address}</p>}
                </div>

                {/* City Input */}
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                        City <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Toronto"
                        className={`w-full px-2 py-1 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-xs ${
                            errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-0.5">{errors.city}</p>}
                </div>

                {/* Province Select */}
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                        Province/Territory <span className="text-red-500">*</span>
                    </label>
                    <select
                        value={formData.province}
                        onChange={(e) => handleInputChange('province', e.target.value)}
                        className={`w-full px-2 py-1 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-xs ${
                            errors.province ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                    >
                        <option value="">Select your province</option>
                        {provinceList.map((province, index) => (
                            <option key={index} value={province}>{province}</option>
                        ))}
                    </select>
                    {errors.province && <p className="text-red-500 text-xs mt-0.5">{errors.province}</p>}
                </div>

                {/* Payment Method */}
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        Payment Method <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 gap-1">
                        {[
                            { value: 'Credit Card', icon: '💳', desc: 'Visa, MasterCard, Amex' },
                            { value: 'PayPal', icon: '🅿️', desc: 'Pay with your PayPal account' },
                            { value: 'Cash on Delivery', icon: '💵', desc: 'Pay when you receive' }
                        ].map((method) => (
                            <div
                                key={method.value}
                                onClick={() => handleInputChange('payment', method.value)}
                                className={`cursor-pointer rounded border-2 p-2 transition-all duration-200 hover:shadow-sm ${
                                    formData.payment === method.value
                                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                                        : 'border-gray-200 hover:border-gray-300 bg-white'
                                }`}
                            >
                                <div className="flex items-start space-x-2">
                                    <span className="text-sm mt-0.5">{method.icon}</span>
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900 text-xs">{method.value}</p>
                                        <p className="text-xs text-gray-500 mt-0">{method.desc}</p>
                                    </div>
                                    <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                                        formData.payment === method.value
                                            ? 'border-blue-500 bg-blue-500'
                                            : 'border-gray-300'
                                    }`}>
                                        {formData.payment === method.value && (
                                            <div className="w-1 h-1 bg-white rounded-full"></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-center text-xs text-gray-600">
                        <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Your information is secure and encrypted
                    </div>
                </div>
            </form>
        </div>
    );
}
export default InfoFillForm;
