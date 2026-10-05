import React, { useState } from 'react';
import { Sparkles, Volume2, VolumeX, Code, PartyPopper } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onCelebrate: () => void;
  onOpenCodeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCelebrate, onOpenCodeModal }) => {
  const [muted, setMuted] = useState(!soundManager.soundEnabled);

  const toggleSound = () => {
    soundManager.soundEnabled = !soundManager.soundEnabled;
    setMuted(!soundManager.soundEnabled);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-amber-500/15 bg-[#050811]/85 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors">
          <span className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 font-royal font-bold text-sm shadow-sm shadow-amber-500/10">
            ✦
          </span>
          <span className="font-royal font-bold tracking-wider text-xs sm:text-sm text-amber-200">
            TEACHER'S DAY 2026
          </span>
        </a>

        {/* Zone 2: Clean navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
          <a href="#tribute" className="hover:text-amber-300 transition-colors">Letter of Gratitude</a>
          <a href="#virtues" className="hover:text-amber-300 transition-colors">Teacher's Virtues</a>
          <a href="#wisdom" className="hover:text-amber-300 transition-colors">Wisdom Treasury</a>
          <a href="#lamp" className="hover:text-amber-300 transition-colors">Lamp of Honor</a>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={muted ? "Enable Celebratory Chimes" : "Mute Sound"}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Single-file Code Export Modal Button */}
          <button
            onClick={onOpenCodeModal}
            title="View & Copy Standalone Single-File HTML"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-slate-800 text-xs font-medium transition-colors"
          >
            <Code className="w-3.5 h-3.5 text-amber-400" />
            <span>Single-File Code</span>
          </button>

          {/* Celebrate Button */}
          <button
            onClick={onCelebrate}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 hover:from-amber-400 hover:to-emerald-300 text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-amber-500/20 active:scale-95 transition-all"
          >
            <PartyPopper className="w-4 h-4" />
            <span className="whitespace-nowrap">Celebrate</span>
          </button>
        </div>
      </div>
    </header>
  );
};
