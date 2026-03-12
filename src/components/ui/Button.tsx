import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-r from-[var(--color-sf-emerald)] to-[var(--color-sf-gold)]',
    'text-[var(--color-sf-dark)] font-semibold',
    'shadow-lg shadow-[var(--color-sf-emerald)]/20',
    'hover:shadow-xl hover:shadow-[var(--color-sf-emerald)]/30',
    'hover:brightness-110',
    'active:brightness-95',
  ].join(' '),
  secondary: [
    'bg-transparent',
    'border border-[var(--color-sf-emerald)]/50',
    'text-[var(--color-sf-emerald)]',
    'hover:bg-[var(--color-sf-emerald)]/10',
    'hover:border-[var(--color-sf-emerald)]',
  ].join(' '),
  ghost: [
    'bg-transparent',
    'text-[var(--color-sf-cream)]',
    'hover:underline hover:underline-offset-4',
    'hover:decoration-[var(--color-sf-emerald)]',
  ].join(' '),
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'rounded-lg',
    'font-[family-name:var(--font-body)]',
    'transition-all duration-300 ease-out',
    'cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses[variant],
    className,
  ].join(' ');

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
