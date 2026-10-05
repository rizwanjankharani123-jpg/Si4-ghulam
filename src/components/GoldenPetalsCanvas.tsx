import React, { useEffect, useRef } from 'react';

interface DriftingPetal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  swingAmplitude: number;
  swingFrequency: number;
  swingOffset: number;
  rotation: number;
  rotationSpeed: number;
  pitch: number;
  pitchSpeed: number;
  opacity: number;
  petalType: 'goldPetal' | 'softAmber' | 'sparkleStar' | 'emeraldGlow';
}

export const GoldenPetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Dynamic density based on screen width
    const petalCount = Math.min(Math.max(Math.floor(window.innerWidth / 30), 28), 50);
    const petals: DriftingPetal[] = [];

    const types: DriftingPetal['petalType'][] = [
      'goldPetal',
      'goldPetal',
      'softAmber',
      'sparkleStar',
      'emeraldGlow',
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 9 + 7, // 7px to 16px
        speedY: Math.random() * 0.75 + 0.45, // Gentle slow fall
        speedX: (Math.random() - 0.5) * 0.4,
        swingAmplitude: Math.random() * 1.8 + 0.8,
        swingFrequency: Math.random() * 0.015 + 0.008,
        swingOffset: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        pitch: Math.random() * Math.PI * 2,
        pitchSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.55 + 0.35,
        petalType: types[Math.floor(Math.random() * types.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        // Vertical descent
        p.y += p.speedY;

        // Natural swaying drift like falling blossom
        const sway = Math.sin(time * p.swingFrequency + p.swingOffset) * p.swingAmplitude;
        p.x += p.speedX + sway;

        // 3D Rotational tumbling
        p.rotation += p.rotationSpeed;
        p.pitch += p.pitchSpeed;

        // Wrap around viewport edges smoothly
        if (p.y > height + 25) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x > width + 25) p.x = -25;
        if (p.x < -25) p.x = width + 25;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // 3D Pitch tilt simulation (scaling y for tumbling effect)
        const scaleY = Math.cos(p.pitch);
        ctx.scale(1, Math.abs(scaleY) > 0.15 ? scaleY : 0.15);

        if (p.petalType === 'goldPetal' || p.petalType === 'softAmber') {
          // Curved Botanical Petal Geometry
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.7, p.size * 0.7, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.7, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
          ctx.closePath();

          const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
          if (p.petalType === 'goldPetal') {
            grad.addColorStop(0, `rgba(254, 240, 138, ${p.opacity})`); // Gold 300
            grad.addColorStop(0.45, `rgba(245, 158, 11, ${p.opacity * 0.9})`); // Amber 500
            grad.addColorStop(1, `rgba(180, 83, 9, ${p.opacity * 0.6})`);
          } else {
            grad.addColorStop(0, `rgba(253, 230, 138, ${p.opacity})`);
            grad.addColorStop(0.5, `rgba(251, 191, 36, ${p.opacity * 0.85})`);
            grad.addColorStop(1, `rgba(217, 119, 6, ${p.opacity * 0.5})`);
          }

          ctx.fillStyle = grad;
          ctx.shadowColor = 'rgba(245, 158, 11, 0.45)';
          ctx.shadowBlur = 10;
          ctx.fill();

          // Subtle petal central vein
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.8);
          ctx.lineTo(0, p.size * 0.7);
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.4})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();

        } else if (p.petalType === 'sparkleStar') {
          // 4-Point Golden Stardust Sparkle
          const r = p.size * 0.45;
          ctx.beginPath();
          ctx.moveTo(0, -r);
          ctx.quadraticCurveTo(0, 0, r, 0);
          ctx.quadraticCurveTo(0, 0, 0, r);
          ctx.quadraticCurveTo(0, 0, -r, 0);
          ctx.quadraticCurveTo(0, 0, 0, -r);
          ctx.closePath();

          ctx.fillStyle = `rgba(255, 245, 180, ${p.opacity * 0.9})`;
          ctx.shadowColor = 'rgba(250, 204, 21, 0.9)';
          ctx.shadowBlur = 12;
          ctx.fill();

        } else {
          // Soft Emerald Radiance Dewdrop
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52, 211, 153, ${p.opacity * 0.7})`;
          ctx.shadowColor = 'rgba(16, 185, 129, 0.7)';
          ctx.shadowBlur = 8;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};
