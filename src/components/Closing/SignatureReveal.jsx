import React from 'react';
import { motion } from 'framer-motion';

const vp = { once: true, margin: '-60px' };

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 2.5, delay, ease: 'easeInOut' }, opacity: { duration: 0.3, delay } },
  }),
};

export const SignatureReveal = () => (
  <section className="relative py-20 px-4 bg-[#050204] text-center overflow-hidden">
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 60%, rgba(200,162,77,0.07) 0%, transparent 100%)' }}
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 5, repeat: Infinity }}
    />

    <div className="section-container relative z-10">
      <motion.p
        className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#C8A24D]/60 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 1 }}
      >
        ✦ signed with love ✦
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <svg
          viewBox="0 0 500 160"
          className="w-full overflow-visible"
          style={{ maxWidth: 500, filter: 'drop-shadow(0 0 12px rgba(200,162,77,0.5))' }}
        >
          <defs>
            <linearGradient id="sigGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF9ED" />
              <stop offset="40%" stopColor="#FFD700" />
              <stop offset="80%" stopColor="#C8A24D" />
              <stop offset="100%" stopColor="#997327" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 60 35 C 70 28, 80 32, 85 38 C 90 44, 88 50, 95 48
               M 100 30 C 108 22, 116 28, 114 38 C 112 46, 106 50, 112 48
               M 118 32 C 124 24, 134 28, 132 40 C 130 50, 122 52, 128 50
               M 140 28 C 148 20, 160 26, 158 40 C 156 52, 146 54, 152 52
               M 165 45 C 172 38, 182 42, 180 52
               M 195 30 C 200 22, 210 26, 208 38 C 206 48, 198 52, 204 50
               M 215 48 C 222 40, 232 44, 230 54
               M 240 28 C 248 20, 258 26, 256 40 C 254 52, 244 54, 250 52
               M 260 52 C 264 56, 268 58, 272 55"
            fill="none" stroke="url(#sigGold)" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            variants={draw} initial="hidden" whileInView="visible" viewport={vp} custom={0.3}
          />

          <motion.text
            x="165" y="72" textAnchor="middle"
            fontFamily="'Great Vibes', cursive" fontSize="22" fill="url(#sigGold)"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            transition={{ duration: 1, delay: 1.2 }}
          >
            With love,
          </motion.text>

          <motion.path
            d="M 20 115 C 35 95, 55 100, 60 115 C 65 128, 55 138, 65 132
               C 80 122, 95 108, 105 118 C 115 128, 108 140, 118 135
               C 130 128, 145 112, 158 122 C 168 130, 162 142, 172 138
               C 185 132, 198 118, 210 126 C 220 132, 215 144, 225 140
               C 238 134, 250 120, 262 128 C 272 134, 268 146, 278 142"
            fill="none" stroke="url(#sigGold)" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
            variants={draw} initial="hidden" whileInView="visible" viewport={vp} custom={1.5}
          />

          <motion.path
            d="M 288 118 C 296 108, 308 112, 306 124 C 304 134, 294 138, 300 132 C 308 124, 318 118, 322 128"
            fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"
            variants={draw} initial="hidden" whileInView="visible" viewport={vp} custom={2.8}
          />

          <motion.path
            d="M 335 115 C 348 98, 365 105, 368 118 C 370 128, 362 138, 372 132
               C 382 124, 395 112, 405 120 C 414 128, 408 140, 418 136
               C 428 130, 440 118, 450 126 C 458 132, 454 144, 462 140
               C 470 136, 478 128, 482 132"
            fill="none" stroke="url(#sigGold)" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
            variants={draw} initial="hidden" whileInView="visible" viewport={vp} custom={3.2}
          />

          <motion.path
            d="M 15 152 C 100 145, 200 158, 300 150 C 380 144, 450 155, 490 150"
            fill="none" stroke="url(#sigGold)" strokeWidth="1"
            strokeLinecap="round" opacity="0.5"
            variants={draw} initial="hidden" whileInView="visible" viewport={vp} custom={4.2}
          />

          <motion.text
            x="150" y="148" textAnchor="middle"
            fontFamily="'Great Vibes', cursive" fontSize="26" fill="url(#sigGold)"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            transition={{ duration: 1.2, delay: 3 }}
          >
            Gokulakrishnan
          </motion.text>

          <motion.text
            x="408" y="148" textAnchor="middle"
            fontFamily="'Great Vibes', cursive" fontSize="26" fill="url(#sigGold)"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
            transition={{ duration: 1.2, delay: 3.8 }}
          >
            Karpagavalli
          </motion.text>
        </svg>
      </motion.div>

      <motion.div
        className="w-2 h-2 rounded-full bg-[#FFD700] mx-auto mt-6"
        style={{ boxShadow: '0 0 10px #FFD700' }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={vp}
        transition={{ duration: 0.6, delay: 4.5, ease: 'backOut' }}
      />
    </div>
  </section>
);
