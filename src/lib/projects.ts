export type ProjectStatus = 'mvp' | 'development' | 'concept';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  tags: string[];
  problem: string;
  solution: string;
  market: string;
  businessModel: string;
  stack: string[];
  currentStatus: string;
  metrics: { label: string; value: string; trend?: string }[];
  roadmap: {
    quarter: string;
    milestone: string;
    status: 'done' | 'current' | 'upcoming';
  }[];
  financials: { label: string; value: string }[];
  risks: { risk: string; mitigation: string }[];
  ask: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'gerente-virtual',
    name: 'Gerente Virtual',
    tagline: 'El gerente de marketing que todo negocio del interior necesita.',
    icon: '🤖',
    status: 'mvp',
    statusLabel: 'MVP Activo',
    description:
      'Plataforma de IA que genera contenido de marketing personalizado para PyMEs del interior argentino. Automatiza la creación de posts para redes sociales adaptados al tono, identidad visual y audiencia de cada negocio.',
    tags: ['IA Generativa', 'Marketing', 'PyMEs', 'SaaS'],
    problem:
      'Las PyMEs del interior argentino no tienen presupuesto para un equipo de marketing ni tiempo para aprender herramientas complejas. Su presencia digital es nula o inconsistente, perdiendo clientes frente a competidores con mejor visibilidad online.',
    solution:
      'Un asistente de IA que aprende la identidad del negocio (voz, colores, productos) y genera contenido de redes sociales listo para publicar. Incluye evaluación de calidad automática, calendario editorial y una asistente inteligente (Iris) que guía al dueño.',
    market:
      'Más de 600.000 PyMEs en el interior de Argentina. Mercado inicial: comercios y gastronómicos en ciudades de 30.000–150.000 habitantes de La Pampa, Buenos Aires y Córdoba.',
    businessModel:
      'SaaS con 3 tiers: Free (prueba limitada), Starter ($80.000 ARS/mes) y Pro ($150.000 ARS/mes). Revenue recurrente mensual con upsell a features premium como generación de imágenes con DALL-E y asistente Iris.',
    stack: [
      'Next.js 16',
      'TypeScript',
      'Supabase',
      'OpenAI GPT-4o',
      'DALL-E 3',
      'Tailwind CSS',
      'Vercel',
      'Sentry',
      'Playwright',
    ],
    currentStatus:
      'MVP funcional desplegado en producción. 73/78 tests E2E pasando. Sistema de planes y feature gates implementado. Asistente Iris operativa con 10 handlers de intención. Pipeline CI/CD con GitHub Actions.',
    metrics: [
      { label: 'Usuarios registrados', value: '45', trend: '+12 este mes' },
      { label: 'Contenidos generados', value: '1.200+', trend: '+340 este mes' },
      { label: 'Tests E2E pasando', value: '73/78', trend: '93.6%' },
      { label: 'Uptime', value: '99.8%', trend: 'Últimos 30 días' },
    ],
    roadmap: [
      { quarter: 'Q4 2025', milestone: 'MVP core: generación de contenido + evaluator', status: 'done' },
      { quarter: 'Q1 2026', milestone: 'Iris asistente, Business DNA, calendario editorial', status: 'done' },
      { quarter: 'Q1 2026', milestone: 'Feature gates, planes de pago, CI/CD', status: 'current' },
      { quarter: 'Q2 2026', milestone: 'WhatsApp Business integration, onboarding guiado', status: 'upcoming' },
      { quarter: 'Q3 2026', milestone: 'Multi-plataforma (IG + TikTok + Google My Business)', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (bootstrapped)' },
      { label: 'MRR actual', value: 'Pre-revenue (beta abierta)' },
      { label: 'MRR proyectado Q3 2026', value: 'ARS 2.4M (~50 Starter + 10 Pro)' },
      { label: 'CAC estimado', value: 'ARS 15.000 (orgánico + referidos)' },
      { label: 'LTV estimado (12 meses)', value: 'ARS 1.2M (Starter) / ARS 1.8M (Pro)' },
    ],
    risks: [
      {
        risk: 'Adopción digital baja en PyMEs del interior',
        mitigation: 'Onboarding simplificado, WhatsApp como canal principal, demos presenciales en cámaras de comercio',
      },
      {
        risk: 'Dependencia de OpenAI API',
        mitigation: 'Abstracción de proveedor en orchestrator, evaluación de alternativas locales (Llama, Mistral)',
      },
      {
        risk: 'Competencia de herramientas globales (Canva AI, Jasper)',
        mitigation: 'Diferenciación por localización (slang argentino, feriados locales, integración MercadoPago)',
      },
    ],
    ask: 'Ronda pre-seed de USD 50.000 para: verificación WhatsApp Business, hiring de growth marketer para interior, e infraestructura para escalar a 500 usuarios.',
  },
  {
    slug: 'sexto-sentido',
    name: '6to Sentido',
    tagline: 'Contenido que conecta, generado por IA que entiende tu negocio.',
    icon: '🧠',
    status: 'development',
    statusLabel: 'En Desarrollo',
    description:
      'Evolución white-label de la tecnología de Gerente Virtual. Plataforma SaaS de generación de contenido con IA que aprende el ADN de cada marca para crear publicaciones auténticas y efectivas.',
    tags: ['IA Generativa', 'Content Marketing', 'SaaS', 'White Label'],
    problem:
      'Las agencias de marketing y freelancers pierden horas creando contenido repetitivo para múltiples clientes. Las herramientas genéricas producen contenido genérico que no refleja la identidad de cada marca.',
    solution:
      'Motor de IA que construye un "Business DNA" por cliente: identidad visual, tono de voz, productos y audiencia. Genera contenido personalizado a escala con evaluación de calidad automática y aprendizaje continuo.',
    market:
      'Agencias de marketing digital en LATAM (estimado 15.000+ en Argentina). Freelancers de community management. Mercado global de content marketing AI proyectado en USD 15B para 2028.',
    businessModel:
      'SaaS B2B con pricing por cantidad de marcas gestionadas. Tier agencia con white-label. Comisión por marketplace de templates verticales.',
    stack: [
      'Next.js 16',
      'TypeScript',
      'Supabase',
      'OpenAI',
      'Tailwind CSS',
      'Vercel',
    ],
    currentStatus:
      'Tecnología core compartida con Gerente Virtual. Separación de producto en curso. Definición de branding y posicionamiento B2B.',
    metrics: [
      { label: 'Tecnología core', value: 'Validada en producción' },
      { label: 'Handlers de IA', value: '10 intenciones activas' },
      { label: 'Precisión evaluator', value: '87%', trend: 'Mejorando con feedback' },
      { label: 'Tiempo generación', value: '<8s por contenido' },
    ],
    roadmap: [
      { quarter: 'Q1 2026', milestone: 'Core engine validado via Gerente Virtual', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'Separación de producto, API pública, multi-tenant', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'Dashboard para agencias, white-label, onboarding B2B', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Marketplace de templates, integraciones CRM', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (bootstrapped, tech compartida)' },
      { label: 'Revenue proyectado Q4 2026', value: 'USD 5.000/mes (10 agencias)' },
      { label: 'Precio target agencia', value: 'USD 200–800/mes según marcas' },
      { label: 'Margen bruto estimado', value: '75% (costo AI por generación ~USD 0.03)' },
    ],
    risks: [
      {
        risk: 'Saturación del mercado de herramientas AI para contenido',
        mitigation: 'Foco en LATAM, soporte en español nativo, integración con ecosistema local (MercadoLibre, WhatsApp Business)',
      },
      {
        risk: 'Complejidad de multi-tenancy y white-label',
        mitigation: 'Arquitectura modular desde el inicio, Supabase RLS para aislamiento de datos',
      },
    ],
    ask: 'Buscamos partner técnico o inversión de USD 30.000 para acelerar la separación de producto y primeras 10 agencias piloto.',
  },
  {
    slug: 'cerca',
    name: 'CERCA',
    tagline: 'Conectando al interior con sus comercios, barrio por barrio.',
    icon: '📍',
    status: 'development',
    statusLabel: 'En Desarrollo',
    description:
      'Plataforma hiperlocal que conecta comercios del interior argentino con vecinos de su zona. Directorio inteligente con búsqueda por proximidad, recomendaciones personalizadas y herramientas para comerciantes.',
    tags: ['Marketplace Local', 'Geolocalización', 'Comercio', 'Interior'],
    problem:
      'En ciudades del interior, los vecinos no conocen todos los comercios de su barrio. Google Maps tiene datos incompletos y desactualizados. Los comerciantes pequeños no tienen presencia digital accesible.',
    solution:
      'App hiperlocal con directorio verificado de comercios, búsqueda por proximidad y categoría, sistema de recomendaciones de vecinos, y panel simple para que comerciantes actualicen horarios, ofertas y novedades.',
    market:
      'Ciudades argentinas de 20.000–200.000 habitantes. +2.000 localidades con comercios activos sin presencia digital adecuada. Mercado de publicidad local digital en Argentina: USD 800M/año.',
    businessModel:
      'Freemium para comerciantes (listado básico gratis). Premium con analytics, ofertas destacadas y herramientas de fidelización. Revenue por publicidad hiperlocal geosegmentada.',
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostGIS',
      'Mapbox',
      'PWA',
      'Vercel',
    ],
    currentStatus:
      'Fase de diseño y validación. Investigación de mercado en General Pico y Santa Rosa. Prototipo de directorio en desarrollo.',
    metrics: [
      { label: 'Comercios mapeados (research)', value: '320+', trend: 'General Pico + Santa Rosa' },
      { label: 'Categorías definidas', value: '24' },
      { label: 'Entrevistas a comerciantes', value: '15', trend: 'En curso' },
      { label: 'Ciudades target iniciales', value: '3' },
    ],
    roadmap: [
      { quarter: 'Q1 2026', milestone: 'Research de mercado, entrevistas, diseño UX', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'MVP directorio con geolocalización, onboarding comerciantes', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'Lanzamiento en General Pico, sistema de reseñas', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Expansión a 3 ciudades, ofertas y fidelización', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (bootstrapped)' },
      { label: 'Revenue model', value: 'Freemium + premium + ads locales' },
      { label: 'Precio premium comerciante', value: 'ARS 25.000–50.000/mes' },
      { label: 'Break-even estimado', value: '200 comerciantes premium en 2 ciudades' },
    ],
    risks: [
      {
        risk: 'Efecto red: necesita masa crítica de comercios y usuarios',
        mitigation: 'Lanzamiento ciudad por ciudad con cobertura completa antes de expandir. Alianzas con cámaras de comercio locales.',
      },
      {
        risk: 'Competencia de Google Maps y redes sociales',
        mitigation: 'Datos hiperlocales curados que Google no tiene. Foco en la relación vecino-comercio, no solo discovery.',
      },
      {
        risk: 'Baja digitalización de comerciantes',
        mitigation: 'Onboarding presencial. Panel ultra-simple tipo WhatsApp. Soporte telefónico.',
      },
    ],
    ask: 'Buscamos USD 40.000 para desarrollo del MVP, equipo de campo para onboarding de comerciantes en 3 ciudades piloto, e infraestructura de mapas.',
  },
  {
    slug: 'abuelo-matias',
    name: 'Abuelo Matías',
    tagline: 'Historias que conectan generaciones, preservadas con inteligencia artificial.',
    icon: '🎴',
    status: 'concept',
    statusLabel: 'Concepto',
    description:
      'Plataforma de preservación de memorias familiares usando IA conversacional. Entrevista a abuelos y adultos mayores de forma natural, transcribe y organiza sus historias, y genera libros de memorias digitales para las familias.',
    tags: ['IA Conversacional', 'Memorias', 'Familias', 'Impacto Social'],
    problem:
      'Las historias de nuestros abuelos se pierden cuando ya no están. Las familias quieren preservar memorias pero no saben cómo hacerlo de forma sistemática. La tecnología actual intimida a los adultos mayores.',
    solution:
      'Asistente de IA que conversa naturalmente con adultos mayores (voz o texto), hace preguntas que despiertan recuerdos, transcribe y organiza las historias en un libro digital. Interfaz diseñada para baja barrera tecnológica.',
    market:
      'Familias argentinas y latinoamericanas con abuelos vivos. Mercado de preservación de memorias digitales en crecimiento global. Potencial en residencias geriátricas y centros de jubilados.',
    businessModel:
      'Freemium: 5 historias gratis. Plan Familia (ARS 5.000/mes) con historias ilimitadas y libro digital. Plan Legado (ARS 15.000 one-time) con libro impreso y edición profesional.',
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'OpenAI Whisper',
      'Claude API',
      'Web Speech API',
      'Vercel',
    ],
    currentStatus:
      'Fase de concepto e investigación. Prototipo conversacional en experimentación. Validación con familias del entorno cercano.',
    metrics: [
      { label: 'Entrevistas de validación', value: '8 familias' },
      { label: 'Prototipo conversacional', value: 'En experimentación' },
      { label: 'Interés declarado', value: '90%', trend: 'De familias entrevistadas' },
      { label: 'Historias piloto grabadas', value: '12' },
    ],
    roadmap: [
      { quarter: 'Q1 2026', milestone: 'Concepto, investigación, entrevistas de validación', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'Prototipo conversacional, transcripción automática', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'MVP con generación de libro digital, beta cerrada', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Lanzamiento público, partnerships con residencias', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (concepto)' },
      { label: 'Costo estimado MVP', value: 'USD 15.000' },
      { label: 'Revenue proyectado año 1', value: 'ARS 3M (200 familias Plan Familia + 50 Legado)' },
      { label: 'Margen bruto estimado', value: '80% (digital) / 40% (impreso)' },
    ],
    risks: [
      {
        risk: 'Barrera tecnológica para adultos mayores',
        mitigation: 'Interfaz de voz como canal principal. Diseño accesible (texto grande, contraste alto). Onboarding asistido por familiar.',
      },
      {
        risk: 'Sensibilidad emocional del contenido',
        mitigation: 'Prompts diseñados con psicólogos. Detección de distress. Opción de pausar y retomar.',
      },
      {
        risk: 'Calidad de transcripción con acentos regionales',
        mitigation: 'Fine-tuning de Whisper con audio regional argentino. Corrección humana en Plan Legado.',
      },
    ],
    ask: 'Buscamos USD 20.000 para desarrollo del MVP, consultoría con gerontólogos, y piloto en 3 centros de jubilados de La Pampa.',
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
