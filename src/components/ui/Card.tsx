interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={[
        'relative',
        'rounded-2xl',
        'bg-[var(--color-sf-forest)]/40',
        'backdrop-blur-md',
        'border border-[var(--color-sf-emerald)]/10',
        'p-6',
        'transition-all duration-500 ease-out',
        hover && [
          'hover:-translate-y-1.5',
          'hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]',
          'hover:border-[var(--color-sf-emerald)]/25',
        ].join(' '),
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
}
