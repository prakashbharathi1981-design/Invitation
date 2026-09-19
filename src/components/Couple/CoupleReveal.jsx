import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FloralDivider, FloralCorner } from '../common/FloralSVG';
import { PeacockSVG } from '../common/PeacockSVG';

const vp = { once: true, margin: '-60px' };

/* ─── Inline SVG: Transparent Floral Overlay for photo edges ─── */
const FloralPhotoOverlay = () => (
  <svg
    viewBox="0 0 400 500"
    className="absolute inset-0 w-full h-full pointer-events-none z-10"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="overlayGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9ED" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#C8A24D" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#997327" stopOpacity="0.5" />
      </linearGradient>
      {/* Vignette radial gradient */}
      <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="100%" stopColor="#170B10" stopOpacity="0.85" />
      </radialGradient>
    </defs>

    {/* Vignette overlay */}
    <rect width="400" height="500" fill="url(#vignette)" />

    {/* Top-left floral corner */}
    <g opacity="0.75" stroke="url(#overlayGold)" fill="none" strokeWidth="1.2">
      <path d="M 0 0 C 30 0 60 20 70 50 C 80 80 60 120 90 140" strokeLinecap="round" />
      <path d="M 0 0 C 0 30 20 60 50 70 C 80 80 120 60 140 90" strokeLinecap="round" />
      <path d="M 20 5 Q 35 0 38 18 C 28 22 18 16 20 5 Z" fill="url(#overlayGold)" opacity="0.8" />
      <path d="M 5 20 Q 0 35 18 38 C 22 28 16 18 5 20 Z" fill="url(#overlayGold)" opacity="0.8" />
      <circle cx="12" cy="12" r="3.5" fill="#FFD700" opacity="0.9" />
      <circle cx="38" cy="38" r="2.5" fill="#C8A24D" opacity="0.8" />
    </g>

    {/* Top-right floral corner */}
    <g opacity="0.75" stroke="url(#overlayGold)" fill="none" strokeWidth="1.2" transform="translate(400,0) scale(-1,1)">
      <path d="M 0 0 C 30 0 60 20 70 50 C 80 80 60 120 90 140" strokeLinecap="round" />
      <path d="M 0 0 C 0 30 20 60 50 70 C 80 80 120 60 140 90" strokeLinecap="round" />
      <path d="M 20 5 Q 35 0 38 18 C 28 22 18 16 20 5 Z" fill="url(#overlayGold)" opacity="0.8" />
      <path d="M 5 20 Q 0 35 18 38 C 22 28 16 18 5 20 Z" fill="url(#overlayGold)" opacity="0.8" />
      <circle cx="12" cy="12" r="3.5" fill="#FFD700" opacity="0.9" />
    </g>

    {/* Bottom-left floral corner */}
    <g opacity="0.75" stroke="url(#overlayGold)" fill="none" strokeWidth="1.2" transform="translate(0,500) scale(1,-1)">
      <path d="M 0 0 C 30 0 60 20 70 50 C 80 80 60 120 90 140" strokeLinecap="round" />
      <path d="M 0 0 C 0 30 20 60 50 70 C 80 80 120 60 140 90" strokeLinecap="round" />
      <path d="M 20 5 Q 35 0 38 18 C 28 22 18 16 20 5 Z" fill="url(#overlayGold)" opacity="0.8" />
      <circle cx="12" cy="12" r="3.5" fill="#FFD700" opacity="0.9" />
    </g>

    {/* Bottom-right floral corner */}
    <g opacity="0.75" stroke="url(#overlayGold)" fill="none" strokeWidth="1.2" transform="translate(400,500) scale(-1,-1)">
      <path d="M 0 0 C 30 0 60 20 70 50 C 80 80 60 120 90 140" strokeLinecap="round" />
      <path d="M 0 0 C 0 30 20 60 50 70 C 80 80 120 60 140 90" strokeLinecap="round" />
      <path d="M 20 5 Q 35 0 38 18 C 28 22 18 16 20 5 Z" fill="url(#overlayGold)" opacity="0.8" />
      <circle cx="12" cy="12" r="3.5" fill="#FFD700" opacity="0.9" />
    </g>

    {/* Gold frame border */}
    <rect x="6" y="6" width="388" height="488" fill="none" stroke="#C8A24D" strokeWidth="1.5" opacity="0.6" />
    <rect x="12" y="12" width="376" height="476" fill="none" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
  </svg>
);

/* ─── Floating Gold Particles inside photo ─── */
const PhotoParticles = () => (
  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-[#FFD700]"
        style={{
          left: `${10 + (i * 7.5) % 80}%`,
          top: `${15 + (i * 11) % 70}%`,
          opacity: 0.6 + (i % 3) * 0.15,
        }}
        animate={{
          y: [0, -18, 0],
          opacity: [0.4, 0.9, 0.4],
          scale: [0.8, 1.4, 0.8],
        }}
        transition={{
          duration: 3 + (i % 4),
          repeat: Infinity,
          delay: i * 0.35,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

/* ─── Gold grain texture overlay ─── */
const GrainOverlay = () => (
  <div
    className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      backgroundSize: '256px 256px',
    }}
  />
);

export const CoupleReveal = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  // Parallax: photo moves slightly slower than scroll
  const photoY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.0, 1.06]);

  return (
    <section
      id="couple-reveal"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#170B10] via-[#2A1017] to-[#170B10] overflow-hidden"
    >
      {/* ── PART 1: INTRO TEXT ── */}
      <div className="section-container relative z-10 text-center pt-24 pb-12 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1 }}
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#C8A24D] mb-3"
        >
          ✦ TWO STORIES. ONE BEAUTIFUL BEGINNING. ✦
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-1 mb-6"
        >
          <h2 className="font-header text-2xl sm:text-4xl md:text-5xl text-[#FFF9ED] tracking-wider gold-glow-text">
            GOKULAKRISHNAN
          </h2>
          <div className="font-script text-4xl sm:text-5xl text-[#FFD700]">&</div>
          <h2 className="font-header text-2xl sm:text-4xl md:text-5xl text-[#FFF9ED] tracking-wider gold-glow-text">
            ELAMATHI
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-xs tracking-[0.35em] text-[#FFD700] mb-8"
        >
          24 · 10 · 2026
        </motion.p>

        <FloralDivider className="w-72 mx-auto" />
      </div>

      {/* ── PART 2: FULL-WIDTH CINEMATIC COUPLE PHOTO ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-xs sm:max-w-2xl mx-auto px-4 sm:px-8"
      >
        {/* Outer gold glow ring */}
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#C8A24D]/30 via-transparent to-[#FFD700]/20 blur-xl pointer-events-none z-0" />

        {/* Photo container with parallax */}
        <div className="relative rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(200,162,77,0.25)] border border-[#C8A24D]/50">
          {/* Parallax image wrapper */}
          <motion.div
            style={{ y: photoY, scale: photoScale }}
            className="relative w-full"
          >
            <img
              src="/images/card.png"
              alt="Gokulakrishnan and Elamathi"
              className="w-full object-contain object-center block bg-gradient-to-b from-[#421520]/50 to-[#170B10]"
              style={{ minHeight: '260px', maxHeight: '360px' }}
              loading="lazy"
            />
          </motion.div>

          {/* Grain texture */}
          <GrainOverlay />

          {/* Floral SVG overlay on photo edges */}
          <FloralPhotoOverlay />

          {/* Floating gold particles */}
          <PhotoParticles />

          {/* Bottom fade into section bg */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#170B10] to-transparent z-30 pointer-events-none" />

          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#170B10] to-transparent z-30 pointer-events-none" />

          {/* Centered text overlay — minimal, breathing room */}
          <div className="absolute bottom-10 left-0 right-0 z-40 text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#C8A24D]"
            >
              A NEW CHAPTER BEGINS
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ── PART 3: COUPLE DETAILS CARDS ── */}
      <div className="section-container relative z-10 text-center px-4 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto my-8">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-8 rounded-xl bg-gradient-to-b from-[#421520]/50 to-[#170B10]/90 border border-[#C8A24D]/40 backdrop-blur-sm relative overflow-hidden"
          >
            <FloralCorner position="top-left" className="absolute top-2 left-2 w-14 h-14 opacity-50" />
            <FloralCorner position="top-right" className="absolute top-2 right-2 w-14 h-14 opacity-50" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#C8A24D] block mb-3">The Groom</span>
            <h3 className="font-header text-xl sm:text-2xl text-[#FFF9ED] mb-2">M. GOKULAKRISHNAN</h3>
            <p className="font-sans text-sm text-[#FFD700] font-semibold tracking-wider">B.E.</p>
            <p className="font-body text-base text-[#F5EBD2] opacity-80 mt-1">Infosys, Bangalore</p>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 1, delay: 0.4 }}
            className="p-8 rounded-xl bg-gradient-to-b from-[#421520]/50 to-[#170B10]/90 border border-[#C8A24D]/40 backdrop-blur-sm relative overflow-hidden"
          >
            <FloralCorner position="top-left" className="absolute top-2 left-2 w-14 h-14 opacity-50" />
            <FloralCorner position="top-right" className="absolute top-2 right-2 w-14 h-14 opacity-50" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#C8A24D] block mb-3">The Bride</span>
            <h3 className="font-header text-xl sm:text-2xl text-[#FFF9ED] mb-2">
              ELAMATHI
              <span className="text-xs font-sans block text-[#C8A24D] mt-1 tracking-wider">@ M. KARPAGAVALLI</span>
            </h3>
            <p className="font-sans text-sm text-[#FFD700] font-semibold tracking-wider">B.E., (CS), ACU.</p>
            <p className="font-body text-base text-[#F5EBD2] opacity-80 mt-1">TCS, Coimbatore</p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <PeacockSVG className="w-20 h-28 opacity-70" />
        </div>
      </div>
    </section>
  );
};
