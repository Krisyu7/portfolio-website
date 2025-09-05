import React from 'react';
import {Link} from "react-router-dom";
import shoppingcartSS from '../assets/shoppingcartSS.png';
import tickToDo from '../assets/tickToDo.png';
const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">My Projects</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Project Card 1 */}
                    <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-64 bg-gray-200 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                <img
                                    src={shoppingcartSS}
                                    alt="Electronics Shopping Demo Screenshot"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Link to="/projects/electronics-store" className="text-white font-semibold">View Project</Link>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Electronics Shopping Demo</h3>
                            <p className="text-gray-600 mb-4">A modern frontend demo showcasing complete e-commerce flow with product display, cart management, price calculation, and checkout form interface</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">JavaScript</span>
                                <span className="px-3 py-1 bg-green-100 text-shadow-black-600 rounded-full text-sm">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-64 bg-gray-200 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                <img
                                    src={tickToDo}
                                    alt="Electronics Shopping Demo Screenshot"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Link to="/projects/ticktodo-app" className="text-white font-semibold">View Project</Link>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Task Management Tool</h3>
                            <p className="text-gray-600 mb-4">A task management tool that allows users to schedule tasks with specific time settings. Helps users plan their work content and timeline while providing detailed history tracking.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-green-100 text-shadow-black-600 rounded-full text-sm">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-yellow-100 text-shadow-black-600 rounded-full text-sm">Vite</span>
                            </div>
                        </div>
                    </div>


                </div>



                <div className="text-center">
                    <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                        Conclusion
                    </p>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                    >
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;