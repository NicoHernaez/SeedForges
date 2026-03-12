'use client';

import type { ProjectStatus } from '@/lib/projects';

type FilterValue = ProjectStatus | 'all';

interface StatusFilterProps {
  activeFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'mvp', label: 'MVP' },
  { value: 'development', label: 'En desarrollo' },
  { value: 'concept', label: 'Concepto' },
];

export default function StatusFilter({ activeFilter, onFilterChange }: StatusFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={[
              'px-4 py-2 rounded-full',
              'font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase',
              'border transition-all duration-300 cursor-pointer',
              isActive
                ? 'bg-[var(--color-sf-emerald)]/15 text-[var(--color-sf-emerald)] border-[var(--color-sf-emerald)]/40'
                : 'bg-transparent text-[var(--color-sf-muted)] border-[var(--color-sf-muted)]/20 hover:border-[var(--color-sf-emerald)]/20 hover:text-[var(--color-sf-cream)]',
            ].join(' ')}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
