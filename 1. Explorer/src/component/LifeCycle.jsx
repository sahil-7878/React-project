import React, { useState, useEffect, useRef } from 'react';

const IconActivity = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const IconRefreshCw = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);
const LifecycleSubject = ({ id }) => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue');
  
  const isFirstRender = useRef(true);

  // 1. MOUNTING & UNMOUNTING
  useEffect(() => {
    // CSS styling for console logs
    console.log('Component MOUNTED %c (DOM Inserted)');

    // The cleanup function
    return () => {
      console.log('Component UNMOUNTED %c (DOM Removed & Cleaned up)');
    };
  }, []);

  // 2. UPDATING (Count)
  useEffect(() => {
    if (count > 0) {
      console.log(`UPDATED (Count) %c Value: ${count}`);
    }
  }, [count]);

  // 3. UPDATING (Color)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log(`UPDATED (Color) %c Value: ${color}`);
  }, [color]);

  return (
    <div className={`
      relative overflow-hidden p-6 rounded-2xl shadow-2xl transition-all duration-500 transform
      ${color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-800' : ''}
      ${color === 'purple' ? 'bg-gradient-to-br from-purple-600 to-purple-800' : ''}
      ${color === 'emerald' ? 'bg-gradient-to-br from-emerald-600 to-emerald-800' : ''}
      text-white border border-white/10 animate-in fade-in zoom-in duration-300 w-full max-w-md mx-auto
    `}>
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <IconActivity size={120} />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <IconActivity className="animate-pulse" /> Live Component
          </h2>
          <span className="bg-black/30 px-3 py-1 rounded-full text-xs font-mono border border-white/20">
            ID: {id}
          </span>
        </div>

        <div className="space-y-6">
          {/* Counter Control */}
          <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium opacity-80">Trigger Update (Count)</span>
              <span className="text-2xl font-mono font-bold">{count}</span>
            </div>
            <button
              onClick={() => setCount(c => c + 1)}
              className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium active:scale-95 duration-150"
            >
              <IconRefreshCw size={16} /> Increment Count
            </button>
          </div>

          {/* Color Control */}
          <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium opacity-80 block mb-3">Trigger Effect (Color)</span>
            <div className="flex gap-2">
              {['blue', 'purple', 'emerald'].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`flex-1 h-10 rounded-lg border-2 transition-transform active:scale-90 ${
                    color === c ? 'border-white scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                  } ${
                    c === 'blue' ? 'bg-blue-500' : c === 'purple' ? 'bg-purple-500' : 'bg-emerald-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifecycleSubject;