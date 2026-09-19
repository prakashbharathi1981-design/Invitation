import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TempleSVG } from '../common/TempleSVG';
import { FloralDivider } from '../common/FloralSVG';
import { MandalaSVG } from '../common/MandalaSVG';
import { MapPin, Navigation, Calendar } from 'lucide-react';

const vp = { once: true, margin: '-60px' };

/* ── Animated pulsing location pin ── */
const PulsePin = () => (
  <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6">
    {[1, 1.5, 2].map((s, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#C8A24D]"
        style={{ width: 40, height: 40 }}
        animate={{ scale: [s, s + 0.6, s], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: 'easeOut' }}
      />
    ))}
    <motion.div
      className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#C8A24D] to-[#997327] flex items-center justify-center shadow-[0_0_20px_rgba(200,162,77,0.8)]"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <MapPin className="w-5 h-5 text-[#170B10]" />
    </motion.div>
  </div>
);

export const VenueSection = () => {
  const [hovered, setHovered] = useState(false);
  const mapsUrl = "https://maps.app.goo.gl/CpNfNT3Txc8kUa2D9";
  const setActive = (v) => setHovered(v);

  const calendarUrl = () => {
    const t = encodeURIComponent("Gokulakrishnan & Elamathi Wedding Reception");
    const d = encodeURIComponent("You are warmly invited to celebrate the wedding reception of Gokulakrishnan & Elamathi.");
    const l = encodeURIComponent("Sri Krishna Mahal, Nachipalayam Road Corner, Trichy – Kovai Main Road, Avinashipalayam");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${t}&details=${d}&location=${l}&dates=20261024T123000Z/20261024T153000Z`;
  };

  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-[#170B10] via-[#2D0D16] to-[#170B10] overflow-hidden">

      {/* Background mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <MandalaSVG className="w-[700px] h-[700px]" rotate />
      </div>

      <div className="section-container relative z-10 text-center">

        {/* Temple — draws in on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={vp}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-6"
        >
          <TempleSVG className="w-64 h-40" opacity={1} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 1 }}
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#C8A24D] mb-2"
        >
          ✦ LOCATION & DIRECTIONS ✦
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-header text-3xl sm:text-5xl text-[#FFF9ED] tracking-wider mb-8"
        >
          THE VENUE
        </motion.h2>

        {/* Interactive venue card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1.2, delay: 0.3 }}
          onHoverStart={() => setActive(true)}
          onHoverEnd={() => setActive(false)}
          onTouchStart={() => setActive(true)}
          onTouchEnd={() => setTimeout(() => setActive(false), 400)}
          className="max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl text-center my-8 shadow-2xl relative overflow-hidden cursor-default"
          style={{
            background: 'linear-gradient(145deg, rgba(66,21,32,0.6) 0%, rgba(23,11,16,0.95) 100%)',
            border: '1px solid rgba(200,162,77,0.4)',
            boxShadow: hovered
              ? '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(200,162,77,0.3), inset 0 0 20px rgba(200,162,77,0.05)'
              : '0 10px 40px rgba(0,0,0,0.7), inset 0 0 10px rgba(200,162,77,0.03)',
            transition: 'box-shadow 0.4s ease',
          }}
        >
          {/* Animated gold border on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ border: '1px solid #C8A24D' }}
            animate={{ opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.3 }}
          />
          {/* Shimmer sweep on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(200,162,77,0.07) 50%, transparent 70%)' }}
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            )}
          </AnimatePresence>

          {/* Corner accents */}
          {['top-left','top-right','bottom-left','bottom-right'].map((pos) => (
            <div key={pos} className={`absolute ${pos.includes('top') ? 'top-3' : 'bottom-3'} ${pos.includes('left') ? 'left-3' : 'right-3'} w-4 h-4 pointer-events-none`}>
              <div className={`absolute w-full h-[1px] bg-[#C8A24D]/60 ${pos.includes('bottom') ? 'bottom-0' : 'top-0'}`} />
              <div className={`absolute h-full w-[1px] bg-[#C8A24D]/60 ${pos.includes('right') ? 'right-0' : 'left-0'}`} />
            </div>
          ))}

          <PulsePin />

          <motion.h3
            className="font-header text-2xl sm:text-4xl text-[#FFD700] mb-4"
            animate={{ textShadow: hovered ? '0 0 20px rgba(255,215,0,0.6)' : '0 0 0px transparent' }}
            transition={{ duration: 0.3 }}
          >
            Sri Krishna Mahal
          </motion.h3>

          <p className="font-body text-xl sm:text-2xl text-[#FFF9ED] leading-relaxed mb-6">
            Nachipalayam Road Corner,<br />
            Trichy – Kovai Main Road,<br />
            <span className="font-semibold text-[#FFD700]">Avinashipalayam.</span>
          </p>

          <FloralDivider className="w-48 mx-auto my-6" />

          <div className="mt-6 inline-block rounded-xl bg-white p-3 shadow-inner border-2 border-[#C8A24D]">
            <img
              src="/images/Untitled.jpeg"
              alt="QR code for directions"
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
            />
          </div>
          <p className="mt-3 font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#C8A24D]">
            Your pathway to our joyous beginning...
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn"
              whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(200,162,77,0.5)' }}
              whileTap={{ scale: 0.96 }}
            >
              <Navigation className="w-4 h-4 text-[#FFD700]" />
              <span>OPEN GOOGLE MAPS</span>
            </motion.a>
            <motion.a
              href={calendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn"
              whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(200,162,77,0.5)' }}
              whileTap={{ scale: 0.96 }}
            >
              <Calendar className="w-4 h-4 text-[#FFD700]" />
              <span>ADD TO CALENDAR</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
