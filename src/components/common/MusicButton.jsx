import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX } from 'lucide-react';

const BAR_HEIGHTS = [
  [4, 14, 8, 16, 6],
  [12, 6, 16, 4, 14],
  [8, 16, 4, 12, 10],
  [16, 8, 12, 6, 14],
];

const Equalizer = () => {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % BAR_HEIGHTS.length), 220);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-end gap-[2px] h-4">
      {BAR_HEIGHTS[frame].map((h, i) => (
        <motion.div key={i} className="w-[3px] rounded-full bg-[#FFD700]"
          animate={{ height: h }} transition={{ duration: 0.18, ease: 'easeInOut' }} />
      ))}
    </div>
  );
};

export const MusicButton = forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/images/RINGTONE.mp3');
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;
    return () => { audio.pause(); audio.src = ''; };
  }, []);

  const play = () => {
    const audio = audioRef.current;
    if (!audio || isPlaying) return;
    audio.play().catch(() => {});
    setIsPlaying(true);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); setIsPlaying(false); }
    else { audio.play().catch(() => {}); setIsPlaying(true); }
  };

  // Expose play() to parent via ref
  useImperativeHandle(ref, () => ({ play }));

  return (
    <div className="fixed z-50" style={{ bottom: 'max(24px, env(safe-area-inset-bottom))', right: '16px' }}>
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle Wedding Music"
        className={`relative flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full border border-[#C8A24D] shadow-2xl transition-all duration-300 overflow-hidden ${
          isPlaying
            ? 'bg-gradient-to-r from-[#421520] to-[#170B10] text-[#FFD700] shadow-[0_0_24px_rgba(200,162,77,0.6)]'
            : 'bg-[#170B10]/90 text-[#F5EBD2]'
        }`}
      >
        {isPlaying && (
          <motion.div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,215,0,0.08) 50%, transparent 70%)' }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
        )}
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div key="on" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }} className="flex items-center gap-2">
              <span className="text-sm">🎵</span>
              <span className="hidden sm:inline font-sans text-xs uppercase tracking-widest text-[#FFD700]">Music</span>
              <Equalizer />
            </motion.div>
          ) : (
            <motion.div key="off" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }} className="flex items-center gap-2">
              <VolumeX className="w-4 h-4 text-[#C8A24D]" />
              <span className="hidden sm:inline font-sans text-xs uppercase tracking-widest text-[#F5EBD2]/70">Music</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
});
