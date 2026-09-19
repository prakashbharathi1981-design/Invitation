import React from 'react';

export const TempleSVG = ({ className = "w-48 h-32", opacity = 0.8 }) => {
  return (
    <svg viewBox="0 0 200 120" className={`${className} gold-glow`} style={{ opacity }}>
      <defs>
        <linearGradient id="templeGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF9ED" />
          <stop offset="30%" stopColor="#F5EBD2" />
          <stop offset="70%" stopColor="#C8A24D" />
          <stop offset="100%" stopColor="#421520" />
        </linearGradient>
      </defs>

      {/* Kalasam Tier Top Points */}
      <circle cx="100" cy="12" r="3" fill="#FFD700" />
      <circle cx="85" cy="18" r="2.5" fill="#C8A24D" />
      <circle cx="115" cy="18" r="2.5" fill="#C8A24D" />

      {/* Gopuram Pyramidal Tiers */}
      <path d="M 97 15 L 103 15 L 105 25 L 95 25 Z" fill="url(#templeGold)" />
      <path d="M 90 25 L 110 25 L 115 40 L 85 40 Z" fill="url(#templeGold)" stroke="#C8A24D" strokeWidth="0.5" />
      <path d="M 80 40 L 120 40 L 128 60 L 72 60 Z" fill="url(#templeGold)" stroke="#C8A24D" strokeWidth="0.5" />
      <path d="M 65 60 L 135 60 L 145 85 L 55 85 Z" fill="url(#templeGold)" stroke="#C8A24D" strokeWidth="0.5" />

      {/* Base Arch Gateway */}
      <path d="M 45 85 L 155 85 L 160 115 L 40 115 Z" fill="url(#templeGold)" />

      {/* Sanctum Doorway Arch Cutout */}
      <path d="M 80 115 L 80 92 C 80 82 120 82 120 92 L 120 115 Z" fill="#170B10" stroke="#FFD700" strokeWidth="1" />

      {/* Decorative Ornaments on Pillars */}
      <line x1="60" y1="85" x2="60" y2="115" stroke="#FFF9ED" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="140" y1="85" x2="140" y2="115" stroke="#FFF9ED" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
};

