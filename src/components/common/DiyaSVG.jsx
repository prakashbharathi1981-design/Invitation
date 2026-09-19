import React from 'react';
import { motion } from 'framer-motion';

export const DiyaSVG = ({ className = "w-16 h-16" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="diyaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9ED" />
            <stop offset="50%" stopColor="#C8A24D" />
            <stop offset="100%" stopColor="#421520" />
          </linearGradient>
          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE066" stopOpacity="1" />
            <stop offset="40%" stopColor="#FF9900" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C8A24D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Diya Oil Lamp Base */}
        <path
          d="M 15 60 C 15 85 85 85 85 60 C 75 58 60 55 50 62 C 40 55 25 58 15 60 Z"
          fill="url(#diyaGold)"
          stroke="#C8A24D"
          strokeWidth="1.5"
        />

        {/* Ornaments on Lamp Base */}
        <path
          d="M 25 70 Q 50 82 75 70"
          fill="none"
          stroke="#FFF9ED"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />

        {/* Flame Background Glow Halo */}
        <circle cx="50" cy="38" r="24" fill="url(#flameGlow)" className="animate-pulse" />

        {/* Outer Flame */}
        <motion.path
          d="M 50 20 C 40 35 42 48 50 54 C 58 48 60 35 50 20 Z"
          fill="#FF9900"
          className="animate-diya-flame"
        />

        {/* Inner Flame Core */}
        <motion.path
          d="M 50 26 C 45 36 46 45 50 50 C 54 45 55 36 50 26 Z"
          fill="#FFF5CC"
          className="animate-diya-flame"
        />
      </svg>
    </div>
  );
};

