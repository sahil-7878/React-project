import React from "react";

const StudentCard = ({ student, onDelete, onToggle, onMark }) => {

  const statusBorder = 
    student.isPresent === true ? 'border-l-emerald-500' :
    student.isPresent === false ? 'border-l-rose-500' :
    'border-l-indigo-500';

  const statusGlow = 
    student.isPresent === true ? 'shadow-[0_0_20px_rgba(16,185,129,0.15)]' :
    student.isPresent === false ? 'shadow-[0_0_20px_rgba(244,63,94,0.15)]' :
    'hover:shadow-lg hover:shadow-indigo-500/10';

  return (
    <div 
      className={`
        relative overflow-hidden transition-all duration-300 ease-out
        bg-slate-800/40 backdrop-blur-md border border-slate-700/50 
        rounded-2xl border-l-4 ${statusBorder} ${statusGlow}
        hover:-translate-y-1 flex flex-col
      `}
    >
      {/* Card Header */}
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
            ${student.isPresent === true ? 'bg-emerald-500/20 text-emerald-400' : 
              student.isPresent === false ? 'bg-rose-500/20 text-rose-400' : 
              'bg-indigo-500/20 text-indigo-400'}
          `}>
            {student.name.charAt(0).toUpperCase()}
          </div>
          
          {/* Name & Status Text */}
          <div>
            <h3 className="font-semibold text-slate-100 text-lg leading-tight">
              {student.name}
            </h3>
            <p className="text-xs text-slate-400 font-medium tracking-wide mt-1">
              {student.isPresent === true && <span className="text-emerald-400">● Present</span>}
              {student.isPresent === false && <span className="text-rose-400">● Absent</span>}
              {student.isPresent === null && <span className="text-slate-500">○ Not Marked</span>}
            </p>
          </div>
        </div>

        {/* Delete Button */}
        <button 
          onClick={() => onDelete(student.id)}
          className="p-2 rounded-lg bg-slate-700/30 hover:bg-rose-500 hover:text-white text-slate-400 transition-colors"
          title="Delete Student"
        >
          {/* SVG: Trash2 */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>

      {/* Toggle Button Area */}
      <div className="px-5 pb-4">
        <button 
          onClick={() => onToggle(student.id)}
          className="text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {student.showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {/* Conditional Rendering (The Details) */}
      {student.showDetails && (
        <div className="px-5 pb-5 pt-2 border-t border-slate-700/50 bg-slate-800/20">
          <div className="flex justify-between items-center mb-3 mt-2">
            <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
              ID: {student.id}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onMark(student.id, 'present')}
              className={`
                flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold transition-all
                ${student.isPresent === true 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' 
                  : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-emerald-400'}
              `}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
              Present
            </button>
            <button
              onClick={() => onMark(student.id, 'absent')}
              className={`
                flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold transition-all
                ${student.isPresent === false
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25' 
                  : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-rose-400'}
              `}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="18" y1="8" x2="23" y2="13"></line>
                <line x1="23" y1="8" x2="18" y2="13"></line>
              </svg>
              Absent
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentCard;