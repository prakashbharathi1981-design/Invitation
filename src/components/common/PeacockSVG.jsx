import React from 'react';
import { motion } from 'framer-motion';

export const PeacockSVG = ({ className = "w-28 h-36" }) => {
  return (
    <motion.svg
      viewBox="0 0 100 130"
      className={`${className} gold-glow`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="peacockGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9ED" />
          <stop offset="50%" stopColor="#C8A24D" />
          <stop offset="100%" stopColor="#421520" />
        </linearGradient>
      </defs>

      {/* Peacock Feather Fan Body */}
      {[...Array(7)].map((_, i) => {
        const angle = -60 + i * 20;
        return (
          <g key={i} transform={`rotate(${angle} 50 85)`}>
            <path
              d="M 50 85 C 50 45 42 20 50 10 C 58 20 50 45 50 85 Z"
              fill="none"
              stroke="url(#peacockGold)"
              strokeWidth="1.5"
            />
            {/* Feather Eye */}
            <circle cx="50" cy="18" r="4" fill="none" stroke="#FFD700" strokeWidth="1.2" />
            <circle cx="50" cy="18" r="2" fill="#C8A24D" />
          </g>
        );
      })}

      {/* Peacock Body & Curved Neck */}
      <path
        d="M 50 85 C 40 70 38 48 48 38 C 54 32 60 35 56 25 C 54 20 48 20 48 15 C 48 10 54 8 56 12 C 58 16 64 24 62 34 C 60 44 48 55 58 85 Z"
        fill="url(#peacockGold)"
        stroke="#C8A24D"
        strokeWidth="1"
      />

      {/* Crown Feathers (Konda) */}
      <path d="M 52 10 L 48 2 M 53 10 L 53 1 M 54 10 L 58 3" stroke="#FFD700" strokeWidth="1.2" />
      <circle cx="48" cy="2" r="1.5" fill="#FFD700" />
      <circle cx="53" cy="1" r="1.5" fill="#FFD700" />
      <circle cx="58" cy="3" r="1.5" fill="#FFD700" />
    </motion.svg>
  );
};

