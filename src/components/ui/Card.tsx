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
        'glass',
        'glow-border',
        'p-6',
        'shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(16,185,129,0.05)]',
        'transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]',
        'overflow-hidden',
        hover && [
          'hover:-translate-y-2',
          'hover:scale-[1.01]',
          'hover:shadow-[0_20px_60px_rgba(16,185,129,0.15),0_8px_32px_rgba(0,0,0,0.4)]',
          'hover:border-[var(--color-sf-emerald)]/25',
        ].join(' '),
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Subtle light reflection overlay */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.8), transparent 70%)',
        }}
      />
      {/* Inner shadow for depth */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.03),inset_0_-1px_0_rgba(0,0,0,0.2)]" />
      <div className="relative">{children}</div>
    </div>
  );
}
