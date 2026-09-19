import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider } from '../common/FloralSVG';

const vp = { once: true, margin: '-60px' };

export const InvitationMessage = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#170B10] via-[#35101A] to-[#170B10] overflow-hidden text-center">
      <div className="section-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1 }}
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#C8A24D] mb-4"
        >
          ✦ A HUMBLE INVITATION FROM OUR SOULS ✦
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 my-8"
        >
          <h2 className="font-header text-3xl sm:text-5xl text-[#FFF9ED] leading-tight">
            YOUR GRACIOUS PRESENCE SHALL ILLUMINATE OUR CELEBRATION.
          </h2>

          <FloralDivider className="w-64 mx-auto my-6" />

          <p className="font-body text-xl sm:text-3xl text-[#F5EBD2] tracking-wide italic leading-relaxed">
            GRACE US WITH YOUR FAMILY.<br />
            SHARE IN OUR SACRED JOY.<br />
            <span className="text-[#FFD700] not-italic font-semibold">BESTOW YOUR BLESSINGS UPON THE COUPLE.</span>
          </p>

          <p className="font-header text-xl sm:text-2xl text-[#C8A24D] tracking-widest pt-4">
            YOUR ARRIVAL WILL BE OUR GREATEST GIFT.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
