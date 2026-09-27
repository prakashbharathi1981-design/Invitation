import React from 'react';
import { motion } from 'framer-motion';

// Petal shapes - Rose, Jasmine, Lotus petals
const PetalShapes = {
  rose: 'M 0 0 C 5 -15 25 -20 35 0 C 45 20 35 35 20 25 C 5 15 0 0 Z',
  jasmine: 'M 0 0 C 3 -10 18 -12 25 0 C 32 12 20 18 12 10 C 4 2 0 0 Z',
  lotus: 'M 0 0 C 8 -10 25 -5 30 5 C 35 15 25 25 15 15 C 5 15 0 5 0 0 Z',
};

// Flower types with their colors
const FlowerTypes = [
  { shape: PetalShapes.rose, colors: ['#FFB6C1', '#FFC0CB', '#FF69B4'], name: 'rose' },
  { shape: PetalShapes.jasmine, colors: ['#FFFFFF', '#FFF9ED', '#F5EBD2'], name: 'jasmine' },
  { shape: PetalShapes.lotus, colors: ['#FFD700', '#F5EBD2', '#C8A24D'], name: 'lotus' },
  { shape: PetalShapes.rose, colors: ['#FFE4B5', '#FFDAB9', '#F5EBD2'], name: 'marigold' },
];

const Petal = ({ index, delay }) => {
  const flowerType = FlowerTypes[index % FlowerTypes.length];
  const shape = flowerType.shape;
  const colors = flowerType.colors;

  // Random properties for variety
  const size = 15 + Math.random() * 20;
  const startX = Math.random() * 100;
  const duration = 10 + Math.random() * 15;
  const opacity = 0.6 + Math.random() * 0.3;

  return (
    <motion.div
      key={index}
      className="absolute pointer-events-none"
      initial={{ y: -50, x: startX, opacity: 0 }}
      animate={{
        y: [0, window.innerHeight + 50],
        x: [startX, startX + (Math.random() - 0.5) * 100],
        rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
        opacity: [0, opacity, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'linear',
      }}
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
      }}
    >
      <svg viewBox="0 0 40 40" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 4px rgba(255,215,0,0.3))' }}>
        <defs>
          <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.9" />
            <stop offset="50%" stopColor={colors[1]} stopOpacity="0.95" />
            <stop offset="100%" stopColor={colors[2]} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Petal */}
        <path
          d={shape}
          fill={`url(#grad-${index})`}
          transform="translate(5, 20) scale(0.6)"
          opacity={0.9}
        />
        
        {/* Inner glow */}
        <ellipse
          cx="20" cy="20" 
          rx="8" ry="6"
          fill={colors[1]}
          opacity={0.3}
          filter="blur(2px)"
        />
        
        {/* Center dot */}
        <circle cx="20" cy="18" r="1.5" fill={colors[0]} />
      </svg>
    </motion.div>
  );
};

// Sparkle particles
const Sparkle = ({ index, delay }) => {
  const size = 1 + Math.random() * 2;
  const startX = Math.random() * 100;
  const duration = 3 + Math.random() * 5;

  return (
    <motion.div
      key={index}
      className="absolute pointer-events-none"
      initial={{ y: -50, x: startX, opacity: 0 }}
      animate={{
        y: [0, window.innerHeight + 50],
        x: [startX, startX + (Math.random() - 0.5) * 50],
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'easeOut',
      }}
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        background: '#FFD700',
        borderRadius: '50%',
        boxShadow: '0 0 6px #FFD700',
      }}
    />
  );
};

export const FloatingPetals = ({ count = 15, showSparkles = true }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Petals */}
      {[...Array(count)].map((_, i) => (
        <Petal key={i} index={i} delay={i * 0.5} />
      ))}

      {/* Sparkles */}
      {showSparkles && [...Array(count / 2)].map((_, i) => (
        <Sparkle key={i} index={i} delay={i * 0.3} />
      ))}
    </div>
  );
};
