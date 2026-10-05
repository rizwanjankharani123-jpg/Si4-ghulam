import React, { useState } from 'react';
import { SIR_IMAGES, SirImage } from '../data/images';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Heart, Award, Eye } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const MemorableMomentsGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<SirImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Moments' },
    { id: 'mastery', label: 'Academic Mastery' },
    { id: 'leadership', label: 'Visionary Leader' },
    { id: 'joy', label: 'Joy & Reading' },
  ];

  const filteredImages = SIR_IMAGES.filter((img) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mastery') return img.id === 'teaching-scholar';
    if (activeFilter === 'leadership') return img.id === 'grand-celebration' || img.id === 'garden-serenity';
    if (activeFilter === 'joy') return img.id === 'joyful-mentor' || img.id === 'book-fair';
    return true;
  });

  const openLightbox = (img: SirImage) => {
    soundManager.playSparkle();
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = SIR_IMAGES.findIndex((item) => item.id === selectedImage.id);
    const nextIdx = (currentIndex + 1) % SIR_IMAGES.length;
    setSelectedImage(SIR_IMAGES[nextIdx]);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = SIR_IMAGES.findIndex((item) => item.id === selectedImage.id);
    const prevIdx = (currentIndex - 1 + SIR_IMAGES.length) % SIR_IMAGES.length;
    setSelectedImage(SIR_IMAGES[prevIdx]);
  };

  return (
    <section id="gallery" className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Glow Soft Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[900px] h-[400px] bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest font-royal mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Yaadgaar Moments & Memories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title text-slate-100 leading-tight">
          Glimpses of Respected Sir Ghulam Ali Soomro
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3 font-light leading-relaxed">
          Celebrating the inspiring presence, joyful spirit, and lifelong dedication of our respected teacher through memorable moments.
        </p>

        {/* Filter Controls (Segmented Bar) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl max-w-fit mx-auto shadow-lg">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => {
                  soundManager.playSparkle();
                  setActiveFilter(filter.id);
                }}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive Grid with Crystal-Clear Borders & Smooth Hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => openLightbox(img)}
            className="group relative rounded-3xl bg-slate-900/90 border border-amber-500/25 hover:border-amber-400/70 p-2.5 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between transform-gpu"
          >
            {/* Image Frame with Aspect Ratio - Smooth Masking to Prevent Any Edge Glitches */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center isolate">
              <img
                src={img.src}
                alt={`Sir Ghulam Ali Soomro - ${img.title}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 will-change-transform"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim for Contrast and Smoothness */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity pointer-events-none" />

              {/* Tag in Top Right */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-amber-400/30 text-[10px] font-semibold text-amber-300 font-royal shadow">
                {img.tag}
              </div>

              {/* Hover View Affordance */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                <span className="p-3 rounded-full bg-amber-500 text-slate-950 shadow-lg transform scale-90 group-hover:scale-100 transition-transform font-bold">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>

              {/* Caption Overlay at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 text-left pointer-events-none">
                <p className="text-xs sm:text-sm font-bold font-serif-title text-amber-200 line-clamp-1">
                  {img.title}
                </p>
                <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5 font-light leading-snug">
                  {img.caption}
                </p>
              </div>
            </div>

            {/* Bottom Mini Strip */}
            <div className="pt-2.5 px-2 pb-1 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-royal text-amber-400/90 font-medium">Sir Ghulam Ali Soomro</span>
              <span className="text-emerald-400 flex items-center gap-1 font-medium">
                <Eye className="w-3.5 h-3.5" /> View Photo
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#080d1a] border border-amber-400/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/75 hover:bg-black text-slate-200 border border-amber-500/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/75 hover:bg-black text-amber-300 border border-amber-500/40 transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right/Next Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/75 hover:bg-black text-amber-300 border border-amber-500/40 transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Viewer - Fitted Cleanly */}
            <div className="w-full md:w-3/5 bg-black flex items-center justify-center p-4 max-h-[55vh] md:max-h-[85vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Image Details Panel */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-amber-500/20 bg-gradient-to-b from-[#0a1020] to-[#050811]">
              <div>
                <div className="flex items-center gap-2 text-xs font-royal text-amber-400 uppercase tracking-widest font-semibold mb-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{selectedImage.tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-amber-200 mb-3 leading-snug">
                  {selectedImage.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {selectedImage.caption}
                </p>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-100">
                  <p className="italic">
                    "A teacher affects eternity; he can never tell where his influence stops."
                  </p>
                  <p className="mt-1.5 font-semibold text-right text-amber-300 font-royal">
                    — In Honor of Sir Ghulam Ali Soomro
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                  <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
                  <span>Honored by Aftab</span>
                </span>
                <span className="text-[11px]">Teacher's Day 2026</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
