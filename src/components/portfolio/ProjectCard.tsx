import Link from 'next/link';
import type { Project } from '@/lib/projects';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="block group">
      <Card hover={false} className="glow-border transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-[10px] group-hover:scale-[1.02] group-hover:shadow-[0_24px_80px_rgba(16,185,129,0.2),0_12px_40px_rgba(0,0,0,0.5)]">
        <div className="space-y-4">
          {/* Header: icon + status + hover arrow */}
          <div className="flex items-start justify-between">
            <div className="relative">
              {/* Radial glow behind icon */}
              <div
                className="absolute -inset-4 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(circle, rgba(16,185,129,0.6) 0%, transparent 70%)',
                }}
              />
              <span
                className="relative text-5xl block transition-transform duration-500 group-hover:scale-110"
                role="img"
                aria-label={project.name}
              >
                {project.icon}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge status={project.status} />
              {/* Arrow that appears on hover */}
              <svg
                className="w-4 h-4 text-[var(--color-sf-emerald)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>
          </div>

          {/* Name */}
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)] group-hover:text-white transition-colors duration-300">
            {project.name}
          </h3>

          {/* Tagline */}
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase text-[var(--color-sf-gold)] leading-relaxed">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-[family-name:var(--font-mono)] bg-[var(--color-sf-emerald)]/5 text-[var(--color-sf-emerald)]/70 border border-[var(--color-sf-emerald)]/10 transition-all duration-300 hover:border-[var(--color-sf-emerald)]/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] hover:text-[var(--color-sf-emerald)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow indicator */}
          <div className="pt-2 flex items-center gap-2 text-[var(--color-sf-emerald)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase">
              Ver proyecto
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>
      </Card>
    </Link>
  );
}
