import React from 'react';
import { motion } from 'framer-motion';
import { FloralCorner, FloralDivider } from '../common/FloralSVG';
import { MandalaSVG } from '../common/MandalaSVG';
import { Heart } from 'lucide-react';

const vp = { once: true, margin: '-60px' };

const FamilyName = ({ label, name, delay }) => (
  <motion.div
    className="my-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={vp}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#C8A24D] block mb-2 font-semibold">
      {label}
    </span>
    <h3 className="font-header text-xl sm:text-3xl text-[#FFD700]">{name}</h3>
  </motion.div>
);

const GoldLine = ({ delay = 0 }) => (
  <motion.div
    className="h-[1px] mx-auto rounded-full"
    style={{ background: 'linear-gradient(90deg, transparent, #C8A24D, #FFD700, #C8A24D, transparent)' }}
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: '70%', opacity: 1 }}
    viewport={vp}
    transition={{ duration: 1.2, delay, ease: 'easeOut' }}
  />
);

export const FamilyBlessings = () => {
  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-[#170B10] via-[#3B131E] to-[#170B10] overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <MandalaSVG className="w-[600px] h-[600px]" rotate />
      </div>

      <div className="section-container relative z-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1 }}
          className="font-script text-3xl sm:text-4xl text-[#FFD700] mb-6 drop-shadow-md"
        >
          With the celestial blessings of our ancestors...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-header text-3xl sm:text-5xl text-[#FFF9ED] tracking-wider mb-12"
        >
          WITH THE CELESTIAL BLESSINGS<br className="hidden sm:block" /> OF OUR BELOVED FAMILIES
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto p-8 sm:p-14 text-center rounded-2xl relative shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, rgba(66,21,32,0.5) 0%, rgba(23,11,16,0.95) 100%)',
            border: '1px solid rgba(200,162,77,0.35)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 0 30px rgba(200,162,77,0.04)',
          }}
        >
          {['top-left','top-right','bottom-left','bottom-right'].map((pos, i) => (
            <motion.div
              key={pos}
              className={`absolute ${pos.includes('top') ? 'top-3' : 'bottom-3'} ${pos.includes('left') ? 'left-3' : 'right-3'}`}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 0.75, scale: 1 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            >
              <FloralCorner position={pos} className="w-20 h-20" />
            </motion.div>
          ))}

          <motion.div
            className="absolute inset-4 rounded-xl pointer-events-none"
            style={{ border: '1px dashed rgba(200,162,77,0.2)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <GoldLine delay={0.4} />
          <FamilyName label="Groom's Parents" name="Mr. N. Muthusamy & Mrs. M. Nirmala" delay={0.5} />

          <motion.div
            className="font-script text-4xl text-[#FFD700] my-2"
            initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.8, ease: 'backOut' }}
          >
            &
          </motion.div>

          <FamilyName label="Bride's Parents" name="Mr. T. Murugesan & Mrs. M. Visalakshi" delay={0.9} />
          <GoldLine delay={1.1} />

          <FloralDivider className="w-64 mx-auto my-8" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-body text-xl sm:text-2xl text-[#F5EBD2] leading-relaxed max-w-xl mx-auto italic font-medium my-6"
          >
            "We cordially solicit your esteemed presence with family and friends on the auspicious occasion of the wedding reception of Gokulakrishnan & Karpagavalli."
          </motion.p>

          <FloralDivider className="w-48 mx-auto my-8" />

          <motion.div
            className="mt-6 pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C8A24D] block mb-3">
              With Best Compliments from
            </span>
            <p className="font-header text-lg sm:text-xl text-[#FFF9ED] flex items-center justify-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="w-5 h-5 fill-[#C8A24D] text-[#C8A24D]" />
              </motion.span>
              Friends & Relatives
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              >
                <Heart className="w-5 h-5 fill-[#C8A24D] text-[#C8A24D]" />
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
