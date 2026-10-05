/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AppreciationBox } from './components/AppreciationBox';
import { TeacherQualities } from './components/TeacherQualities';
import { WisdomScroll } from './components/WisdomScroll';
import { LampOfGratitude } from './components/LampOfGratitude';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { Footer } from './components/Footer';
import { triggerGrandCelebration, triggerStarSparks } from './utils/confetti';
import { soundManager } from './utils/audio';

export default function App() {
  const [celebrationCount, setCelebrationCount] = useState(0);
  const [isScrollRevealed, setIsScrollRevealed] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto trigger celebratory welcoming sparkle on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerStarSparks();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleCelebrate = () => {
    triggerGrandCelebration();
    setCelebrationCount((prev) => prev + 1);
    setIsScrollRevealed(true);

    setToastMessage('🎉 Grand celebration launched for Sir Ghulam Ali Soomro!');
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);

    // Smooth scroll to scroll section if not already in view
    const wisdomElement = document.getElementById('wisdom');
    if (wisdomElement) {
      setTimeout(() => {
        wisdomElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 600);
    }
  };

  const handleLightLamp = () => {
    soundManager.playWarmResonance();
    triggerStarSparks();
    setToastMessage('🪔 Golden Lamp of Gratitude illuminated for Sir Ghulam Ali Soomro!');
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);

    const lampElement = document.getElementById('lamp');
    if (lampElement) {
      lampElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Ambient background glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-20 -right-48 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px]" />
      </div>

      {/* Navigation Bar */}
      <Navbar
        onCelebrate={handleCelebrate}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onCelebrate={handleCelebrate}
          onLightLamp={handleLightLamp}
          celebrationCount={celebrationCount}
        />

        {/* 2. Appreciation & Message Box (Letter from Aftab to Sir Ghulam Ali Soomro) */}
        <AppreciationBox />

        {/* 3. Qualities of an Ideal Teacher (Grid) */}
        <TeacherQualities />

        {/* 4. Wisdom Scroll & Timeless Quotes */}
        <WisdomScroll isRevealed={isScrollRevealed} />

        {/* 5. Virtual Lamp / Diya of Gratitude */}
        <LampOfGratitude />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce bg-[#0f172a]/95 border border-amber-400 text-amber-100 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-md flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Standalone Single-File HTML Export Modal */}
      <StandaloneExportModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />

    </div>
  );
}
