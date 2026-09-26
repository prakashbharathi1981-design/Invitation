import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DiyaFlame = () => (
  <svg viewBox="0 0 60 90" className="w-16 h-24" style={{ filter: 'drop-shadow(0 0 18px #FFD700)' }}>
    {/* Flame */}
    <motion.path
      d="M30 10 C 20 30, 10 45, 18 60 C 22 70, 38 70, 42 60 C 50 45, 40 30, 30 10 Z"
      fill="url(#flameGrad)"
      animate={{ scaleY: [1, 1.12, 0.95, 1.08, 1], scaleX: [1, 0.92, 1.05, 0.96, 1], y: [0, -2, 1, -1, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '30px 65px' }}
    />
    {/* Inner flame */}
    <motion.path
      d="M30 25 C 25 38, 20 50, 26 60 C 28 65, 32 65, 34 60 C 40 50, 35 38, 30 25 Z"
      fill="url(#innerFlameGrad)"
      animate={{ scaleY: [1, 1.15, 0.9, 1.1, 1], y: [0, -3, 1, -2, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      style={{ transformOrigin: '30px 65px' }}
    />
    {/* Diya bowl */}
    <ellipse cx="30" cy="72" rx="18" ry="6" fill="#C8A24D" />
    <path d="M12 72 Q 30 82 48 72" fill="#997327" />
    <ellipse cx="30" cy="72" rx="18" ry="6" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
    <defs>
      <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF9ED" stopOpacity="0.95" />
        <stop offset="40%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#C8A24D" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="innerFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
);

const Dots = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCount(c => (c + 1) % 4), 500);
    return () => clearInterval(t);
  }, []);
  return <span className="inline-block w-6 text-left">{'•'.repeat(count)}</span>;
};

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + (p < 70 ? 2 : 1);
      });
    }, 40);
    const done = setTimeout(onComplete, 4200);
    return () => { clearInterval(interval); clearTimeout(done); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,162,77,0.12) 0%, transparent 70%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <DiyaFlame />

        <motion.p
          className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#C8A24D]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading your invitation<Dots />
        </motion.p>

        {/* Progress bar */}
        <div className="w-48 h-[1px] bg-[#C8A24D]/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #C8A24D, #FFD700, #C8A24D)', width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
