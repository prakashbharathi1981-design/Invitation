import React from 'react';
import { motion } from 'framer-motion';

/**
 * Custom SVG Line Art recreating the sleek, modern calligraphy Ganesha
 * Uses Framer Motion to draw the paths dynamically like a pen.
 */
export const GaneshaSVG = ({ className = "w-28 h-36", animate = true }) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2.5, ease: "easeInOut" }
    }
  };

  const fillVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, delay: 1.5, ease: "easeOut" }
    }
  };

  return (
    <motion.svg
      viewBox="0 0 200 280"
      className={`${className} overflow-visible`}
      style={{ filter: 'drop-shadow(0 0 12px rgba(200,162,77,0.5))' }}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
    >
      <defs>
        <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9ED" />
          <stop offset="40%" stopColor="#F5EBD2" />
          <stop offset="80%" stopColor="#C8A24D" />
          <stop offset="100%" stopColor="#997327" />
        </linearGradient>
      </defs>

      {/* 1. Bindu (Top Dot) */}
      <motion.ellipse cx="100" cy="20" rx="6" ry="10" fill="url(#ganeshaGold)" variants={fillVariants} />

      {/* 2. Top Side Arcs */}
      <motion.path d="M 82 25 Q 60 45 68 70" fill="none" stroke="url(#ganeshaGold)" strokeWidth="4" strokeLinecap="round" variants={pathVariants} />
      <motion.path d="M 118 25 Q 140 45 132 70" fill="none" stroke="url(#ganeshaGold)" strokeWidth="4" strokeLinecap="round" variants={pathVariants} />

      {/* 3. Tripundra (Three horizontal lines) */}
      <motion.path d="M 88 40 Q 100 36 112 40" fill="none" stroke="url(#ganeshaGold)" strokeWidth="3" strokeLinecap="round" variants={pathVariants} />
      <motion.path d="M 82 48 Q 100 44 118 48" fill="none" stroke="url(#ganeshaGold)" strokeWidth="4" strokeLinecap="round" variants={pathVariants} />
      <motion.path d="M 84 56 Q 100 60 116 56" fill="none" stroke="url(#ganeshaGold)" strokeWidth="3" strokeLinecap="round" variants={pathVariants} />

      {/* 4. Third Eye (Center Drop) */}
      <motion.path d="M 100 68 Q 106 78 100 85 Q 94 78 100 68 Z" fill="url(#ganeshaGold)" variants={fillVariants} />

      {/* 5. Left Ear (Top and Bottom swoops) */}
      <motion.path d="M 25 90 C 50 70, 80 80, 92 92" fill="none" stroke="url(#ganeshaGold)" strokeWidth="5" strokeLinecap="round" variants={pathVariants} />
      <motion.path d="M 25 90 C 40 110, 55 125, 70 145" fill="none" stroke="url(#ganeshaGold)" strokeWidth="4" strokeLinecap="round" variants={pathVariants} />
      <motion.path d="M 55 100 C 62 115, 68 125, 75 135" fill="none" stroke="url(#ganeshaGold)" strokeWidth="2.5" strokeLinecap="round" variants={pathVariants} />

      {/* 6. Right Ear (Top and Bottom swoops) */}
      <motion.path d="M 175 90 C 150 70, 120 80, 108 92" fill="none" stroke="url(#ganeshaGold)" strokeWidth="5" strokeLinecap="round" variants={pathVariants} />
      <motion.path d="M 175 90 C 160 110, 145 125, 130 145" fill="none" stroke="url(#ganeshaGold)" strokeWidth="4" strokeLinecap="round" variants={pathVariants} />
      <motion.path d="M 145 100 C 138 115, 132 125, 125 135" fill="none" stroke="url(#ganeshaGold)" strokeWidth="2.5" strokeLinecap="round" variants={pathVariants} />

      {/* 7. Main Trunk (Thick right curve) */}
      <motion.path 
        d="M 92 92 C 105 130, 140 160, 120 215 C 100 255, 60 250, 75 275" 
        fill="none" 
        stroke="url(#ganeshaGold)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        variants={pathVariants} 
      />

      {/* 8. Inner Trunk (Thin left curve) */}
      <motion.path 
        d="M 70 145 C 85 165, 120 190, 95 230 C 85 245, 75 250, 80 255" 
        fill="none" 
        stroke="url(#ganeshaGold)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        variants={pathVariants} 
      />

      {/* 9. Tusk Detail (Left side notch) */}
      <motion.path 
        d="M 70 145 C 65 152, 65 155, 75 158" 
        fill="none" 
        stroke="url(#ganeshaGold)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        variants={pathVariants} 
      />
    </motion.svg>
  );
};
