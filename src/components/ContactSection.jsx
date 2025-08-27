import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Connect</h2>
                <p className="text-lg text-gray-600 mb-6">
                    I'm actively seeking opportunities to join a dynamic team as a junior developer.
                    If my projects caught your attention or if you think I'd be a good fit for your team,
                    I'd love to hear from you!
                </p>

                <p className="text-lg text-gray-600 mb-8">
                    Whether it's about work opportunities, discussing code, or just making new connections
                    in the tech community – my inbox is always open.
                </p>

                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        href="minghao.yu0304@gmail.com"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                        Email Me
                    </a>
                    <a
                        href="www.linkedin.com/in/minghao-yu-128b40337/ "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        Response time: Usually within 24 hours
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;