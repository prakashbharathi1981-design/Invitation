import React from 'react';
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.8, delay: i * 0.15, ease: 'easeInOut' }, opacity: { duration: 0.3, delay: i * 0.15 } },
  }),
};

export const RangoliDivider = ({ className = '' }) => (
  <motion.div
    className={`flex justify-center items-center my-8 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
  >
    <motion.svg viewBox="0 0 400 80" className="w-full max-w-sm sm:max-w-md" style={{ filter: 'drop-shadow(0 0 6px rgba(200,162,77,0.5))' }}>
      <defs>
        <linearGradient id="rGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#C8A24D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#C8A24D" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Center lotus */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <motion.path
          key={i}
          d={`M200,40 C${200 + 18 * Math.cos((angle - 20) * Math.PI / 180)},${40 + 18 * Math.sin((angle - 20) * Math.PI / 180)} ${200 + 28 * Math.cos(angle * Math.PI / 180)},${40 + 28 * Math.sin(angle * Math.PI / 180)} ${200 + 18 * Math.cos((angle + 20) * Math.PI / 180)},${40 + 18 * Math.sin((angle + 20) * Math.PI / 180)} Z`}
          fill="none"
          stroke="#C8A24D"
          strokeWidth="1"
          custom={i * 0.5}
          variants={draw}
          opacity="0.8"
        />
      ))}

      {/* Center dot */}
      <motion.circle cx="200" cy="40" r="4" fill="#FFD700"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.5, ease: 'backOut' }}
      />

      {/* Left vine */}
      <motion.path d="M175,40 C160,30 140,35 120,28 C100,21 80,30 60,25 C40,20 20,28 5,25"
        fill="none" stroke="url(#rGold)" strokeWidth="1.2" custom={4} variants={draw} />
      <motion.path d="M155,40 C148,32 138,28 128,32" fill="none" stroke="#C8A24D" strokeWidth="0.8" custom={5} variants={draw} opacity="0.6" />
      <motion.path d="M130,30 C124,24 118,26 114,30" fill="none" stroke="#C8A24D" strokeWidth="0.8" custom={5.5} variants={draw} opacity="0.6" />
      <motion.path d="M100,26 C94,20 88,22 84,26" fill="none" stroke="#C8A24D" strokeWidth="0.8" custom={6} variants={draw} opacity="0.6" />

      {/* Right vine */}
      <motion.path d="M225,40 C240,30 260,35 280,28 C300,21 320,30 340,25 C360,20 380,28 395,25"
        fill="none" stroke="url(#rGold)" strokeWidth="1.2" custom={4} variants={draw} />
      <motion.path d="M245,40 C252,32 262,28 272,32" fill="none" stroke="#C8A24D" strokeWidth="0.8" custom={5} variants={draw} opacity="0.6" />
      <motion.path d="M270,30 C276,24 282,26 286,30" fill="none" stroke="#C8A24D" strokeWidth="0.8" custom={5.5} variants={draw} opacity="0.6" />
      <motion.path d="M300,26 C306,20 312,22 316,26" fill="none" stroke="#C8A24D" strokeWidth="0.8" custom={6} variants={draw} opacity="0.6" />

      {/* Small diamond accents */}
      {[80, 120, 160, 240, 280, 320].map((x, i) => (
        <motion.path key={i} d={`M${x},40 L${x+5},35 L${x+10},40 L${x+5},45 Z`}
          fill="none" stroke="#FFD700" strokeWidth="0.8"
          custom={6 + i * 0.3} variants={draw} opacity="0.7"
        />
      ))}
    </motion.svg>
  </motion.div>
);
