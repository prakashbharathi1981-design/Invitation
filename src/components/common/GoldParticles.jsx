import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const GoldParticles = ({ count = 30 }) => {
  const particles = useMemo(() => Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: i % 5 === 0 ? 5 : i % 3 === 0 ? 3 : 2,
    left: 5 + (i * 3.17) % 90,
    top: 5 + (i * 7.43) % 90,
    delay: (i * 0.31) % 6,
    duration: 6 + (i * 0.47) % 8,
    xDrift: (i % 2 === 0 ? 1 : -1) * (8 + (i % 4) * 5),
    color: i % 4 === 0 ? '#FFD700' : i % 3 === 0 ? '#FFF9ED' : '#C8A24D',
    opacity: 0.2 + (i % 5) * 0.1,
  })), [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          animate={{
            y: [0, -50, -100],
            x: [0, p.xDrift, p.xDrift * 0.5],
            opacity: [0, p.opacity, 0],
            scale: [0.5, 1.2, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
