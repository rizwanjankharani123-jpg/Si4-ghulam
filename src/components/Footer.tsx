import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#04060d] py-10 text-center overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
        {/* Main Required Text with subtle pulse animation */}
        <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-slate-200">
          <span>Developed with</span>
          <span className="inline-flex items-center justify-center text-red-500 text-xl animate-pulse filter drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]">
            ❤️
          </span>
          <span>by</span>
          <strong className="text-amber-300 font-bold tracking-wide font-royal text-lg sm:text-xl drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">
            Aftab
          </strong>
        </div>

        {/* Respectful Subtext */}
        <p className="text-slate-400 text-xs sm:text-sm font-light">
          Dedicated with heartfelt devotion & utmost respect to <strong className="text-amber-200/90 font-medium">Sir Ghulam Ali Soomro</strong>
        </p>

        <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-500">
          <span>Happy Teacher's Day</span>
          <span>·</span>
          <span>Inspiration & Mentorship</span>
          <span>·</span>
          <span>2026 Tribute</span>
        </div>
      </div>
    </footer>
  );
};
