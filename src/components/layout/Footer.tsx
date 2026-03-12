import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="tech-grid bg-[var(--color-sf-dark)] relative" style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.2), rgba(201,162,39,0.15), transparent) 1' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/images/logo/seedforges-isologo.svg"
                alt="Seed Forges"
                width={28}
                height={28}
                className="drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]"
              />
              <span className="font-[family-name:var(--font-display)] text-base text-[var(--color-sf-cream)] tracking-wide">
                SEED FORGES
              </span>
            </Link>
            <p className="font-[family-name:var(--font-display)] text-lg text-[var(--color-sf-muted)] italic leading-relaxed">
              Forjando tecnolog&iacute;a real desde la Pampa.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[var(--color-sf-emerald)]">
              Navegaci&oacute;n
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Portafolio', href: '/portfolio' },
                { label: 'Nosotros', href: '/about' },
                { label: 'Inversores', href: '/investors' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] hover:text-[var(--color-sf-cream)] hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.2)] hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all duration-300 rounded px-1 -mx-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[var(--color-sf-emerald)]">
              Contacto
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hola@seedforges.com"
                className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] hover:text-[var(--color-sf-cream)] hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all duration-300 rounded px-1 -mx-1"
              >
                hola@seedforges.com
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] hover:text-[var(--color-sf-cream)] hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all duration-300 rounded px-1 -mx-1"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-[var(--color-sf-emerald)]/5">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-sf-muted)]/60 tracking-wider text-center">
            &copy;&nbsp; 2026 &nbsp;SEED FORGES &nbsp;&mdash;&nbsp; GENERAL PICO, LA PAMPA, ARGENTINA
          </p>
        </div>
      </div>
    </footer>
  );
}
