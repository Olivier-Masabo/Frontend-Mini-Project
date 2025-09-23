import { useState, useEffect } from 'react';

 function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('frontend');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const frontendSkills = [
        { name: 'React.js', level: 75, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 78, color: 'bg-yellow-500' },
        {name:"Git", level:68, color:'bg-lime-500'},
        { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' }
       
    ];

    const backendSkills = [
        { name: 'Node.js', level: 65, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 55, color: 'bg-blue-600' },
        { name: 'Express.js', level: 60, color: 'bg-gray-600' },
        { name: 'APIs', level: 70, color: 'bg-purple-500' },
        {name:"Git", level:68, color:'bg-lime-500'}
    ];

    const currentSkills = activeTab === 'frontend' ? frontendSkills : backendSkills;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <div className="container mx-auto px-6 py-12">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    
                    <div className="text-center mb-16">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                            OM
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Olivier Masabo
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <span className="px-4 py-2 bg-blue-500 bg-opacity-20 border border-blue-400 rounded-full text-blue-300 text-sm">
                                Frontend Developer
                            </span>
                            <span className="px-4 py-2 bg-green-500 bg-opacity-20 border border-green-400 rounded-full text-green-300 text-sm">
                                Backend Learning
                            </span>
                            <span className="px-4 py-2 bg-purple-500 bg-opacity-20 border border-purple-400 rounded-full text-purple-300 text-sm">
                                Full-Stack Focused
                            </span>
                        </div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Crafting exceptional web experiences with modern technologies. 
                            Passionate about clean code, user-centric design, and continuous learning.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-xl border border-gray-700">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-white text-xl">👨‍💻</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white">About Me</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                I'm a passionate <span className="text-blue-400 font-semibold">frontend developer</span> 
                                with a strong foundation in modern web technologies. Currently building 
                                responsive, user-friendly applications while expanding into 
                                <span className="text-green-400 font-semibold"> full-stack development</span>.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                My approach focuses on writing clean, maintainable code and creating 
                                intuitive user experiences that solve real-world problems.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-white rounded-full text-sm border border-blue-400">Problem Solver</span>
                                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-white rounded-full text-sm border border-blue-400">Team Player</span>
                                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-white rounded-full text-sm border border-blue-400">Fast Learner</span>
                            </div>
                        </div>

                        <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-xl border border-gray-700">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-white text-xl">🎯</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white">Current Goals</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-300">Master full-stack development</span>
                                        <span className="text-blue-400">68%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-300">Build production-ready apps</span>
                                        <span className="text-blue-400">70%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-300">Contribute to open-source</span>
                                        <span className="text-blue-400">40%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-2/5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-xl border border-gray-700 mb-12">
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                                <span className="text-white text-xl">⚡</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
                        </div>
                        
                        <div className="flex justify-center mb-8">
                            <div className="bg-gray-700 bg-opacity-50 rounded-xl p-1 flex">
                                <button 
                                    onClick={() => setActiveTab('frontend')}
                                    className={` cursor-pointer px-6 py-2 rounded-lg transition-all duration-300 ${activeTab === 'frontend' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Frontend
                                </button>
                                <button 
                                    onClick={() => setActiveTab('backend')}
                                    className={`cursor-pointer px-6 py-2 rounded-lg transition-all duration-300 ${activeTab === 'backend' ? 'bg-green-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Backend
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {currentSkills.map((skill) => (
                                <div key={skill.name} className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white font-medium">{skill.name}</span>
                                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-3">
                                        <div 
                                            className={`${skill.color} h-3 rounded-full transition-all duration-1000`}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-xl border border-gray-700 mb-12">
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                                <span className="text-white text-xl">🚀</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Recent Projects</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-700 bg-opacity-30 border border-gray-600 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">E-Commerce Platform</h3>
                                <p className="text-gray-400 text-sm mb-4">React, Node.js, PostgreSQL</p>
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 bg-yellow-500 bg-opacity-20 text-yellow-300 border border-yellow-400 rounded-full text-xs font-medium">
                                        In Progress
                                    </span>
                                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium cursor-pointer">
                                        View →
                                    </button>
                                </div>
                            </div>
                            
                            <div className="bg-gray-700 bg-opacity-30 border border-gray-600 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Student management system</h3>
                                <p className="text-gray-400 text-sm mb-4">React, Tailwind CSS</p>
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 border border-green-400 rounded-full text-xs font-medium">
                                        Completed
                                    </span>
                                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium cursor-pointer">
                                        View →
                                    </button>
                                </div>
                            </div>
                            
                            <div className="bg-gray-700 bg-opacity-30 border border-gray-600 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Weather Dashboard</h3>
                                <p className="text-gray-400 text-sm mb-4">JavaScript, APIs</p>
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 border border-green-400 rounded-full text-xs font-medium">
                                        Completed
                                    </span>
                                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium cursor-pointer">
                                        View →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-xl border border-gray-700 inline-block">
                            <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
                            <div className="flex justify-center space-x-4 mb-6">
                                <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg transform hover:scale-105">
                                    Get In Touch
                                </button>
                                <button className="px-8 py-3 border border-gray-500 text-gray-300 hover:text-white hover:border-gray-400 rounded-xl font-medium transition-all duration-200 cursor-pointer">
                                    View Resume
                                </button>
                            </div>
                            <div className="flex justify-center space-x-6">
                                <button className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"><a href="https://github.com/Olivier-Masabo" target='_blanck'>GitHub</a></button>
                                <button className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">LinkedIn</button>
                                <button className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Whatsapp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

 export default Home;