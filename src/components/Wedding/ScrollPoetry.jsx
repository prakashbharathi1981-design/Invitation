import React from 'react';
import { motion } from 'framer-motion';

const vp = { once: true, margin: '-60px' };

const lines = [
  { text: 'Two souls...', size: 'text-3xl sm:text-5xl', color: 'text-[#FFF9ED]', delay: 0 },
  { text: 'chosen by the stars...', size: 'text-2xl sm:text-4xl', color: 'text-[#C8A24D]', delay: 0.15 },
  { text: 'One beautiful destiny.', size: 'text-3xl sm:text-5xl', color: 'text-[#FFD700]', delay: 0.3 },
];

const PoetryLine = ({ text, size, color, delay }) => (
  <div className="overflow-hidden py-2">
    <motion.p
      className={`font-script ${size} ${color} leading-relaxed`}
      initial={{ y: '100%', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={vp}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.p>
  </div>
);

const TamilQuote = () => (
  <motion.div
    className="mt-16 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={vp}
    transition={{ duration: 1 }}
  >
    <div className="relative inline-block">
      <motion.p
        className="font-script text-2xl sm:text-3xl text-[#C8A24D] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        இரு மனம் இணையும் திருமணம்...
      </motion.p>
      <motion.p
        className="font-body italic text-base sm:text-lg text-[#F5EBD2]/70 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Two hearts unite in holy matrimony...
      </motion.p>

      <svg viewBox="0 0 300 12" className="w-full mt-2 overflow-visible" style={{ maxWidth: 320 }}>
        <motion.path
          d="M 0 6 C 50 2, 100 10, 150 6 C 200 2, 250 10, 300 6"
          fill="none" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={vp}
          transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  </motion.div>
);

export const ScrollPoetry = () => (
  <section className="relative py-32 px-4 bg-gradient-to-b from-[#170B10] via-[#0D0509] to-[#170B10] overflow-hidden text-center">
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200,162,77,0.06) 0%, transparent 100%)' }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 6, repeat: Infinity }}
    />

    <div className="section-container relative z-10 max-w-2xl mx-auto">
      {lines.map((line, i) => (
        <PoetryLine key={i} {...line} />
      ))}
      <TamilQuote />
    </div>
  </section>
);
