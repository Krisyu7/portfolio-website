import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Hello, I'm MingHao Yu.</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">


                    I recently graduated with a Computer Science degree from UVic and have hands-on experience with React, Node.js, and database technologies through coursework and personal projects. I really enjoy the problem-solving aspect of development and strive to write clean, readable code.

                    When I'm not studying or coding, I love playing soccer, diving into games, exploring hiking trails, and fishing.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Currently focusing on full-stack web development, I'm always excited to take on new challenges
                    and collaborate with teams that value quality and innovation.
                </p>
                <a
                    href="/about"
                    className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors text-lg"
                >
                    More about me →
                </a>
            </div>
        </section>
    );
};

export default AboutSection;