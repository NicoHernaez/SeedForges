export type ProjectStatus = 'mvp' | 'development' | 'concept';

export type ProjectCategory = 'ia-pymes' | 'consumer-social' | 'comunidad' | 'laboratorio';

export interface Category {
  slug: ProjectCategory;
  name: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { slug: 'ia-pymes', name: 'IA para PyMEs', icon: '🤖' },
  { slug: 'consumer-social', name: 'Consumer & Social', icon: '🎮' },
  { slug: 'comunidad', name: 'Comunidad', icon: '👯' },
  { slug: 'laboratorio', name: 'Laboratorio', icon: '🔬' },
];

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  status: ProjectStatus;
  statusLabel: string;
  category: ProjectCategory;
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
  githubRepos?: string[];
}

export const PROJECTS: Project[] = [
  // ─── IA PARA PYMES ───────────────────────────────────────────────────

  {
    slug: 'gerente-virtual',
    name: 'Gerente Virtual',
    tagline: 'El gerente de marketing que todo negocio del interior necesita.',
    icon: '🤖',
    status: 'mvp',
    statusLabel: 'MVP Activo',
    category: 'ia-pymes',
    description:
      'Plataforma WhatsApp-native de gestión integral para PyMEs del interior argentino. Arquitectura multi-agente con un orquestador "Jefe" que coordina agentes verticales especializados (GASTRO, VERDE, FERRE) y una estrategia de hardware con MercadoPago Point Smart. 4 documentos fundacionales de arquitectura definen el sistema. Piloto activo en 7Tres7 (restaurante del fundador). Go-to-market presencial ciudad por ciudad.',
    tags: ['IA Generativa', 'WhatsApp', 'Multi-Agente', 'PyMEs', 'SaaS'],
    problem:
      'Las PyMEs del interior argentino no tienen presupuesto para un equipo de marketing ni tiempo para aprender herramientas complejas. Su presencia digital es nula o inconsistente, perdiendo clientes frente a competidores con mejor visibilidad online.',
    solution:
      'Sistema WhatsApp-native con orquestador "Jefe" que coordina agentes verticales especializados por rubro (GASTRO para gastronomía, VERDE para viveros, FERRE para ferreterías). Incluye integración con MercadoPago Point Smart como estrategia de hardware, evaluación de calidad automática y asistente inteligente Iris. Despliegue presencial ciudad por ciudad.',
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
      'Claude API',
      'WhatsApp Business API',
      'MercadoPago',
      'n8n',
      'Tailwind CSS',
      'Vercel',
      'Sentry',
      'Playwright',
    ],
    currentStatus:
      'Piloto activo en 7Tres7 (restaurante del fundador). 4 documentos fundacionales de arquitectura completados. Agentes verticales en diseño. Orquestador "Jefe" en desarrollo. Go-to-market presencial planificado.',
    metrics: [
      { label: 'Piloto activo', value: '7Tres7', trend: 'Restaurante del fundador' },
      { label: 'Documentos fundacionales', value: '4', trend: 'Arquitectura completa' },
      { label: 'Agentes verticales', value: '3', trend: 'GASTRO, VERDE, FERRE' },
      { label: 'Tests E2E pasando', value: '73/78', trend: '93.6%' },
    ],
    roadmap: [
      { quarter: 'Q4 2025', milestone: 'MVP core: generación de contenido + evaluator', status: 'done' },
      { quarter: 'Q1 2026', milestone: 'Iris asistente, Business DNA, calendario editorial', status: 'done' },
      { quarter: 'Q1 2026', milestone: 'Arquitectura multi-agente, documentos fundacionales', status: 'current' },
      { quarter: 'Q2 2026', milestone: 'WhatsApp Business integration, agentes verticales', status: 'upcoming' },
      { quarter: 'Q3 2026', milestone: 'Go-to-market presencial, MercadoPago Point Smart', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (bootstrapped)' },
      { label: 'MRR actual', value: 'Pre-revenue (piloto en 7Tres7)' },
      { label: 'MRR proyectado Q3 2026', value: 'ARS 2.4M (~50 Starter + 10 Pro)' },
      { label: 'CAC estimado', value: 'ARS 15.000 (orgánico + presencial)' },
      { label: 'LTV estimado (12 meses)', value: 'ARS 1.2M (Starter) / ARS 1.8M (Pro)' },
    ],
    risks: [
      {
        risk: 'Adopción digital baja en PyMEs del interior',
        mitigation: 'WhatsApp como canal principal (ya lo usan). Onboarding presencial ciudad por ciudad. MercadoPago Point Smart como caballo de Troya hardware.',
      },
      {
        risk: 'Dependencia de múltiples APIs de IA',
        mitigation: 'Abstracción de proveedor en orchestrator. n8n como capa de orquestación. Evaluación de alternativas locales.',
      },
      {
        risk: 'Competencia de herramientas globales (Canva AI, Jasper)',
        mitigation: 'Diferenciación por localización (slang argentino, feriados locales), integración WhatsApp-native y go-to-market presencial imposible de replicar remotamente.',
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
    category: 'ia-pymes',
    description:
      'Plataforma SaaS de generación de contenido con IA que aprende el ADN de cada marca. Archivo SOUL como moat competitivo. 5 agentes especializados (DNA Scanner, Creativo, Lucy, CRM, Jefe) orquestados por un sistema central. Business DNA Schema V2 con 6 tablas. Feature estrella: Híper Flash — generación de contenido instantáneo con contexto profundo del negocio.',
    tags: ['IA Generativa', 'Content Marketing', 'SaaS', 'Multi-Agente', 'SOUL'],
    problem:
      'Las agencias de marketing y freelancers pierden horas creando contenido repetitivo para múltiples clientes. Las herramientas genéricas producen contenido genérico que no refleja la identidad de cada marca.',
    solution:
      'Motor de IA con archivo SOUL como moat competitivo: construye un "Business DNA" profundo por cliente (identidad visual, tono de voz, productos, audiencia) usando 6 tablas especializadas. 5 agentes (DNA Scanner, Creativo, Lucy, CRM, Jefe) generan contenido personalizado a escala. Feature estrella Híper Flash para generación instantánea con contexto.',
    market:
      'Agencias de marketing digital en LATAM (estimado 15.000+ en Argentina). Freelancers de community management. Mercado global de content marketing AI proyectado en USD 15B para 2028.',
    businessModel:
      'SaaS con 3 tiers: Free, Starter ($80.000 ARS/mes) y Pro ($150.000 ARS/mes). Revenue recurrente con upsell a features premium como DALL-E, Iris asistente y CRM.',
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
      'MVP funcional desplegado en producción. Business DNA Schema V2 con 6 tablas implementado. 5 agentes operativos. Archivo SOUL definido como diferenciador competitivo. 73/78 tests E2E pasando.',
    metrics: [
      { label: 'Agentes IA activos', value: '5', trend: 'DNA Scanner, Creativo, Lucy, CRM, Jefe' },
      { label: 'Tablas Business DNA', value: '6', trend: 'Schema V2' },
      { label: 'Tests E2E pasando', value: '73/78', trend: '93.6%' },
      { label: 'Tiempo generación', value: '<8s por contenido' },
    ],
    roadmap: [
      { quarter: 'Q1 2026', milestone: 'Core engine validado, Business DNA V2, 5 agentes', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'Híper Flash, archivo SOUL, optimización agentes', status: 'current' },
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
        mitigation: 'Archivo SOUL como moat. Foco en LATAM, soporte en español nativo, integración con ecosistema local.',
      },
      {
        risk: 'Complejidad de multi-tenancy y white-label',
        mitigation: 'Arquitectura modular desde el inicio, Supabase RLS para aislamiento de datos.',
      },
    ],
    ask: 'Buscamos partner técnico o inversión de USD 30.000 para acelerar la separación de producto y primeras 10 agencias piloto.',
    githubRepos: ['NicoHernaez/6to.Sentido'],
  },
  {
    slug: 'cerca',
    name: 'CERCA',
    tagline: 'Conectando al interior con sus comercios, barrio por barrio.',
    icon: '📍',
    status: 'development',
    statusLabel: 'En Desarrollo',
    category: 'ia-pymes',
    description:
      'Plataforma hiperlocal que conecta comercios del interior argentino con vecinos de su zona. ~100.000 palabras de documentación, 6 documentos estratégicos/técnicos. Brian como asistente WhatsApp integrado para comerciantes. Modelo: gratis para el comerciante, 5% fee al consumidor.',
    tags: ['Marketplace Local', 'Geolocalización', 'Comercio', 'Interior', 'WhatsApp'],
    problem:
      'En ciudades del interior, los vecinos no conocen todos los comercios de su barrio. Google Maps tiene datos incompletos y desactualizados. Los comerciantes pequeños no tienen presencia digital accesible.',
    solution:
      'App hiperlocal con directorio verificado de comercios, búsqueda por proximidad y categoría, sistema de recomendaciones de vecinos, y Brian como asistente WhatsApp para que comerciantes gestionen su presencia sin aprender tecnología nueva. Gratis para el comerciante, 5% fee al consumidor.',
    market:
      'Ciudades argentinas de 20.000–200.000 habitantes. +2.000 localidades con comercios activos sin presencia digital adecuada. Mercado de publicidad local digital en Argentina: USD 800M/año.',
    businessModel:
      'Gratis para comerciantes (listado + herramientas). 5% fee al consumidor en transacciones. Revenue adicional por publicidad hiperlocal geosegmentada y datos anonimizados.',
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostGIS',
      'Mapbox',
      'WhatsApp Business API',
      'n8n',
      'PWA',
      'Vercel',
    ],
    currentStatus:
      '~100.000 palabras de documentación producidas. 6 documentos estratégicos/técnicos completos. Brian integrado como asistente WhatsApp para comerciantes. Investigación de mercado en General Pico y Santa Rosa.',
    metrics: [
      { label: 'Documentación', value: '~100k palabras', trend: '6 documentos estratégicos' },
      { label: 'Comercios mapeados (research)', value: '320+', trend: 'General Pico + Santa Rosa' },
      { label: 'Categorías definidas', value: '24' },
      { label: 'Ciudades target iniciales', value: '3' },
    ],
    roadmap: [
      { quarter: 'Q1 2026', milestone: 'Research, documentación estratégica, diseño UX', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'MVP directorio + Brian WhatsApp, onboarding comerciantes', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'Lanzamiento en General Pico, sistema de reseñas', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Expansión a 3 ciudades, fee de transacción activo', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (bootstrapped)' },
      { label: 'Revenue model', value: 'Gratis comerciante + 5% fee consumidor + ads locales' },
      { label: 'Fee por transacción', value: '5% al consumidor' },
      { label: 'Break-even estimado', value: '200 comerciantes activos en 2 ciudades' },
    ],
    risks: [
      {
        risk: 'Efecto red: necesita masa crítica de comercios y usuarios',
        mitigation: 'Lanzamiento ciudad por ciudad con cobertura completa antes de expandir. Alianzas con cámaras de comercio locales.',
      },
      {
        risk: 'Competencia de Google Maps y redes sociales',
        mitigation: 'Datos hiperlocales curados que Google no tiene. Brian WhatsApp como interfaz natural. Foco en relación vecino-comercio.',
      },
      {
        risk: 'Baja digitalización de comerciantes',
        mitigation: 'Brian hace todo via WhatsApp. Onboarding presencial. Panel ultra-simple. Soporte telefónico.',
      },
    ],
    ask: 'Buscamos USD 40.000 para desarrollo del MVP, equipo de campo para onboarding de comerciantes en 3 ciudades piloto, e infraestructura de mapas.',
  },
  {
    slug: 'brian',
    name: 'Brian',
    tagline: 'El punto de contacto único del comerciante, 100% WhatsApp.',
    icon: '💬',
    status: 'development',
    statusLabel: 'En Desarrollo',
    category: 'ia-pymes',
    description:
      'Asistente IA que funciona como punto de contacto único para comerciantes, 100% WhatsApp. Gestiona pedidos, consultas y operaciones. Es la interfaz humana de toda la infraestructura de Seed Forges. Integrado en CERCA y Gerente Virtual.',
    tags: ['WhatsApp', 'IA Conversacional', 'Comercio', 'Asistente'],
    problem:
      'Comerciantes usan WhatsApp de forma caótica para gestionar pedidos, consultas y operaciones. No hay un sistema unificado que hable su idioma.',
    solution:
      'Asistente IA que funciona como punto de contacto único del comerciante. Gestiona pedidos, responde consultas, coordina operaciones — todo dentro de WhatsApp. Es la interfaz humana de toda la infraestructura tecnológica de Seed Forges.',
    market:
      'Comercios del interior argentino que ya usan WhatsApp como canal principal. +600.000 PyMEs potenciales. Brian es el punto de entrada al ecosistema Seed Forges.',
    businessModel:
      'Incluido como componente de Gerente Virtual y CERCA. Sin costo directo para el comerciante — es la interfaz que habilita la monetización de otros productos.',
    stack: [
      'n8n',
      'Claude API',
      'WhatsApp Business API',
      'Supabase',
    ],
    currentStatus:
      'En desarrollo activo. Integrado como componente de CERCA y Gerente Virtual. Lógica conversacional definida. Flujos de pedidos y consultas en diseño.',
    metrics: [
      { label: 'Productos integrados', value: '2', trend: 'CERCA + Gerente Virtual' },
      { label: 'Flujos conversacionales', value: '5', trend: 'En diseño' },
      { label: 'Canal', value: '100% WhatsApp' },
      { label: 'Status', value: 'En desarrollo activo' },
    ],
    roadmap: [
      { quarter: 'Q1 2026', milestone: 'Diseño de flujos conversacionales, integración con CERCA', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'MVP funcional, gestión de pedidos vía WhatsApp', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'Integración con Gerente Virtual, operaciones avanzadas', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Multi-comercio, analytics conversacionales', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (bootstrapped)' },
      { label: 'Modelo', value: 'Componente integrado (sin costo directo)' },
      { label: 'Valor indirecto', value: 'Habilita monetización de CERCA y Gerente Virtual' },
      { label: 'Costo operativo', value: 'WhatsApp Business API + Claude API ~USD 0.02/conversación' },
    ],
    risks: [
      {
        risk: 'Limitaciones de WhatsApp Business API (rate limits, aprobación)',
        mitigation: 'Verificación Meta en proceso. Flujos diseñados dentro de los límites. n8n como buffer.',
      },
      {
        risk: 'Calidad conversacional en contextos comerciales complejos',
        mitigation: 'Claude API para comprensión profunda. Fallback a operador humano. Aprendizaje continuo por comercio.',
      },
    ],
    ask: 'Brian se financia como parte de CERCA y Gerente Virtual. Inversión incluida en esos proyectos.',
  },

  // ─── CONSUMER & SOCIAL ───────────────────────────────────────────────

  {
    slug: 'abuelo-matias',
    name: 'Abuelo Matías',
    tagline: 'Historias que conectan generaciones, preservadas con inteligencia artificial.',
    icon: '🎴',
    status: 'concept',
    statusLabel: 'Concepto',
    category: 'consumer-social',
    description:
      'Plataforma de preservación de memorias familiares usando IA conversacional. Pitch presentado a MELI Fund. Investor deck de 25+ secciones. 5 fases de expansión geográfica planificadas. Arquitectura de marca con sub-marcas (Games, Club Senior, Farmacia, Viajes). 24 tablas Supabase diseñadas. Proyecciones $40M–$191M Year 3. Socio José Luis Sánchez para comercio internacional.',
    tags: ['IA Conversacional', 'Memorias', 'Familias', 'Impacto Social', 'MELI Fund'],
    problem:
      'Las historias de nuestros abuelos se pierden cuando ya no están. Las familias quieren preservar memorias pero no saben cómo hacerlo de forma sistemática. La tecnología actual intimida a los adultos mayores.',
    solution:
      'Plataforma integral con IA conversacional que entrevista a adultos mayores de forma natural. Arquitectura de marca expandida: Games (entretenimiento cognitivo), Club Senior (comunidad), Farmacia (salud), Viajes (experiencias). Socio José Luis Sánchez aporta red de comercio internacional.',
    market:
      'Familias argentinas y latinoamericanas con abuelos vivos. 5 fases de expansión geográfica: Argentina → LATAM → España → USA Hispano → Global. Mercado adultos mayores creciendo exponencialmente.',
    businessModel:
      'Freemium: 5 historias gratis. Plan Familia (ARS 5.000/mes). Plan Legado (ARS 15.000 one-time con libro impreso). Sub-marcas como revenue streams adicionales. Proyecciones: $40M–$191M Year 3.',
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase (24 tablas)',
      'OpenAI Whisper',
      'Claude API',
      'Web Speech API',
      'Vercel',
    ],
    currentStatus:
      'Pitch presentado a MELI Fund. Investor deck de 25+ secciones completo. 24 tablas Supabase diseñadas. Arquitectura de marca con sub-marcas definida. Socio José Luis Sánchez confirmado para comercio internacional.',
    metrics: [
      { label: 'Investor deck', value: '25+ secciones', trend: 'Presentado a MELI Fund' },
      { label: 'Tablas Supabase', value: '24', trend: 'Schema diseñado' },
      { label: 'Fases de expansión', value: '5', trend: 'AR → LATAM → ES → US → Global' },
      { label: 'Proyección Year 3', value: '$40M–$191M' },
    ],
    roadmap: [
      { quarter: 'Q1 2026', milestone: 'Investor deck, pitch MELI Fund, arquitectura de marca', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'MVP conversacional, 24 tablas Supabase, beta cerrada', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'Lanzamiento público, sub-marca Games', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Expansión LATAM, partnerships con residencias', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (concepto avanzado)' },
      { label: 'Seeking', value: 'Ronda pre-seed / MELI Fund' },
      { label: 'Proyección Year 1', value: '$2M–$8M (según tracción)' },
      { label: 'Proyección Year 3', value: '$40M–$191M' },
    ],
    risks: [
      {
        risk: 'Barrera tecnológica para adultos mayores',
        mitigation: 'Interfaz de voz como canal principal. Diseño accesible. Onboarding asistido por familiar.',
      },
      {
        risk: 'Sensibilidad emocional del contenido',
        mitigation: 'Prompts diseñados con psicólogos. Detección de distress. Opción de pausar y retomar.',
      },
      {
        risk: 'Escala de expansión geográfica',
        mitigation: '5 fases planificadas con métricas de go/no-go. Socio para comercio internacional. Modelo replicable.',
      },
    ],
    ask: 'Buscamos ronda pre-seed de USD 150.000 para MVP, equipo fundador y lanzamiento en Argentina. Pitch activo con MELI Fund.',
    githubRepos: ['NicoHernaez/AbueloMatias-MVP'],
  },
  {
    slug: 'the-deeper-room',
    name: 'The Deeper Room',
    tagline: 'Mentoría filosófica premium con inteligencia artificial.',
    icon: '🚪',
    status: 'mvp',
    statusLabel: 'MVP Activo',
    category: 'consumer-social',
    description:
      'Plataforma de mentoría filosófica premium impulsada por IA. Suscripción $200–500 USD/mes. 7 agentes técnicos especializados (Arquitecto del Ritual, Orador Maestro, Custodio del Alma, entre otros). 12 sesiones rediseñadas. Público target: 55–80 años, alto poder adquisitivo. Modelo: 100 usuarios × $300 = $30k/mes.',
    tags: ['IA Conversacional', 'Filosofía', 'Premium', 'Mentoría', 'Alto Ticket'],
    problem:
      'Las personas enfrentan decisiones de vida, crisis existenciales y búsqueda de propósito sin acceso a mentoría filosófica. Los coaches y terapeutas son caros y difíciles de conseguir. Las apps de bienestar son superficiales.',
    solution:
      '7 agentes técnicos especializados: Arquitecto del Ritual, Orador Maestro, Custodio del Alma, y más. 12 sesiones rediseñadas con profundidad filosófica. Cada conversación es personalizada y filosóficamente rigurosa. Diseñado para público 55–80 con alto poder adquisitivo.',
    market:
      'Profesionales y retirados 55–80 años con alto poder adquisitivo en LATAM, España y USA hispano. Mercado de coaching y bienestar premium. Nicho desatendido de mentoría filosófica seria.',
    businessModel:
      'Suscripción mensual $200–500 USD. Tiers anuales founding: Order ($699/año), Inner Circle ($1.499/año), Oracle ($4.999/año), Council (por definir). Target: 100 usuarios × $300 = $30k/mes.',
    stack: [
      'HTML/CSS/JS',
      'n8n Cloud (88 nodos)',
      'Supabase',
      'Claude API',
      'Vercel',
    ],
    currentStatus:
      'MVP live en producción. 12 sesiones rediseñadas. 7 agentes técnicos operativos. PWA implementada. Founding Members v4 desplegado. Workflow n8n de 88 nodos activo.',
    metrics: [
      { label: 'Agentes técnicos', value: '7', trend: 'Arquitecto, Orador, Custodio...' },
      { label: 'Sesiones diseñadas', value: '12', trend: 'Rediseñadas' },
      { label: 'Nodos n8n', value: '88', trend: 'Workflow principal' },
      { label: 'Target MRR', value: '$30k/mes', trend: '100 usuarios × $300' },
    ],
    roadmap: [
      { quarter: 'Q4 2025', milestone: 'MVP inicial: Sócrates + Sofía', status: 'done' },
      { quarter: 'Q1 2026', milestone: '7 agentes, 12 sesiones, PWA, founding v4', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'Auth completa, analytics, onboarding premium', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'App nativa, voz, campaña segmento 55–80', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (bootstrapped)' },
      { label: 'Precio suscripción', value: 'USD 200–500/mes' },
      { label: 'Target MRR', value: 'USD 30.000 (100 usuarios × $300)' },
      { label: 'Target año 1', value: '100 founding members' },
    ],
    risks: [
      {
        risk: 'Percepción de "chatbot filosófico" vs mentoría real',
        mitigation: 'Diseño premium, exclusividad, 7 agentes con personalidades profundas. Testimonios de early adopters.',
      },
      {
        risk: 'Adquisición de público 55–80 en plataforma digital',
        mitigation: 'Campañas en medios tradicionales. Referidos de hijos/nietos. Onboarding asistido. UX accesible.',
      },
    ],
    ask: 'Buscamos founding members e inversión de USD 25.000 para app nativa, integración de voz y campaña de adquisición segmento 55–80.',
    githubRepos: ['NicoHernaez/The-Deeper-Room'],
  },
  {
    slug: 'es-plus',
    name: 'Menos es Mas -es+ (Less is More)',
    tagline: 'Todos tus beneficios de pago en un solo lugar.',
    icon: '💳',
    status: 'concept',
    statusLabel: 'Concepto',
    category: 'consumer-social',
    description:
      'App que centraliza TODOS los beneficios de tarjetas de crédito, débito, billeteras virtuales, obra social y seguros. Nadie centraliza los beneficios de tus medios de pago hoy. Foco en mujeres como administradoras del hogar.',
    tags: ['Fintech', 'Beneficios', 'Consumer', 'Mujeres', 'Gamificación'],
    problem:
      'Nadie centraliza los beneficios de tus medios de pago. Tenés que entrar a 10 sitios distintos para armar tu mapa de beneficios. Se pierden descuentos y promociones por desconocimiento.',
    solution:
      'App que centraliza TODOS los beneficios de tarjetas de crédito, débito, billeteras virtuales, obra social y seguros. Feed personalizado por tarjetas, Preparador de viaje, Club de Amigas (gamificación) y finanzas personales.',
    market:
      'Usuarios bancarizados en Argentina (~25M). Foco inicial en mujeres 25–50 como administradoras del hogar. Mercado de beneficios financieros fragmentado sin agregador.',
    businessModel:
      'Freemium + afiliación (comisión por uso de beneficio). B2B: bancos y fintechs pagan por distribución y datos. Data anonimizada como revenue stream adicional.',
    stack: [
      'React Native',
      'Supabase',
      'Scraping APIs bancarias',
      'Node.js',
    ],
    currentStatus:
      'Fase de concepto. Investigación de beneficios de principales bancos y fintechs argentinas. Definición de UX y modelo de negocio.',
    metrics: [
      { label: 'Bancos/fintechs mapeados', value: '12', trend: 'Research en curso' },
      { label: 'Beneficios catalogados', value: '200+', trend: 'Principales emisores' },
      { label: 'Público target', value: 'Mujeres 25–50' },
      { label: 'Status', value: 'Concepto validándose' },
    ],
    roadmap: [
      { quarter: 'Q1 2026', milestone: 'Concepto, research de beneficios, definición UX', status: 'done' },
      { quarter: 'Q2 2026', milestone: 'Prototipo, scraping de beneficios principales', status: 'upcoming' },
      { quarter: 'Q3 2026', milestone: 'MVP con feed personalizado, beta cerrada', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Club de Amigas, Preparador de viaje, B2B piloto', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (concepto)' },
      { label: 'Costo estimado MVP', value: 'USD 25.000' },
      { label: 'Revenue model', value: 'Freemium + afiliación + B2B + data' },
      { label: 'Revenue proyectado año 1', value: 'USD 50.000 (afiliación + B2B piloto)' },
    ],
    risks: [
      {
        risk: 'Acceso a datos de beneficios bancarios (scraping vs API)',
        mitigation: 'Inicio con scraping público. Transición a partnerships con bancos conforme crezca la base.',
      },
      {
        risk: 'Regulación de datos financieros',
        mitigation: 'Solo datos públicos de beneficios (no transacciones). Consulta legal desde fase concepto.',
      },
    ],
    ask: 'Buscamos USD 25.000 para MVP y partnerships iniciales con 3 bancos/fintechs.',
  },

  // ─── COMUNIDAD ────────────────────────────────────────────────────────

  {
    slug: 'la-societe',
    name: 'La Societé',
    tagline: 'Club premium femenino de conexión y beneficios.',
    icon: '👑',
    status: 'concept',
    statusLabel: 'Concepto',
    category: 'comunidad',
    description:
      'Club/comunidad femenina premium. Extensión del concepto "Club de Amigas" de es+ como producto standalone. Networking real, beneficios exclusivos y comunidad para mujeres que buscan potenciarse.',
    tags: ['Comunidad', 'Premium', 'Mujeres', 'Networking', 'Beneficios'],
    problem:
      'No existe un espacio digital premium para mujeres que buscan networking real, beneficios exclusivos y comunidad genuina. Las redes sociales son superficiales para conexión profesional.',
    solution:
      'Club premium femenino con networking curado, beneficios exclusivos negociados en volumen, eventos presenciales y digitales, y una comunidad con estándares de calidad.',
    market:
      'Mujeres profesionales 28–55 en Argentina. Mercado de comunidades premium en crecimiento. Potencial LATAM con modelo replicable por ciudad.',
    businessModel:
      'Membresía mensual premium. Revenue por partnerships con marcas. Eventos pagos. Comisión por beneficios exclusivos.',
    stack: [
      'Next.js',
      'Supabase',
      'Vercel',
    ],
    currentStatus:
      'Fase de concepto. Exploración del modelo de comunidad premium. Definición de propuesta de valor y pricing.',
    metrics: [
      { label: 'Status', value: 'Concepto' },
      { label: 'Origen', value: 'Extensión de es+ Club de Amigas' },
      { label: 'Target', value: 'Mujeres profesionales 28–55' },
      { label: 'Modelo', value: 'Membresía premium' },
    ],
    roadmap: [
      { quarter: 'Q2 2026', milestone: 'Definición de propuesta de valor y modelo', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'Beta cerrada con 50 miembros fundadoras', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Partnerships con marcas, eventos presenciales', status: 'upcoming' },
      { quarter: 'Q1 2027', milestone: 'Escalamiento, segunda ciudad', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (concepto)' },
      { label: 'Costo estimado MVP', value: 'USD 10.000' },
      { label: 'Revenue model', value: 'Membresía + partnerships + eventos' },
      { label: 'Target break-even', value: '100 miembros premium' },
    ],
    risks: [
      {
        risk: 'Competencia de comunidades existentes (Clubhouse, grupos privados)',
        mitigation: 'Foco hiperlocal (Argentina/LATAM), beneficios tangibles, eventos presenciales. No es solo digital.',
      },
      {
        risk: 'Retención de miembros a largo plazo',
        mitigation: 'Valor tangible mensual (beneficios, networking medible). Gamificación de participación.',
      },
    ],
    ask: 'Buscamos USD 10.000 para MVP y 50 miembros fundadoras.',
  },
  {
    slug: 'svd',
    name: 'SVD — The Women Club',
    tagline: 'Donde la comunidad femenina se potencia.',
    icon: '💎',
    status: 'concept',
    statusLabel: 'Concepto',
    category: 'comunidad',
    description:
      'Variante/evolución del concepto de comunidad femenina con componentes sociales y beneficios tangibles. Club digital con elementos de gamificación y beneficios reales.',
    tags: ['Comunidad', 'Social', 'Mujeres', 'Gamificación', 'Beneficios'],
    problem:
      'Las comunidades digitales son superficiales. Falta un club digital con componentes sociales y beneficios tangibles que genere conexiones reales.',
    solution:
      'Club digital femenino con componentes sociales, gamificación y beneficios tangibles. Evolución del modelo de comunidad con foco en impacto real y conexiones significativas.',
    market:
      'Mujeres digitales 22–45 en LATAM. Complementario a La Societé (más accesible, más social). Mercado de comunidades en línea en crecimiento.',
    businessModel:
      'Freemium con tier premium. Revenue por partnerships, eventos y comisiones de beneficios.',
    stack: [
      'Next.js',
      'Supabase',
      'Vercel',
    ],
    currentStatus:
      'Fase de concepto. Exploración de diferenciación con La Societé. Definición de componentes sociales únicos.',
    metrics: [
      { label: 'Status', value: 'Concepto' },
      { label: 'Relación', value: 'Evolución de La Societé' },
      { label: 'Target', value: 'Mujeres digitales 22–45' },
      { label: 'Modelo', value: 'Freemium + premium' },
    ],
    roadmap: [
      { quarter: 'Q2 2026', milestone: 'Definición de concepto y diferenciación', status: 'current' },
      { quarter: 'Q3 2026', milestone: 'Prototipo de componentes sociales', status: 'upcoming' },
      { quarter: 'Q4 2026', milestone: 'Beta cerrada, validación de modelo', status: 'upcoming' },
      { quarter: 'Q1 2027', milestone: 'Lanzamiento público', status: 'upcoming' },
    ],
    financials: [
      { label: 'Inversión acumulada', value: 'USD 0 (concepto)' },
      { label: 'Costo estimado MVP', value: 'USD 10.000' },
      { label: 'Revenue model', value: 'Freemium + premium + partnerships' },
      { label: 'Target break-even', value: '500 usuarios activos' },
    ],
    risks: [
      {
        risk: 'Canibalización con La Societé',
        mitigation: 'Segmentación clara: SVD es más accesible/social, La Societé es premium/networking profesional.',
      },
      {
        risk: 'Diferenciación en mercado saturado de comunidades',
        mitigation: 'Beneficios tangibles y gamificación como diferenciadores. No solo chat y contenido.',
      },
    ],
    ask: 'Buscamos USD 10.000 para validación de concepto y prototipo.',
  },

  // ─── INDUSTRIA ALIMENTARIA ────────────────────────────────────────────

  // ─── LABORATORIO ──────────────────────────────────────────────────────

  {
    slug: '7tres7',
    name: '7Tres7',
    tagline: 'El laboratorio vivo: 9.000 empanadas/mes como campo de pruebas.',
    icon: '🥟',
    status: 'mvp',
    statusLabel: 'Operativo',
    category: 'laboratorio',
    description:
      'Restaurante propio del fundador funcionando como laboratorio de toda la tecnología de Seed Forges. 9.000 empanadas/mes como campo de pruebas real. Tech implementada: app pedidos B2C (React + WhatsApp + fidelización puntos), sistema B2B wholesale, sistema impresión en red (3 PCs, Node.js), POS integrado (Fu.do).',
    tags: ['Restaurante', 'Laboratorio', 'E-commerce', 'WhatsApp', 'Impresión'],
    problem:
      'Los restaurantes del interior gestionan pedidos de forma caótica entre WhatsApp, mostrador y delivery sin un sistema integrado.',
    solution:
      'Restaurante propio del fundador como laboratorio vivo. App pedidos B2C con WhatsApp y fidelización por puntos. Sistema B2B wholesale. Red de impresión en 3 PCs con Node.js. POS integrado con Fu.do.',
    market:
      'Validación interna — no es un producto para vender sino el campo de pruebas donde se valida toda la tecnología de Seed Forges antes de llevarla al mercado.',
    businessModel:
      'Restaurante operativo generando revenue real. Doble función: negocio gastronómico rentable + laboratorio de tecnología con costo de validación cero.',
    stack: [
      'HTML/JS',
      'Supabase',
      'Tailwind CSS',
      'MercadoPago',
      'QZ Tray',
      'Node.js',
      'Fu.do POS',
      'WhatsApp',
    ],
    currentStatus:
      'Operativo. 9.000 empanadas/mes. 3 sistemas corriendo en producción (pedidos B2C, wholesale B2B, impresión en red). POS integrado. Fidelización con puntos activa.',
    metrics: [
      { label: 'Producción', value: '9.000 u/mes', trend: 'Empanadas' },
      { label: 'Sistemas en producción', value: '3', trend: 'B2C + B2B + Impresión' },
      { label: 'PCs en red', value: '3', trend: 'Sistema impresión' },
      { label: 'Status', value: 'Operativo', trend: 'Laboratorio activo' },
    ],
    roadmap: [
      { quarter: 'Q3 2025', milestone: 'App pedidos B2C, sistema impresión v1', status: 'done' },
      { quarter: 'Q4 2025', milestone: 'Fidelización puntos, sistema B2B wholesale', status: 'done' },
      { quarter: 'Q1 2026', milestone: 'POS Fu.do integrado, impresión v1.0.2', status: 'current' },
      { quarter: 'Q2 2026', milestone: 'Integración Gerente Virtual, MercadoPago Point Smart', status: 'upcoming' },
    ],
    financials: [
      { label: 'Status', value: 'Negocio operativo y rentable' },
      { label: 'Producción mensual', value: '9.000 empanadas' },
      { label: 'Valor como laboratorio', value: 'Validación a costo cero' },
      { label: 'Sistemas validados', value: '3 en producción real' },
    ],
    risks: [
      {
        risk: 'Distracción del fundador entre restaurante y tech',
        mitigation: 'Restaurante opera con equipo propio. Tech se desarrolla en paralelo. Laboratorio no requiere tiempo extra.',
      },
      {
        risk: 'Sesgo de validación (un solo restaurante)',
        mitigation: 'Próximo paso: pilotos con comercios de terceros en General Pico.',
      },
    ],
    ask: 'No busca inversión directa. Es el laboratorio que valida la tecnología del portafolio.',
    githubRepos: ['NicoHernaez/7Tres7-Online', 'NicoHernaez/7Tres7-Admin', 'NicoHernaez/7Tres7-Caja', 'NicoHernaez/7Tres7-Proyecto'],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getCategory(slug: ProjectCategory): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return PROJECTS.filter((p) => p.category === category);
}
