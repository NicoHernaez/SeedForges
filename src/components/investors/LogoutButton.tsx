'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/investors');
  }

  return (
    <button
      onClick={handleLogout}
      className={[
        'text-sm text-[var(--color-sf-muted)]',
        'hover:text-[var(--color-sf-cream)]',
        'font-[family-name:var(--font-body)]',
        'transition-colors duration-200',
        'cursor-pointer',
      ].join(' ')}
    >
      Cerrar sesion
    </button>
  );
}
