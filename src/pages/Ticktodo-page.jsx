import React from 'react';
import Header from '../components/Header';
import HistoryView from '../assets/HistoryView.png';
import CompletionDiaLog from '../assets/CompletionDiaLog.png'
import RunningTimer from '../assets/RunningTimer.png';
import TimerSetup from '../assets/TimerSetup.png';
import EmptyTaskListInterface from '../assets/EmptyTaskListInterface.png';

function TicktodoPage() {
    return (
        <div>
            <Header />
            <div className="pt-20 min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            TickTodo - Task Manager with Countdown
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            A comprehensive task management application featuring time-based task scheduling capabilities.
                            Designed to help users effectively organize their workload, manage deadlines, and maintain
                            complete historical records of their productivity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://ticktodo.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                🚀 Try Live Demo
                            </a>
                            <a
                                href="#features"
                                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Screenshots Gallery */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8">Application Screenshots</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={EmptyTaskListInterface} alt="Empty task list interface" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">Clean Interface</h3>
                                    <p className="text-gray-600 text-sm">Simple and intuitive task input interface</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={TimerSetup} alt="Task with timer setup" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">Timer Configuration</h3>
                                    <p className="text-gray-600 text-sm">Flexible time settings with preset options</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={RunningTimer} alt="Running countdown timer" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">Active Timer</h3>
                                    <p className="text-gray-600 text-sm">Real-time countdown with progress tracking</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={CompletionDiaLog} alt="Task completion dialog" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">Task Completion</h3>
                                    <p className="text-gray-600 text-sm">Confirmation dialog for task completion</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={HistoryView} alt="Task history view" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">History Tracking</h3>
                                    <p className="text-gray-600 text-sm">Detailed records with statistics and analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div id="features" className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⏰</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Custom Countdown Timers</h3>
                                <p className="text-gray-600">Set flexible time limits with preset options (+5min, +10min, +15min, +1hr) or custom durations</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📝</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Task Management</h3>
                                <p className="text-gray-600">Easy task creation, modification, and completion tracking with intuitive controls</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Progress Visualization</h3>
                                <p className="text-gray-600">Visual progress bars and real-time countdown displays to track task completion</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📈</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Historical Analytics</h3>
                                <p className="text-gray-600">Comprehensive history tracking with daily statistics, total time, and average completion time</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">💾</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Data Export</h3>
                                <p className="text-gray-600">Export your productivity data for external analysis and record keeping</p>
                            </div>
                        </div>
                    </div>

                    {/* Development Journey */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-16">Development Journey</h2>
                        <div className="max-w-5xl mx-auto">
                            <div className="space-y-12">
                                {/* The Inspiration */}
                                <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
                                    <h3 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
                                        <span className="text-3xl mr-3">💡</span>
                                        The Inspiration
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        During my React learning journey, I practiced two classic projects: TodoList and Stopwatch. After completing these separately, I had an idea - why not combine them? I realized I could transform the timer into a countdown component and apply it to individual tasks. This wasn't just a technical exercise; it came from a real personal need. Recently, with job searching and studying, I had so many things to do each day that I often felt overwhelmed and struggled with time management. I needed a tool to help me better manage my tasks and time, and that's how TickTodo was born.
                                    </p>
                                </div>

                                {/* Technical Challenges */}
                                <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
                                    <h3 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
                                        <span className="text-3xl mr-3">⚡</span>
                                        Technical Challenges
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        The biggest challenge was elegantly integrating two independent functional modules. I had to redesign the state management structure to ensure the countdown timer worked seamlessly with the task list. Another significant milestone came after learning TypeScript - I decided to refactor all JSX files to TSX files. While time-consuming, this process made my code much more robust and prevented many potential type errors. Implementing local storage and history tracking was also an interesting challenge, as I wanted users to be able to review their time usage patterns.
                                    </p>
                                </div>

                                {/* Key Learning Points */}
                                <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
                                    <h3 className="text-2xl font-semibold mb-8 text-blue-600 flex items-baseline">
                                        <span className="text-3xl mr-3">📚</span>
                                        Key Learning Points
                                    </h3>
                                    <div className="space-y-5">
                                        <div className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-4 mt-1 text-lg">•</span>
                                            <p className="text-gray-700 text-lg leading-relaxed">Integrated independent modules into unified application</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-4 mt-1 text-lg">•</span>
                                            <p className="text-gray-700 text-lg leading-relaxed">Mastered TypeScript in React projects</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-4 mt-1 text-lg">•</span>
                                            <p className="text-gray-700 text-lg leading-relaxed">Implemented local storage and data persistence</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-4 mt-1 text-lg">•</span>
                                            <p className="text-gray-700 text-lg leading-relaxed">Complete workflow: development to deployment</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-4 mt-1 text-lg">•</span>
                                            <p className="text-gray-700 text-lg leading-relaxed">Created tools based on real personal needs</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Future Enhancements */}
                                <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
                                    <h3 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
                                        <span className="text-3xl mr-3">🚀</span>
                                        Future Enhancements
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Completing TickTodo gives me great satisfaction because it not only solved my own problem but hopefully helps others facing similar time management challenges. Deploying it on Vercel allows more people to access and use it, which feels amazing to share. In the future, I plan to add more personalized features like task categorization, enhanced data export, and possible mobile optimization. This project taught me that the best learning projects often come from solving real problems you encounter yourself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tech Stack */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow p-6 text-center">
                                <div className="text-3xl mb-3">⚛️</div>
                                <h3 className="font-semibold">React</h3>
                                <p className="text-gray-600 text-sm">Frontend Framework</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6 text-center">
                                <div className="text-3xl mb-3">🎨</div>
                                <h3 className="font-semibold">Tailwind CSS</h3>
                                <p className="text-gray-600 text-sm">Styling Framework</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6 text-center">
                                <div className="text-3xl mb-3">💾</div>
                                <h3 className="font-semibold">Local Storage</h3>
                                <p className="text-gray-600 text-sm">Data Persistence</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6 text-center">
                                <div className="text-3xl mb-3">🚀</div>
                                <h3 className="font-semibold">Vercel</h3>
                                <p className="text-gray-600 text-sm">Deployment Platform</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-blue-600 text-white rounded-lg p-12">
                        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Experience the power of time-aware task management with TickTodo
                        </p>
                        <a
                            href="https://ticktodo.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
                        >
                            Launch TickTodo Now →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicktodoPage;