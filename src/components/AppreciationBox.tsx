import React, { useState } from 'react';
import { Scroll, Copy, Check, Volume2, Sparkles, Heart, Quote, Award } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const AppreciationBox: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const letterTitle = "A Heartfelt Letter of Gratitude & Admiration";
  const letterRecipient = "To Respected Sir Ghulam Ali Soomro";
  const letterSender = "From Your Devoted Student, Aftab";
  
  const letterBody = `Respected Sir Ghulam Ali Soomro,

Today, on this auspicious occasion of Teacher's Day, I take this moment with utmost humility, reverence, and gratitude to celebrate the profound impact you have had on my life and educational journey.

Teaching is not merely about transferring syllabus notes; it is the sacred art of awakening curiosity, sculpting character, and fostering confidence in the human spirit. In you, Respected Sir, we have found not just an exceptional educator, but an inspiring beacon of wisdom, integrity, and warmth.

Your unparalleled ability to elucidate complex concepts with effortless clarity, your endless patience when answering our questions, and your uplifting words during moments of difficulty have continuously illuminated our path. You taught us to pursue excellence not for vanity, but for genuine knowledge and service.

Every lesson you imparted, every gentle correction you offered, and every encouraging smile you gave has shaped the foundation upon which I stand today. Thank you for believing in us and for lighting the flame of ambition within our hearts.

May Almighty bless you with vibrant health, abundant happiness, endless peace, and a long, glorious life filled with honor.`;

  const copyTribute = () => {
    soundManager.playSparkle();
    const fullText = `${letterTitle}\n${letterRecipient}\n${letterSender}\n\n${letterBody}\n\nDedicated with deep respect by Aftab.`;
    navigator.clipboard.writeText(fullText);
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

    const speechText = `Happy Teacher's Day to Respected Sir Ghulam Ali Soomro, dedicated with love and respect by Aftab. ${letterBody}`;
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="tribute" className="relative py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Decorative Outer Border with Gilded Corner Accents */}
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#0b1120]/95 to-slate-950/95 border border-amber-500/30 p-6 sm:p-10 md:p-12 shadow-2xl box-glow-gold overflow-hidden">
        
        {/* Background watermark icon */}
        <div className="absolute top-10 right-10 text-amber-500/5 pointer-events-none">
          <Quote className="w-48 h-48 -rotate-12" />
        </div>

        {/* Top Header Zone with Sir's Portrait */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/20 pb-6 mb-8">
          <div className="flex items-center gap-3.5">
            {/* Sir Portrait Avatar */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-lg shrink-0 bg-slate-950">
              <img
                src="https://i.ibb.co/G3n0YFsY/IMG-20261005-WA0013.jpg"
                alt="Sir Ghulam Ali Soomro Smiling"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div>
              <p className="text-xs font-royal uppercase tracking-widest text-amber-400 font-semibold">VIP Tribute & Letter</p>
              <h2 className="text-lg sm:text-2xl font-bold font-serif-title text-slate-100">
                {letterTitle}
              </h2>
            </div>
          </div>

          {/* Action Buttons: Copy & Audio */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSpeak}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
                isSpeaking 
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' 
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-amber-300 hover:border-amber-500/40'
              }`}
            >
              <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-pulse text-emerald-400' : ''}`} />
              <span>{isSpeaking ? 'Pause Voice' : 'Listen'}</span>
            </button>

            <button
              onClick={copyTribute}
              className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Letter</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Salutation Box */}
        <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider block">Recipient</span>
            <span className="text-base sm:text-lg font-bold text-amber-200 font-serif-title">
              Sir Ghulam Ali Soomro
            </span>
          </div>
          <div className="sm:text-right">
            <span className="text-xs text-slate-400 uppercase tracking-wider block">Dedicated With Reverence By</span>
            <span className="text-sm font-semibold text-emerald-300 font-royal">
              Aftab
            </span>
          </div>
        </div>

        {/* Letter Body */}
        <div className="space-y-4 text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed pl-2 sm:pl-4 border-l-2 border-amber-400/40 font-light">
          <p>
            <strong className="text-amber-200 font-serif-title text-sm sm:text-lg font-bold">Respected Sir Ghulam Ali Soomro,</strong>
          </p>
          <p>
            Today, on this auspicious occasion of Teacher's Day, I take this moment with utmost humility, reverence, and gratitude to celebrate the profound impact you have had on my life and educational journey.
          </p>
          <p>
            Teaching is not merely about transferring syllabus notes; it is the sacred art of awakening curiosity, sculpting character, and fostering confidence in the human spirit. In you, Respected Sir, we have found not just an exceptional educator, but an inspiring beacon of wisdom, integrity, and warmth.
          </p>
          <blockquote className="p-4 my-3 rounded-2xl bg-[#070b14] border-l-4 border-amber-400 text-amber-100 italic text-xs sm:text-sm md:text-base">
            "Your unparalleled ability to elucidate complex concepts with effortless clarity, your endless patience when answering our questions, and your uplifting words during moments of difficulty have continuously illuminated our path."
          </blockquote>
          <p>
            Every lesson you imparted, every gentle correction you offered, and every encouraging smile you gave has shaped the foundation upon which I stand today. Thank you for believing in us and for lighting the flame of ambition within our hearts.
          </p>
          <p className="text-amber-200 font-medium">
            May Almighty bless you with vibrant health, abundant happiness, endless peace, and a long, glorious life filled with honor.
          </p>
        </div>

        {/* Signature & Seal */}
        <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Forever Indebted & Inspired</span>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs uppercase tracking-widest text-amber-400/80 font-royal font-medium">Your Grateful Student,</p>
            <p className="text-2xl font-bold font-serif-title text-amber-200 tracking-wide mt-1">
              Aftab
            </p>
            <p className="text-xs text-slate-400">Teacher's Day Tribute • October 2026</p>
          </div>
        </div>

      </div>
    </section>
  );
};
