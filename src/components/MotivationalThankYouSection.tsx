import React, { useState } from 'react';
import { Heart, Sparkles, Award, Lightbulb, Compass, Check, Copy, Volume2, BookOpen } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const MotivationalThankYouSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const fullSpeechText = `To our Respected Teacher, Sir Ghulam Ali Soomro. Mentorship that inspires excellence. A great teacher does not just teach lessons from a book; they awaken the dormant brilliance within every student. Respected Sir Ghulam Ali Soomro, your passionate teaching and words of encouragement have challenged us to aim higher, work harder, and believe in our limitless potential. Sincere Thank You Note: Thank you, Sir Ghulam Ali Soomro, for sharing your invaluable knowledge with such boundless generosity. You have shaped our futures, corrected our mistakes with gentle patience, and shown us the right moral and intellectual path. We remain forever grateful. Dedicated with love and utmost respect by Aftab.`;

  const copySection = () => {
    soundManager.playSparkle();
    const text = `🌟 DEDICATED TO SIR GHULAM ALI SOOMRO — FROM AFTAB\n\n` +
      `🔥 MOTIVATIONAL TRIBUTE: MENTORSHIP THAT INSPIRES EXCELLENCE\n` +
      `"A true educator does not just teach lessons from a book; they awaken the dormant brilliance within every student. Respected Sir Ghulam Ali Soomro, your guidance transforms doubt into determination and inspires us to pursue excellence in all endeavors."\n\n` +
      `🙏 SINCERE THANK YOU NOTE:\n` +
      `"Respected Sir Ghulam Ali Soomro, thank you from the bottom of our hearts for sharing your invaluable knowledge, shaping our futures, and showing us the righteous path. Your wisdom will forever illuminate our journey."\n\n` +
      `— Dedicated with highest respect by Aftab ❤️`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSpeak = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(fullSpeechText);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="motivational-thankyou" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest font-royal mb-2">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>Honoring True Mentorship</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif-title text-slate-100 leading-tight">
          Inspiration & Heartfelt Gratitude
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2 font-light">
          A dedicated tribute celebrating how <strong className="text-amber-300 font-medium">Sir Ghulam Ali Soomro</strong> transforms lives and inspires lifelong excellence.
        </p>

        {/* Quick Action Audio / Copy */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4">
          <button
            onClick={handleSpeak}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all cursor-pointer ${
              isSpeaking
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:text-amber-300 hover:border-amber-500/40'
            }`}
          >
            <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-pulse text-emerald-400' : ''}`} />
            <span>{isSpeaking ? 'Pause Audio' : 'Listen with Audio'}</span>
          </button>

          <button
            onClick={copySection}
            className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Message</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Dual Responsive Card Grid with Direct URL Fitted Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        
        {/* 1. Powerful Motivational Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#0a1122]/95 to-slate-950/95 border border-amber-500/30 p-6 sm:p-8 md:p-10 shadow-xl box-glow-gold flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Top Badge & Sir Teaching Photo Thumbnail */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="font-royal text-xs text-amber-400 uppercase tracking-wider font-semibold block">
                    Part I · Motivation
                  </span>
                  <span className="text-[11px] text-slate-400">Academic Mastery</span>
                </div>
              </div>

              {/* Photo of Sir Writing/Teaching - Fitted & Cropped Perfectly */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-lg bg-slate-950 shrink-0">
                <img
                  src="https://i.ibb.co/Q5nTWKW/IMG-20261005-WA0014.jpg"
                  alt="Sir Ghulam Ali Soomro Writing & Teaching"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-title text-amber-200 mb-3 leading-snug">
              Mentorship That Inspires Excellence
            </h3>

            <div className="space-y-3 sm:space-y-4 text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-light">
              <p>
                A great teacher does not merely deliver lectures; they awaken the dormant brilliance within every student's mind.
              </p>
              <blockquote className="p-3.5 sm:p-4 rounded-xl bg-amber-500/10 border-l-3 sm:border-l-4 border-amber-400 text-amber-100 font-normal italic text-xs sm:text-sm md:text-base">
                "Respected Sir Ghulam Ali Soomro, your encouragement has taught us that every obstacle is an opportunity to grow, and every challenge can be conquered with discipline and intellect."
              </blockquote>
              <p>
                Your belief in our potential has been the catalyst for our ambition. You showed us that mediocrity is a choice, but excellence is a habit cultivated through persistence, curiosity, and moral integrity.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fueling Ambition</span>
            </span>
            <span className="font-medium text-slate-300">Honored by Aftab</span>
          </div>
        </div>

        {/* 2. Sincere "Thank You" Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#091a18]/95 to-slate-950/95 border border-emerald-500/30 p-6 sm:p-8 md:p-10 shadow-xl box-glow-emerald flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Top Badge & Sir Grand Stage Photo Thumbnail */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                  <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="font-royal text-xs text-emerald-400 uppercase tracking-wider font-semibold block">
                    Part II · Gratitude
                  </span>
                  <span className="text-[11px] text-slate-400">Shaping Futures</span>
                </div>
              </div>

              {/* Photo of Sir Celebrating / Stage - Fitted & Cropped */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-lg bg-slate-950 shrink-0">
                <img
                  src="https://i.ibb.co/K3gys78/IMG-20261005-WA0011.jpg"
                  alt="Sir Ghulam Ali Soomro on Stage"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-title text-emerald-200 mb-3 leading-snug">
              A Sincere & Lifelong "Thank You"
            </h3>

            <div className="space-y-3 sm:space-y-4 text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong className="text-emerald-300 font-medium">Thank You, Respected Sir Ghulam Ali Soomro,</strong> for your boundless generosity in sharing knowledge, time, and life wisdom:
              </p>
              
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><strong>For Shaping Our Futures:</strong> Giving us the intellectual tools and confidence to step boldly into the world.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><strong>For Showing the Right Path:</strong> Guiding us with ethical values, humility, and unwavering moral clarity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span><strong>For Patient Mentorship:</strong> Never tiring of our questions, and lifting us up during every setback.</span>
                </li>
              </ul>

              <p className="text-slate-300 pt-1">
                No words can fully repay the debt of knowledge and care you have bestowed upon us.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-300">
              <Heart className="w-3.5 h-3.5 fill-emerald-400" />
              <span>Deepest Respect</span>
            </span>
            <span className="font-bold text-emerald-200 font-royal">With Reverence, Aftab</span>
          </div>
        </div>

      </div>

      {/* Prominent Tribute Banner Bottom Strip */}
      <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-[#070d18] border border-amber-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-amber-200 font-serif-title">
              "Honoring the master educator who builds tomorrow today."
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400">
              To Sir Ghulam Ali Soomro • Dedicated by Aftab
            </p>
          </div>
        </div>

        <button
          onClick={copySection}
          className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shrink-0 cursor-pointer shadow-md shadow-amber-500/20"
        >
          {copied ? '✓ Copied Dedicated Tribute' : '📋 Copy Full Tribute'}
        </button>
      </div>

    </section>
  );
};
