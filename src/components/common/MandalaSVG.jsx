import React from 'react';

export const MandalaSVG = ({ className = "w-64 h-64", opacity = 0.2, rotate = true }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${rotate ? 'animate-rotate-slow' : ''}`}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="mandalaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9ED" />
          <stop offset="50%" stopColor="#C8A24D" />
          <stop offset="100%" stopColor="#997327" />
        </linearGradient>
      </defs>

      <g stroke="url(#mandalaGrad)" fill="none" strokeWidth="1">
        {/* Concentric Rings */}
        <circle cx="100" cy="100" r="95" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="88" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="75" />
        <circle cx="100" cy="100" r="55" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="35" />
        <circle cx="100" cy="100" r="15" fill="url(#mandalaGrad)" fillOpacity="0.2" />

        {/* 12 Petals Layer 1 */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path d="M 100 25 Q 110 50 100 75 Q 90 50 100 25 Z" />
            <circle cx="100" cy="40" r="3" fill="url(#mandalaGrad)" />
            <path d="M 100 75 Q 118 88 100 100 Q 82 88 100 75 Z" opacity="0.6" />
          </g>
        ))}

        {/* Decorative Ray Lines */}
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, i) => (
          <line
            key={i}
            x1="100"
            y1="10"
            x2="100"
            y2="25"
            transform={`rotate(${angle} 100 100)`}
            strokeWidth="1.5"
          />
        ))}
      </g>
    </svg>
  );
};

