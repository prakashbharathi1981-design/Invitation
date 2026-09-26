import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaneshaSVG } from '../common/GaneshaSVG';
import { FloralCorner } from '../common/FloralSVG';

/* ── Orbiting gold dust ring around the photo ── */
const OrbitRing = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(16)].map((_, i) => {
      const angle = (i / 16) * 360;
      const rad = (angle * Math.PI) / 180;
      const r = 52; // % radius
      const x = 50 + r * Math.cos(rad);
      const y = 50 + r * Math.sin(rad);
      return (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 3 === 0 ? 5 : 3,
            height: i % 3 === 0 ? 5 : 3,
            background: i % 4 === 0 ? '#FFD700' : '#C8A24D',
            transform: 'translate(-50%,-50%)',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      );
    })}
  </div>
);

/* ── Spinning SVG gold border ring ── */
const SpinRing = () => (
  <motion.svg
    viewBox="0 0 220 220"
    className="absolute inset-0 w-full h-full pointer-events-none"
    animate={{ rotate: 360 }}
    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
  >
    <circle
      cx="110" cy="110" r="104"
      fill="none"
      stroke="url(#spinGrad)"
      strokeWidth="1.5"
      strokeDasharray="8 6"
      opacity="0.7"
    />
    <defs>
      <linearGradient id="spinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#C8A24D" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
    </defs>
  </motion.svg>
);

/* ── Counter-spin inner ring ── */
const SpinRingInner = () => (
  <motion.svg
    viewBox="0 0 220 220"
    className="absolute inset-0 w-full h-full pointer-events-none"
    animate={{ rotate: -360 }}
    transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
  >
    <circle
      cx="110" cy="110" r="96"
      fill="none"
      stroke="#C8A24D"
      strokeWidth="0.8"
      strokeDasharray="3 10"
      opacity="0.5"
    />
  </motion.svg>
);

/* ── Floating ambient particles behind card ── */
const AmbientParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${5 + (i * 4.7) % 90}%`,
          top: `${10 + (i * 6.3) % 80}%`,
          width: i % 5 === 0 ? 4 : 2,
          height: i % 5 === 0 ? 4 : 2,
          background: i % 3 === 0 ? '#FFD700' : '#C8A24D',
          opacity: 0.15,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, i % 2 === 0 ? 8 : -8, 0],
          opacity: [0.1, 0.5, 0.1],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 4 + (i % 5),
          repeat: Infinity,
          delay: i * 0.22,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

/* ── Letter-by-letter stagger ── */
const SplitText = ({ text, className, delay = 0, stagger = 0.06 }) => (
  <span className={className} aria-label={text}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

export const Envelope = ({ onOpen, guestName }) => {
  const [phase, setPhase] = useState(0);
  // phase 0 = dark intro, phase 1 = card reveal, phase 2 = full card shown

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#170B10] px-4 overflow-hidden"
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
      transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* ── Deep background radial glow ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(66,21,32,0.9) 0%, #170B10 100%)',
        }}
      />

      {/* ── Ambient gold aura blobs ── */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,162,77,0.12) 0%, transparent 70%)', top: '10%', left: '20%' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,117,120,0.08) 0%, transparent 70%)', bottom: '10%', right: '15%' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── Floral corners ── */}
      {['top-left','top-right','bottom-left','bottom-right'].map((pos) => (
        <motion.div
          key={pos}
          className={`absolute ${pos.includes('top') ? 'top-3' : 'bottom-3'} ${pos.includes('left') ? 'left-3' : 'right-3'}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <FloralCorner position={pos} className="w-24 h-24 sm:w-32 sm:h-32" />
        </motion.div>
      ))}

      <AmbientParticles />

      {/* ── Main card ── */}
      <motion.div
        className="relative w-full max-w-md text-center z-10"
        initial={{ opacity: 0, y: 60, scale: 0.88 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gold shimmer top line */}
        <motion.div
          className="h-[2px] w-0 mx-auto mb-6 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #C8A24D, #FFD700, transparent)' }}
          animate={{ width: phase >= 1 ? '80%' : '0%' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Ganesha */}
        <motion.div
          className="flex justify-center mb-5"
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <GaneshaSVG className="w-16 h-20 flex-none" />
        </motion.div>

        {/* ── Circular photo with rings ── */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              className="relative mx-auto mb-6"
              style={{ width: 180, height: 180 }}
              initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Outer glow pulse */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(200,162,77,0.35) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              <SpinRing />
              <SpinRingInner />
              <OrbitRing />

              {/* Photo circle */}
              <div className="absolute inset-[10px] rounded-full overflow-hidden border-2 border-[#C8A24D] shadow-[0_0_30px_rgba(200,162,77,0.6),inset_0_0_15px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/card.png"
                  alt="Gokulakrishnan & Karpagavalli"
                  className="w-full h-full object-cover object-[center_30%] scale-100 origin-center"
                />
                {/* Radial vignette */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, transparent 45%, rgba(23,11,16,0.75) 100%)' }}
                />
              </div>

              {/* Gold dot at top of ring */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.3, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Names ── */}
        <AnimatePresence>
          {phase >= 2 && (
            <>
              <motion.p
                className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#C8A24D] mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {guestName ? `Dearest ${guestName},` : '✦ Cordially Invited ✦'}
              </motion.p>

              <div className="mb-1">
                <SplitText
                  text="Gokulakrishnan"
                  className="font-header text-2xl sm:text-3xl text-[#FFF9ED] tracking-wide gold-glow-text"
                  delay={0}
                  stagger={0.04}
                />
              </div>

              <motion.div
                className="font-script text-4xl text-[#FFD700] my-1"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: 'backOut' }}
              >
                &
              </motion.div>

              <div className="mb-5">
                <SplitText
                  text="Karpagavalli"
                  className="font-header text-2xl sm:text-3xl text-[#FFF9ED] tracking-wide gold-glow-text"
                  delay={0.9}
                  stagger={0.05}
                />
              </div>

              <motion.p
                className="font-body italic text-base text-[#F5EBD2] mb-6 opacity-85 px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                Request the pleasure of your company<br />to celebrate their wedding reception.
              </motion.p>
            </>
          )}
        </AnimatePresence>

        {/* ── CTA Button ── */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 2, duration: 0.8, ease: 'backOut' }}
            >
              <motion.button
                onClick={onOpen}
                whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(200,162,77,0.8)' }}
                whileTap={{ scale: 0.94 }}
                className="relative inline-flex items-center gap-3 px-8 py-4 font-sans font-bold text-sm uppercase tracking-widest text-[#170B10] rounded-full border border-[#FFF9ED] overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #C8A24D 0%, #E5CD89 40%, #FFD700 60%, #997327 100%)' }}
              >
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)' }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                />
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-[#170B10]"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                ENTER THE CELEBRATION
              </motion.button>

              <motion.p
                className="mt-4 font-sans text-[10px] uppercase tracking-widest text-[#C8A24D]/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              >
                ✦ Scroll to experience the story ✦
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gold shimmer bottom line */}
        <motion.div
          className="h-[1px] w-0 mx-auto mt-6 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #C8A24D, transparent)' }}
          animate={{ width: phase >= 2 ? '60%' : '0%' }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        />
      </motion.div>
    </motion.div>
  );
};
