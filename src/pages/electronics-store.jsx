import UserInfoPage from '../ShoppingCartProj/UserInfoPage.jsx';
import React from 'react';
import '../App.css';
import Header from "../components/Header.jsx";

function ElectronicsStore() {
    return (
        <div>
            <Header />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-3">
            {/* 改成和TickTodo一样的容器约束 */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-blue-600 rounded-full p-2 mr-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10l4-8H5.4M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </div>
                        <div className="max-w-4xl">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Electronics Shopping Demo</h1>
                            <p className="text-gray-600 text-lg leading-relaxed">Born from curiosity during my React learning journey, this e-commerce demo explores essential React concepts through practical implementation. Features include cart management, price calculations, customer forms, and responsive design - all built while mastering useState, useEffect, component architecture, and modern React patterns.</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full">
                    <UserInfoPage />
                </div>
            </div>
        </div>
        </div>
    );
}

export default ElectronicsStore;