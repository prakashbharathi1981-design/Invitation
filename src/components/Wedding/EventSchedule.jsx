import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const vp = { once: true, margin: '-40px' };

/* ── SVG Icons for each event ── */

const RingIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <circle cx="20" cy="20" r="12" stroke="#FFD700" strokeWidth="2.5"/>
    <circle cx="20" cy="20" r="7" stroke="#C8A24D" strokeWidth="1.5" strokeDasharray="3 2"/>
    <circle cx="20" cy="20" r="3" fill="#FFD700"/>
    <path d="M14 10 C16 6, 24 6, 26 10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="14" cy="10" r="2" fill="#C8A24D"/>
    <circle cx="26" cy="10" r="2" fill="#C8A24D"/>
    <motion.circle cx="20" cy="8" r="1.5" fill="#FFF9ED"
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </svg>
);

const LeafPlateIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <ellipse cx="20" cy="22" rx="15" ry="10" stroke="#C8A24D" strokeWidth="1.8"/>
    <path d="M5 22 Q20 14 35 22" stroke="#FFD700" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 22 Q20 17 32 22" stroke="#C8A24D" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
    <circle cx="20" cy="22" r="4" stroke="#FFD700" strokeWidth="1.5"/>
    <circle cx="20" cy="22" r="1.5" fill="#FFD700"/>
    <path d="M12 19 Q14 16 16 19" stroke="#C8A24D" strokeWidth="1" strokeLinecap="round"/>
    <path d="M24 19 Q26 16 28 19" stroke="#C8A24D" strokeWidth="1" strokeLinecap="round"/>
    <motion.path d="M18 14 Q20 10 22 14" stroke="#FFD700" strokeWidth="1.2" strokeLinecap="round"
      animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }}
    />
  </svg>
);

const KalashamIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    {/* Pot */}
    <path d="M14 28 Q12 20 14 16 Q17 12 20 12 Q23 12 26 16 Q28 20 26 28 Z" stroke="#C8A24D" strokeWidth="1.8" fill="rgba(200,162,77,0.1)"/>
    {/* Neck */}
    <rect x="16" y="10" width="8" height="3" rx="1" stroke="#FFD700" strokeWidth="1.5"/>
    {/* Coconut */}
    <ellipse cx="20" cy="8" rx="5" ry="4" stroke="#C8A24D" strokeWidth="1.5" fill="rgba(200,162,77,0.15)"/>
    {/* Leaves */}
    <path d="M20 4 C16 0, 10 2, 12 6" stroke="#C8A24D" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M20 4 C24 0, 30 2, 28 6" stroke="#C8A24D" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M20 4 L20 1" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Base */}
    <rect x="13" y="28" width="14" height="2.5" rx="1" stroke="#FFD700" strokeWidth="1.2" fill="rgba(255,215,0,0.1)"/>
    {/* Flame */}
    <motion.path d="M20 10 C19 8, 18 6, 20 5 C22 6, 21 8, 20 10 Z" fill="#FFD700"
      animate={{ scaleY: [1, 1.2, 0.9, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ transformOrigin: '20px 10px' }}
    />
  </svg>
);

const MangalSutraIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    {/* Chain */}
    <path d="M10 8 Q15 6 20 8 Q25 10 30 8" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 8 Q8 16 10 24 Q14 32 20 34 Q26 32 30 24 Q32 16 30 8" stroke="#C8A24D" strokeWidth="1.5" fill="none"/>
    {/* Pendant */}
    <circle cx="20" cy="26" r="5" stroke="#FFD700" strokeWidth="2"/>
    <circle cx="20" cy="26" r="2.5" fill="rgba(255,215,0,0.3)" stroke="#FFD700" strokeWidth="1"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700"/>
    {/* Black beads */}
    {[12,15,18,22,25,28].map((x, i) => (
      <circle key={i} cx={x} cy={i % 2 === 0 ? 14 : 16} r="1.5" fill="#170B10" stroke="#C8A24D" strokeWidth="0.5"/>
    ))}
    <motion.circle cx="20" cy="26" r="7" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="2 3"
      animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '20px 26px' }}
    />
  </svg>
);

const ReceptionIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    {/* Stars */}
    {[[8,8],[32,8],[20,6],[8,32],[32,32]].map(([x,y], i) => (
      <motion.path key={i}
        d={`M${x} ${y-3} L${x+1} ${y-1} L${x+3} ${y} L${x+1} ${y+1} L${x} ${y+3} L${x-1} ${y+1} L${x-3} ${y} L${x-1} ${y-1} Z`}
        fill="#FFD700" opacity="0.8"
        animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />
    ))}
    {/* Couple silhouette */}
    <circle cx="16" cy="18" r="4" stroke="#C8A24D" strokeWidth="1.5"/>
    <circle cx="24" cy="18" r="4" stroke="#C8A24D" strokeWidth="1.5"/>
    <path d="M10 32 Q10 24 16 24 Q20 24 20 28 Q20 24 24 24 Q30 24 30 32" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Heart above */}
    <motion.path d="M20 14 C20 14, 17 11, 15 13 C13 15, 15 18, 20 21 C25 18, 27 15, 25 13 C23 11, 20 14, 20 14 Z"
      fill="#FFD700" opacity="0.6"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 1.8, repeat: Infinity }}
      style={{ transformOrigin: '20px 16px' }}
    />
  </svg>
);

const SunriseIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    {/* Horizon */}
    <path d="M4 28 L36 28" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Sun */}
    <motion.circle cx="20" cy="24" r="7" stroke="#FFD700" strokeWidth="2"
      animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.circle cx="20" cy="24" r="4" fill="rgba(255,215,0,0.3)"
      animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
    {/* Rays */}
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const rad = angle * Math.PI / 180;
      const x1 = 20 + 9 * Math.cos(rad), y1 = 24 + 9 * Math.sin(rad);
      const x2 = 20 + 13 * Math.cos(rad), y2 = 24 + 13 * Math.sin(rad);
      return (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
        />
      );
    })}
    {/* Ground waves */}
    <path d="M4 32 Q10 30 16 32 Q22 34 28 32 Q34 30 36 32" stroke="#C8A24D" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const FeastIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    {/* Table */}
    <rect x="6" y="26" width="28" height="3" rx="1.5" stroke="#C8A24D" strokeWidth="1.5" fill="rgba(200,162,77,0.1)"/>
    <line x1="10" y1="29" x2="10" y2="36" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="30" y1="29" x2="30" y2="36" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Dishes */}
    <ellipse cx="14" cy="26" rx="5" ry="2" stroke="#FFD700" strokeWidth="1.2"/>
    <ellipse cx="26" cy="26" rx="5" ry="2" stroke="#FFD700" strokeWidth="1.2"/>
    <ellipse cx="20" cy="26" rx="3" ry="1.5" fill="rgba(255,215,0,0.2)" stroke="#FFD700" strokeWidth="1"/>
    {/* Steam */}
    {[14, 20, 26].map((x, i) => (
      <motion.path key={i} d={`M${x} 22 Q${x+2} 19 ${x} 16`}
        stroke="#FFF9ED" strokeWidth="1" strokeLinecap="round" fill="none"
        animate={{ opacity: [0, 0.6, 0], y: [0, -4, -8] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
      />
    ))}
    {/* Banana leaf */}
    <path d="M8 24 Q14 20 20 24 Q26 20 32 24" stroke="#C8A24D" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const events = [
  {
    id: 1,
    title: 'Engagement',
    time: '11:00 AM – 12:00 PM',
    date: '24 October 2026',
    desc: 'The sacred exchange of rings — two souls bound by destiny',
    icon: RingIcon,
    color: '#FFD700',
  },
  {
    id: 2,
    title: 'Traditional Lunch',
    time: '12:00 PM – 1:30 PM',
    date: '24 October 2026',
    desc: 'A grand feast served with love on banana leaves',
    icon: LeafPlateIcon,
    color: '#C8A24D',
  },
  {
    id: 3,
    title: 'Muhurtham Pole Ceremony',
    time: '5:00 PM – 6:00 PM',
    date: '24 October 2026',
    desc: 'The auspicious moment — blessings of the divine',
    icon: KalashamIcon,
    color: '#FFD700',
  },
  {
    id: 4,
    title: 'Reception',
    time: '6:00 PM – 9:00 PM',
    date: '24 October 2026',
    desc: 'An evening of celebration, joy and togetherness',
    icon: ReceptionIcon,
    color: '#C8A24D',
  },
  {
    id: 5,
    title: 'Wedding Ceremony',
    time: '5:00 AM – 6:00 AM',
    date: '25 October 2026',
    desc: 'The sacred union under the morning stars',
    icon: SunriseIcon,
    color: '#FFD700',
  },
  {
    id: 6,
    title: 'Sambandhi Virundhu',
    time: '12:00 PM – 1:00 PM',
    date: '25 October 2026',
    desc: 'A joyous feast uniting two beloved families',
    icon: FeastIcon,
    color: '#C8A24D',
  },
];

/* ── Vertical timeline connector ── */
const TimelineConnector = ({ index }) => (
  <div className="absolute left-[39px] sm:left-[47px] top-full w-[2px] h-8 overflow-hidden">
    <motion.div
      className="w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #C8A24D, transparent)' }}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      style2={{ transformOrigin: 'top' }}
    />
  </div>
);

/* ── Single event card ── */
const EventCard = ({ event, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = event.icon;

  return (
    <motion.div
      className="relative flex gap-4 sm:gap-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Icon circle + connector */}
      <div className="relative flex-shrink-0">
        <motion.div
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #421520 0%, #170B10 100%)',
            border: `2px solid ${hovered ? event.color : 'rgba(200,162,77,0.4)'}`,
            boxShadow: hovered ? `0 0 24px ${event.color}60, 0 0 48px ${event.color}30` : '0 4px 20px rgba(0,0,0,0.5)',
            transition: 'all 0.4s ease',
          }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {/* Spinning ring on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute inset-[-4px] rounded-full border border-dashed border-[#FFD700]/40 pointer-events-none"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ rotate: { duration: 8, repeat: Infinity, ease: 'linear' }, opacity: { duration: 0.3 } }}
              />
            )}
          </AnimatePresence>

          {/* Pulsing aura */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${event.color}20 0%, transparent 70%)` }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
          />

          <div className="w-10 h-10 sm:w-12 sm:h-12 relative z-10">
            <Icon />
          </div>
        </motion.div>

        {/* Vertical connector (not on last item) */}
        {index < events.length - 1 && <TimelineConnector index={index} />}
      </div>

      {/* Content card */}
      <motion.div
        className="flex-1 mb-8 p-5 sm:p-6 rounded-2xl relative overflow-hidden cursor-default"
        style={{
          background: 'linear-gradient(135deg, rgba(66,21,32,0.6) 0%, rgba(23,11,16,0.9) 100%)',
          border: `1px solid ${hovered ? event.color + '80' : 'rgba(200,162,77,0.25)'}`,
          boxShadow: hovered ? `0 8px 40px rgba(0,0,0,0.6), 0 0 20px ${event.color}20` : '0 4px 20px rgba(0,0,0,0.4)',
          transition: 'all 0.4s ease',
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Shimmer sweep */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(105deg, transparent 25%, rgba(255,215,0,0.06) 50%, transparent 75%)' }}
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 0.8 }}
            />
          )}
        </AnimatePresence>

        {/* Corner ornament */}
        <svg className="absolute top-2 right-2 w-8 h-8 opacity-30" viewBox="0 0 32 32" fill="none">
          <path d="M2 2 L2 12 M2 2 L12 2" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M30 30 L30 20 M30 30 L20 30" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <h3 className="font-header text-lg sm:text-xl text-[#FFF9ED] tracking-wider">{event.title}</h3>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C8A24D] whitespace-nowrap">{event.date}</span>
        </div>

        {/* Time badge */}
        <div className="inline-flex items-center gap-2 mb-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#FFD700" strokeWidth="1.8"/>
            <path d="M12 7 L12 12 L16 15" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-sans text-sm font-semibold text-[#FFD700] tracking-wider">{event.time}</span>
        </div>

        <p className="font-body italic text-[#F5EBD2]/65 text-sm leading-relaxed">{event.desc}</p>

        {/* Bottom gold line reveal */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          style={{ background: `linear-gradient(90deg, ${event.color}, transparent)` }}
          initial={{ width: 0 }}
          whileInView={{ width: hovered ? '100%' : '40%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
          animate={{ width: hovered ? '100%' : '40%' }}
        />
      </motion.div>
    </motion.div>
  );
};

export const EventSchedule = () => (
  <section className="relative py-20 px-4 overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(66,21,32,0.35) 0%, transparent 70%)' }} />

    <div className="max-w-2xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 1 }}
          className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#C8A24D] mb-3"
        >
          ✦ THE SACRED TIMELINE ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 1, delay: 0.2 }}
          className="font-header text-2xl sm:text-4xl text-[#FFF9ED] tracking-widest mb-3"
        >
          CEREMONIES & CELEBRATIONS
        </motion.h2>
        <motion.div
          className="h-[1px] mx-auto rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #C8A24D, #FFD700, #C8A24D, transparent)' }}
          initial={{ width: 0 }} whileInView={{ width: '60%' }} viewport={vp}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </div>

      {/* Timeline */}
      <div className="relative">
        {events.map((event, i) => (
          <EventCard key={event.id} event={event} index={i} />
        ))}
      </div>
    </div>
  </section>
);
