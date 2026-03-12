'use client';

import { useState } from 'react';
import type { ProjectStatus, ProjectCategory } from '@/lib/projects';
import { PROJECTS } from '@/lib/projects';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import ProjectCard from '@/components/portfolio/ProjectCard';

type StatusFilterValue = ProjectStatus | 'all';
type CategoryFilterValue = ProjectCategory | 'all';

export default function PortfolioGrid() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterValue>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilterValue>('all');

  const filtered = PROJECTS.filter((p) => {
    const matchCategory = categoryFilter === 'all' || p.category === categoryFilter;
    const matchStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchCategory && matchStatus;
  });

  return (
    <div className="space-y-10">
      <PortfolioFilters
        activeCategory={categoryFilter}
        activeStatus={statusFilter}
        onCategoryChange={setCategoryFilter}
        onStatusChange={setStatusFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          No hay proyectos con estos filtros. Probá otra combinación.
        </p>
      )}
    </div>
  );
}
