import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { PROJECTS, getProject } from '@/lib/projects';
import { getRepoData, getCommitActivity } from '@/lib/github';
import GitHubActivity from '@/components/investors/GitHubActivity';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: `${project.name} — Seed Forges Investors`,
  };
}

export default async function ProjectDataRoomPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const [repoData, activity] = project.githubRepo
    ? await Promise.all([
        getRepoData(project.githubRepo),
        getCommitActivity(project.githubRepo),
      ])
    : [null, null];

  return (
    <div className="min-h-screen bg-[var(--color-sf-dark)]">
      {/* Header */}
      <header className="border-b border-[var(--color-sf-emerald)]/10 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/investors/dashboard"
            className="text-sm text-[var(--color-sf-muted)] hover:text-[var(--color-sf-emerald)] font-[family-name:var(--font-body)] transition-colors"
          >
            &larr; Volver al dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* Project Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-3xl">{project.icon}</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-sf-cream)] font-light">
              {project.name}
            </h1>
            <Badge status={project.status} />
          </div>
          <p className="text-[var(--color-sf-muted)] text-lg font-[family-name:var(--font-body)]">
            {project.tagline}
          </p>
        </div>

        {/* Metricas Actuales */}
        <section className="space-y-4">
          <SectionTitle>Metricas Actuales</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, i) => (
              <Card key={i} hover={false} className="space-y-1">
                <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
                  {metric.label}
                </p>
                <p className="text-[var(--color-sf-cream)] text-lg font-[family-name:var(--font-body)] font-semibold">
                  {metric.value}
                </p>
                {metric.trend && (
                  <p className="text-[var(--color-sf-emerald)] text-xs font-[family-name:var(--font-mono)]">
                    {metric.trend}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* GitHub Activity */}
        {repoData && (
          <section className="space-y-4">
            <SectionTitle>Desarrollo</SectionTitle>
            <GitHubActivity repoData={repoData} activity={activity} />
          </section>
        )}

        {/* Roadmap */}
        <section className="space-y-4">
          <SectionTitle>Roadmap</SectionTitle>
          <Card hover={false}>
            <div className="relative pl-6 space-y-6">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-sf-emerald)]/20" />

              {project.roadmap.map((item, i) => (
                <div key={i} className="relative flex gap-4">
                  {/* Dot */}
                  <div className="absolute -left-6 top-1.5">
                    {item.status === 'done' && (
                      <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-sf-emerald)] flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                    {item.status === 'current' && (
                      <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-sf-gold)] animate-pulse" />
                    )}
                    {item.status === 'upcoming' && (
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-[var(--color-sf-muted)]/40 bg-transparent" />
                    )}
                  </div>

                  <div>
                    <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
                      {item.quarter}
                    </p>
                    <p
                      className={[
                        'text-sm font-[family-name:var(--font-body)] mt-0.5',
                        item.status === 'done'
                          ? 'text-[var(--color-sf-cream)]'
                          : item.status === 'current'
                            ? 'text-[var(--color-sf-gold)]'
                            : 'text-[var(--color-sf-muted)]',
                      ].join(' ')}
                    >
                      {item.milestone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Financials */}
        <section className="space-y-4">
          <SectionTitle>Financials</SectionTitle>
          <Card hover={false} className="space-y-3">
            {project.financials.map((item, i) => (
              <div
                key={i}
                className={[
                  'flex justify-between items-baseline gap-4 py-2',
                  i < project.financials.length - 1 ? 'border-b border-[var(--color-sf-emerald)]/5' : '',
                ].join(' ')}
              >
                <span className="text-[var(--color-sf-muted)] text-sm font-[family-name:var(--font-body)]">
                  {item.label}
                </span>
                <span className="text-[var(--color-sf-cream)] text-sm font-[family-name:var(--font-body)] font-medium text-right">
                  {item.value}
                </span>
              </div>
            ))}
            <p className="text-[var(--color-sf-muted)]/50 text-xs font-[family-name:var(--font-mono)] pt-2">
              Proyecciones basadas en modelo actual. Sujeto a revision.
            </p>
          </Card>
        </section>

        {/* Documentos */}
        <section className="space-y-4">
          <SectionTitle>Documentos</SectionTitle>
          <Card hover={false} className="space-y-3">
            {[
              { name: 'Pitch Deck', format: 'PDF' },
              { name: 'Financial Model', format: 'XLSX' },
              { name: 'One-pager', format: 'PDF' },
            ].map((doc, i) => (
              <div
                key={i}
                className={[
                  'flex items-center justify-between py-2',
                  i < 2 ? 'border-b border-[var(--color-sf-emerald)]/5' : '',
                ].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[var(--color-sf-muted)]"
                  >
                    <path
                      d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path d="M9 1v4h4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <span className="text-[var(--color-sf-cream)] text-sm font-[family-name:var(--font-body)]">
                    {doc.name}
                  </span>
                  <span className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase">
                    {doc.format}
                  </span>
                </div>
                <span className="text-[var(--color-sf-muted)]/60 text-xs font-[family-name:var(--font-mono)] bg-[var(--color-sf-muted)]/10 px-2 py-0.5 rounded-full">
                  Proximamente
                </span>
              </div>
            ))}
          </Card>
        </section>

        {/* Riesgos y Mitigacion */}
        <section className="space-y-4">
          <SectionTitle>Riesgos y Mitigacion</SectionTitle>
          <Card hover={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-sf-emerald)]/10">
                    <th className="text-left py-2 pr-4 text-[var(--color-sf-muted)] font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">
                      Riesgo
                    </th>
                    <th className="text-left py-2 text-[var(--color-sf-muted)] font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-normal">
                      Mitigacion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.risks.map((item, i) => (
                    <tr
                      key={i}
                      className={
                        i < project.risks.length - 1
                          ? 'border-b border-[var(--color-sf-emerald)]/5'
                          : ''
                      }
                    >
                      <td className="py-3 pr-4 text-[var(--color-sf-cream)]/80 font-[family-name:var(--font-body)] align-top">
                        {item.risk}
                      </td>
                      <td className="py-3 text-[var(--color-sf-muted)] font-[family-name:var(--font-body)] align-top">
                        {item.mitigation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Ask */}
        <section className="space-y-4">
          <SectionTitle>Que necesita este proyecto</SectionTitle>
          <Card hover={false} className="space-y-4">
            <p className="text-[var(--color-sf-cream)] text-sm font-[family-name:var(--font-body)] leading-relaxed">
              {project.ask}
            </p>
            <a
              href="mailto:hola@seedforges.com?subject=Consulta%20inversión%20—%20Seed%20Forges"
              className={[
                'inline-flex items-center gap-2',
                'text-sm font-[family-name:var(--font-body)]',
                'text-[var(--color-sf-emerald)]',
                'hover:text-[var(--color-sf-lime)]',
                'transition-colors duration-200',
              ].join(' ')}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 4l6 4 6-4M2 4v8h12V4H2z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              Contactar: hola@seedforges.com
            </a>
          </Card>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] font-light">
      {children}
    </h2>
  );
}
