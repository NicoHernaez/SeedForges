interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  className = '',
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!highlight) {
      return <span>{title}</span>;
    }

    const index = title.indexOf(highlight);
    if (index === -1) {
      return <span>{title}</span>;
    }

    const before = title.slice(0, index);
    const after = title.slice(index + highlight.length);

    return (
      <>
        {before}
        <span className="relative bg-gradient-to-r from-[var(--color-sf-emerald)] to-[var(--color-sf-gold)] bg-clip-text text-transparent">
          {highlight}
          <span
            className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full opacity-40"
            style={{
              background: 'linear-gradient(90deg, var(--color-sf-emerald), var(--color-sf-gold))',
              filter: 'blur(4px)',
            }}
          />
        </span>
        {after}
      </>
    );
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {label && (
        <p className="flex items-center gap-3 font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[var(--color-sf-emerald)]">
          <span className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-[var(--color-sf-emerald)]/60" />
          {label}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-sf-cream)] leading-tight">
        {renderTitle()}
      </h2>
    </div>
  );
}
