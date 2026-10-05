import React, { useState } from 'react';
import { Quote, Sparkles, RefreshCw, Star, Heart, Award } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface WisdomScrollProps {
  isRevealed: boolean;
}

export const WisdomScroll: React.FC<WisdomScrollProps> = ({ isRevealed }) => {
  const teacherQuotes = [
    {
      quote: "A teacher affects eternity; he can never tell where his influence stops.",
      author: "Henry Adams",
      dedication: "Dedicated to the limitless influence of Sir Ghulam Ali Soomro"
    },
    {
      quote: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
      author: "William Arthur Ward",
      dedication: "For inspiring every step of our growth — Honored by Aftab"
    },
    {
      quote: "Teaching is the greatest act of optimism. It builds the future one mind at a time.",
      author: "Colleen Wilcox",
      dedication: "Honoring Sir Ghulam Ali Soomro's tireless optimism and guidance"
    },
    {
      quote: "One child, one teacher, one book, one pen can change the world.",
      author: "Malala Yousafzai",
      dedication: "With reverence to Sir Ghulam Ali Soomro from Aftab"
    },
    {
      quote: "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
      author: "Albert Einstein",
      dedication: "To a master mentor who turns curiosity into lifelong joy"
    }
  ];

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  const nextQuote = () => {
    soundManager.playSparkle();
    setActiveQuoteIndex((prev) => (prev + 1) % teacherQuotes.length);
  };

  const currentQuote = teacherQuotes[activeQuoteIndex];

  return (
    <section id="wisdom" className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Revealed Special Commemorative Golden Scroll */}
      {isRevealed && (
        <div className="mb-12 animate-fadeIn rounded-3xl bg-gradient-to-tr from-amber-950/40 via-slate-900/90 to-emerald-950/40 border-2 border-amber-400/60 p-6 sm:p-10 shadow-2xl box-glow-gold relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-300" />
              <span className="font-royal text-amber-300 font-bold text-xs sm:text-sm tracking-widest uppercase">
                ✦ SPECIAL COMMEMORATIVE TRIBUTE ✦
              </span>
            </div>
            <span className="text-xs text-emerald-400 font-medium">Revealed for Celebration</span>
          </div>

          <p className="text-xs text-amber-400/80 uppercase font-royal tracking-wider mb-2">A Timeless Dedication</p>
          <h3 className="font-serif-title text-xl sm:text-3xl font-bold text-amber-100 leading-snug mb-4">
            "To Sir Ghulam Ali Soomro — A mentor whose words turn doubt into certainty, and whose presence elevates every learner."
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
            Thank you for being the steadfast compass in our academic journey. Your dedication is woven into every achievement we celebrate, and your noble teachings will forever remain our guiding light.
          </p>

          <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-amber-300">
              <Heart className="w-4 h-4 fill-amber-400" />
              <span>With eternal gratitude</span>
            </div>
            <span className="font-bold text-amber-200 font-royal tracking-wider">— Dedicated by Aftab</span>
          </div>
        </div>
      )}

      {/* Wisdom Treasury Box */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <Quote className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif-title text-xl font-bold text-slate-100">
              Wisdom Treasury on Great Teachers
            </h3>
          </div>

          <button
            onClick={nextQuote}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 text-xs font-medium transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Next Quote</span>
          </button>
        </div>

        {/* Active Quote Card */}
        <div className="p-6 rounded-xl bg-[#060913] border border-amber-500/15 relative">
          <p className="text-base sm:text-lg font-serif-title text-amber-100 italic leading-relaxed mb-4">
            "{currentQuote.quote}"
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-800 text-xs">
            <span className="font-semibold text-slate-300">— {currentQuote.author}</span>
            <span className="text-amber-400/90 font-medium">{currentQuote.dedication}</span>
          </div>
        </div>

        {/* Quote pagination dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {teacherQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                soundManager.playSparkle();
                setActiveQuoteIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === activeQuoteIndex ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
