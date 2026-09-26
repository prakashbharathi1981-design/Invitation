import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const vp = { once: true, margin: '-40px' };

const fireGoldConfetti = () => {
  const colors = ['#FFD700', '#C8A24D', '#FFF9ED', '#E5CD89', '#997327'];
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors, scalar: 1.2 });
  setTimeout(() => confetti({ particleCount: 60, spread: 100, origin: { y: 0.5, x: 0.3 }, colors }), 300);
  setTimeout(() => confetti({ particleCount: 60, spread: 100, origin: { y: 0.5, x: 0.7 }, colors }), 500);
};

/* SVG: Folded hands / Namaste */
const NamasteIcon = ({ size = 22, color = '#170B10' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3 C11 5, 9 7, 8 10 L7 15 C6.5 17, 7 19, 9 20 L12 21 L15 20 C17 19, 17.5 17, 17 15 L16 10 C15 7, 13 5, 12 3 Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill={color} fillOpacity="0.15"/>
    <path d="M9 10 L8 7 C7.5 5.5, 8.5 4.5, 9.5 5 L10 5.5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M15 10 L16 7 C16.5 5.5, 15.5 4.5, 14.5 5 L14 5.5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M10 10 L9.5 6.5 C9.2 5, 10 4, 11 4.5 L11.5 5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M14 10 L14.5 6.5 C14.8 5, 14 4, 13 4.5 L12.5 5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

/* SVG: Broken heart */
const BrokenHeartIcon = ({ size = 22, color = '#C8A24D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 21 C12 21, 3 14, 3 8.5 C3 5.5, 5.5 3, 8.5 3 C10 3, 11.5 3.8, 12 5 L11 9 L13 11 L12 15 L14 17 C13 18.5, 12 21, 12 21 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M12 21 C12 21, 21 14, 21 8.5 C21 5.5, 18.5 3, 15.5 3 C14 3, 12.5 3.8, 12 5 L13 9 L11 11 L12 15 L10 17 C11 18.5, 12 21, 12 21 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);

/* SVG: Star burst / celebration */
const StarBurstIcon = ({ size = 48, color = '#FFD700' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 4 L26.5 18 L38 10 L29 22 L44 24 L29 26 L38 38 L26.5 30 L24 44 L21.5 30 L10 38 L19 26 L4 24 L19 22 L10 10 L21.5 18 Z" fill={color} stroke={color} strokeWidth="1" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="5" fill="#FFF9ED"/>
  </svg>
);

/* SVG: Diya flame for "no" response */
const DiyaIcon = ({ size = 44 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 40 52" fill="none">
    <motion.path
      d="M20 6 C14 16, 9 26, 14 36 C16 41, 24 41, 26 36 C31 26, 26 16, 20 6 Z"
      fill="url(#diyaF1)"
      animate={{ scaleY: [1, 1.1, 0.95, 1.08, 1], y: [0, -1, 0.5, -0.5, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '20px 38px' }}
    />
    <motion.path
      d="M20 14 C17 21, 14 29, 17 35 C18 38, 22 38, 23 35 C26 29, 23 21, 20 14 Z"
      fill="url(#diyaF2)"
      animate={{ scaleY: [1, 1.15, 0.9, 1], y: [0, -2, 1, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      style={{ transformOrigin: '20px 38px' }}
    />
    <ellipse cx="20" cy="43" rx="13" ry="4.5" fill="#C8A24D"/>
    <path d="M7 43 Q20 49 33 43" fill="#997327"/>
    <ellipse cx="20" cy="43" rx="13" ry="4.5" fill="none" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
    <defs>
      <linearGradient id="diyaF1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF9ED" stopOpacity="0.95"/>
        <stop offset="50%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#C8A24D" stopOpacity="0.7"/>
      </linearGradient>
      <linearGradient id="diyaF2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.5"/>
      </linearGradient>
    </defs>
  </svg>
);

export const RSVPSection = () => {
  const [answer, setAnswer] = useState(null);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(66,21,32,0.4) 0%, transparent 70%)' }} />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 1 }}
          className="font-sans text-[10px] uppercase tracking-[0.45em] text-[#C8A24D] mb-4"
        >
          ✦ YOUR PRESENCE ✦
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 1, delay: 0.2 }}
          className="font-header text-2xl sm:text-3xl text-[#FFF9ED] tracking-wider mb-3"
        >
          WILL YOU GRACE OUR CELEBRATION?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ duration: 1, delay: 0.4 }}
          className="font-body italic text-[#F5EBD2]/70 text-base mb-10"
        >
          Your presence shall be our greatest blessing
        </motion.p>

        <AnimatePresence mode="wait">
          {!answer && (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={() => { setAnswer('yes'); fireGoldConfetti(); }}
                whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(200,162,77,0.7)' }}
                whileTap={{ scale: 0.93 }}
                className="relative flex items-center justify-center gap-2 px-10 py-4 font-sans font-bold text-sm uppercase tracking-widest text-[#170B10] rounded-full overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #C8A24D 0%, #FFD700 50%, #997327 100%)' }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)' }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                />
                <NamasteIcon size={18} color="#170B10" />
                YES, WE WILL ATTEND
              </motion.button>

              <motion.button
                onClick={() => setAnswer('no')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-10 py-4 font-sans font-bold text-sm uppercase tracking-widest text-[#C8A24D] rounded-full border border-[#C8A24D]/40 bg-[#421520]/30 backdrop-blur-sm"
              >
                <BrokenHeartIcon size={18} color="#C8A24D" />
                UNABLE TO ATTEND
              </motion.button>
            </motion.div>
          )}

          {answer === 'yes' && (
            <motion.div
              key="yes-response"
              initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'backOut' }}
              className="text-center space-y-5"
            >
              <motion.div
                className="flex justify-center"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: 2 }}
              >
                <StarBurstIcon size={52} color="#FFD700" />
              </motion.div>
              <p className="font-header text-xl text-[#FFD700] tracking-wider">WE AWAIT YOUR PRESENCE!</p>
              <p className="font-body italic text-[#F5EBD2]/80 text-base">
                Your arrival will illuminate our celebration.
              </p>
              <div className="flex justify-center mt-4 relative">
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-[#FFD700]/40"
                    style={{ width: 50 + i * 28, height: 50 + i * 28, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
                <div className="w-12 h-12 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 flex items-center justify-center">
                  <NamasteIcon size={24} color="#FFD700" />
                </div>
              </div>
            </motion.div>
          )}

          {answer === 'no' && (
            <motion.div
              key="no-response"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-3"
            >
              <div className="flex justify-center">
                <DiyaIcon size={40} />
              </div>
              <p className="font-header text-lg text-[#C8A24D] tracking-wider">WE WILL MISS YOU DEARLY</p>
              <p className="font-body italic text-[#F5EBD2]/70 text-base">
                Though you may not be present in person,<br />you shall forever be in our hearts.
              </p>
              <motion.button
                onClick={() => setAnswer(null)}
                className="mt-4 font-sans text-xs uppercase tracking-widest text-[#C8A24D]/60 underline underline-offset-4"
                whileHover={{ opacity: 1 }}
              >
                Change Response
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
