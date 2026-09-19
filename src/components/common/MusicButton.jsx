import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicButton = ({ autoStart = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const isStartedRef = useRef(false);
  const timerRef = useRef(null);

  // Synthesize a soothing ambient Indian wedding flute & tanpura drone tune using Web Audio API
  const startWeddingMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Notes of Raag Yaman / Kalyani (Classic auspicious wedding raag): C, D, E, F#, G, A, B
      // Frequency array (Hz) for serene flute tones
      const melodyNotes = [
        261.63, 293.66, 329.63, 369.99, 392.00, 440.00, 493.88, 523.25,
        493.88, 440.00, 392.00, 369.99, 329.63, 293.66, 261.63
      ];
      let step = 0;

      // Create continuous warm Tanpura drone in background (Sa-Pa drone: C3 = 130.81Hz, G3 = 196.00Hz)
      const droneOsc1 = ctx.createOscillator();
      const droneOsc2 = ctx.createOscillator();
      const droneGain = ctx.createGain();

      droneOsc1.type = 'triangle';
      droneOsc1.frequency.setValueAtTime(130.81, ctx.currentTime); // C3 Sa
      droneOsc2.type = 'sine';
      droneOsc2.frequency.setValueAtTime(196.00, ctx.currentTime); // G3 Pa

      droneGain.gain.setValueAtTime(0.08, ctx.currentTime);

      droneOsc1.connect(droneGain);
      droneOsc2.connect(droneGain);
      droneGain.connect(ctx.destination);

      droneOsc1.start();
      droneOsc2.start();

      // Flute Note Generator Loop
      const playNextFluteNote = () => {
        if (!isStartedRef.current) return;
        const now = ctx.currentTime;
        const freq = melodyNotes[step % melodyNotes.length];
        step++;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Sine waveform with slight vibrato for realistic bamboo flute feel
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Flute attack, sustain, soft decay envelope
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.9);

        // Schedule next note with expressive timing
        timerRef.current = setTimeout(playNextFluteNote, 1400 + Math.random() * 600);
      };

      isStartedRef.current = true;
      playNextFluteNote();
      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio Context init error", e);
    }
  };

  const stopWeddingMelody = () => {
    isStartedRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.suspend();
      } catch (e) {}
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopWeddingMelody();
    } else {
      startWeddingMelody();
    }
  };

  useEffect(() => {
    return () => {
      stopWeddingMelody();
    };
  }, []);

  return (
    <div className="fixed z-50" style={{ bottom: 'max(24px, env(safe-area-inset-bottom))', right: '16px' }}>
      <button
        onClick={toggleMusic}
        aria-label="Toggle Wedding Flute Music"
        className={`relative flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full border border-[#C8A24D] shadow-2xl transition-all duration-300 ${
          isPlaying
            ? 'bg-gradient-to-r from-[#421520] to-[#170B10] text-[#FFD700] shadow-[0_0_20px_rgba(200,162,77,0.5)]'
            : 'bg-[#170B10]/90 text-[#F5EBD2]'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 text-[#FFD700]" />
            <span className="hidden sm:inline font-sans text-xs uppercase tracking-widest text-[#FFD700]">Music ON</span>
            <div className="flex items-end gap-0.5 h-4">
              <span className="w-1 bg-[#FFD700] h-full animate-bounce"></span>
              <span className="w-1 bg-[#C8A24D] h-2 animate-pulse"></span>
              <span className="w-1 bg-[#FFD700] h-3 animate-bounce"></span>
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5 text-[#C8A24D]" />
            <span className="hidden sm:inline font-sans text-xs uppercase tracking-widest text-[#F5EBD2]">Music OFF</span>
          </>
        )}
      </button>
    </div>
  );
};

