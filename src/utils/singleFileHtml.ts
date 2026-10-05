export function getSingleFileHtml(): string {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Happy Teacher's Day | Sir Ghulam Ali Soomro - Dedicated by Aftab</title>
  <meta name="description" content="A grand and emotional Teacher's Day celebration tribute dedicated to Sir Ghulam Ali Soomro by Aftab.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Canvas Confetti CDN -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,600;1,700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            royal: ['"Cinzel"', 'serif'],
            sans: ['"Poppins"', 'sans-serif'],
          },
          colors: {
            gold: {
              300: '#fef08a',
              400: '#facc15',
              500: '#eab308',
              600: '#ca8a04',
            },
            emerald: {
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #050811;
      color: #f8fafc;
      overflow-x: hidden;
    }
    
    .font-serif-title {
      font-family: 'Playfair Display', serif;
    }
    
    .font-royal {
      font-family: 'Cinzel', serif;
    }

    @keyframes goldShimmer {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }

    @keyframes pulseHeart {
      0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(239,68,68,0.5)); }
      50% { transform: scale(1.18); filter: drop-shadow(0 0 14px rgba(239,68,68,0.9)); }
    }

    @keyframes glowHalo {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.08); }
    }

    .shimmer-text {
      background: linear-gradient(90deg, #d4af37, #fef08a, #f59e0b, #10b981, #f59e0b, #fef08a, #d4af37);
      background-size: 300% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: goldShimmer 5s ease infinite;
    }

    .animate-float {
      animation: floatSlow 5s ease-in-out infinite;
    }

    .pulse-heart {
      animation: pulseHeart 1.6s ease-in-out infinite;
      display: inline-block;
    }

    .glow-gold {
      text-shadow: 0 0 25px rgba(245, 158, 11, 0.5), 0 0 50px rgba(245, 158, 11, 0.25);
    }

    .card-glass {
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(245, 158, 11, 0.15);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .card-glass:hover {
      border-color: rgba(245, 158, 11, 0.4);
      transform: translateY(-4px);
      box-shadow: 0 12px 30px -10px rgba(245, 158, 11, 0.2);
    }
  </style>
</head>
<body class="min-h-screen relative selection:bg-amber-500/30 selection:text-amber-200">

  <!-- Background Ambient Lights -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-600/10 rounded-full blur-[140px]"></div>
    <div class="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px]"></div>
    <div class="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]"></div>
  </div>

  <!-- Header -->
  <header class="relative z-20 border-b border-amber-500/15 bg-[#050811]/80 backdrop-blur-md">
    <div class="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-royal font-bold text-sm">
          ✦
        </span>
        <span class="font-royal font-bold tracking-wider text-amber-200 text-sm md:text-base">TEACHER'S DAY 2026</span>
      </div>
      
      <div class="flex items-center gap-3">
        <button onclick="launchCelebration()" class="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-medium text-xs md:text-sm rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all font-semibold cursor-pointer">
          🎆 Celebrate Now
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-24 text-center">
    
    <!-- Floating Emblem -->
    <div class="inline-flex items-center justify-center mb-6 animate-float">
      <div class="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-emerald-500/20 to-amber-400/20 border border-amber-400/30 flex items-center justify-center shadow-xl shadow-amber-500/10">
        <span class="text-3xl">✨</span>
      </div>
    </div>

    <!-- Salutation -->
    <p class="text-amber-400/90 font-royal tracking-widest text-xs md:text-sm uppercase font-semibold mb-3">
      Happy Teacher's Day • Honoring True Greatness
    </p>

    <!-- Main Recipient Title -->
    <h1 class="font-serif-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
      Honorable Respected Sir<br>
      <span class="shimmer-text glow-gold block mt-2">Ghulam Ali Soomro</span>
    </h1>

    <!-- Sender Dedication Subtext -->
    <div class="max-w-2xl mx-auto mb-10">
      <p class="text-slate-300 text-base md:text-lg leading-relaxed">
        With profound respect, everlasting gratitude, and deepest admiration for shaping minds, illuminating pathways, and inspiring the journey of knowledge.
      </p>
      <div class="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs md:text-sm font-medium">
        <span>Dedicated with utmost reverence by</span>
        <strong class="text-amber-200 font-semibold tracking-wide">Aftab</strong>
        <span>✨</span>
      </div>
    </div>

    <!-- Interactive Celebrate Button -->
    <div class="flex flex-wrap items-center justify-center gap-4 mb-20">
      <button onclick="launchCelebration()" class="px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 text-slate-950 font-bold text-base md:text-lg rounded-xl shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer flex items-center gap-3">
        <span>🎉 Click to Celebrate!</span>
      </button>
      <button onclick="lightGratitudeLamp()" class="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-amber-200 border border-amber-500/30 font-medium text-base rounded-xl transition-all hover:border-amber-400 cursor-pointer flex items-center gap-2">
        <span>🪔 Light a Lamp of Gratitude</span>
      </button>
    </div>

    <!-- Hidden Golden Scroll (Revealed upon Celebration) -->
    <div id="goldenScroll" class="hidden transition-all duration-700 max-w-3xl mx-auto mb-20 text-left card-glass p-8 md:p-10 rounded-2xl border-amber-400/40 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
      <div class="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
        <span class="font-royal text-amber-400 font-bold text-sm">✦ SPECIAL COMMEMORATIVE SCROLL ✦</span>
        <span class="text-xs text-slate-400 font-sans">October 5 • Teacher's Day</span>
      </div>
      <h3 class="font-serif-title text-2xl md:text-3xl text-amber-200 font-bold mb-4">
        "A teacher affects eternity; he can never tell where his influence stops."
      </h3>
      <p class="text-slate-300 leading-relaxed text-sm md:text-base mb-6">
        Dear Sir Ghulam Ali Soomro, thank you for being a beacon of light in moments of doubt, a patient guide through complex challenges, and a living example of dignity, intellect, and grace. Your wisdom continues to inspire every milestone I achieve.
      </p>
      <div class="text-right border-t border-amber-500/15 pt-4">
        <p class="text-xs text-amber-400/80 uppercase font-royal">Your Grateful Student,</p>
        <p class="text-lg font-bold text-amber-200 font-serif-title mt-0.5">Aftab</p>
      </div>
    </div>

    <!-- Appreciation Message Box -->
    <section class="max-w-3xl mx-auto mb-20 text-left card-glass p-8 md:p-12 rounded-3xl relative">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-lg">
          📜
        </div>
        <div>
          <h2 class="font-serif-title text-2xl md:text-3xl font-bold text-amber-200">A Heartfelt Note of Gratitude</h2>
          <p class="text-xs text-emerald-400 font-medium">To Sir Ghulam Ali Soomro — From Aftab</p>
        </div>
      </div>

      <div class="space-y-4 text-slate-200 leading-relaxed text-sm md:text-base border-l-2 border-amber-500/40 pl-6 my-6">
        <p>
          Respected Sir, words often fall short when expressing gratitude to someone whose teachings shape not just careers, but character and vision.
        </p>
        <p>
          Your unique teaching style, your ability to simplify the most intricate concepts, and above all, your compassionate guidance have left an indelible mark on my life. Whenever I face a difficult decision or pursue an ambitious dream, your lessons on perseverance and clarity guide my path.
        </p>
        <p class="text-amber-100 font-medium italic">
          "Thank you for believing in us when we were still finding our footing, and for inspiring us to strive for excellence with humility."
        </p>
      </div>

      <div class="flex items-center justify-between pt-6 border-t border-slate-700/60 text-xs md:text-sm text-slate-400">
        <span>With deepest respect and prayers for your health & long life</span>
        <span class="font-bold text-amber-300 font-royal">— Aftab</span>
      </div>
    </section>

    <!-- Qualities of an Ideal Teacher Grid -->
    <section class="mb-20">
      <div class="text-center mb-10">
        <p class="text-emerald-400 font-royal text-xs uppercase tracking-widest font-semibold">Excellence in Mentorship</p>
        <h2 class="font-serif-title text-3xl md:text-4xl font-bold text-slate-100 mt-2">
          The Virtues of an Inspiring Educator
        </h2>
        <p class="text-slate-400 text-sm max-w-xl mx-auto mt-2">
          Qualities embodied and taught by Respected Sir Ghulam Ali Soomro
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <!-- Quality 1 -->
        <div class="card-glass p-6 rounded-2xl">
          <div class="text-2xl mb-3">💡</div>
          <h3 class="font-serif-title text-lg font-bold text-amber-200 mb-2">Illuminating Wisdom</h3>
          <p class="text-slate-300 text-xs md:text-sm leading-relaxed">
            Transforming abstract and challenging ideas into clear, memorable lessons with effortless clarity.
          </p>
        </div>

        <!-- Quality 2 -->
        <div class="card-glass p-6 rounded-2xl">
          <div class="text-2xl mb-3">🌱</div>
          <h3 class="font-serif-title text-lg font-bold text-emerald-300 mb-2">Visionary Mentorship</h3>
          <p class="text-slate-300 text-xs md:text-sm leading-relaxed">
            Recognizing the raw potential in students and nurturing their strengths to achieve beyond their limits.
          </p>
        </div>

        <!-- Quality 3 -->
        <div class="card-glass p-6 rounded-2xl">
          <div class="text-2xl mb-3">⚓</div>
          <h3 class="font-serif-title text-lg font-bold text-amber-200 mb-2">Unwavering Patience</h3>
          <p class="text-slate-300 text-xs md:text-sm leading-relaxed">
            Approaching every question with warmth, patience, and encouraging words that build true self-belief.
          </p>
        </div>

        <!-- Quality 4 -->
        <div class="card-glass p-6 rounded-2xl">
          <div class="text-2xl mb-3">🛡️</div>
          <h3 class="font-serif-title text-lg font-bold text-emerald-300 mb-2">Moral Integrity</h3>
          <p class="text-slate-300 text-xs md:text-sm leading-relaxed">
            Instilling moral courage, honesty, and values that guide students through every chapter of life.
          </p>
        </div>

        <!-- Quality 5 -->
        <div class="card-glass p-6 rounded-2xl">
          <div class="text-2xl mb-3">🔥</div>
          <h3 class="font-serif-title text-lg font-bold text-amber-200 mb-2">Spark of Curiosity</h3>
          <p class="text-slate-300 text-xs md:text-sm leading-relaxed">
            A teacher who does not simply give answers, but ignites an unquenchable thirst for learning.
          </p>
        </div>

        <!-- Quality 6 -->
        <div class="card-glass p-6 rounded-2xl">
          <div class="text-2xl mb-3">👑</div>
          <h3 class="font-serif-title text-lg font-bold text-emerald-300 mb-2">Everlasting Legacy</h3>
          <p class="text-slate-300 text-xs md:text-sm leading-relaxed">
            Leaving an indelible legacy of knowledge, compassion, and intellect in every student touched.
          </p>
        </div>
      </div>
    </section>

    <!-- Gratitude Lamp Notification Toast -->
    <div id="lampToast" class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 hidden bg-amber-950/90 border border-amber-400 text-amber-100 px-6 py-3 rounded-full text-sm shadow-2xl backdrop-blur-md">
      🪔 Virtual Lamp of Gratitude illuminated for Sir Ghulam Ali Soomro!
    </div>

  </main>

  <!-- Footer -->
  <footer class="relative z-10 border-t border-slate-800/80 bg-[#03050a] py-8 text-center">
    <div class="max-w-4xl mx-auto px-6">
      <p class="text-slate-300 text-sm md:text-base font-medium flex items-center justify-center gap-2">
        <span>Developed with</span>
        <span class="pulse-heart text-red-500 text-lg">❤️</span>
        <span>by <strong class="text-amber-300 font-semibold tracking-wide">Aftab</strong></span>
      </p>
      <p class="text-slate-500 text-xs mt-2">
        Dedicated with deep respect to Respected Sir Ghulam Ali Soomro • Happy Teacher's Day
      </p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Audio Synthesizer (Web Audio API)
    function playCelebrationSound() {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        if (ctx.state === 'suspended') ctx.resume();

        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        const now = ctx.currentTime;
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.6);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 1.8);
        });
      } catch (e) {
        console.log(e);
      }
    }

    function launchCelebration() {
      playCelebrationSound();

      // Show the hidden golden scroll
      const scroll = document.getElementById('goldenScroll');
      if (scroll) {
        scroll.classList.remove('hidden');
        scroll.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Fire confetti blasts
      if (typeof confetti === 'function') {
        const count = 200;
        const defaults = { origin: { y: 0.7 }, zIndex: 9999 };
        const colors = ['#f59e0b', '#10b981', '#fbbf24', '#fef08a', '#34d399', '#ffffff', '#eab308'];

        confetti({ ...defaults, particleCount: 60, spread: 40, startVelocity: 55, colors, scalar: 1.2 });
        confetti({ ...defaults, particleCount: 80, spread: 80, colors });
        confetti({ ...defaults, particleCount: 50, spread: 120, decay: 0.9, colors });

        setTimeout(() => {
          confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0, y: 0.8 }, colors, zIndex: 9999 });
          confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1, y: 0.8 }, colors, zIndex: 9999 });
        }, 250);
      }
    }

    function lightGratitudeLamp() {
      playCelebrationSound();
      const toast = document.getElementById('lampToast');
      if (toast) {
        toast.classList.remove('hidden');
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 3500);
      }
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#fbbf24', '#f59e0b', '#10b981'],
          zIndex: 9999
        });
      }
    }

    // Auto-fire celebratory sparkle on page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f59e0b', '#10b981', '#fbbf24']
          });
        }
      }, 600);
    });
  </script>
</body>
</html>`;
}
