import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const vp = { once: true, margin: '-30px' };

/* ── SVG Icons ── */
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
    <path d="M14 28 Q12 20 14 16 Q17 12 20 12 Q23 12 26 16 Q28 20 26 28 Z" stroke="#C8A24D" strokeWidth="1.8" fill="rgba(200,162,77,0.1)"/>
    <rect x="16" y="10" width="8" height="3" rx="1" stroke="#FFD700" strokeWidth="1.5"/>
    <ellipse cx="20" cy="8" rx="5" ry="4" stroke="#C8A24D" strokeWidth="1.5" fill="rgba(200,162,77,0.15)"/>
    <path d="M20 4 C16 0, 10 2, 12 6" stroke="#C8A24D" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M20 4 C24 0, 30 2, 28 6" stroke="#C8A24D" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M20 4 L20 1" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="13" y="28" width="14" height="2.5" rx="1" stroke="#FFD700" strokeWidth="1.2" fill="rgba(255,215,0,0.1)"/>
    <motion.path d="M20 10 C19 8, 18 6, 20 5 C22 6, 21 8, 20 10 Z" fill="#FFD700"
      animate={{ scaleY: [1, 1.2, 0.9, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ transformOrigin: '20px 10px' }}
    />
  </svg>
);

const ReceptionIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    {[[8,8],[32,8],[20,6],[8,32],[32,32]].map(([x,y], i) => (
      <motion.path key={i}
        d={`M${x} ${y-3} L${x+1} ${y-1} L${x+3} ${y} L${x+1} ${y+1} L${x} ${y+3} L${x-1} ${y+1} L${x-3} ${y} L${x-1} ${y-1} Z`}
        fill="#FFD700"
        animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />
    ))}
    <circle cx="16" cy="18" r="4" stroke="#C8A24D" strokeWidth="1.5"/>
    <circle cx="24" cy="18" r="4" stroke="#C8A24D" strokeWidth="1.5"/>
    <path d="M10 32 Q10 24 16 24 Q20 24 20 28 Q20 24 24 24 Q30 24 30 32" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
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
    <path d="M4 28 L36 28" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
    <motion.circle cx="20" cy="24" r="7" stroke="#FFD700" strokeWidth="2"
      animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.circle cx="20" cy="24" r="4" fill="rgba(255,215,0,0.3)"
      animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const rad = angle * Math.PI / 180;
      return (
        <motion.line key={i}
          x1={20 + 9 * Math.cos(rad)} y1={24 + 9 * Math.sin(rad)}
          x2={20 + 13 * Math.cos(rad)} y2={24 + 13 * Math.sin(rad)}
          stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
        />
      );
    })}
    <path d="M4 32 Q10 30 16 32 Q22 34 28 32 Q34 30 36 32" stroke="#C8A24D" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const FeastIcon = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <rect x="6" y="26" width="28" height="3" rx="1.5" stroke="#C8A24D" strokeWidth="1.5" fill="rgba(200,162,77,0.1)"/>
    <line x1="10" y1="29" x2="10" y2="36" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="30" y1="29" x2="30" y2="36" stroke="#C8A24D" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="14" cy="26" rx="5" ry="2" stroke="#FFD700" strokeWidth="1.2"/>
    <ellipse cx="26" cy="26" rx="5" ry="2" stroke="#FFD700" strokeWidth="1.2"/>
    <ellipse cx="20" cy="26" rx="3" ry="1.5" fill="rgba(255,215,0,0.2)" stroke="#FFD700" strokeWidth="1"/>
    {[14, 20, 26].map((x, i) => (
      <motion.path key={i} d={`M${x} 22 Q${x+2} 19 ${x} 16`}
        stroke="#FFF9ED" strokeWidth="1" strokeLinecap="round" fill="none"
        animate={{ opacity: [0, 0.6, 0], y: [0, -4, -8] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
      />
    ))}
    <path d="M8 24 Q14 20 20 24 Q26 20 32 24" stroke="#C8A24D" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

/* ── Clock SVG ── */
const ClockSVG = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <circle cx="12" cy="12" r="9" stroke="#FFD700" strokeWidth="1.8"/>
    <path d="M12 7 L12 12 L16 15" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Day separator ── */
const DaySeparator = ({ day, date, tamil }) => (
  <motion.div
    className="flex items-center gap-3 my-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={vp}
    transition={{ duration: 0.7 }}
  >
    <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #C8A24D)' }} />
    <div className="text-center px-3 py-1.5 rounded-full border border-[#C8A24D]/50 bg-[#421520]/60">
      <p className="font-sans text-[9px] uppercase tracking-widest text-[#FFD700]">{day}</p>
      <p className="font-sans text-[10px] text-[#C8A24D] font-semibold">{date}</p>
      <p className="font-sans text-[9px] text-[#F5EBD2]/60">{tamil}</p>
    </div>
    <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, #C8A24D, transparent)' }} />
  </motion.div>
);

/* ── Event data with Tamil ── */
const day1 = [
  { id: 1, tamil: 'நிச்சயதார்த்தம்', time: 'காலை 11.00 – 12.00 மணி', icon: RingIcon, color: '#FFD700' },
  { id: 2, tamil: 'பட்டினிசாதவிருந்து', time: 'மதியம் 12.00 – 1.30 மணி', icon: LeafPlateIcon, color: '#C8A24D' },
  { id: 3, tamil: 'முகூர்த்தக்கால்', time: 'மாலை 5.00 – 6.00 மணி', icon: KalashamIcon, color: '#FFD700' },
  { id: 4, tamil: 'வரவேற்பு', time: 'மாலை 6.00 – 9.00 மணி', icon: ReceptionIcon, color: '#C8A24D' },
];

const day2 = [
  { id: 5, tamil: 'சுப முகூர்த்தம்', time: 'காலை 5.00 – 6.00 மணி', icon: SunriseIcon, color: '#FFD700' },
  { id: 6, tamil: 'சம்பந்தி விருந்து', time: 'மதியம் 12.00 – 1.00 மணி', icon: FeastIcon, color: '#C8A24D' },
];

/* ── Single event card ── */
const EventCard = ({ event, index }) => {
  const [active, setActive] = useState(false);
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setTimeout(() => setActive(false), 600)}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(66,21,32,0.7) 0%, rgba(23,11,16,0.95) 100%)',
        border: `1px solid ${active ? event.color + 'AA' : 'rgba(200,162,77,0.25)'}`,
        boxShadow: active
          ? `0 8px 32px rgba(0,0,0,0.7), 0 0 20px ${event.color}30`
          : '0 4px 16px rgba(0,0,0,0.5)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Shimmer on active */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: 'linear-gradient(105deg, transparent 25%, rgba(255,215,0,0.06) 50%, transparent 75%)' }}
            initial={{ x: '-100%' }} animate={{ x: '200%' }}
            transition={{ duration: 0.7 }}
          />
        )}
      </AnimatePresence>

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] rounded-full"
        style={{ background: `linear-gradient(90deg, ${event.color}, transparent)` }}
        initial={{ width: 0 }}
        whileInView={{ width: '60%' }}
        viewport={vp}
        transition={{ duration: 1, delay: 0.2 + index * 0.08 }}
        animate={{ width: active ? '100%' : '60%' }}
      />

      {/* Corner ornament */}
      <svg className="absolute top-2 right-2 w-6 h-6 opacity-25 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M2 2 L2 9 M2 2 L9 2" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 22 L22 15 M22 22 L15 22" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>

      <div className="flex items-center gap-3 p-4">
        {/* Icon */}
        <motion.div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #421520 0%, #170B10 100%)',
            border: `1.5px solid ${active ? event.color : 'rgba(200,162,77,0.4)'}`,
            boxShadow: active ? `0 0 16px ${event.color}50` : 'none',
            transition: 'all 0.3s',
          }}
          animate={{ scale: active ? 1.08 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Pulsing aura */}
          <motion.div
            className="absolute w-12 h-12 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${event.color}15 0%, transparent 70%)` }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
          />
          <div className="w-6 h-6 relative z-10">
            <Icon />
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="font-header text-sm sm:text-base text-[#FFF9ED] tracking-wide leading-tight mb-1">
            {event.tamil}
          </h3>
          <div className="flex items-center gap-1.5">
            <ClockSVG />
            <span className="font-sans text-[11px] sm:text-xs text-[#FFD700] font-semibold">{event.time}</span>
          </div>
        </div>

        {/* Right gold dot */}
        <motion.div
          className="flex-shrink-0 w-2 h-2 rounded-full"
          style={{ background: event.color, boxShadow: `0 0 6px ${event.color}` }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
};

export const EventSchedule = () => (
  <section className="relative py-16 px-4 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(66,21,32,0.35) 0%, transparent 70%)' }} />

    <div className="max-w-lg mx-auto relative z-10">

      {/* Header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8 }}
          className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#C8A24D] mb-2"
        >
          ✦ நிகழ்ச்சி நிரல் ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8, delay: 0.15 }}
          className="font-script text-3xl sm:text-4xl text-[#FFD700] mb-1"
        >
          நிகழ்ச்சிகள் & கொண்டாட்டங்கள்
        </motion.h2>
        <motion.div
          className="h-[1px] mx-auto rounded-full mt-3"
          style={{ background: 'linear-gradient(90deg, transparent, #C8A24D, #FFD700, #C8A24D, transparent)' }}
          initial={{ width: 0 }} whileInView={{ width: '70%' }} viewport={vp}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      {/* Day 1 */}
      <DaySeparator day="சனிக்கிழமை" date="24.10.2026" tamil="ஐப்பசி 07 ஆம் நாள்" />
      <div className="flex flex-col gap-3">
        {day1.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
      </div>

      {/* Day 2 */}
      <DaySeparator day="ஞாயிற்றுக்கிழமை" date="25.10.2026" tamil="ஐப்பசி 08 ஆம் நாள்" />
      <div className="flex flex-col gap-3">
        {day2.map((e, i) => <EventCard key={e.id} event={e} index={i + 4} />)}
      </div>

    </div>
  </section>
);
