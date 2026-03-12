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
      <Card hover>
        <div className="space-y-4">
          {/* Header: icon + status */}
          <div className="flex items-start justify-between">
            <span className="text-3xl" role="img" aria-label={project.name}>
              {project.icon}
            </span>
            <Badge status={project.status} />
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
                className={[
                  'px-2.5 py-0.5 rounded-full',
                  'text-xs',
                  'font-[family-name:var(--font-mono)]',
                  'bg-[var(--color-sf-emerald)]/5',
                  'text-[var(--color-sf-emerald)]/70',
                  'border border-[var(--color-sf-emerald)]/10',
                ].join(' ')}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow indicator */}
          <div className="pt-2 flex items-center gap-2 text-[var(--color-sf-emerald)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Card>
    </Link>
  );
}
