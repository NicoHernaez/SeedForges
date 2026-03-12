'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Portafolio', href: '/portfolio' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Inversores', href: '/investors' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          scrolled
            ? 'bg-[var(--color-sf-dark)]/80 backdrop-blur-xl border-b border-[var(--color-sf-emerald)]/10 shadow-lg shadow-black/20'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo/seedforges-isologo.svg"
              alt="Seed Forges"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-[family-name:var(--font-display)] text-lg text-[var(--color-sf-cream)] tracking-wide hidden sm:inline">
              SEED FORGES
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase',
                  'text-[var(--color-sf-muted)]',
                  'hover:text-[var(--color-sf-emerald)]',
                  'transition-colors duration-300',
                  'relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px',
                  'after:bg-[var(--color-sf-emerald)] after:transition-all after:duration-300',
                  'hover:after:w-full',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className={[
                  'block h-px w-full bg-[var(--color-sf-cream)] transition-all duration-300 origin-center',
                  isOpen ? 'rotate-45 translate-y-[3.5px]' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-px w-full bg-[var(--color-sf-cream)] transition-all duration-300',
                  isOpen ? 'opacity-0 scale-x-0' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-px w-full bg-[var(--color-sf-cream)] transition-all duration-300 origin-center',
                  isOpen ? '-rotate-45 -translate-y-[3.5px]' : '',
                ].join(' ')}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={[
          'fixed inset-0 z-40 md:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={[
            'absolute top-0 right-0 h-full w-72',
            'bg-[var(--color-sf-dark)]/95 backdrop-blur-xl',
            'border-l border-[var(--color-sf-emerald)]/10',
            'transition-transform duration-300 ease-out',
            isOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <div className="pt-24 px-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={[
                  'font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] uppercase',
                  'text-[var(--color-sf-muted)] hover:text-[var(--color-sf-emerald)]',
                  'transition-colors duration-300',
                  'py-3 border-b border-[var(--color-sf-emerald)]/5',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
