import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { LotusSVG } from '../common/LotusSVG';
import { FloralDivider } from '../common/FloralSVG';
import { Calendar, Clock, Sparkles } from 'lucide-react';

const vp = { once: true, margin: '-60px' };

/* ── Flip card for each countdown digit ── */
const FlipUnit = ({ value, label }) => {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => { setPrev(value); setFlip(false); }, 350);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  const display = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 sm:w-24 h-16 sm:h-24 rounded-xl flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #421520 0%, #170B10 100%)', border: '1px solid rgba(200,162,77,0.5)', boxShadow: '0 8px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(200,162,77,0.2)' }}
      >
        <span className="font-header text-3xl sm:text-5xl font-bold text-[#FFD700] z-0 drop-shadow-md">{display}</span>
        
        {/* Center divider */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#170B10]/90 z-10 -translate-y-1/2" />
        
        {/* Flip animation overlay */}
        <AnimatePresence>
          {flip && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(160deg, #421520 0%, #170B10 100%)' }}
              initial={{ rotateX: 0, opacity: 1 }}
              animate={{ rotateX: -90, opacity: 0 }}
              exit={{}}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
              <span className="font-header text-3xl sm:text-5xl font-bold text-[#FFD700] drop-shadow-md">{String(prev).padStart(2, '0')}</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Gold corner accents */}
        <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C8A24D]/60" />
        <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C8A24D]/60" />
        <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C8A24D]/60" />
        <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C8A24D]/60" />
      </div>
      <span className="font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F5EBD2]/70">{label}</span>
    </div>
  );
};

export const DateSection = () => {
  const targetDate = new Date('2026-10-24T18:00:00+05:30').getTime();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const numY = useTransform(scrollYProgress, [0, 0.4, 1], [60, 0, -40]);
  const numOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0.3]);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate - Date.now();
      if (diff > 0) setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-[#170B10] via-[#35121B] to-[#170B10] overflow-hidden">

      {/* Background lotus glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        <LotusSVG className="w-[600px] h-[600px]" animatePetals={false} />
      </motion.div>

      <div className="section-container relative z-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1 }}
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#C8A24D] mb-4"
        >
          AND SO,
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 1.2 }}
          className="font-header text-2xl sm:text-4xl text-[#FFF9ED] tracking-widest max-w-2xl mx-auto leading-relaxed"
        >
          TWO JOURNEYS BECOME ONE.
        </motion.h2>

        {/* Giant 24 with parallax + shimmer */}
        <div className="relative my-12 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-35">
            <LotusSVG className="w-80 h-80 sm:w-[450px] sm:h-[450px]" animatePetals />
          </div>

          <motion.div style={{ y: numY, opacity: numOpacity }} className="relative z-10">
            {/* Shimmer sweep over the 24 */}
            <div className="relative inline-block overflow-hidden">
              <span className="font-header font-black text-[120px] sm:text-[220px] md:text-[280px] leading-none select-none shimmer-text drop-shadow-[0_10px_40px_rgba(200,162,77,0.4)]">
                24
              </span>
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.12) 50%, transparent 75%)' }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1 }}
          className="font-header text-2xl sm:text-3xl tracking-[0.3em] text-[#FFD700] mb-16"
        >
          OCTOBER 2026
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 2 }}
          className="my-16 flex flex-col items-center justify-center min-h-[150px]"
        >
          {/* Cursive Handwriting Reveal */}
          <motion.p
            className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#FFD700] drop-shadow-lg relative inline-block"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={vp}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            Two lives, one beautiful destiny...
          </motion.p>
        </motion.div>

        <FloralDivider className="w-72 mx-auto my-12" />

        {/* Celebration details */}
        <div className="my-12">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#C8A24D] block mb-2">
            ✦ THE CELEBRATION AWAITS ✦
          </span>
          <h3 className="font-header text-3xl sm:text-4xl text-[#FFF9ED] mb-6">THE GRAND CELEBRATION OF LOVE</h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1 }}
            className="inline-flex flex-wrap items-center justify-center gap-6 p-6 rounded-xl bg-[#421520]/60 border border-[#C8A24D]/50 shadow-xl max-w-xl mx-auto my-6 relative overflow-hidden"
          >
            {/* Shimmer on card */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(200,162,77,0.08) 50%, transparent 70%)' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
            />
            <div className="flex items-center gap-2 text-[#FFD700]">
              <Calendar className="w-5 h-5 text-[#C8A24D]" />
              <span className="font-sans font-semibold text-base sm:text-lg">Saturday, 24 October 2026</span>
            </div>
            <div className="h-4 w-[1px] bg-[#C8A24D]/40 hidden sm:block" />
            <div className="flex items-center gap-2 text-[#FFD700]">
              <Clock className="w-5 h-5 text-[#C8A24D]" />
              <span className="font-sans font-semibold text-base sm:text-lg">6:00 PM – 9:00 PM</span>
            </div>
          </motion.div>

          {/* Flip countdown */}
          <div className="my-10 max-w-2xl mx-auto">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#C8A24D] mb-8 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              THE COUNTDOWN BEGINS
              <Sparkles className="w-4 h-4" />
            </p>
            <div className="flex items-start justify-center gap-3 sm:gap-6">
              {[
                { label: 'DAYS',    value: timeLeft.days },
                { label: 'HOURS',   value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds },
              ].map((item, i) => (
                <React.Fragment key={item.label}>
                  <FlipUnit value={item.value} label={item.label} />
                  {i < 3 && (
                    <motion.span
                      className="font-header text-2xl sm:text-3xl text-[#C8A24D] mt-3 sm:mt-5"
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      :
                    </motion.span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
