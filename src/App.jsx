import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'framer-motion';

// Styles
import './styles/globals.css';
import './styles/animations.css';

// Components
import { LoadingScreen } from './components/common/LoadingScreen';
import { CustomCursor } from './components/common/CustomCursor';
import { CursorTrail } from './components/common/CursorTrail';
import { GoldParticles } from './components/common/GoldParticles';
import { StarField } from './components/common/StarField';
import { MusicButton } from './components/common/MusicButton';
import { CornerDiyas } from './components/common/CornerDiyas';
import { RangoliDivider } from './components/common/RangoliDivider';
import { SectionWipe } from './components/common/SectionWipe';
import { Envelope } from './components/Opening/Envelope';
import { OpeningScene } from './components/Opening/OpeningScene';
import { CoupleReveal } from './components/Couple/CoupleReveal';
import { DateSection } from './components/Wedding/DateSection';
import { VenueSection } from './components/Venue/VenueSection';
import { FamilyBlessings } from './components/Family/FamilyBlessings';
import { TraditionalInterlude } from './components/Interlude/TraditionalInterlude';
import { InvitationMessage } from './components/Closing/InvitationMessage';
import { RSVPSection } from './components/Closing/RSVPSection';
import { ShareSection } from './components/Closing/ShareSection';
import { FinalMessage } from './components/Closing/FinalMessage';
import { EasterEgg } from './components/Closing/EasterEgg';
import { ScrollPoetry } from './components/Wedding/ScrollPoetry';
import { EventSchedule } from './components/Wedding/EventSchedule';
import { SignatureReveal } from './components/Closing/SignatureReveal';

const SecretIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 3000);
    const t2 = setTimeout(() => setPhase(2), 6500);
    const t3 = setTimeout(() => onComplete(), 8200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-6 text-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
    >
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-[#C8A24D]"
        style={{ boxShadow: '0 0 20px #C8A24D, 0 0 40px rgba(200,162,77,0.4)' }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <AnimatePresence mode="wait">
        {phase === 0 && (
          <motion.div key="p1" className="space-y-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <p className="font-script text-3xl sm:text-5xl text-[#C8A24D] leading-relaxed">
              Every beautiful journey<br />begins with a single step...
            </p>
          </motion.div>
        )}
        {phase === 1 && (
          <motion.div key="p2" className="space-y-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
          >
            <motion.div className="text-4xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>🔊</motion.div>
            <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-[#FFF9ED]/60">
              Please turn on your sound<br />for the best experience
            </p>
            <motion.div
              className="h-[1px] mx-auto rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #C8A24D, transparent)' }}
              initial={{ width: 0 }} animate={{ width: 160 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [invitationRevealed, setInvitationRevealed] = useState(false);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get('guest');
    if (guest) setGuestName(guest);
  }, []);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const isMobile = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return (
    <div className="relative min-h-screen bg-[#170B10] text-[#FFF9ED] font-body selection:bg-[#C8A24D] selection:text-[#170B10]">

      {/* Parallax star field — always visible */}
      <StarField />

      {/* Custom cursor + trail — desktop only */}
      {!isMobile && <CustomCursor />}
      {!isMobile && <CursorTrail />}

      {/* Floating gold dust */}
      <GoldParticles count={30} />

      {/* Corner diya flames */}
      <CornerDiyas />

      {/* Music toggle */}
      <MusicButton />

      {/* Save card button */}
      <div className="fixed z-40" style={{ top: 'max(16px, env(safe-area-inset-top))', right: '16px' }}>
        <a
          href="/images/invitation_card.jpg"
          download="Gokulakrishnan_Karpagavalli_Invitation.jpg"
          className="px-4 py-2 text-xs font-sans font-bold uppercase tracking-widest bg-[#421520]/80 text-[#FFD700] border border-[#C8A24D] rounded-full shadow-lg backdrop-blur-sm hover:bg-[#C8A24D] hover:text-[#170B10] transition-all inline-block"
        >
          📥 SAVE CARD
        </a>
      </div>

      {/* Loading screen */}
      <AnimatePresence>
        {!loadingDone && <LoadingScreen onComplete={() => setLoadingDone(true)} />}
      </AnimatePresence>

      {/* Secret intro */}
      <AnimatePresence>
        {loadingDone && !introDone && <SecretIntro onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      {/* Envelope */}
      <AnimatePresence>
        {introDone && !isEnvelopeOpen && (
          <Envelope guestName={guestName} onOpen={() => setIsEnvelopeOpen(true)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      {isEnvelopeOpen && (
        <main className="relative">
          <OpeningScene onReveal={() => setInvitationRevealed(true)} invitationRevealed={invitationRevealed} />

          <AnimatePresence>
            {invitationRevealed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <CoupleReveal />
                <SectionWipe />
                <RangoliDivider />

                <ScrollPoetry />
                <SectionWipe />

                <DateSection />
                <SectionWipe />
                <EventSchedule />
                <SectionWipe />
                <RangoliDivider />

                <VenueSection />
                <SectionWipe />

                <FamilyBlessings />
                <SectionWipe />
                <RangoliDivider />

                <TraditionalInterlude />
                <SectionWipe />

                <InvitationMessage />
                <SectionWipe />
                <RangoliDivider />

                <RSVPSection />
                <SectionWipe />

                <ShareSection />
                <SectionWipe />

                <FinalMessage />
                <SignatureReveal />
                <EasterEgg />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      )}
    </div>
  );
}

export default App;
