import Link from "next/link";
import ParticleField from "@/components/home/ParticleField";
import LogoMark from "@/components/home/LogoMark";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/constants";

const STATS = [
  { number: "+20", label: "años en industria gastronómica" },
  { number: "4", label: "productos en desarrollo" },
  { number: "1", label: "piloto activo (7Tres7)" },
  { number: "1", label: "General Pico como laboratorio" },
];

const TECH_STACK = [
  "Claude API",
  "n8n",
  "Supabase",
  "WhatsApp Business API",
  "React Native",
  "MercadoPago",
  "pgvector",
];

export default function Home() {
  return (
    <>
      {/* ===== Particle Background ===== */}
      <ParticleField />

      {/* ===== HERO ===== */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <div className="animate-logo-float mb-8">
          <LogoMark size={140} animate />
        </div>

        {/* Title */}
        <h1
          className="font-[family-name:var(--font-display)] font-light leading-none"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          <span className="text-[var(--color-sf-cream)]">Seed</span>{" "}
          <span className="text-[var(--color-sf-gold)]">Forges</span>
        </h1>

        {/* Gradient line */}
        <div className="mt-6 mb-8 w-48 h-px bg-gradient-to-r from-transparent via-[var(--color-sf-emerald)] to-transparent animate-line-grow" />

        {/* Tagline */}
        <p className="max-w-2xl font-[family-name:var(--font-body)] text-lg md:text-xl text-[var(--color-sf-cream)]/80 leading-relaxed animate-fade-in-up">
          Donde las ideas se{" "}
          <span className="text-[var(--color-sf-emerald)] font-medium">
            siembran
          </span>
          , se{" "}
          <span className="text-[var(--color-sf-gold)] font-medium">
            forjan
          </span>{" "}
          y se convierten en tecnología que transforma negocios reales.
        </p>

        {/* Location */}
        <p className="mt-6 font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[var(--color-sf-muted)]">
          {SITE.location}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button href="/portfolio" variant="primary" size="lg">
            Ver portafolio
          </Button>
          <Button href="/investors" variant="secondary" size="lg">
            Acceso inversores
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ===== THESIS STRIP ===== */}
      <section className="relative z-10 py-24 px-6 bg-[var(--color-sf-deep-green)]/60">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl italic font-light text-[var(--color-sf-cream)] leading-relaxed">
            &ldquo;{SITE.description}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="PORTAFOLIO"
            title="Lo que forjamos"
            highlight="forjamos"
            className="mb-16 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase text-[var(--color-sf-emerald)] hover:text-[var(--color-sf-lime)] transition-colors duration-300"
            >
              Ver todos los proyectos
              <svg
                className="w-4 h-4"
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
        </div>
      </section>

      {/* ===== KEY NUMBERS ===== */}
      <section className="relative z-10 py-24 px-6 bg-[var(--color-sf-deep-green)]/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-[var(--color-sf-emerald)]/10 bg-[var(--color-sf-forest)]/30"
              >
                <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light text-[var(--color-sf-gold)]">
                  {stat.number}
                </p>
                <p className="mt-3 font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase text-[var(--color-sf-muted)] leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="FILOSOFÍA"
            title="Nuestra filosofía"
            className="mb-12"
          />

          <div className="border-l-2 border-[var(--color-sf-gold)] pl-8 space-y-6">
            <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-sf-cream)]/80 leading-relaxed">
              No creemos que la innovación solo sucede en Buenos Aires, Silicon
              Valley o grandes capitales. Creemos que el interior argentino tiene
              problemas reales, negocios reales y personas reales que merecen
              tecnología construida a su medida.
            </p>
            <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-sf-cream)]/80 leading-relaxed">
              Seed Forges nace en General Pico, La Pampa, como un laboratorio
              donde las ideas se prueban con comerciantes de carne y hueso,
              donde el feedback es una charla en el mostrador y donde el éxito
              se mide en negocios que crecen, no en métricas vanidosas.
            </p>
            <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-sf-cream)]/80 leading-relaxed">
              Construimos productos de inteligencia artificial verticales:
              herramientas que entienden el contexto local, hablan el idioma del
              dueño y resuelven los problemas que las plataformas globales
              ignoran.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK STRIP ===== */}
      <section className="relative z-10 py-12 px-6 border-t border-b border-[var(--color-sf-emerald)]/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="font-[family-name:var(--font-mono)] text-sm tracking-wider text-[var(--color-sf-muted)]/50 uppercase whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
