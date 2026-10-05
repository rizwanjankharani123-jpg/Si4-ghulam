import React, { useState } from 'react';
import { Volume2, VolumeX, PartyPopper, Film, Gift, Image as ImageIcon } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onCelebrate: () => void;
  onOpenGiftIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCelebrate, onOpenGiftIntro }) => {
  const [muted, setMuted] = useState(!soundManager.soundEnabled);

  const toggleSound = () => {
    soundManager.soundEnabled = !soundManager.soundEnabled;
    setMuted(!soundManager.soundEnabled);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#040711]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* VIP Royal Title */}
        <a href="#" className="flex items-center gap-2 sm:gap-3">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500/30 to-amber-300/10 border border-amber-400/40 flex items-center justify-center text-amber-300 font-royal font-bold text-sm shadow-sm shadow-amber-500/20">
            ✦
          </span>
          <div>
            <span className="font-royal font-bold tracking-widest text-xs sm:text-sm text-amber-200 block">
              VIP TRIBUTE 2026
            </span>
            <span className="text-[10px] text-emerald-400 font-medium tracking-wider uppercase hidden sm:block">
              Sir Ghulam Ali Soomro
            </span>
          </div>
        </a>

        {/* Clean Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
          <a href="#gift-box-section" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold">
            <Gift className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>VIP Gift Box</span>
          </a>
          <a href="#cinematic-showcase" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-emerald-400" />
            <span>Animated Showcase</span>
          </a>
          <a href="#gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>Moments Gallery</span>
          </a>
          <a href="#motivational-thankyou" className="hover:text-amber-300 transition-colors">Inspiration & Thanks</a>
          <a href="#tribute" className="hover:text-amber-300 transition-colors">VIP Letter</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Re-Open Gift Intro Modal Button */}
          <button
            onClick={onOpenGiftIntro}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 hover:bg-amber-500/25 text-xs font-semibold transition-all cursor-pointer shadow-sm"
            title="Replay Cinematic Gift Intro"
          >
            <Gift className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Reopen Gift</span>
            <span className="sm:hidden">Gift</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={muted ? "Enable Celebratory Chimes" : "Mute Sound"}
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Grand Celebrate Button */}
          <button
            onClick={onCelebrate}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/25 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <PartyPopper className="w-4 h-4" />
            <span>Celebrate Sir</span>
          </button>
        </div>
      </div>
    </header>
  );
};
