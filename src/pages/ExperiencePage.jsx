import React from 'react';
import Header from '../components/Header';
import WeatherSearchCard from '../WeatherSearch/WeatherSearchCard';

function ExperiencePage() {
    return (
        <div>
            <Header />
            <div className="pt-20 min-h-screen bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 py-20">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">Experience & Skills</h1>

                    {/* Weather Card作为技能展示 */}
                    <div className="flex justify-center">
                        <WeatherSearchCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;