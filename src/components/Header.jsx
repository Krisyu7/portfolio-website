import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white shadow-sm z-50">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors">
                        MingHao Yu
                    </a>
                </div>
                <ul className="flex space-x-8">
                    <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">about</a></li>
                    <li><a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">experience</a></li>
                    <li><a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">projects</a></li>
                    <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">contact</a></li>
                    <li><a href="#game" className="text-gray-700 hover:text-blue-800 transition-colors">Play with me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;