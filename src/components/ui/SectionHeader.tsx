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
        <span className="bg-gradient-to-r from-[var(--color-sf-emerald)] to-[var(--color-sf-gold)] bg-clip-text text-transparent">
          {highlight}
        </span>
        {after}
      </>
    );
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[var(--color-sf-emerald)]">
          {label}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-sf-cream)] leading-tight">
        {renderTitle()}
      </h2>
    </div>
  );
}
