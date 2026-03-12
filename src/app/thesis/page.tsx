import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Tesis de Inversión — Seed Forges',
  description:
    'La tesis de inversión de Seed Forges: IA vertical para PyMEs del interior argentino. WhatsApp-first, zero-integration, go-to-market presencial.',
};

const sections = [
  {
    label: '01',
    title: 'La Oportunidad',
    content: [
      'Más de 500.000 PyMEs en el interior de Argentina operan sin software adaptado a su realidad. No usan CRMs, no tienen presencia digital efectiva, y las herramientas globales no entienden su contexto.',
      'El mercado es masivo y está completamente desatendido. Las soluciones que existen fueron diseñadas para empresas de Buenos Aires o para mercados de habla inglesa. El comerciante de General Pico, de Trenque Lauquen, de Villa María, no tiene nada hecho para él.',
      'Esa brecha es nuestra oportunidad.',
    ],
  },
  {
    label: '02',
    title: 'Por qué IA Vertical',
    content: [
      'Las herramientas genéricas de IA no funcionan para una verdulería en General Pico. No conocen los feriados locales, no entienden el lenguaje del mostrador, no saben que el martes hay feria.',
      'Un agente de IA vertical que conoce la industria es infinitamente más valioso que una herramienta horizontal. El agente no es un asistente: es un gerente que entiende el negocio.',
      'La verticalización es el producto. El agente ES el sistema.',
    ],
    highlight: 'El agente ES el sistema.',
  },
  {
    label: '03',
    title: 'Por qué WhatsApp-First',
    content: [
      '98% de penetración en Argentina. Es el canal de comunicación universal. El comerciante ya lo tiene en el bolsillo, ya sabe usarlo, ya confía en él.',
      'Cero curva de aprendizaje. Cero necesidad de instalar nada. Cero fricción. El hardware que el comerciante ya tiene es suficiente.',
      'WhatsApp no es un canal más: es LA interfaz del comerciante argentino.',
    ],
    highlight: 'LA interfaz del comerciante argentino.',
  },
  {
    label: '04',
    title: 'Por qué Zero-Integration',
    content: [
      'El SaaS tradicional requiere que el comerciante se adapte: que aprenda un CRM, que configure un POS, que migre sus datos. Eso no funciona en el interior.',
      'Nuestros agentes no se integran a sistemas existentes. Nuestros agentes SON el sistema. No hay nada que configurar, no hay nada que aprender.',
      'El agente llega, entiende el negocio, y opera. Así de simple.',
    ],
    highlight: 'Nuestros agentes SON el sistema.',
  },
  {
    label: '05',
    title: 'Por qué Presencial',
    content: [
      'Go-to-market ciudad por ciudad, cara a cara. La confianza en el interior se construye en el mostrador, no con Facebook Ads.',
      '$0 en marketing digital. Toda la adquisición es orgánica, por referidos, por presencia física. Entramos a cada ciudad con cobertura completa antes de pasar a la siguiente.',
      'Este modelo es más lento pero infinitamente más sólido. Cada comerciante onboarded es un embajador.',
    ],
    highlight: '$0 en marketing digital.',
  },
  {
    label: '06',
    title: 'El Modelo de Capas',
    content: [
      'Layer 1: Suscripción B2B. El comerciante paga un fee mensual por su agente de IA. Revenue recurrente, predecible, con unit economics claros.',
      'Layer 2: Fee al consumidor vía marketplace (CERCA). 3-5% por transacción cuando el vecino compra a través de la plataforma. Revenue que crece con el volumen.',
      'Ambas capas se potencian mutuamente. Más comerciantes en Layer 1 = más oferta en Layer 2. Más consumidores en Layer 2 = más valor para Layer 1. El flywheel compound.',
    ],
  },
  {
    label: '07',
    title: 'El Ecosistema',
    content: [
      '12+ proyectos no son experimentos aislados. Son piezas de un ecosistema que comparte infraestructura, aprendizajes y usuarios.',
      'Gerente Virtual genera contenido para el comerciante. CERCA conecta ese comerciante con sus vecinos. 6to Sentido escala la tecnología a agencias. Cada proyecto alimenta al siguiente.',
      'El todo es mayor que la suma de las partes. Eso es un venture studio, no una startup.',
    ],
    highlight: 'El todo es mayor que la suma de las partes.',
  },
  {
    label: '08',
    title: 'El Laboratorio',
    content: [
      '7Tres7 no es solo una marca de empanadas. Con 9.000 unidades por mes, es un laboratorio viviente donde cada tecnología se testea con clientes reales antes de escalar.',
      'Pedidos online, sistema de caja, gestión de producción, marketing automatizado: todo se prueba primero en un negocio real con volumen real.',
      'Cuando algo funciona en 7Tres7, está listo para el mundo.',
    ],
    highlight: '9.000 unidades por mes.',
  },
];

export default function ThesisPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:py-32 max-w-5xl mx-auto space-y-24 tech-grid">
      {/* Hero */}
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-light gradient-text">
            Tesis de Inversión
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-sf-muted)] max-w-2xl mx-auto leading-relaxed">
            Por qué IA vertical para PyMEs del interior argentino es la oportunidad más grande y más ignorada de LATAM.
          </p>
        </div>
      </ScrollReveal>

      {/* Sections */}
      {sections.map((section, index) => (
        <ScrollReveal key={section.label} delay={100 + index * 50}>
          <section className="space-y-6">
            <SectionHeader label={section.label} title={section.title} highlight={section.highlight} />
            <Card hover={false}>
              <div className="space-y-4">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-[family-name:var(--font-body)] text-[var(--color-sf-muted)] leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </section>
        </ScrollReveal>
      ))}

      {/* CTA */}
      <ScrollReveal delay={600}>
        <section className="space-y-8 text-center section-glow">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-[var(--color-sf-cream)]">
            La semilla ya está plantada.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-sf-muted)] max-w-2xl mx-auto leading-relaxed">
            12+ proyectos en producción. Tecnología validada con clientes reales. Un ecosistema que se retroalimenta.
            Lo que falta es escalar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase bg-[var(--color-sf-emerald)]/10 text-[var(--color-sf-emerald)] border border-[var(--color-sf-emerald)]/30 hover:bg-[var(--color-sf-emerald)]/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300"
            >
              Ver portafolio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-[family-name:var(--font-mono)] text-sm tracking-wider uppercase bg-[var(--color-sf-gold)]/10 text-[var(--color-sf-gold)] border border-[var(--color-sf-gold)]/30 hover:bg-[var(--color-sf-gold)]/20 hover:shadow-[0_0_30px_rgba(201,162,39,0.15)] transition-all duration-300"
            >
              Portal inversores
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
