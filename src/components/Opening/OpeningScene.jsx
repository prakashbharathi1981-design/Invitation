import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { GaneshaSVG } from '../common/GaneshaSVG';
import { DiyaSVG } from '../common/DiyaSVG';
import { MandalaSVG } from '../common/MandalaSVG';
import { FloralDivider } from '../common/FloralSVG';

/* ── Letter-by-letter reveal ── */
const SplitReveal = ({ text, className, delay = 0, stagger = 0.07 }) => (
  <span className={className} aria-label={text}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        initial={{ opacity: 0, y: 40, rotateX: -90, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.65, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const GrowLine = ({ delay = 0 }) => (
  <motion.div
    className="w-[1px] mx-auto"
    style={{ background: 'linear-gradient(to bottom, transparent, #C8A24D, transparent)' }}
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 60, opacity: 1 }}
    transition={{ duration: 1, delay, ease: 'easeOut' }}
  />
);

/* ── Party confetti burst ── */
const fireConfetti = () => {
  const colors = ['#FFD700', '#C8A24D', '#FFF9ED', '#B87578', '#F5EBD2', '#ffffff'];

  // Left burst
  confetti({ particleCount: 60, angle: 60, spread: 70, origin: { x: 0, y: 0.7 }, colors });
  // Right burst
  confetti({ particleCount: 60, angle: 120, spread: 70, origin: { x: 1, y: 0.7 }, colors });
  // Center burst
  setTimeout(() => {
    confetti({ particleCount: 80, angle: 90, spread: 100, origin: { x: 0.5, y: 0.6 }, colors, startVelocity: 35 });
  }, 150);
  // Second wave
  setTimeout(() => {
    confetti({ particleCount: 40, angle: 60, spread: 55, origin: { x: 0.1, y: 0.8 }, colors });
    confetti({ particleCount: 40, angle: 120, spread: 55, origin: { x: 0.9, y: 0.8 }, colors });
  }, 350);
};

export const OpeningScene = ({ onReveal, invitationRevealed }) => {
  const [tapped, setTapped] = useState(false);

  const handleReveal = () => {
    if (tapped) return;
    setTapped(true);
    fireConfetti();
    // After burst, jump directly to couple section
    setTimeout(() => {
      onReveal();
      setTimeout(() => {
        const el = document.getElementById('couple-reveal');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden bg-[#170B10]">

      {/* Backgrounds */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, #421520 0%, #170B10 100%)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <MandalaSVG className="w-[700px] h-[700px] sm:w-[900px] sm:h-[900px]" opacity={0.1} />
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <MandalaSVG className="w-[400px] h-[400px]" opacity={0.06} rotate={false} />
      </motion.div>
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(200,162,77,0.14) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Curtain wipe */}
      <motion.div className="absolute top-0 left-0 right-0 z-20 bg-[#170B10] pointer-events-none"
        initial={{ height: '50%' }} animate={{ height: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div className="absolute bottom-0 left-0 right-0 z-20 bg-[#170B10] pointer-events-none"
        initial={{ height: '50%' }} animate={{ height: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3"
        >
          <DiyaSVG className="w-16 h-16" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="font-sans text-xs uppercase text-[#C8A24D] mb-2 font-semibold"
        >
          With the blessings of our elders
        </motion.p>

        <GrowLine delay={1.8} />

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.3, delay: 2, ease: [0.22, 1, 0.36, 1] }}
          className="my-4"
        >
          <GaneshaSVG className="w-28 h-32" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 2.6 }}
          className="font-header text-lg sm:text-xl text-[#FFF9ED] tracking-[0.3em] mb-8"
        >
          A NEW CHAPTER BEGINS
        </motion.h2>

        <FloralDivider className="w-56 mb-8" />

        <div className="mb-2" style={{ perspective: 800 }}>
          <SplitReveal text="GOKULAKRISHNAN" className="font-header text-3xl sm:text-5xl md:text-6xl text-[#FFF9ED] tracking-wide gold-glow-text" delay={3} stagger={0.05} />
        </div>

        <motion.div
          className="font-script text-5xl sm:text-6xl text-[#FFD700] my-2"
          initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 4, duration: 0.7, ease: 'backOut' }}
        >
          &
        </motion.div>

        <div className="mb-8" style={{ perspective: 800 }}>
          <SplitReveal text="KARPAGAVALLI" className="font-header text-3xl sm:text-5xl md:text-6xl text-[#FFF9ED] tracking-wide gold-glow-text" delay={4.1} stagger={0.06} />
        </div>

        {/* Date pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 4.9, duration: 0.9, ease: 'backOut' }}
          className="relative inline-block px-8 py-3 rounded-full border border-[#C8A24D] overflow-hidden mb-10"
          style={{ background: 'rgba(66,21,32,0.8)', boxShadow: '0 0 25px rgba(200,162,77,0.3)' }}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,215,0,0.25) 50%, transparent 70%)' }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          />
          <span className="font-sans text-sm sm:text-base tracking-[0.25em] text-[#FFD700] font-semibold relative z-10">
            24 OCTOBER 2026
          </span>
        </motion.div>

        {/* ── TAP TO OPEN INVITATION button ── */}
        <AnimatePresence>
          {!invitationRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 5.6, duration: 0.9, ease: 'backOut' }}
              className="flex flex-col items-center gap-3"
            >
              <motion.button
                onClick={handleReveal}
                disabled={tapped}
                whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(200,162,77,0.9)' }}
                whileTap={{ scale: 0.93 }}
                className="relative inline-flex items-center gap-3 px-10 py-4 font-sans font-bold text-sm uppercase tracking-widest text-[#170B10] rounded-full border border-[#FFF9ED] overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #C8A24D 0%, #E5CD89 40%, #FFD700 60%, #997327 100%)' }}
              >
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)' }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
                />
                {/* Pulsing dot */}
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-[#170B10]"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="relative z-10">
                  {tapped ? '✦ Opening...' : 'TAP TO OPEN INVITATION'}
                </span>
              </motion.button>

              {/* Subtle hint below button */}
              <motion.p
                className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#C8A24D]/50"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ✦ tap to reveal ✦
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
