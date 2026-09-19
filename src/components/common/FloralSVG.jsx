import React from 'react';

export const FloralCorner = ({ position = "top-left", className = "w-32 h-32" }) => {
  const positionTransforms = {
    'top-left': 'rotate(0deg)',
    'top-right': 'scaleX(-1)',
    'bottom-left': 'scaleY(-1)',
    'bottom-right': 'rotate(180deg)'
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} pointer-events-none gold-glow`}
      style={{ transform: positionTransforms[position] || 'none' }}
    >
      <defs>
        <linearGradient id="floralGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9ED" />
          <stop offset="60%" stopColor="#C8A24D" />
          <stop offset="100%" stopColor="#997327" />
        </linearGradient>
      </defs>

      {/* Main Flourish Scroll Vine */}
      <path
        d="M 5 5 C 25 5 45 15 55 35 C 65 55 55 85 85 95 M 5 5 C 5 25 15 45 35 55 C 55 65 85 55 95 85"
        fill="none"
        stroke="url(#floralGold)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Vine Leaf Scrolls */}
      <path d="M 25 12 Q 35 2 40 18 C 30 22 25 18 25 12 Z" fill="url(#floralGold)" opacity="0.9" />
      <path d="M 12 25 Q 2 35 18 40 C 22 30 18 25 12 25 Z" fill="url(#floralGold)" opacity="0.9" />
      <path d="M 45 30 Q 60 20 62 38 C 50 42 42 36 45 30 Z" fill="url(#floralGold)" opacity="0.9" />

      {/* Little Lotus Blossom Corner Accent */}
      <circle cx="15" cy="15" r="4" fill="#FFD700" />
      <circle cx="35" cy="35" r="3" fill="#C8A24D" />
    </svg>
  );
};

export const FloralDivider = ({ className = "w-full max-w-md h-8" }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className} my-6`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8A24D] to-transparent opacity-60"></div>
      <svg viewBox="0 0 80 30" className="w-16 h-6 gold-glow overflow-visible">
        <path
          d="M 40 5 C 30 12 20 10 10 20 C 25 20 35 15 40 5 Z M 40 5 C 50 12 60 10 70 20 C 55 20 45 15 40 5 Z"
          fill="#C8A24D"
        />
        <circle cx="40" cy="18" r="4" fill="#FFD700" />
        <circle cx="25" cy="22" r="2" fill="#F5EBD2" />
        <circle cx="55" cy="22" r="2" fill="#F5EBD2" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8A24D] to-transparent opacity-60"></div>
    </div>
  );
};

export const Thoranam = ({ className = "w-full h-12" }) => {
  return (
    <svg viewBox="0 0 500 40" className={`${className} pointer-events-none`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C8A24D" />
          <stop offset="100%" stopColor="#421520" />
        </linearGradient>
      </defs>

      {/* Top Hanging String */}
      <line x1="0" y1="5" x2="500" y2="5" stroke="#C8A24D" strokeWidth="2" />

      {/* Mango Leaf Pendants */}
      {[25, 75, 125, 175, 225, 275, 325, 375, 425, 475].map((x, i) => (
        <g key={i} transform={`translate(${x - 15}, 5)`}>
          <path d="M 15 0 C 5 15 2 28 15 38 C 28 28 25 15 15 0 Z" fill="url(#leafGrad)" stroke="#FFF9ED" strokeWidth="0.8" />
          <line x1="15" y1="0" x2="15" y2="34" stroke="#FFD700" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  );
};

export const Kolam = ({ className = "w-24 h-24", opacity = 0.5 }) => {
  return (
    <svg viewBox="0 0 100 100" className={`${className} gold-glow`} style={{ opacity }}>
      <g stroke="#C8A24D" fill="none" strokeWidth="1.2">
        {/* Symmetric Lotus Kolam Pattern */}
        <circle cx="50" cy="50" r="8" fill="#C8A24D" fillOpacity="0.3" />
        <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="38" />

        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <path d="M 50 12 C 45 28 40 38 50 42 C 60 38 55 28 50 12 Z" />
            <circle cx="50" cy="25" r="2" fill="#FFD700" />
          </g>
        ))}
      </g>
    </svg>
  );
};

