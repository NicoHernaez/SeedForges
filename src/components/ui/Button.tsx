'use client';

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
    'text-white font-bold',
    'shadow-[0_4px_20px_rgba(16,185,129,0.3),0_0_0_1px_rgba(16,185,129,0.2)]',
    'hover:shadow-[0_8px_40px_rgba(16,185,129,0.4),0_0_0_1px_rgba(16,185,129,0.3)]',
    'hover:scale-[1.02]',
    'active:scale-[0.98] active:brightness-95',
  ].join(' '),
  secondary: [
    'bg-transparent',
    'border border-[rgba(16,185,129,0.3)]',
    'text-[var(--color-sf-emerald)]',
    'hover:bg-[var(--color-sf-emerald)]/10',
    'hover:border-[var(--color-sf-emerald)]',
    'hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
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
  const isPrimary = variant === 'primary';

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

  const primaryStyle = isPrimary
    ? {
        background: 'linear-gradient(135deg, #10b981, #0d9668, #c9a227)',
        backgroundSize: '200% 100%',
        backgroundPosition: '0% center',
        transition: 'all 0.3s ease-out, background-position 0.5s ease',
      }
    : undefined;

  const primaryHoverHandlers = isPrimary
    ? {
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.backgroundPosition = '100% center';
        },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.backgroundPosition = '0% center';
        },
      }
    : {};

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        style={primaryStyle}
        {...primaryHoverHandlers}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      style={primaryStyle}
      onClick={onClick}
      disabled={disabled}
      {...primaryHoverHandlers}
    >
      {children}
    </button>
  );
}
