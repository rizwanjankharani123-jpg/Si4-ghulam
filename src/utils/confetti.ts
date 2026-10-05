import confetti from 'canvas-confetti';
import { soundManager } from './audio';

export function triggerGrandCelebration() {
  soundManager.playChimeChord();

  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Multi-tier majestic blast: Gold, Emerald, Amber, Bronze, White
  const colors = ['#f59e0b', '#10b981', '#fbbf24', '#fef08a', '#34d399', '#ffffff', '#eab308'];

  fire(0.25, {
    spread: 30,
    startVelocity: 60,
    colors,
    scalar: 1.2,
  });

  fire(0.2, {
    spread: 60,
    colors,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.9,
    colors,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 30,
    decay: 0.92,
    colors,
    shapes: ['circle'],
  });

  fire(0.1, {
    spread: 140,
    startVelocity: 45,
    colors,
    shapes: ['square'],
  });

  // Delayed side cannons
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors,
      zIndex: 9999,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors,
      zIndex: 9999,
    });
  }, 250);

  setTimeout(() => {
    confetti({
      particleCount: 70,
      angle: 90,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors,
      zIndex: 9999,
    });
  }, 500);
}

export function triggerStarSparks() {
  soundManager.playSparkle();
  const colors = ['#fbbf24', '#f59e0b', '#10b981', '#ffffff'];

  confetti({
    particleCount: 40,
    spread: 70,
    origin: { y: 0.6 },
    colors,
    ticks: 200,
    gravity: 0.8,
    scalar: 1.1,
    zIndex: 9999,
  });
}
