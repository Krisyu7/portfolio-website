import React from 'react';
import LikeCounter from "../utils/LikeCounter.jsx";


const HeroSection = () => {
    return (
        <section id="home" className="h-[60vh] lg:h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="text-left max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-playfair max-w-2xl">
                    Coding through the night to bring innovative ideas to life.
                </h1>
                <p className="text-sm text-gray-600 mb-1 leading-relaxed text-left max-w-prose ml-10">
                    Hello! I'm MingHao Yu, a fresh Computer Science graduate from UVic, based in beautiful Victoria, BC. I'm passionate about creating intuitive digital experiences through full-stack development, always eager to tackle new challenges and grow as a developer.
                </p>
                <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300 border-b-2 border-gray-900 hover:border-blue-600 pb-1 ml-10"
                    style={{fontSize: '10px' }}
                >
                    More about me
                </a>
                <LikeCounter/>
            </div>
        </section>
    );
};

export default HeroSection;