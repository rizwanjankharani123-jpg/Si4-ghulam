import React, { useState, useEffect } from 'react';
import { SIR_IMAGES } from '../data/images';
import { Sparkles, Crown, Heart, Gift, Volume2, Star, PartyPopper } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerGrandCelebration } from '../utils/confetti';

interface GiftIntroProps {
  isOpen: boolean;
  onOpenGift: () => void;
}

export const GiftIntro: React.FC<GiftIntroProps> = ({ isOpen, onOpenGift }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [stage, setStage] = useState<'idle' | 'unwrapping' | 'revealed'>('idle');

  if (!isOpen) return null;

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setStage('unwrapping');

    // Play golden chord & chime
    soundManager.playChimeChord();

    // Trigger fireworks and confetti burst
    setTimeout(() => {
      triggerGrandCelebration();
      setStage('revealed');
    }, 800);

    // Complete intro transition and show main site
    setTimeout(() => {
      onOpenGift();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030611]/95 backdrop-blur-2xl overflow-hidden transition-all duration-1000 select-none">
      
      {/* Radiant Golden Background Rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[600px] bg-gradient-to-r from-amber-500/25 via-emerald-500/20 to-amber-500/25 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[500px] bg-amber-600/15 rounded-full blur-[160px]" />
      </div>

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-1/4 left-1/6 text-amber-400 text-xl animate-float">✦</span>
        <span className="absolute top-1/3 right-1/5 text-emerald-400 text-lg animate-float" style={{ animationDelay: '1.5s' }}>★</span>
        <span className="absolute bottom-1/4 left-1/4 text-amber-300 text-2xl animate-float" style={{ animationDelay: '2.5s' }}>✨</span>
        <span className="absolute bottom-1/3 right-1/4 text-amber-200 text-lg animate-float" style={{ animationDelay: '0.8s' }}>✦</span>
      </div>

      {/* Intro Modal Box */}
      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        
        {/* Top Salutation Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-[0.25em] font-royal shadow-xl mb-4 animate-bounce">
          <Crown className="w-3.5 h-3.5 text-amber-300" />
          <span>Exclusive VIP Invitation & Gift</span>
          <Star className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Dedicated Recipient Name */}
        <h2 className="text-xs sm:text-sm font-royal text-slate-300 tracking-widest uppercase mb-1">
          A Special Teacher's Day Tribute For
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif-title tracking-tight animate-gold-shimmer glow-gold mb-2">
          Sir Ghulam Ali Soomro
        </h1>
        
        <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6 font-light">
          Dedicated with deepest respect and heartfelt admiration by <strong className="text-amber-300 font-royal font-bold">AFTAB</strong>
        </p>

        {/* Interactive 3D Royal Gift Box */}
        <div
          onClick={handleOpenClick}
          className={`group relative my-4 sm:my-6 cursor-pointer transform transition-all duration-700 ${
            stage === 'unwrapping' ? 'scale-110 rotate-3' : 'hover:scale-105'
          }`}
        >
          {/* Glowing Aura Behind Box */}
          <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/40 via-amber-300/30 to-emerald-500/40 rounded-full blur-2xl group-hover:blur-3xl transition-all animate-pulse-glow" />

          {/* Main Gift Box Construction */}
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-gradient-to-br from-amber-700 via-amber-900 to-slate-950 border-2 border-amber-400 p-3 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
            
            {/* Golden Vertical Ribbon */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-md border-x border-amber-200/50" />
            
            {/* Golden Horizontal Ribbon */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 sm:h-10 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-md border-y border-amber-200/50" />

            {/* Central Golden Bow / Seal */}
            <div className="relative z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-200 border-2 border-amber-100 shadow-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-slate-950 drop-shadow-md animate-pulse" />
            </div>

            {/* Sparkle badge on box */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 px-3 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/40 text-[10px] font-bold text-amber-200 whitespace-nowrap">
              {stage === 'unwrapping' ? '✨ UNWRAPPING...' : '🎁 TAP TO UNWRAP SIR'}
            </div>

          </div>

          {/* Flying Out Photos Preview During Unwrapping */}
          {stage === 'revealed' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {SIR_IMAGES.slice(0, 3).map((img, i) => (
                <div
                  key={img.id}
                  className="absolute w-28 h-36 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl animate-float"
                  style={{
                    transform: `translate(${(i - 1) * 90}px, -110px) rotate(${(i - 1) * 15}deg)`,
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

        </div>

        {/* CTA Button */}
        <button
          onClick={handleOpenClick}
          disabled={isOpening}
          className="mt-6 px-8 sm:px-10 py-4 rounded-2xl font-bold text-slate-950 text-sm sm:text-base bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 shadow-2xl shadow-amber-500/40 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2.5"
        >
          <Sparkles className="w-5 h-5 text-slate-950" />
          <span>{isOpening ? 'Opening Royal Gift...' : 'Click to Open Your Special Gift 🎁'}</span>
        </button>

        <p className="text-[11px] sm:text-xs text-slate-400 mt-4 flex items-center gap-1.5 font-light">
          <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse" />
          <span>Created with deep gratitude for an unforgettable Teacher's Day</span>
        </p>

      </div>

    </div>
  );
};
