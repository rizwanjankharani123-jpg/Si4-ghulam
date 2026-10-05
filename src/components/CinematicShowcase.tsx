import React, { useState, useEffect, useRef } from 'react';
import { SIR_IMAGES } from '../data/images';
import { Sparkles, Play, Pause, ChevronLeft, ChevronRight, Crown, Heart, Film, Award, Maximize2 } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const CinematicShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const DURATION = 4500; // ms per slide

  const handleNext = () => {
    soundManager.playSparkle();
    setActiveIndex((prev) => (prev + 1) % SIR_IMAGES.length);
    setProgress(0);
  };

  const handlePrev = () => {
    soundManager.playSparkle();
    setActiveIndex((prev) => (prev - 1 + SIR_IMAGES.length) % SIR_IMAGES.length);
    setProgress(0);
  };

  const togglePlay = () => {
    soundManager.playSparkle();
    setIsPlaying(!isPlaying);
  };

  // Auto-play timer & progress animation
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    progressIntervalRef.current = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          return 0;
        }
        return old + (stepMs / DURATION) * 100;
      });
    }, stepMs);

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SIR_IMAGES.length);
      setProgress(0);
    }, DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, activeIndex]);

  const activePhoto = SIR_IMAGES[activeIndex];

  return (
    <section id="cinematic-showcase" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Royal Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest font-royal mb-3 shadow-lg shadow-amber-500/10 animate-pulse">
          <Film className="w-3.5 h-3.5 text-amber-400" />
          <span>Cinematic Royal Memory Reel</span>
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-title text-slate-100 leading-tight">
          Animated Tribute Spotlight
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3 font-light">
          An interactive, animated showcase of <strong className="text-amber-300 font-medium">Sir Ghulam Ali Soomro</strong> in majestic motion.
        </p>
      </div>

      {/* 3D Perspective Stage Container */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#080e1c] via-[#050812] to-[#04060d] border border-amber-500/30 p-4 sm:p-8 md:p-12 shadow-2xl box-glow-gold overflow-hidden">
        
        {/* Ambient Halo Behind Active Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[600px] h-[350px] bg-gradient-to-r from-amber-500/20 via-emerald-500/15 to-amber-400/20 rounded-full blur-[130px] pointer-events-none" />

        {/* 3D Card Stage */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Main 3D Showcase Carousel */}
          <div className="relative w-full max-w-3xl h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center">
            
            {SIR_IMAGES.map((img, idx) => {
              // Calculate relative offset (-2, -1, 0, 1, 2)
              const count = SIR_IMAGES.length;
              let offset = idx - activeIndex;
              if (offset > count / 2) offset -= count;
              if (offset < -count / 2) offset += count;

              const isCenter = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isFarPrev = offset <= -2;
              const isFarNext = offset >= 2;

              let transformClass = 'opacity-0 scale-75 pointer-events-none translate-x-0';
              let zIndex = 0;

              if (isCenter) {
                transformClass = 'opacity-100 scale-100 z-30 translate-x-0 shadow-2xl shadow-amber-500/25';
                zIndex = 30;
              } else if (isPrev) {
                transformClass = 'opacity-50 scale-85 z-10 -translate-x-[55%] sm:-translate-x-[65%] -rotate-y-12 cursor-pointer hover:opacity-75';
                zIndex = 10;
              } else if (isNext) {
                transformClass = 'opacity-50 scale-85 z-10 translate-x-[55%] sm:translate-x-[65%] rotate-y-12 cursor-pointer hover:opacity-75';
                zIndex = 10;
              } else if (isFarPrev) {
                transformClass = 'opacity-0 scale-70 -translate-x-[110%] pointer-events-none';
                zIndex = 0;
              } else if (isFarNext) {
                transformClass = 'opacity-0 scale-70 translate-x-[110%] pointer-events-none';
                zIndex = 0;
              }

              return (
                <div
                  key={img.id}
                  onClick={() => {
                    if (!isCenter) {
                      soundManager.playSparkle();
                      setActiveIndex(idx);
                      setProgress(0);
                    }
                  }}
                  className={`absolute top-0 bottom-0 w-[80%] sm:w-[58%] md:w-[52%] max-w-[380px] transition-all duration-700 ease-out flex flex-col justify-between rounded-3xl overflow-hidden border-2 bg-slate-950 p-2 sm:p-3 ${
                    isCenter ? 'border-amber-400' : 'border-amber-500/30'
                  } ${transformClass}`}
                  style={{ zIndex, perspective: 1000 }}
                >
                  {/* Photo Container with Top-Focused Cropping */}
                  <div className="relative w-full h-[78%] rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay for typography readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                    {/* Top Royal Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/75 backdrop-blur-md border border-amber-400/40 text-[10px] font-bold text-amber-300 font-royal shadow">
                      ✦ {img.tag} ✦
                    </div>

                    {/* Photo Title Overlay */}
                    <div className="absolute bottom-3 inset-x-3 text-left">
                      <p className="text-xs sm:text-sm font-bold font-serif-title text-amber-200 line-clamp-1">
                        {img.title}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="h-[22%] px-2 flex flex-col justify-center text-left">
                    <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 font-light leading-tight">
                      {img.caption}
                    </p>
                    <div className="flex items-center justify-between mt-1 text-[10px] text-amber-400/80 font-royal">
                      <span>Sir Ghulam Ali Soomro</span>
                      <span className="text-emerald-400 font-sans">Moment {idx + 1} of {SIR_IMAGES.length}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Left Prev Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-4 z-40 p-3 rounded-2xl bg-black/70 hover:bg-black text-amber-300 border border-amber-400/40 hover:border-amber-300 shadow-xl transition-all active:scale-90 cursor-pointer"
              title="Previous Moment"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Next Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-4 z-40 p-3 rounded-2xl bg-black/70 hover:bg-black text-amber-300 border border-amber-400/40 hover:border-amber-300 shadow-xl transition-all active:scale-90 cursor-pointer"
              title="Next Moment"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Interactive Player Controls & Timeline */}
          <div className="w-full max-w-xl mt-6 space-y-4">
            
            {/* Progress Bar */}
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-75 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Strip */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300 px-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 hover:text-amber-200 hover:border-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer shadow-md font-medium"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{isPlaying ? 'Pause Motion' : 'Auto Play'}</span>
                </button>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {isPlaying ? 'Smooth Animated Motion Active' : 'Paused'}
                </span>
              </div>

              {/* Thumbnail Selector Dots */}
              <div className="flex items-center gap-2">
                {SIR_IMAGES.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      soundManager.playSparkle();
                      setActiveIndex(idx);
                      setProgress(0);
                    }}
                    className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      idx === activeIndex
                        ? 'border-amber-400 scale-110 shadow-md shadow-amber-500/30'
                        : 'border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                    title={img.title}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Animated Infinite Golden Filmstrip Ribbon */}
      <div className="mt-8 rounded-2xl bg-slate-900/60 border border-amber-500/20 p-4 overflow-hidden relative backdrop-blur-md">
        <div className="flex items-center gap-3 text-xs font-royal text-amber-400 mb-3 px-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="tracking-wider uppercase font-semibold">Continuous Memories Reel</span>
        </div>

        {/* Horizontal scroll strip with responsive cards */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
          {SIR_IMAGES.concat(SIR_IMAGES).map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              onClick={() => {
                soundManager.playSparkle();
                setActiveIndex(idx % SIR_IMAGES.length);
                setProgress(0);
                const showcaseElement = document.getElementById('cinematic-showcase');
                if (showcaseElement) {
                  showcaseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="flex-shrink-0 w-32 sm:w-40 rounded-2xl overflow-hidden border border-amber-500/25 hover:border-amber-400 bg-slate-950 p-1.5 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md"
            >
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-1.5 inset-x-1.5 text-[10px] font-bold text-amber-200 line-clamp-1">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
