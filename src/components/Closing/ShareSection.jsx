import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, Share2 } from 'lucide-react';

const vp = { once: true, margin: '-60px' };

const ShareCard = ({ icon, label, sublabel, color, onClick, href, delay }) => {
  const [active, setActive] = useState(false);

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={vp}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setTimeout(() => setActive(false), 400)}
      onClick={onClick}
      className="relative p-6 rounded-2xl text-center cursor-pointer overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(66,21,32,0.7) 0%, rgba(23,11,16,0.95) 100%)',
        border: `1px solid ${active ? color : 'rgba(200,162,77,0.3)'}`,
        boxShadow: active ? `0 15px 40px rgba(0,0,0,0.7), 0 0 20px ${color}33` : '0 8px 25px rgba(0,0,0,0.5)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        minWidth: 140,
      }}
    >
      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(105deg, transparent 30%, ${color}15 50%, transparent 70%)` }}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      <div
        className="flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-3"
        style={{ background: `${color}22`, border: `1px solid ${color}55` }}
      >
        {icon}
      </div>
      <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#FFF9ED] mb-1">{label}</p>
      <p className="font-sans text-[10px] text-[#C8A24D]/70 uppercase tracking-wider">{sublabel}</p>
    </motion.div>
  );

  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
};

export const ShareSection = () => {
  const [copied, setCopied] = useState(false);
  const shareText = "You're invited to celebrate the wedding reception of Gokulakrishnan & Elamathi on 24 October 2026.";
  const currentUrl = window.location.origin + window.location.pathname;

  const handleWhatsApp = () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`, '_blank');
  const handleCopy = () => { navigator.clipboard.writeText(currentUrl); setCopied(true); setTimeout(() => setCopied(false), 3000); };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#170B10] via-[#280B13] to-[#170B10] text-center overflow-hidden">

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(200,162,77,0.06) 0%, transparent 100%)' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1 }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#C8A24D] block mb-2">
            ✦ SPREAD THE JOY ✦
          </span>
          <h3 className="font-header text-2xl sm:text-3xl text-[#FFF9ED] mb-3">SHARE THE INVITATION</h3>
          <p className="font-body text-base text-[#F5EBD2]/70 italic mb-10">
            Let your loved ones be part of this beautiful celebration.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-stretch justify-center gap-4 max-w-2xl mx-auto">
          <ShareCard
            icon={<Send className="w-5 h-5" style={{ color: '#25D366' }} />}
            label="WhatsApp"
            sublabel="Share instantly"
            color="#25D366"
            onClick={handleWhatsApp}
            delay={0.1}
          />
          <ShareCard
            icon={copied
              ? <Check className="w-5 h-5" style={{ color: '#FFD700' }} />
              : <Copy className="w-5 h-5" style={{ color: '#C8A24D' }} />
            }
            label={copied ? 'Copied!' : 'Copy Link'}
            sublabel={copied ? 'Link in clipboard' : 'Share anywhere'}
            color="#C8A24D"
            onClick={handleCopy}
            delay={0.3}
          />
          <ShareCard
            icon={<Share2 className="w-5 h-5" style={{ color: '#F5EBD2' }} />}
            label="Share"
            sublabel="More options"
            color="#F5EBD2"
            onClick={() => navigator.share?.({ title: 'Wedding Invitation', text: shareText, url: currentUrl })}
            delay={0.4}
          />
        </div>

        <motion.div
          className="h-[1px] mx-auto mt-12 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #C8A24D, transparent)' }}
          initial={{ width: 0 }}
          whileInView={{ width: '50%' }}
          viewport={vp}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
};
