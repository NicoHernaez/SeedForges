import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS, getProject } from '@/lib/projects';
import { getMultiRepoData } from '@/lib/github';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import GitHubStats from '@/components/ui/GitHubStats';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.name} — Seed Forges`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const repos = project.githubRepos
    ? await getMultiRepoData(project.githubRepos)
    : [];

  return (
    <main className="min-h-screen px-6 py-24 md:py-32 max-w-4xl mx-auto space-y-12 tech-grid">
      {/* Back link */}
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-[var(--color-sf-muted)] hover:text-[var(--color-sf-emerald)] transition-colors duration-300 font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Volver al portafolio
      </Link>

      {/* Hero */}
      <ScrollReveal>
        <div className="space-y-6">
          <div className="relative inline-block">
            {/* Glow behind icon */}
            <div className="absolute inset-0 scale-[2.5]" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }} />
            <span className="text-6xl md:text-7xl block relative" role="img" aria-label={project.name}>
              {project.icon}
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-sf-cream)]">
                {project.name}
              </h1>
              <Badge status={project.status} />
            </div>
            <p className="font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase text-[var(--color-sf-gold)] leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Sections */}
      <div className="space-y-8">
        {/* El Problema */}
        <ScrollReveal delay={0}>
          <Card hover={false}>
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] flex items-center gap-3">
                <span className="w-6 h-px bg-gradient-to-r from-[var(--color-sf-gold)] to-transparent inline-block" />
                El Problema
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
                {project.problem}
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* La Solucion */}
        <ScrollReveal delay={100}>
          <Card hover={false}>
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] flex items-center gap-3">
                <span className="w-6 h-px bg-gradient-to-r from-[var(--color-sf-gold)] to-transparent inline-block" />
                La Solucion
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* Mercado Objetivo */}
        <ScrollReveal delay={200}>
          <Card hover={false}>
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] flex items-center gap-3">
                <span className="w-6 h-px bg-gradient-to-r from-[var(--color-sf-gold)] to-transparent inline-block" />
                Mercado Objetivo
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
                {project.market}
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* Modelo de Negocio */}
        <ScrollReveal delay={300}>
          <Card hover={false}>
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] flex items-center gap-3">
                <span className="w-6 h-px bg-gradient-to-r from-[var(--color-sf-gold)] to-transparent inline-block" />
                Modelo de Negocio
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
                {project.businessModel}
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* Stack Tecnologico */}
        <ScrollReveal delay={400}>
          <Card hover={false}>
            <div className="space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] flex items-center gap-3">
                <span className="w-6 h-px bg-gradient-to-r from-[var(--color-sf-gold)] to-transparent inline-block" />
                Stack Tecnologico
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={[
                      'px-3 py-1.5 rounded-full',
                      'text-sm',
                      'font-[family-name:var(--font-mono)]',
                      'bg-[var(--color-sf-emerald)]/10',
                      'text-[var(--color-sf-emerald)]',
                      'border border-[var(--color-sf-emerald)]/20',
                      'transition-all duration-300',
                      'hover:shadow-[0_0_12px_rgba(16,185,129,0.2)]',
                      'hover:border-[var(--color-sf-emerald)]/40',
                    ].join(' ')}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* GitHub Stats */}
        {repos.length > 0 && (
          <ScrollReveal delay={450}>
            <GitHubStats repos={repos} />
          </ScrollReveal>
        )}

        {/* Estado Actual */}
        <ScrollReveal delay={500}>
          <Card hover={false}>
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] flex items-center gap-3">
                <span className="w-6 h-px bg-gradient-to-r from-[var(--color-sf-gold)] to-transparent inline-block" />
                Estado Actual
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
                {project.currentStatus}
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>

      {/* CTA */}
      <ScrollReveal delay={550}>
        <div className="relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(201,162,39,0.06) 50%, rgba(16,185,129,0.04) 100%)' }}>
          <div className="absolute inset-0 border border-[var(--color-sf-emerald)]/15 rounded-2xl" style={{ borderImage: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(201,162,39,0.2), rgba(16,185,129,0.1)) 1' }} />
          <div className="relative p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)]">
                ¿Querés saber más?
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)]">
                Accedé al data room con métricas, financials y roadmap detallado.
              </p>
            </div>
            <Button href="/investors" variant="primary" size="md">
              Acceso inversores →
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
