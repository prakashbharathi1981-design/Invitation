import React from 'react';
import { motion } from 'framer-motion';

export const LotusSVG = ({ className = "w-32 h-32", animatePetals = true }) => {
  return (
    <svg viewBox="0 0 120 100" className={`${className} gold-glow overflow-visible`}>
      <defs>
        <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9ED" />
          <stop offset="40%" stopColor="#F5EBD2" />
          <stop offset="80%" stopColor="#C8A24D" />
          <stop offset="100%" stopColor="#B87578" />
        </linearGradient>
      </defs>

      {/* Lotus Pool Base Ripples */}
      <ellipse cx="60" cy="88" rx="45" ry="8" fill="none" stroke="#C8A24D" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

      {/* Outer Left Petal */}
      <motion.path
        d="M 60 75 C 20 70 10 45 25 35 C 38 45 52 65 60 75 Z"
        fill="url(#lotusGold)"
        opacity="0.85"
        initial={animatePetals ? { rotate: -15, originX: "60px", originY: "75px" } : false}
        animate={animatePetals ? { rotate: 0 } : false}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Outer Right Petal */}
      <motion.path
        d="M 60 75 C 100 70 110 45 95 35 C 82 45 68 65 60 75 Z"
        fill="url(#lotusGold)"
        opacity="0.85"
        initial={animatePetals ? { rotate: 15, originX: "60px", originY: "75px" } : false}
        animate={animatePetals ? { rotate: 0 } : false}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Mid Left Petal */}
      <motion.path
        d="M 60 75 C 30 65 25 30 42 20 C 50 35 56 60 60 75 Z"
        fill="url(#lotusGold)"
        opacity="0.95"
        initial={animatePetals ? { rotate: -8, originX: "60px", originY: "75px" } : false}
        animate={animatePetals ? { rotate: 0 } : false}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
      />

      {/* Mid Right Petal */}
      <motion.path
        d="M 60 75 C 90 65 95 30 78 20 C 70 35 64 60 60 75 Z"
        fill="url(#lotusGold)"
        opacity="0.95"
        initial={animatePetals ? { rotate: 8, originX: "60px", originY: "75px" } : false}
        animate={animatePetals ? { rotate: 0 } : false}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
      />

      {/* Central Center Crown Petal */}
      <motion.path
        d="M 60 75 C 45 50 48 15 60 10 C 72 15 75 50 60 75 Z"
        fill="url(#lotusGold)"
        initial={animatePetals ? { scaleY: 0.7, originY: "75px" } : false}
        animate={animatePetals ? { scaleY: 1 } : false}
        transition={{ duration: 1.8, delay: 0.4 }}
      />

      {/* Golden Lotus Filament Stamen */}
      <circle cx="60" cy="55" r="4" fill="#FFD700" />
      <path d="M 56 55 L 53 45 M 60 55 L 60 42 M 64 55 L 67 45" stroke="#FFF9ED" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

