import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FloralDivider } from '../common/FloralSVG';
import { MandalaSVG } from '../common/MandalaSVG';

const vp = { once: true, margin: '-60px' };

const WordReveal = ({ text, className, delay = 0 }) => (
  <span className={className}>
    {text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        style={{ display: 'inline-block', marginRight: '0.3em' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.7, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    ))}
  </span>
);

export const FinalMessage = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 0.96]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 bg-gradient-to-b from-[#170B10] via-[#080306] to-[#000000] text-center overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <MandalaSVG className="w-[800px] h-[800px]" rotate />
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,162,77,0.08) 0%, transparent 100%)' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-container relative z-10">

        <motion.div
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="relative mx-auto mb-12 w-48 h-48 sm:w-64 sm:h-64"
        >
          {[1, 1.3, 1.6].map((s, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-[#C8A24D]"
              animate={{ scale: [s, s + 0.25, s], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
            />
          ))}
          <motion.div
            className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#C8A24D]/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#C8A24D] shadow-[0_0_40px_rgba(200,162,77,0.5)]">
            <img
              src="/images/card.png"
              alt="Gokulakrishnan & Karpagavalli"
              className="w-full h-full object-contain object-top bg-gradient-to-b from-[#421520] to-[#170B10]"
            />
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, transparent 45%, rgba(8,3,6,0.7) 100%)' }} />
          </div>
        </motion.div>

        <div className="space-y-4 mb-8">
          <WordReveal text="AND THEY BEGIN" className="font-header text-2xl sm:text-4xl text-[#FFF9ED] tracking-widest block" delay={0} />
          <WordReveal text="A BEAUTIFUL JOURNEY" className="font-header text-2xl sm:text-4xl text-[#C8A24D] tracking-widest block" delay={0.3} />
          <WordReveal text="TOGETHER." className="font-header text-2xl sm:text-4xl text-[#FFD700] tracking-widest block" delay={0.6} />
        </div>

        <motion.div
          className="text-[#FFD700] text-2xl my-6"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✦
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-header text-3xl sm:text-5xl text-[#FFD700] tracking-wider"
        >
          GOKULAKRISHNAN
          <span className="block font-script text-4xl text-[#FFF9ED] my-2">&</span>
          KARPAGAVALLI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-sm tracking-[0.35em] text-[#C8A24D] mt-4"
        >
          24 · 10 · 2026
        </motion.p>

        <FloralDivider className="w-48 mx-auto my-10" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-body text-xl sm:text-2xl text-[#F5EBD2] italic leading-relaxed"
        >
          YOUR PRESENCE IS OUR JOY.<br />
          YOUR BLESSINGS ARE OUR GIFT.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-col items-center justify-center"
        >
          <motion.p
            className="font-script text-2xl text-[#C8A24D] mb-2"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.5 }}
          >
            With love,
          </motion.p>
          <motion.p
            className="font-script text-4xl sm:text-6xl text-[#FFD700] drop-shadow-md"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 2.5 }}
          >
            Gokulakrishnan & Karpagavalli
          </motion.p>
        </motion.div>

        <motion.div
          className="h-[1px] mx-auto mt-12 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #C8A24D, #FFD700, transparent)' }}
          initial={{ width: 0 }}
          whileInView={{ width: '60%' }}
          viewport={vp}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
};
