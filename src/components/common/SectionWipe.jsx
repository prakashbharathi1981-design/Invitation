import React from 'react';
import { motion } from 'framer-motion';

export const SectionWipe = () => (
  <div className="relative h-px overflow-visible pointer-events-none my-2">
    <motion.div
      className="absolute left-0 right-0 h-[1px]"
      style={{ background: 'linear-gradient(90deg, transparent 0%, #C8A24D 20%, #FFD700 50%, #C8A24D 80%, transparent 100%)' }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style2={{ transformOrigin: 'left' }}
    />
    {/* Center diamond */}
    <motion.div
      className="absolute left-1/2 top-1/2 w-2 h-2 bg-[#FFD700] rotate-45"
      style={{ transform: 'translate(-50%, -50%) rotate(45deg)', boxShadow: '0 0 8px #FFD700' }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8, ease: 'backOut' }}
    />
  </div>
);
