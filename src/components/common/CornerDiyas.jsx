import React from 'react';
import { motion } from 'framer-motion';

const CornerDiya = ({ style, flip }) => (
  <motion.div
    className="pointer-events-none"
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 1 }}
  >
    <svg
      viewBox="0 0 40 55"
      className="w-8 h-10 sm:w-10 sm:h-12"
      style={{
        transform: flip ? 'scaleX(-1)' : 'none',
        filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.8))',
      }}
    >
      {/* Flame */}
      <motion.path
        d="M20 6 C 14 18, 8 28, 13 38 C 15 43, 25 43, 27 38 C 32 28, 26 18, 20 6 Z"
        fill="url(#cf1)"
        className="animate-corner-flame"
        style={{ transformOrigin: '20px 40px' }}
      />
      <motion.path
        d="M20 14 C 17 22, 14 30, 17 37 C 18 40, 22 40, 23 37 C 26 30, 23 22, 20 14 Z"
        fill="url(#cf2)"
        className="animate-corner-flame"
        style={{ transformOrigin: '20px 40px', animationDelay: '0.3s' }}
      />
      {/* Bowl */}
      <ellipse cx="20" cy="44" rx="12" ry="4" fill="#C8A24D" />
      <path d="M8 44 Q 20 50 32 44" fill="#997327" />
      <ellipse cx="20" cy="44" rx="12" ry="4" fill="none" stroke="#FFD700" strokeWidth="0.8" opacity="0.7" />
      <defs>
        <linearGradient id="cf1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF9ED" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#C8A24D" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="cf2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

export const CornerDiyas = () => (
  <>
    <CornerDiya style={{ position: 'fixed', bottom: 'max(12px, env(safe-area-inset-bottom))', left: '12px', zIndex: 30 }} flip={false} />
    <CornerDiya style={{ position: 'fixed', bottom: 'max(12px, env(safe-area-inset-bottom))', left: '60px', zIndex: 30 }} flip={true} />
  </>
);
