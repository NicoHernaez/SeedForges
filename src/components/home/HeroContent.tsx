'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LogoMark from '@/components/home/LogoMark';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

export default function HeroContent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay to let the page render, then trigger animations
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-forge.webp"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050e09]/40 via-[#050e09]/60 to-[#050e09]" />
      </div>

      {/* Radial glow behind logo */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(16,185,129,0.12) 0%, transparent 50%), radial-gradient(circle at center, rgba(201,162,39,0.06) 0%, transparent 35%)',
        }}
      />

      {/* Content container */}
      <div className="relative z-[2] flex flex-col items-center">
        {/* Logo */}
        <div
          className="animate-logo-float mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.1s',
          }}
        >
          <LogoMark size={160} animate />
        </div>

        {/* Title */}
        <h1
          className="font-[family-name:var(--font-display)] font-light leading-none"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.3s',
          }}
        >
          <span className="text-[var(--color-sf-cream)]">Seed</span>{' '}
          <span className="shimmer-text">Forges</span>
        </h1>

        {/* Gradient line */}
        <div
          className="mt-6 mb-8 h-px bg-gradient-to-r from-transparent via-[var(--color-sf-emerald)] to-transparent"
          style={{
            width: loaded ? '20rem' : '0rem',
            opacity: loaded ? 1 : 0,
            boxShadow: '0 0 20px rgba(16,185,129,0.4), 0 0 60px rgba(16,185,129,0.15)',
            transition: 'width 1s ease-out 0.5s, opacity 0.6s ease-out 0.5s',
          }}
        />

        {/* Tagline */}
        <p
          className="max-w-2xl font-[family-name:var(--font-body)] text-lg md:text-xl text-[var(--color-sf-cream)]/80 leading-relaxed"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.7s',
          }}
        >
          Donde las ideas se{' '}
          <span className="text-[var(--color-sf-emerald)] font-medium">siembran</span>, se{' '}
          <span className="text-[var(--color-sf-gold)] font-medium">forjan</span> y se convierten
          en tecnología que transforma negocios reales.
        </p>

        {/* Location */}
        <p
          className="mt-6 font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[var(--color-sf-muted)]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.9s',
          }}
        >
          {SITE.location}
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '1.1s',
          }}
        >
          <Button href="/portfolio" variant="primary" size="lg">
            Ver portafolio
          </Button>
          <Button href="/investors" variant="secondary" size="lg">
            Acceso inversores
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse z-[2]"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: 'opacity 1s ease-out',
          transitionDelay: '1.5s',
        }}
      >
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-[var(--color-sf-muted)]">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-[var(--color-sf-emerald)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
