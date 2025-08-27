import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="text-center max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Working through the night to bring wise ideas to light.
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Hello! I'm MingHao Yu, and I've been designing usable and delightful digital experiences—as well as
                    writing and speaking about design—for almost 20 years.
                </p>
                <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                    Google me
                </a>
            </div>
        </section>
    );
};

export default HeroSection;