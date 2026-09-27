import React from 'react';
import { motion } from 'framer-motion';

const CornerDiya = ({ style, flip, index = 0 }) => (
  <motion.div
    className="pointer-events-none"
    style={style}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 1 + index * 0.5, ease: 'easeOut' }}
  >
    <motion.div
      animate={{
        rotate: [0, 1, 0, -1, 0],
        scale: [1, 1.02, 1]
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      style={{ display: 'inline-block' }}
    >
      <svg
        viewBox="0 0 40 55"
        className="w-8 h-10 sm:w-10 sm:h-12"
        style={{
          transform: flip ? 'scaleX(-1)' : 'none',
          filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.8))',
        }}
      >
        {/* Inner Glow Sparkles */}
        <motion.circle
          cx="18" cy="8" r="1.2" fill="#FFFFFF"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
        <motion.circle
          cx="22" cy="12" r="0.8" fill="#FFD700"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
        
        {/* Flame */}
        <motion.path
          d="M20 6 C 14 18, 8 28, 13 38 C 15 43, 25 43, 27 38 C 32 28, 26 18, 20 6 Z"
          fill="url(#cf1)"
          animate={{ 
            scaleY: [0.9, 1.1, 0.9],
            rotate: [0, 1, 0, -1, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            transformOrigin: '20px 40px'
          }}
        />
        <motion.path
          d="M20 14 C 17 22, 14 30, 17 37 C 18 40, 22 40, 23 37 C 26 30, 23 22, 20 14 Z"
          fill="url(#cf2)"
          animate={{ 
            scaleY: [0.8, 1.2, 0.8],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            transformOrigin: '20px 40px',
            delay: 0.3
          }}
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
  </motion.div>
);

export const CornerDiyas = () => (
  <>
    <CornerDiya style={{ position: 'fixed', bottom: 'max(12px, env(safe-area-inset-bottom))', left: '12px', zIndex: 30 }} flip={false} index={0} />
    <CornerDiya style={{ position: 'fixed', bottom: 'max(12px, env(safe-area-inset-bottom))', left: '60px', zIndex: 30 }} flip={true} index={1} />
    <CornerDiya style={{ position: 'fixed', bottom: 'max(12px, env(safe-area-inset-bottom))', right: '12px', zIndex: 30 }} flip={true} index={2} />
    <CornerDiya style={{ position: 'fixed', bottom: 'max(12px, env(safe-area-inset-bottom))', right: '60px', zIndex: 30 }} flip={false} index={3} />
  </>
);
