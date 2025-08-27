import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Hello, I'm MingHao Yu.</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    As an independent developer I've been fortunate to work with modern technologies like React, Node.js,
                    and various databases. I'm passionate about creating user-friendly applications and writing clean,
                    maintainable code. I enjoy learning new technologies and solving complex problems through code.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Currently focusing on full-stack web development, I'm always excited to take on new challenges
                    and collaborate with teams that value quality and innovation.
                </p>
                <a
                    href="#contact"
                    className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors text-lg"
                >
                    More about me →
                </a>
            </div>
        </section>
    );
};

export default AboutSection;