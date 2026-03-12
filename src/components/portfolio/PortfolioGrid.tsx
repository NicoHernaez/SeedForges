'use client';

import { useState } from 'react';
import type { ProjectStatus } from '@/lib/projects';
import { PROJECTS } from '@/lib/projects';
import StatusFilter from '@/components/portfolio/StatusFilter';
import ProjectCard from '@/components/portfolio/ProjectCard';

type FilterValue = ProjectStatus | 'all';

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.status === filter);

  return (
    <div className="space-y-10">
      <StatusFilter activeFilter={filter} onFilterChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.slug}
            className="animate-in fade-in duration-500"
            style={{ animationFillMode: 'both' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[var(--color-sf-muted)] font-[family-name:var(--font-body)] py-12">
          No hay proyectos con este estado.
        </p>
      )}
    </div>
  );
}
