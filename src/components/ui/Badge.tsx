type BadgeStatus = 'mvp' | 'development' | 'concept';

interface BadgeProps {
  status: BadgeStatus;
  className?: string;
}

const statusConfig: Record<BadgeStatus, { label: string; classes: string; glow: string }> = {
  mvp: {
    label: 'MVP',
    classes: 'bg-[var(--color-sf-emerald)]/15 text-[var(--color-sf-emerald)] border-[var(--color-sf-emerald)]/30',
    glow: 'shadow-[0_0_12px_rgba(16,185,129,0.2),0_0_4px_rgba(16,185,129,0.1)]',
  },
  development: {
    label: 'En desarrollo',
    classes: 'bg-[var(--color-sf-gold)]/15 text-[var(--color-sf-gold)] border-[var(--color-sf-gold)]/30',
    glow: 'shadow-[0_0_12px_rgba(201,162,39,0.2),0_0_4px_rgba(201,162,39,0.1)]',
  },
  concept: {
    label: 'Concepto',
    classes: 'bg-[var(--color-sf-muted)]/15 text-[var(--color-sf-muted)] border-[var(--color-sf-muted)]/30',
    glow: 'shadow-[0_0_8px_rgba(107,124,114,0.1)]',
  },
};

export default function Badge({ status, className = '' }: BadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={[
        'inline-flex items-center',
        'px-3.5 py-1',
        'rounded-full',
        'text-xs tracking-wider uppercase',
        'font-[family-name:var(--font-mono)]',
        'border',
        'backdrop-blur-sm',
        config.classes,
        config.glow,
        className,
      ].join(' ')}
    >
      {config.label}
    </span>
  );
}
