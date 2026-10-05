import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Flame, Crown, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { SIR_IMAGES } from '../data/images';
import { soundManager } from '../utils/audio';

interface HeroSectionProps {
  onCelebrate: () => void;
  onLightLamp: () => void;
  celebrationCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCelebrate,
  onLightLamp,
  celebrationCount,
}) => {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  // Auto cycle hero spotlight portrait smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIdx((prev) => (prev + 1) % SIR_IMAGES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const activePhoto = SIR_IMAGES[currentPhotoIdx];

  const handleNextPhoto = () => {
    soundManager.playSparkle();
    setCurrentPhotoIdx((prev) => (prev + 1) % SIR_IMAGES.length);
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 text-center overflow-hidden">
      {/* Radiant VIP Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[850px] h-[450px] bg-gradient-to-r from-amber-500/20 via-emerald-500/15 to-amber-400/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Royal Salutation Badge */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="h-[1px] w-8 sm:w-20 bg-gradient-to-r from-transparent to-amber-400/80" />
        <span className="font-royal text-amber-300 tracking-[0.25em] text-[11px] sm:text-xs md:text-sm font-bold uppercase">
          ★ VIP TEACHER'S DAY CELEBRATION ★
        </span>
        <span className="h-[1px] w-8 sm:w-20 bg-gradient-to-l from-transparent to-amber-400/80" />
      </div>

      {/* Grand Title */}
      <p className="text-slate-300 text-xs sm:text-sm md:text-base font-royal uppercase tracking-widest mb-2">
        Happy Teacher's Day, Respected & Honorable Sir
      </p>

      {/* Sir Ghulam Ali Soomro - VIP Glowing Master Display */}
      <div className="relative inline-block max-w-5xl mx-auto px-4 mb-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif-title tracking-tight leading-[1.1] animate-gold-shimmer glow-gold">
          Sir Ghulam Ali Soomro
        </h1>
        
        {/* Subtle royal underline ornament */}
        <div className="flex items-center justify-center gap-3 mt-3 sm:mt-4">
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent via-amber-400 to-amber-400/20" />
          <Crown className="w-4 h-4 text-amber-300" />
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent via-amber-400 to-amber-400/20" />
        </div>
      </div>

      {/* VIP Portrait Spotlight Showcase */}
      <div className="max-w-xl mx-auto px-4 mb-8">
        <div className="relative p-2 rounded-3xl bg-gradient-to-tr from-amber-400/40 via-emerald-400/30 to-amber-300/40 shadow-2xl box-glow-gold">
          
          <div className="relative rounded-2xl overflow-hidden bg-[#070c18] border border-amber-400/50 flex flex-col sm:flex-row items-center">
            
            {/* Portrait Image Frame - Perfectly Cropped & Centered */}
            <div className="relative w-full sm:w-1/2 aspect-[4/5] sm:aspect-square overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={`Sir Ghulam Ali Soomro - ${activePhoto.title}`}
                className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:hidden" />
              
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-amber-400/40 text-[10px] font-bold text-amber-300 font-royal shadow">
                ✦ RESPECTED SIR ✦
              </div>
            </div>

            {/* Portrait Spotlight Details */}
            <div className="w-full sm:w-1/2 p-5 sm:p-6 text-left flex flex-col justify-between bg-gradient-to-b from-[#090f20] to-[#050811]">
              <div>
                <span className="text-[10px] font-royal uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  {activePhoto.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serif-title text-amber-200 mb-2">
                  {activePhoto.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  {activePhoto.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between">
                <button
                  onClick={handleNextPhoto}
                  className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-medium cursor-pointer transition-colors"
                >
                  <span>Next Moment</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-1.5">
                  {SIR_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        soundManager.playSparkle();
                        setCurrentPhotoIdx(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentPhotoIdx ? 'w-5 bg-amber-400' : 'w-1.5 bg-slate-700'
                      }`}
                      aria-label={`Photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Sender Dedication Subtext */}
      <div className="max-w-2xl mx-auto px-4 mb-8 sm:mb-10">
        <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-light">
          A prestigious tribute honoring our beloved mentor whose guidance illuminates our paths and inspires our dreams.
        </p>

        {/* Sender VIP Lockup */}
        <div className="mt-4 inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-xl shadow-amber-500/10">
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            Dedicated with highest reverence by
          </span>
          <strong className="text-sm sm:text-base font-bold text-amber-200 tracking-wider font-royal">
            AFTAB
          </strong>
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto px-4">
        <button
          onClick={onCelebrate}
          className="w-full sm:w-auto px-7 sm:px-9 py-4 rounded-2xl font-bold text-slate-950 text-sm sm:text-base bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5"
        >
          <Sparkles className="w-5 h-5 text-slate-950" />
          <span>Click to Celebrate!</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-950/20 text-slate-950 font-black">
            {celebrationCount > 0 ? `${celebrationCount} 🎉` : '🎆'}
          </span>
        </button>

        <button
          onClick={onLightLamp}
          className="w-full sm:w-auto px-6 sm:px-7 py-4 rounded-2xl font-semibold text-amber-200 text-sm sm:text-base bg-slate-900/90 hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
        >
          <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>Light Lamp of Gratitude</span>
        </button>

        <a
          href="#gallery"
          className="px-5 py-4 rounded-2xl font-medium text-slate-300 text-sm hover:text-amber-200 hover:bg-slate-900/50 transition-colors flex items-center gap-1.5"
        >
          <ImageIcon className="w-4 h-4 text-emerald-400" />
          <span>View Yaadgaar Gallery</span>
        </a>
      </div>
    </section>
  );
};
