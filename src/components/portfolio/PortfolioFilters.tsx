'use client';

import type { ProjectStatus, ProjectCategory, Category } from '@/lib/projects';
import { CATEGORIES } from '@/lib/projects';

type StatusFilterValue = ProjectStatus | 'all';
type CategoryFilterValue = ProjectCategory | 'all';

interface PortfolioFiltersProps {
  activeCategory: CategoryFilterValue;
  activeStatus: StatusFilterValue;
  onCategoryChange: (category: CategoryFilterValue) => void;
  onStatusChange: (status: StatusFilterValue) => void;
}

const statusFilters: { value: StatusFilterValue; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'mvp', label: 'Operativo/MVP' },
  { value: 'development', label: 'En desarrollo' },
  { value: 'concept', label: 'Concepto' },
];

export default function PortfolioFilters({
  activeCategory,
  activeStatus,
  onCategoryChange,
  onStatusChange,
}: PortfolioFiltersProps) {
  const categoryFilters: { value: CategoryFilterValue; label: string; icon?: string }[] = [
    { value: 'all', label: 'Todos' },
    ...CATEGORIES.map((cat: Category) => ({
      value: cat.slug as CategoryFilterValue,
      label: cat.name,
      icon: cat.icon,
    })),
  ];

  return (
    <div className="space-y-4">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {categoryFilters.map((filter) => {
          const isActive = activeCategory === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => onCategoryChange(filter.value)}
              className={[
                'px-4 py-2 rounded-full',
                'font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase',
                'border transition-all duration-300 cursor-pointer',
                'flex items-center gap-1.5',
                isActive
                  ? 'bg-[var(--color-sf-emerald)]/15 text-[var(--color-sf-emerald)] border-[var(--color-sf-emerald)]/40'
                  : 'bg-transparent text-[var(--color-sf-muted)] border-[var(--color-sf-muted)]/20 hover:border-[var(--color-sf-emerald)]/20 hover:text-[var(--color-sf-cream)]',
              ].join(' ')}
            >
              {filter.icon && <span className="text-sm">{filter.icon}</span>}
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Status filters */}
      <div className="flex flex-wrap gap-2">
        {statusFilters.map((filter) => {
          const isActive = activeStatus === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => onStatusChange(filter.value)}
              className={[
                'px-3 py-1.5 rounded-full',
                'font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase',
                'border transition-all duration-300 cursor-pointer',
                isActive
                  ? 'bg-[var(--color-sf-gold)]/10 text-[var(--color-sf-gold)] border-[var(--color-sf-gold)]/30'
                  : 'bg-transparent text-[var(--color-sf-muted)]/70 border-[var(--color-sf-muted)]/15 hover:border-[var(--color-sf-gold)]/20 hover:text-[var(--color-sf-cream)]',
              ].join(' ')}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
