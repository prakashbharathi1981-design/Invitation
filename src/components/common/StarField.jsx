import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StarField = () => {
  const { scrollY } = useScroll();

  const layers = useMemo(() => [
    // Layer 1 — slow, large stars
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: (i * 4.13 * 97) % 100,
      y: (i * 7.77 * 83) % 100,
      size: 2 + (i % 3),
      opacity: 0.3 + (i % 4) * 0.1,
      color: i % 3 === 0 ? '#FFD700' : i % 2 === 0 ? '#FFF9ED' : '#C8A24D',
      speed: 0.04,
    })),
    // Layer 2 — medium speed, small stars
    Array.from({ length: 40 }, (_, i) => ({
      id: i + 25,
      x: (i * 2.71 * 113) % 100,
      y: (i * 5.31 * 67) % 100,
      size: 1 + (i % 2),
      opacity: 0.15 + (i % 5) * 0.06,
      color: i % 4 === 0 ? '#FFD700' : '#C8A24D',
      speed: 0.08,
    })),
    // Layer 3 — fast, tiny dust
    Array.from({ length: 30 }, (_, i) => ({
      id: i + 65,
      x: (i * 3.59 * 79) % 100,
      y: (i * 9.13 * 53) % 100,
      size: 1,
      opacity: 0.1 + (i % 3) * 0.05,
      color: '#C8A24D',
      speed: 0.14,
    })),
  ], []);

  const y1 = useTransform(scrollY, [0, 3000], [0, -120]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -220]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -380]);
  const yValues = [y1, y2, y3];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {layers.map((layer, li) => (
        <motion.div key={li} className="absolute inset-0" style={{ y: yValues[li] }}>
          {layer.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                background: star.color,
                boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
                opacity: star.opacity,
              }}
              animate={{
                opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 3 + (star.id % 5),
                repeat: Infinity,
                delay: (star.id * 0.17) % 4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};
