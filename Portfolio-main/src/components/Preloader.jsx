import React, { useState, useEffect } from 'react';

const Preloader = ({ hasEntered, setHasEntered }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (hasEntered) {
      // ⏳ Changed timer to 2.5 seconds (2500ms) to match the new slow animation
      const timer = setTimeout(() => setIsHidden(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [hasEntered]);

  if (isHidden) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center pointer-events-none">
      
      {/* Left Curtain - Slowed to 2500ms with a smooth ease-in-out */}
      <div 
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#0a0a0a] pointer-events-auto transition-transform duration-[2500ms] ease-in-out border-r border-white/5 ${
          hasEntered ? '-translate-x-full' : 'translate-x-0'
        }`}
      ></div>

      {/* Right Curtain - Slowed to 2500ms with a smooth ease-in-out */}
      <div 
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#0a0a0a] pointer-events-auto transition-transform duration-[2500ms] ease-in-out border-l border-white/5 ${
          hasEntered ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></div>

      {/* Center Content (Button & Name) */}
      <div 
        className={`relative z-[60] flex flex-col items-center gap-8 transition-opacity duration-1000 pointer-events-auto ${
          hasEntered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-white text-3xl md:text-5xl font-black tracking-[0.2em] uppercase">
          Ammar Tanveer
        </h1>
        <button
          onClick={() => setHasEntered(true)}
          className="px-10 py-4 border border-[#ff2a2a] text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white font-bold tracking-[0.15em] text-sm uppercase rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.2)] hover:shadow-[0_0_30px_rgba(255,42,42,0.6)] bg-black/50 backdrop-blur-sm"
        >
          Enter Portfolio
        </button>
      </div>
      
    </div>
  );
};

export default Preloader;