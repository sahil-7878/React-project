import React from 'react';

function Intro() {
    return (
        <div className="p-8 max-w-5xl mx-auto animate-fadeIn">

            {/* Hero Section */}
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">React Explorer</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                    Your interactive playground for mastering React components.
                    Navigate through the sidebar to explore different concepts, view live code, and see instant results.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1: The Purpose */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                        {/* Icon */}
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Learn by Example</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Forget reading long documentation. Click on any topic to see a real-world example of how the code works in practice.
                    </p>
                </div>

                {/* Card 2: The Code */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                        {/* Icon */}
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Clean Syntax</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Every example is written in modern React (Hooks & Functional Components) with clear syntax highlighting.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Intro;