import React from 'react';
import { Heart, Star, Sparkles, Flame, ScrollText, Award } from 'lucide-react';

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
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 text-center overflow-hidden">
      {/* Radial Glow Under Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-500/15 via-emerald-500/10 to-amber-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Floating Emblem */}
      <div className="inline-flex items-center justify-center mb-6 animate-float">
        <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-amber-500 via-emerald-400 to-amber-300 shadow-xl shadow-amber-500/20">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#080d1a] border border-amber-400/40 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent pointer-events-none" />
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
            </span>
          </div>
        </div>
      </div>

      {/* Tagline / Salutation */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
        <span className="font-royal text-amber-300 tracking-[0.25em] text-xs sm:text-sm font-semibold uppercase">
          Happy Teacher's Day 2026
        </span>
        <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
      </div>

      {/* Main Salutation & Recipient's Name */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 font-serif-title max-w-4xl mx-auto leading-[1.15] mb-4">
        Respected & Honorable Sir
        <span className="block mt-2 sm:mt-3 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black animate-gold-shimmer glow-gold tracking-tight">
          Ghulam Ali Soomro
        </span>
      </h1>

      {/* Subtext and Sender's Prominent Dedication */}
      <div className="max-w-2xl mx-auto px-4 mt-6 mb-10">
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
          A heartfelt tribute celebrating a visionary educator whose wisdom enlightens minds, whose kindness touches hearts, and whose mentorship shapes a lifetime of character.
        </p>

        {/* Sender Banner */}
        <div className="mt-5 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 shadow-lg shadow-amber-500/5">
          <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            Dedicated with profound devotion & gratitude by
          </span>
          <span className="text-xs sm:text-sm font-bold text-amber-300 tracking-wide font-royal">
            AFTAB
          </span>
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        </div>
      </div>

      {/* Primary Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto px-4">
        <button
          onClick={onCelebrate}
          className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-slate-950 text-sm sm:text-base bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2.5 overflow-hidden"
        >
          <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
          <span>Click to Celebrate!</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-950/20 text-slate-950 font-bold">
            {celebrationCount > 0 ? `${celebrationCount} 🎉` : '🎆'}
          </span>
        </button>

        <button
          onClick={onLightLamp}
          className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-medium text-amber-200 text-sm sm:text-base bg-slate-900/90 hover:bg-slate-850 border border-amber-500/30 hover:border-amber-400/70 shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-2"
        >
          <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>Light Lamp of Gratitude</span>
        </button>

        <a
          href="#tribute"
          className="px-5 py-3.5 rounded-xl font-medium text-slate-300 text-sm hover:text-amber-200 hover:bg-slate-900/50 transition-colors flex items-center gap-1.5"
        >
          <ScrollText className="w-4 h-4 text-slate-400" />
          <span>Read Heartfelt Letter</span>
        </a>
      </div>
    </section>
  );
};
