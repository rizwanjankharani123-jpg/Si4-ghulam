import React, { useState } from 'react';
import { SIR_IMAGES } from '../data/images';
import { Gift, Sparkles, Heart, Crown, Award, PartyPopper, RefreshCw } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerGrandCelebration, triggerStarSparks } from '../utils/confetti';

export const InteractiveGiftSection: React.FC = () => {
  const [unwrapped, setUnwrapped] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const handleUnwrap = () => {
    soundManager.playChimeChord();
    triggerGrandCelebration();
    setUnwrapped(true);
  };

  const handleReset = () => {
    soundManager.playSparkle();
    setUnwrapped(false);
  };

  const currentPhoto = SIR_IMAGES[activePhotoIdx];

  return (
    <section id="gift-box-section" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      
      {/* Royal Header */}
      <div className="mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest font-royal mb-3 shadow-lg shadow-amber-500/10">
          <Gift className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Royal Gift Box</span>
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-title text-slate-100 leading-tight">
          A Token of Infinite Respect
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-3 font-light">
          An interactive surprise tribute crafted especially for <strong className="text-amber-300 font-medium">Sir Ghulam Ali Soomro</strong>.
        </p>
      </div>

      {/* Main Interactive Gift Box Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0a1122] via-[#060914] to-[#04060d] border-2 border-amber-500/40 p-6 sm:p-10 md:p-12 shadow-2xl box-glow-gold overflow-hidden">
        
        {/* Glow halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[650px] h-[350px] bg-gradient-to-r from-amber-500/20 via-emerald-500/15 to-amber-400/20 rounded-full blur-[140px] pointer-events-none" />

        {!unwrapped ? (
          /* Locked State - 3D Gift Box */
          <div className="relative z-10 flex flex-col items-center py-6">
            
            <div
              onClick={handleUnwrap}
              className="group relative cursor-pointer transform hover:scale-105 transition-all duration-500"
            >
              {/* Glowing Aura */}
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/30 via-amber-300/30 to-emerald-500/30 rounded-full blur-2xl group-hover:blur-3xl animate-pulse-glow" />

              {/* Gift Box Graphic */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-amber-700 via-amber-900 to-slate-950 border-2 border-amber-300 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-md border-x border-amber-200/50" />
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 sm:h-10 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-md border-y border-amber-200/50" />
                
                <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-200 border border-amber-100 shadow-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-slate-950" />
                </div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-amber-200 mt-6 mb-2">
              Tap the Gift to Unwrap Sir's Special Tribute
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6 font-light">
              Contains heartfelt memories, golden words, and a commemorative portrait presentation.
            </p>

            <button
              onClick={handleUnwrap}
              className="px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 shadow-xl shadow-amber-500/30 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <PartyPopper className="w-5 h-5 text-slate-950" />
              <span>Unwrap Special Gift 🎁</span>
            </button>
          </div>
        ) : (
          /* Unwrapped State - Revealed Photo & Tribute Showcase */
          <div className="relative z-10 animate-fadeIn">
            
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
              <div className="flex items-center gap-2 text-amber-300 font-royal font-bold text-xs sm:text-sm">
                <Crown className="w-4 h-4" />
                <span>✦ UNWRAPPED ROYAL TRIBUTE ✦</span>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-300 text-xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Wrap Box Again</span>
              </button>
            </div>

            {/* Revealed Content Layout */}
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-left">
              
              {/* Photo Showcase */}
              <div className="relative w-full md:w-1/2 aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden bg-slate-950 border-2 border-amber-400/60 shadow-2xl">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/75 backdrop-blur-md border border-amber-400/40 text-[10px] font-bold text-amber-300 font-royal">
                  ✦ {currentPhoto.tag} ✦
                </div>
                <div className="absolute bottom-3 inset-x-3">
                  <p className="text-sm font-bold font-serif-title text-amber-200">
                    {currentPhoto.title}
                  </p>
                </div>
              </div>

              {/* Revealed Letter & Selectors */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-royal text-emerald-400 uppercase tracking-widest font-bold block mb-1">
                    Special Gift Message
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-amber-200 mb-3 leading-snug">
                    "To a teacher whose wisdom is a gift that keeps giving every day."
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-light mb-4">
                    Dear Sir Ghulam Ali Soomro, every achievement in our lives carries the signature of your noble guidance, patience, and intellect. Thank you for being our lifelong mentor.
                  </p>
                </div>

                {/* Photo Selector Strip Inside Gift */}
                <div className="pt-3 border-t border-amber-500/20">
                  <p className="text-[11px] text-slate-400 mb-2 font-medium">Browse Gift Photo Album:</p>
                  <div className="flex gap-2">
                    {SIR_IMAGES.map((img, i) => (
                      <button
                        key={img.id}
                        onClick={() => {
                          soundManager.playSparkle();
                          setActivePhotoIdx(i);
                        }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          i === activePhotoIdx ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/30' : 'border-slate-800 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.src} alt={img.title} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-amber-300 font-medium">
                    <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                    <span>With Reverence, Aftab</span>
                  </span>
                  <span className="font-royal text-amber-300 font-bold">VIP 2026</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

    </section>
  );
};
