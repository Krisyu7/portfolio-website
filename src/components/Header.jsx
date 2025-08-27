import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white shadow-sm z-50">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold font-mono">
                    <Link to="/" className="text-gray-900 hover:text-blue-600 transition-colors">
                        MingHao Yu
                    </Link>
                </div>
                <ul className="flex space-x-8 font-mono">
                    <li><Link to="/about" className="relative text-gray-700 opacity-80 hover:opacity-100 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 group">ABOUT
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span></Link></li>

                    <li><Link to="/experience" className="relative text-gray-700 opacity-80 hover:opacity-100 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 group">EXPERIENCE
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span></Link></li>

                    <li><Link to="/projects" className="relative text-gray-700 opacity-80 hover:opacity-100 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 group">PROJECTS
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span></Link></li>
                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                // 如果已经在首页，直接滚动到contact section
                                setTimeout(() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="relative text-gray-700 opacity-80 hover:opacity-100 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            CONTACT
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </li>
                   </ul>
                </nav>
        </header>
    );
};

export default Header;