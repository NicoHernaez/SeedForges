import Link from 'next/link';
import Image from 'next/image';
import ParticleField from '@/components/home/ParticleField';
import HeroContent from '@/components/home/HeroContent';
import ProjectCard from '@/components/portfolio/ProjectCard';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { PROJECTS } from '@/lib/projects';
import { SITE } from '@/lib/constants';

const STATS = [
  { number: '+20', label: 'anos en industria gastronomica' },
  { number: '5', label: 'productos en desarrollo' },
  { number: '2', label: 'pilotos activos en produccion' },
  { number: '1', label: 'General Pico como laboratorio' },
];

const TECH_STACK = [
  'Claude API',
  'n8n',
  'Supabase',
  'WhatsApp Business API',
  'React Native',
  'MercadoPago',
  'pgvector',
];

export default function Home() {
  return (
    <>
      {/* ===== Particle Background ===== */}
      <ParticleField />

      {/* ===== HERO ===== */}
      <HeroContent />

      {/* ===== THESIS STRIP ===== */}
      <section className="relative z-10 py-28 md:py-32 px-6 bg-[var(--color-sf-deep-green)]/60 tech-grid section-glow">
        {/* Left/right gradient fades */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[var(--color-sf-dark)] via-transparent to-[var(--color-sf-dark)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl italic font-normal leading-relaxed">
              <span className="text-[var(--color-sf-cream)]">&ldquo;</span>
              <span className="gradient-text">
                {SITE.description}
              </span>
              <span className="text-[var(--color-sf-cream)]">&rdquo;</span>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="relative z-10 py-24 md:py-32 px-6 section-glow">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              label="PORTAFOLIO"
              title="Lo que forjamos"
              highlight="forjamos"
              className="mb-16 text-center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 150}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={700}>
            <div className="mt-14 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase text-[var(--color-sf-emerald)] hover:text-[var(--color-sf-lime)] transition-all duration-300 hover:gap-4"
              >
                Ver todos los proyectos
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== KEY NUMBERS ===== */}
      <section className="relative z-10 py-24 md:py-32 px-6 bg-[var(--color-sf-deep-green)]/40">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-6 md:p-8 rounded-2xl glass"
                >
                  <div className="relative inline-block">
                    {/* Emerald glow behind number */}
                    <div
                      className="absolute inset-0 -inset-x-6 -inset-y-4 rounded-full blur-2xl opacity-20"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(16,185,129,0.5) 0%, transparent 70%)',
                      }}
                    />
                    <p className="relative font-[family-name:var(--font-display)] text-6xl md:text-7xl font-light gradient-text">
                      {stat.number}
                    </p>
                  </div>
                  <p className="mt-4 font-[family-name:var(--font-mono)] text-[11px] tracking-wider uppercase text-[var(--color-sf-muted)] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="relative z-10 py-28 md:py-36 px-6 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tree-innovation.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Heavy dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050e09] via-[#050e09]/80 to-[#050e09]" />
        </div>

        <div className="relative z-[1] max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              label="FILOSOFIA"
              title="Nuestra filosofia"
              className="mb-14"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="border-l-2 border-[var(--color-sf-gold)]/60 pl-8 md:pl-10 space-y-8">
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[var(--color-sf-cream)]/85 leading-relaxed">
                No creemos que la innovacion solo sucede en Buenos Aires, Silicon
                Valley o grandes capitales.{' '}
                <span className="text-[var(--color-sf-emerald)] font-medium">
                  Creemos que el interior argentino
                </span>{' '}
                tiene problemas reales, negocios reales y personas reales que merecen
                tecnologia construida a su medida.
              </p>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[var(--color-sf-cream)]/85 leading-relaxed">
                Seed Forges nace en General Pico, La Pampa, como un{' '}
                <span className="text-[var(--color-sf-gold)] font-medium">
                  laboratorio donde las ideas se prueban
                </span>{' '}
                con comerciantes de carne y hueso, donde el feedback es una charla
                en el mostrador y donde el exito se mide en negocios que crecen, no
                en metricas vanidosas.
              </p>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[var(--color-sf-cream)]/85 leading-relaxed">
                Construimos productos de inteligencia artificial verticales:
                herramientas que entienden el contexto local, hablan el idioma del
                dueno y resuelven los problemas que las plataformas globales ignoran.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TECH STACK STRIP ===== */}
      <section className="relative z-10 py-14 px-6 border-t border-b border-[var(--color-sf-emerald)]/10 section-glow">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
            {TECH_STACK.map((tech, i) => (
              <span key={i} className="flex items-center gap-x-4">
                <span className="font-[family-name:var(--font-mono)] text-sm tracking-wider text-[var(--color-sf-muted)]/50 uppercase whitespace-nowrap transition-all duration-300 hover:text-[var(--color-sf-emerald)] hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] cursor-default">
                  {tech}
                </span>
                {i < TECH_STACK.length - 1 && (
                  <span className="text-[var(--color-sf-emerald)]/20 text-lg select-none">
                    &#x2022;
                  </span>
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
