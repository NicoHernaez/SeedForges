type BadgeStatus = 'mvp' | 'development' | 'concept';

interface BadgeProps {
  status: BadgeStatus;
  className?: string;
}

const statusConfig: Record<BadgeStatus, { label: string; classes: string }> = {
  mvp: {
    label: 'MVP',
    classes: 'bg-[var(--color-sf-emerald)]/15 text-[var(--color-sf-emerald)] border-[var(--color-sf-emerald)]/30',
  },
  development: {
    label: 'En desarrollo',
    classes: 'bg-[var(--color-sf-gold)]/15 text-[var(--color-sf-gold)] border-[var(--color-sf-gold)]/30',
  },
  concept: {
    label: 'Concepto',
    classes: 'bg-[var(--color-sf-muted)]/15 text-[var(--color-sf-muted)] border-[var(--color-sf-muted)]/30',
  },
};

export default function Badge({ status, className = '' }: BadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={[
        'inline-flex items-center',
        'px-3 py-0.5',
        'rounded-full',
        'text-xs tracking-wider uppercase',
        'font-[family-name:var(--font-mono)]',
        'border',
        config.classes,
        className,
      ].join(' ')}
    >
      {config.label}
    </span>
  );
}
