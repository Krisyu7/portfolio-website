import React, { useState } from 'react';

const Footer = () => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        if (comment.trim()) {
            console.log('Comment submitted:', comment);
            alert('Thank you for your comment!');
            setComment('');

        }
    };

    return (
        <footer className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-6">Stay in Touch</h1>
                    <div className="flex justify-center space-x-8">
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>

                    </div>
                </div>
                <p className="text-xs max-w-2xl mx-auto  ">Message Length:{comment.length}</p>
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="flex flex-col md:flex-row gap-4">

            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Short and sweet is great, but feel free to share your thoughts!"
                className="flex-1 p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 min-h-32"

            />

                        <button
                            onClick={handleSubmit}
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold md:self-start"
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-400 mb-4">
                        &copy; 2025 MingHao Yu. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;