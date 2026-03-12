'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  isBokeh: boolean;
}

const PARTICLE_COUNT = 80;
const BOKEH_COUNT = 15;
const COLORS = ['#10b981', '#c9a227', '#059669', '#d4a843'];

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      // Regular particles
      const regular: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.5 + 0.2),
        size: Math.random() * 2.5 + 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.6 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        isBokeh: false,
      }));

      // Bokeh particles (larger, slower, very transparent — depth of field effect)
      const bokeh: Particle[] = Array.from({ length: BOKEH_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.09,
        vy: -(Math.random() * 0.15 + 0.06) * 0.3,
        size: Math.random() * 4 + 4, // radius 4-8
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.05 + 0.03, // 0.03-0.08
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.006 + 0.002,
        isBokeh: true,
      }));

      particlesRef.current = [...regular, ...bokeh];
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      // Draw connecting lines between nearby regular particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const a = particles[i];
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const lineOpacity = (1 - dist / 100) * 0.06;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap around
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

        if (p.isBokeh) {
          // Bokeh: soft large circle
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
          gradient.addColorStop(0, p.color + Math.round(currentOpacity * 60).toString(16).padStart(2, '0'));
          gradient.addColorStop(0.5, p.color + Math.round(currentOpacity * 25).toString(16).padStart(2, '0'));
          gradient.addColorStop(1, p.color + '00');
          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Glow
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
          gradient.addColorStop(0, p.color + Math.round(currentOpacity * 80).toString(16).padStart(2, '0'));
          gradient.addColorStop(1, p.color + '00');
          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentOpacity;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
