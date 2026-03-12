import { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import LogoutButton from '@/components/investors/LogoutButton';
import { PROJECTS } from '@/lib/projects';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Dashboard — Seed Forges Investors',
};

export default function InvestorDashboardPage() {
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

                  <p className="text-[var(--color-sf-muted)]/50 text-xs font-[family-name:var(--font-mono)]">
                    Ultima actualizacion: Marzo 2026
                  </p>
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
