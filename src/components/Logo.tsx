import React from 'react';

const Logo: React.FC<{ className?: string, light?: boolean, customLogo?: string }> = ({ className = "w-full", light = false, customLogo }) => {
  if (customLogo) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img src={customLogo} alt="Magic Prints Logo" className="max-h-full w-auto object-contain" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="relative leading-none flex flex-col items-center">
        {/* "Magic" using Standard Web-friendly Script Font */}
        <span 
          className={`block font-script text-[48px] md:text-[60px] leading-[0.7] mb-2 select-none ${
            light ? 'text-white' : 'magic-text'
          }`}
          style={{ 
            textShadow: light ? 'none' : '0 2px 10px rgba(217,0,130,0.15)',
            letterSpacing: '-0.02em'
          }}
        >
          Magic
        </span>
        
        {/* "PRINTS FOR YOU" */}
        <div className="flex flex-col items-center w-full">
          <span className={`block text-[11px] md:text-[18px] font-black tracking-[0.28em] whitespace-nowrap leading-none uppercase ${
            light ? 'text-white' : 'text-[#41137e]'
          }`}>
            PRINTS FOR YOU
          </span>
          
          <div className="flex items-center gap-2 mt-2 w-full max-w-[140px] md:max-w-none justify-center">
             <div className={`h-[1px] flex-grow ${light ? 'bg-white/30' : 'bg-[#d90082]/20'}`}></div>
             <span className={`text-[6px] md:text-[8px] font-black tracking-[0.35em] uppercase whitespace-nowrap ${
               light ? 'text-white/60' : 'text-[#d90082]'
             }`}>
               Transforming Dreams
             </span>
             <div className={`h-[1px] flex-grow ${light ? 'bg-white/30' : 'bg-[#d90082]/20'}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
