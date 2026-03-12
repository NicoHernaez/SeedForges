'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import LogoMark from '@/components/home/LogoMark';
import Button from '@/components/ui/Button';

export default function InvestorsLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/investors/dashboard');
      } else {
        setError(data.error || 'Error de autenticacion');
      }
    } catch {
      setError('Error de conexion. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-sf-dark)] flex items-center justify-center px-4 tech-grid relative">
      {/* Radial glow behind form */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(16,185,129,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="w-full max-w-sm space-y-8 text-center relative z-10">
        {/* Logo with glow */}
        <div className="flex justify-center">
          <div className="relative">
            <div
              className="absolute inset-0 -m-8 pointer-events-none rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
              }}
            />
            <LogoMark size={100} animate={false} />
          </div>
        </div>

        {/* Shimmer exclusive text */}
        <p className="shimmer-text font-[family-name:var(--font-mono)] text-xs tracking-[0.25em] uppercase">
          Acceso exclusivo para inversores
        </p>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-sf-cream)] font-light">
            Portal de Inversores
          </h1>
          <p className="text-[var(--color-sf-muted)] text-sm font-[family-name:var(--font-body)]">
            Ingresa tu clave de acceso
          </p>
        </div>

        {/* Form with glass */}
        <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Clave de acceso"
            required
            className={[
              'w-full px-4 py-3 rounded-lg',
              'bg-[var(--color-sf-forest)]/60',
              'border border-[var(--color-sf-emerald)]/20',
              'text-[var(--color-sf-cream)]',
              'placeholder:text-[var(--color-sf-muted)]',
              'font-[family-name:var(--font-body)] text-sm',
              'outline-none',
              'focus:border-[var(--color-sf-emerald)]/60',
              'focus:ring-1 focus:ring-[var(--color-sf-emerald)]/30',
              'focus:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
              'transition-all duration-300',
            ].join(' ')}
          />

          {error && (
            <p className="text-red-400 text-sm font-[family-name:var(--font-body)]">
              {error}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={loading || !password}
            className="w-full"
          >
            {loading ? 'Verificando...' : 'Ingresar'}
          </Button>
        </form>

        {/* Footer note */}
        <p className="text-[var(--color-sf-muted)]/60 text-xs font-[family-name:var(--font-mono)] tracking-wider">
          Acceso exclusivo para inversores autorizados
        </p>
      </div>
    </div>
  );
}
