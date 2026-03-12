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
    <div className="min-h-screen bg-[var(--color-sf-dark)] flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-8 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <LogoMark size={100} animate={false} />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-sf-cream)] font-light">
            Portal de Inversores
          </h1>
          <p className="text-[var(--color-sf-muted)] text-sm font-[family-name:var(--font-body)]">
            Ingresa tu clave de acceso
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
        <p className="text-[var(--color-sf-muted)]/60 text-xs font-[family-name:var(--font-mono)]">
          Acceso exclusivo para inversores autorizados
        </p>
      </div>
    </div>
  );
}
