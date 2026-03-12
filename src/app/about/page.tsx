import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Nosotros — Seed Forges',
  description:
    'Conocé la historia, el equipo y la tesis de inversión de Seed Forges. IA vertical para los negocios que mueven la economía real del interior argentino.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:py-32 max-w-5xl mx-auto space-y-24">
      {/* Hero */}
      <div className="space-y-6 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-sf-cream)]">
          Sobre Seed Forges
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-sf-muted)] max-w-2xl mx-auto leading-relaxed">
          Un venture studio nacido en el interior argentino, construyendo tecnología para los negocios que mueven la economía real.
        </p>
      </div>

      {/* Historia */}
      <section className="space-y-6">
        <SectionHeader label="HISTORIA" title="De comerciante a founder" />
        <Card hover={false}>
          <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed text-lg">
            De comerciante a founder. Nico Hernáez lleva más de 20 años en la industria gastronómica argentina.
            Dueño de 7Tres7 (empanadas artesanales, ~9.000 unidades/mes) y Los García (helados artesanales),
            la visión de Seed Forges nació donde nacen las mejores ideas: en el mostrador, atendiendo al vecino todos los días.
          </p>
        </Card>
      </section>

      {/* Fundador */}
      <section className="space-y-6">
        <SectionHeader label="EQUIPO" title="Fundador" />
        <Card hover={false}>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <Image
              src="/images/nico-hernaez.jpeg"
              alt="Nico Hernáez — Fundador de Seed Forges"
              width={128}
              height={128}
              className="shrink-0 w-32 h-32 rounded-2xl object-cover border border-[var(--color-sf-emerald)]/20"
            />
            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-sf-cream)]">
                Nico Hernáez
              </h3>
              <p className="font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase text-[var(--color-sf-gold)]">
                Fundador & CEO
              </p>
              <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed">
                Emprendedor con +20 años en gastronomía, sommelier certificado. No es un tech founder clásico:
                es un comerciante que entiende los problemas desde la operación diaria y construye soluciones con IA.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Tesis de Inversion */}
      <section className="space-y-6">
        <SectionHeader label="TESIS" title="Tesis de inversión" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hover={false}>
            <div className="space-y-3">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)]">
                Por qué el interior argentino
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] leading-relaxed">
                +500.000 PyMEs sin software adaptado a su realidad.
              </p>
            </div>
          </Card>
          <Card hover={false}>
            <div className="space-y-3">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)]">
                Por qué IA vertical
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] leading-relaxed">
                Un agente que conoce el rubro &gt; una herramienta genérica.
              </p>
            </div>
          </Card>
          <Card hover={false}>
            <div className="space-y-3">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)]">
                Por qué WhatsApp-first
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] leading-relaxed">
                El hardware que el comerciante ya tiene.
              </p>
            </div>
          </Card>
          <Card hover={false}>
            <div className="space-y-3">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)]">
                Por qué zero-integration
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] leading-relaxed">
                El agente ES el sistema, no se integra a otro.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Principios */}
      <section className="space-y-6">
        <SectionHeader label="FILOSOFÍA" title="Principios" />
        <div className="space-y-4">
          {[
            { letter: 'a', text: 'El agente es un gerente, no un chatbot' },
            { letter: 'b', text: 'Cero integración: el agente ES el sistema' },
            { letter: 'c', text: 'La verticalización es el producto' },
            { letter: 'd', text: 'Hardware que el comerciante ya tiene' },
            { letter: 'e', text: 'Go-to-market presencial, ciudad por ciudad' },
          ].map((item) => (
            <Card key={item.letter} hover={false}>
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-sf-emerald)]/10 border border-[var(--color-sf-emerald)]/20 flex items-center justify-center font-[family-name:var(--font-mono)] text-xs text-[var(--color-sf-emerald)]">
                  {item.letter}
                </span>
                <p className="font-[family-name:var(--font-body)] text-[var(--color-sf-cream)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Modelo de Negocio */}
      <section className="space-y-6">
        <SectionHeader label="MODELO" title="Modelo de Negocio" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Layer 1 */}
          <Card hover={false}>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase text-[var(--color-sf-emerald)]">
                  Layer 1
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)]">
                  B2B Suscripción
                </h3>
              </div>
              <div className="space-y-2">
                {[
                  { tier: 'Starter', price: '$35.000 ARS/mes' },
                  { tier: 'Growth', price: '$55.000 ARS/mes' },
                  { tier: 'Pro', price: '$85.000 ARS/mes' },
                ].map((plan) => (
                  <div
                    key={plan.tier}
                    className="flex items-center justify-between py-2 border-b border-[var(--color-sf-emerald)]/10 last:border-0"
                  >
                    <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)]">
                      {plan.tier}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-sf-gold)]">
                      {plan.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Layer 2 */}
          <Card hover={false}>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase text-[var(--color-sf-emerald)]">
                  Layer 2
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-sf-cream)]">
                  Fee al Consumidor
                </h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-sf-muted)] leading-relaxed">
                3-5% por transacción vía CERCA. Modelo marketplace hiperlocal que conecta vecinos con comercios del barrio.
              </p>
              <div className="pt-2 border-t border-[var(--color-sf-emerald)]/10">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-sf-gold)]">
                  Breakeven: 8-10 merchants activos (mes 3-4)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
