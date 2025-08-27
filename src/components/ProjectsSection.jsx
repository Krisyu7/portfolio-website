import React from 'react';

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
                                <span className="text-white text-lg">Project Screenshot</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-semibold">查看项目</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">项目标题 1</h3>
                            <p className="text-gray-600 mb-4">项目简短描述，展示主要功能和技术特点</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Node.js</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-64 bg-gray-200 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                                <span className="text-white text-lg">Project Screenshot</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-semibold">查看项目</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">项目标题 2</h3>
                            <p className="text-gray-600 mb-4">项目简短描述，展示主要功能和技术特点</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Vue</span>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">JavaScript</span>
                            </div>
                        </div>
                    </div>


                </div>



                <div className="text-center">
                    <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                        这些项目展示了我在前端开发、用户体验设计和全栈开发方面的技能。每个项目都体现了我对代码质量和用户体验的追求。
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