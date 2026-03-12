import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Portafolio — Seed Forges',
  description:
    'Conocé los 12+ proyectos de Seed Forges en 5 categorías: IA para PyMEs, consumer, comunidad, industria y laboratorio. Tecnología vertical para negocios reales del interior argentino.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:py-32 max-w-7xl mx-auto space-y-20 tech-grid">
      <ScrollReveal>
        <SectionHeader label="PORTAFOLIO" title="Nuestros proyectos" />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <PortfolioGrid />
      </ScrollReveal>
    </main>
  );
}
