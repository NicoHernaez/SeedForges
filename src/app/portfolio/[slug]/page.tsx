import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS, getProject } from '@/lib/projects';
import { getMultiRepoData } from '@/lib/github';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import GitHubStats from '@/components/ui/GitHubStats';

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
    <main className="min-h-screen px-6 py-24 md:py-32 max-w-4xl mx-auto space-y-12">
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
      <div className="space-y-6">
        <span className="text-6xl md:text-7xl block" role="img" aria-label={project.name}>
          {project.icon}
        </span>
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

      {/* Sections */}
      <div className="space-y-8">
        {/* El Problema */}
        <Card hover={false}>
          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)]">
              El Problema
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
              {project.problem}
            </p>
          </div>
        </Card>

        {/* La Solucion */}
        <Card hover={false}>
          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)]">
              La Solucion
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </Card>

        {/* Mercado Objetivo */}
        <Card hover={false}>
          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)]">
              Mercado Objetivo
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
              {project.market}
            </p>
          </div>
        </Card>

        {/* Modelo de Negocio */}
        <Card hover={false}>
          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)]">
              Modelo de Negocio
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
              {project.businessModel}
            </p>
          </div>
        </Card>

        {/* Stack Tecnologico */}
        <Card hover={false}>
          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)]">
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
                  ].join(' ')}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* GitHub Stats */}
        {repos.length > 0 && <GitHubStats repos={repos} />}

        {/* Estado Actual */}
        <Card hover={false}>
          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)]">
              Estado Actual
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
              {project.currentStatus}
            </p>
          </div>
        </Card>
      </div>

      {/* CTA */}
      <div className="pt-8 border-t border-[var(--color-sf-emerald)]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-sf-cream)]">
          ¿Querés saber más?
        </p>
        <Button href="/investors" variant="primary" size="md">
          Acceso inversores →
        </Button>
      </div>
    </main>
  );
}
