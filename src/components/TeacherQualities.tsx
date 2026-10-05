import React from 'react';
import { Lightbulb, Compass, HeartHandshake, ShieldCheck, Flame, Crown } from 'lucide-react';

interface Quality {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accentColor: 'gold' | 'emerald';
}

export const TeacherQualities: React.FC = () => {
  const qualities: Quality[] = [
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-300" />,
      title: "Illuminating Wisdom",
      subtitle: "Clarity over complexity",
      description: "Sir Ghulam Ali Soomro possesses the rare gift of unraveling the most difficult theories into intuitive, unforgettable insights.",
      accentColor: 'gold',
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-300" />,
      title: "Visionary Mentorship",
      subtitle: "Unlocking true potential",
      description: "Looking beyond grades to understand each student's inner strengths, instilling self-confidence to aim for high horizons.",
      accentColor: 'emerald',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-300" />,
      title: "Unwavering Patience",
      subtitle: "Encouragement without fatigue",
      description: "Always approachable, addressing every question with empathy, warmth, and never-ending dedication.",
      accentColor: 'gold',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-300" />,
      title: "Moral Integrity & Ethics",
      subtitle: "Building strong character",
      description: "Leading by example with dignity, humility, and fairness, instilling values that guide us throughout life.",
      accentColor: 'emerald',
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-300" />,
      title: "Spark of Curiosity",
      subtitle: "Igniting lifelong passion",
      description: "An educator who transforms ordinary classrooms into hubs of discovery, inspiring a relentless desire to explore and learn.",
      accentColor: 'gold',
    },
    {
      icon: <Crown className="w-6 h-6 text-emerald-300" />,
      title: "Everlasting Legacy",
      subtitle: "Impact across generations",
      description: "Leaving footprints of intellect, honor, and compassion in every student who has had the privilege to learn under him.",
      accentColor: 'emerald',
    },
  ];

  return (
    <section id="virtues" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-emerald-400 font-royal text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
          Hallmark of an Exceptional Educator
        </p>
        <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mt-2">
          Virtues Embodied by Sir Ghulam Ali Soomro
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Celebrating the timeless hallmarks that define true teaching mastery and noble mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualities.map((item, index) => {
          const isGold = item.accentColor === 'gold';
          return (
            <div
              key={index}
              className={`relative rounded-2xl bg-slate-900/70 border p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                isGold 
                  ? 'border-amber-500/20 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10' 
                  : 'border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/10'
              }`}
            >
              {/* Top Icon & Number */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                  isGold 
                    ? 'bg-amber-500/15 border-amber-400/30' 
                    : 'bg-emerald-500/15 border-emerald-400/30'
                }`}>
                  {item.icon}
                </div>
                <span className="font-royal text-xs text-slate-500 tracking-wider">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold font-serif-title text-slate-100 mb-1">
                {item.title}
              </h3>
              <p className={`text-xs font-medium mb-3 ${isGold ? 'text-amber-400' : 'text-emerald-400'}`}>
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
