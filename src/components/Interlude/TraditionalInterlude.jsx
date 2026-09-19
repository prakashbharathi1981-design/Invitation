import React from 'react';
import { motion } from 'framer-motion';
import { DiyaSVG } from '../common/DiyaSVG';
import { LotusSVG } from '../common/LotusSVG';
import { MandalaSVG } from '../common/MandalaSVG';

const vp = { once: true, margin: '-60px' };

const InkUnderline = ({ delay = 0 }) => (
  <svg viewBox="0 0 320 14" className="w-full overflow-visible" style={{ maxWidth: 320 }}>
    <motion.path
      d="M 0 7 C 60 2, 120 12, 160 7 C 200 2, 260 12, 320 7"
      fill="none"
      stroke="#C8A24D"
      strokeWidth="1.8"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.75 }}
      viewport={vp}
      transition={{ duration: 2.2, delay, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="320" cy="7" r="2.5"
      fill="#FFD700"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={vp}
      transition={{ duration: 0.4, delay: delay + 2.2 }}
    />
  </svg>
);

const TamilQuoteInk = () => (
  <motion.div
    className="my-12 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={vp}
    transition={{ duration: 0.8 }}
  >
    <svg viewBox="0 0 400 30" className="w-full mx-auto mb-4 overflow-visible" style={{ maxWidth: 400 }}>
      <motion.path
        d="M 20 15 C 80 5, 140 25, 200 15 C 260 5, 320 25, 380 15"
        fill="none"
        stroke="#C8A24D"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        viewport={vp}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </svg>

    <motion.p
      className="font-script text-3xl sm:text-4xl text-[#FFD700] leading-relaxed mb-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      இரு மனம் இணையும் திருமணம்...
    </motion.p>

    <div className="flex justify-center mt-1 mb-4">
      <InkUnderline delay={0.8} />
    </div>

    <motion.p
      className="font-body italic text-lg sm:text-xl text-[#F5EBD2]/75"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={vp}
      transition={{ duration: 1, delay: 1.6 }}
    >
      Two hearts unite in holy matrimony...
    </motion.p>

    <svg viewBox="0 0 400 30" className="w-full mx-auto mt-4 overflow-visible" style={{ maxWidth: 400 }}>
      <motion.path
        d="M 20 15 C 80 25, 140 5, 200 15 C 260 25, 320 5, 380 15"
        fill="none"
        stroke="#C8A24D"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        viewport={vp}
        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
      />
    </svg>
  </motion.div>
);

export const TraditionalInterlude = () => {
  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#170B10] via-[#240A12] to-[#170B10] overflow-hidden text-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
        <MandalaSVG className="w-[600px] h-[600px]" />
      </div>

      <div className="section-container relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-6"
        >
          <DiyaSVG className="w-16 h-16" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1 }}
          className="font-header text-3xl sm:text-5xl text-[#FFD700] tracking-widest my-4"
        >
          शुभ / AUSPICIOUS
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-3 my-8"
        >
          <p className="font-header text-2xl sm:text-4xl text-[#FFF9ED] tracking-wider">
            THE GRAND CELEBRATION OF LOVE
          </p>
          <p className="font-header text-xl sm:text-3xl text-[#C8A24D] tracking-wider">
            A SACRED MOMENT TO CHERISH FOREVER
          </p>
        </motion.div>

        <TamilQuoteInk />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex justify-center my-8"
        >
          <LotusSVG className="w-48 h-48" animatePetals />
        </motion.div>
      </div>
    </section>
  );
};
