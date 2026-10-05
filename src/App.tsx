/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GiftIntro } from './components/GiftIntro';
import { GoldenPetalsCanvas } from './components/GoldenPetalsCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveGiftSection } from './components/InteractiveGiftSection';
import { CinematicShowcase } from './components/CinematicShowcase';
import { MemorableMomentsGallery } from './components/MemorableMomentsGallery';
import { MotivationalThankYouSection } from './components/MotivationalThankYouSection';
import { AppreciationBox } from './components/AppreciationBox';
import { TeacherQualities } from './components/TeacherQualities';
import { WisdomScroll } from './components/WisdomScroll';
import { LampOfGratitude } from './components/LampOfGratitude';
import { Footer } from './components/Footer';
import { triggerGrandCelebration, triggerStarSparks } from './utils/confetti';
import { soundManager } from './utils/audio';

export default function App() {
  const [showGiftIntro, setShowGiftIntro] = useState(true);
  const [celebrationCount, setCelebrationCount] = useState(0);
  const [isScrollRevealed, setIsScrollRevealed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto trigger celebratory welcoming sparkle on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerStarSparks();
    }, 700);
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
    <div className="relative min-h-screen bg-[#040711] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      
      {/* 🌸 Gently Falling Golden Petals & Sparkles Background Animation */}
      <GoldenPetalsCanvas />

      {/* 🎁 Opening Cinematic VIP Gift Intro */}
      <GiftIntro
        isOpen={showGiftIntro}
        onOpenGift={() => setShowGiftIntro(false)}
      />

      {/* Radiant ambient background glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[90vw] max-w-[850px] h-[500px] bg-amber-600/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-32 w-[70vw] max-w-[650px] h-[650px] bg-emerald-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-20 -right-32 w-[70vw] max-w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[160px]" />
      </div>

      {/* Navigation Bar */}
      <Navbar
        onCelebrate={handleCelebrate}
        onOpenGiftIntro={() => setShowGiftIntro(true)}
      />

      {/* Main VIP Content */}
      <main className="flex-1 relative z-10">
        {/* 1. VIP Hero Section */}
        <HeroSection
          onCelebrate={handleCelebrate}
          onLightLamp={handleLightLamp}
          celebrationCount={celebrationCount}
        />

        {/* 2. 🎁 Interactive Royal Gift Unboxing Card */}
        <InteractiveGiftSection />

        {/* 3. 🎬 Cinematic 3D Animated Memory Carousel & Film Reel */}
        <CinematicShowcase />

        {/* 4. Motivational & Thank You Section (with Embedded Sir Photos) */}
        <MotivationalThankYouSection />

        {/* 5. Yaadgaar Moments Gallery with Full Lightbox */}
        <MemorableMomentsGallery />

        {/* 6. VIP Appreciation & Letter Box */}
        <AppreciationBox />

        {/* 7. Virtues of an Inspiring Educator */}
        <TeacherQualities />

        {/* 8. Revealed Golden Commemorative Scroll & Wisdom Treasury */}
        <WisdomScroll isRevealed={isScrollRevealed} />

        {/* 9. Virtual Lamp of Gratitude */}
        <LampOfGratitude />
      </main>

      {/* VIP Footer */}
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce bg-[#0f172a]/95 border border-amber-400 text-amber-100 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
