import React, { useState } from 'react';
import { Flame, Sparkles, Heart } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerStarSparks } from '../utils/confetti';

export const LampOfGratitude: React.FC = () => {
  const [lampCount, setLampCount] = useState(1);
  const [isLit, setIsLit] = useState(false);

  const handleLight = () => {
    soundManager.playWarmResonance();
    triggerStarSparks();
    setLampCount((prev) => prev + 1);
    setIsLit(true);
    setTimeout(() => setIsLit(false), 2000);
  };

  return (
    <section id="lamp" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0b1222] to-[#060a14] border border-amber-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
        
        {/* Glow halo when lit */}
        <div className={`absolute inset-0 bg-gradient-to-t from-amber-500/10 via-amber-400/5 to-transparent pointer-events-none transition-opacity duration-1000 ${
          isLit ? 'opacity-100' : 'opacity-40'
        }`} />

        <div className="relative z-10">
          <p className="text-amber-400 font-royal text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            Sacred Tradition of Reverence
          </p>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-slate-100 mb-3">
            Light a Virtual Lamp of Gratitude
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            In honor of <strong className="text-amber-300 font-medium">Sir Ghulam Ali Soomro</strong>, click to ignite the golden flame of knowledge, wisdom, and eternal student reverence.
          </p>

          {/* Interactive Lamp / Diya Graphic */}
          <div className="relative inline-flex items-center justify-center my-4 group cursor-pointer" onClick={handleLight}>
            {/* Flame Glow */}
            <div className="absolute -top-10 w-24 h-24 bg-amber-400/30 rounded-full blur-xl animate-pulse-glow" />
            
            {/* Flame Icon */}
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <Flame className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 drop-shadow-[0_0_25px_rgba(251,191,36,0.9)] animate-bounce" />
                <Sparkles className="w-6 h-6 text-amber-200 absolute -top-2 -right-2 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              
              {/* Diya Base Vessel */}
              <div className="w-28 h-8 rounded-b-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 border-t-2 border-amber-300 shadow-xl -mt-3 flex items-center justify-center">
                <div className="w-16 h-2 rounded-full bg-amber-200/40 blur-xs" />
              </div>
            </div>
          </div>

          {/* Light Lamp CTA Button */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <button
              onClick={handleLight}
              className="px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/25 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <Flame className="w-5 h-5" />
              <span>Ignite Lamp of Respect (+1)</span>
            </button>

            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 mt-2">
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span><strong className="text-amber-300 font-bold text-base">{lampCount}</strong> Lamps of Gratitude lit by Aftab & Well-Wishers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
