import React, { useState, useEffect, useRef } from 'react';
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
  const heights = BAR_HEIGHTS[frame];
  return (
    <div className="flex items-end gap-[2px] h-4">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-[#FFD700]"
          animate={{ height: h }}
          transition={{ duration: 0.18, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const isStartedRef = useRef(false);
  const timerRef = useRef(null);
  const droneRefs = useRef([]);

  const startWeddingMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const melodyNotes = [261.63, 293.66, 329.63, 369.99, 392.00, 440.00, 493.88, 523.25, 493.88, 440.00, 392.00, 369.99, 329.63, 293.66, 261.63];
      let step = 0;

      const droneOsc1 = ctx.createOscillator();
      const droneOsc2 = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc1.type = 'triangle';
      droneOsc1.frequency.setValueAtTime(130.81, ctx.currentTime);
      droneOsc2.type = 'sine';
      droneOsc2.frequency.setValueAtTime(196.00, ctx.currentTime);
      droneGain.gain.setValueAtTime(0.08, ctx.currentTime);
      droneOsc1.connect(droneGain);
      droneOsc2.connect(droneGain);
      droneGain.connect(ctx.destination);
      droneOsc1.start();
      droneOsc2.start();
      droneRefs.current = [droneOsc1, droneOsc2, droneGain];

      const playNextFluteNote = () => {
        if (!isStartedRef.current) return;
        const now = ctx.currentTime;
        const freq = melodyNotes[step % melodyNotes.length];
        step++;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 1.9);
        timerRef.current = setTimeout(playNextFluteNote, 1400 + Math.random() * 600);
      };

      isStartedRef.current = true;
      playNextFluteNote();
      setIsPlaying(true);
    } catch (e) { console.warn('Audio error', e); }
  };

  const stopWeddingMelody = () => {
    isStartedRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (audioCtxRef.current) {
      try { audioCtxRef.current.suspend(); } catch (e) {}
    }
    setIsPlaying(false);
  };

  useEffect(() => () => stopWeddingMelody(), []);

  return (
    <div className="fixed z-50" style={{ bottom: 'max(24px, env(safe-area-inset-bottom))', right: '16px' }}>
      <motion.button
        onClick={() => isPlaying ? stopWeddingMelody() : startWeddingMelody()}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle Wedding Music"
        className={`relative flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full border border-[#C8A24D] shadow-2xl transition-all duration-300 overflow-hidden ${
          isPlaying
            ? 'bg-gradient-to-r from-[#421520] to-[#170B10] text-[#FFD700] shadow-[0_0_24px_rgba(200,162,77,0.6)]'
            : 'bg-[#170B10]/90 text-[#F5EBD2]'
        }`}
      >
        {/* Shimmer when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
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
};
