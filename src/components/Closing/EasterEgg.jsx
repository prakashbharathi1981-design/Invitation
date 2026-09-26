import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

export const EasterEgg = () => {
  const [triggered, setTriggered] = useState(false);

  const handleRingTap = () => {
    setTriggered(true);

    // Fire golden confetti burst
    const end = Date.now() + 5 * 1000;
    const colors = ['#FFD700', '#C8A24D', '#FFF9ED', '#B87578'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setTimeout(() => {
      setTriggered(false);
    }, 7000);
  };

  return (
    <div className="py-12 bg-[#050204] text-center border-t border-[#C8A24D]/20">
      <div className="section-container">
        {/* Hidden Interactive Gold Ring Icon */}
        <motion.button
          onClick={handleRingTap}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#421520] to-[#170B10] border-2 border-[#FFD700] text-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.4)] cursor-pointer"
          title="Tap for a special surprise"
        >
          <Heart className="w-8 h-8 fill-[#FFD700] text-[#FFD700] animate-pulse" />
        </motion.button>

        <p className="font-sans text-[11px] uppercase tracking-widest text-[#C8A24D]/60 mt-3">
          ✦ Tap the gold heart for a surprise ✦
        </p>

        {/* Modal / Toast Overlay upon secret tap */}
        <AnimatePresence>
          {triggered && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="mt-6 p-6 max-w-md mx-auto rounded-xl bg-gradient-to-r from-[#421520] via-[#170B10] to-[#421520] border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.6)]"
            >
              <div className="flex justify-center mb-2">
                <Sparkles className="w-6 h-6 text-[#FFD700] animate-spin" />
              </div>
              <h4 className="font-header text-xl sm:text-2xl text-[#FFF9ED] mb-2">
                THANK YOU FOR BEING PART OF OUR SPECIAL DAY ❤️
              </h4>
              <p className="font-body text-base text-[#FFD700]">
                Gokulakrishnan & Karpagavalli look forward to seeing you!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

