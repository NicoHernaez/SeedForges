import { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import LogoutButton from '@/components/investors/LogoutButton';
import { PROJECTS } from '@/lib/projects';
import { SITE } from '@/lib/constants';
import { getMultiRepoData, formatRelativeDate, type GitHubRepoData } from '@/lib/github';

export const metadata: Metadata = {
  title: 'Dashboard — Seed Forges Investors',
};

export default async function InvestorDashboardPage() {
  // Fetch GitHub data for all projects with repos in parallel
  const repoDataMap = new Map<string, GitHubRepoData[]>();
  const projectsWithRepos = PROJECTS.filter((p) => p.githubRepos && p.githubRepos.length > 0);

  if (projectsWithRepos.length > 0) {
    const results = await Promise.all(
      projectsWithRepos.map((p) => getMultiRepoData(p.githubRepos!))
    );
    projectsWithRepos.forEach((p, i) => {
      repoDataMap.set(p.slug, results[i]);
    });
  }

  return (
    <div className="min-h-screen bg-[var(--color-sf-dark)]">
      {/* Header */}
      <header className="border-b border-[var(--color-sf-emerald)]/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)] font-light">
            Seed Forges{' '}
            <span className="text-[var(--color-sf-muted)]">— Vista Ejecutiva</span>
          </h1>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        {/* Studio Overview */}
        <Card hover={false} className="space-y-4">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] font-light">
                Resumen del Estudio
              </h2>
              <p className="text-[var(--color-sf-muted)] text-sm mt-1 font-[family-name:var(--font-body)]">
                {SITE.location}
              </p>
            </div>
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-sf-emerald)] tracking-wider uppercase">
              Venture Studio
            </span>
          </div>

          <p className="text-[var(--color-sf-cream)]/80 text-sm font-[family-name:var(--font-body)] leading-relaxed max-w-3xl">
            {SITE.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <MetricBox label="Proyectos activos" value={String(PROJECTS.length)} />
            <MetricBox label="Stage" value="Pre-seed" />
            <MetricBox label="Modelo" value="Bootstrapped" />
            <MetricBox label="Fundador" value="Nicolas Hernaez" />
          </div>
        </Card>

        {/* Projects Grid */}
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] font-light mb-6">
            Portfolio
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <Link key={project.slug} href={`/investors/${project.slug}`}>
                <Card className="h-full space-y-4 group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{project.icon}</span>
                      <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)] font-light group-hover:text-[var(--color-sf-emerald)] transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <Badge status={project.status} />
                  </div>

                  <p className="text-[var(--color-sf-muted)] text-sm font-[family-name:var(--font-body)]">
                    {project.tagline}
                  </p>

                  {/* Key metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="space-y-0.5">
                        <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
                          {metric.label}
                        </p>
                        <p className="text-[var(--color-sf-cream)] text-sm font-[family-name:var(--font-body)] font-medium">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {(() => {
                    const repos = repoDataMap.get(project.slug);
                    if (repos && repos.length > 0) {
                      const latest = [...repos].sort(
                        (a, b) => new Date(b.lastCommitDate).getTime() - new Date(a.lastCommitDate).getTime()
                      )[0];
                      return (
                        <p className="text-[var(--color-sf-muted)]/50 text-xs font-[family-name:var(--font-mono)] flex items-center gap-1.5">
                          <svg className="w-3 h-3 inline-block" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          Ultimo commit: {formatRelativeDate(latest.lastCommitDate)} ({repos.length} repos)
                        </p>
                      );
                    }
                    return (
                      <p className="text-[var(--color-sf-muted)]/50 text-xs font-[family-name:var(--font-mono)]">
                        Ultima actualizacion: Marzo 2026
                      </p>
                    );
                  })()}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--color-sf-dark)]/50 rounded-lg p-3 space-y-1">
      <p className="text-[var(--color-sf-muted)] text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
        {label}
      </p>
      <p className="text-[var(--color-sf-cream)] text-sm font-[family-name:var(--font-body)] font-medium">
        {value}
      </p>
    </div>
  );
}
