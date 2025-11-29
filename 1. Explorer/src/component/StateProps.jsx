import React, { useState } from 'react';

const StudentProfile = ({ name, course }) => {
    
  const [studyHours, setStudyHours] = useState(0);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
      
      {/* Displaying Props */}
      <div className="mb-6 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
        <p className="text-lg text-slate-500 font-medium">Course: {course}</p>
      </div>

      {/* Displaying State */}
      <div className="flex items-center justify-between bg-blue-50 p-4 rounded-xl">
        <div>
          <p className="text-sm text-blue-600 font-bold uppercase tracking-wider">Progress</p>
          <p className="text-2xl font-bold text-slate-800">{studyHours} <span className="text-base font-normal text-slate-500">hours</span></p>
        </div>

        {/* Button changes State */}
        <button onClick={() => setStudyHours(studyHours + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-blue-200 shadow-lg"
        >
          + Study
        </button>
      </div>

    </div>
  );
};

export default StudentProfile;