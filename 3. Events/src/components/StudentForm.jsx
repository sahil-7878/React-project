import { useEffect, useRef, useState } from "react";

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // Focus input on initial render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onAddStudent(name);
    setName('');
    // Refocus after adding
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-2xl mx-auto mb-10">
      <form onSubmit={handleSubmit} className="relative group">
        {/* Glow Effect Background */}
        <div className={`
          absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          rounded-2xl opacity-75 blur transition duration-500 group-hover:opacity-100
          ${isFocused ? 'opacity-100 duration-200' : 'opacity-30'}
        `}></div>
        
        {/* Input Container */}
        <div className="relative flex items-center bg-slate-900 rounded-xl p-2 pr-2.5">
          <div className="pl-4 text-slate-400">
            {/* SVG: Search */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Add new student..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-lg px-4 py-3 focus:outline-none"
          />
          <button 
            type="submit"
            className="
              bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500
              text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/30
              transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2
            "
          >
            {/* SVG: Plus */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;