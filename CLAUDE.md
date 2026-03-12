# Seed Forges — CLAUDE.md

## Qué es
Web institucional de **Seed Forges**, venture studio de IA para PyMEs del interior argentino. Fundador: Nico Hernáez (General Pico, La Pampa).

Dos funciones:
1. **Cara pública**: presentar el studio, portafolio, filosofía
2. **Portal inversores**: zona protegida con data rooms por proyecto

## Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (config en `globals.css` con `@theme inline`)
- **Lenguaje:** TypeScript estricto
- **Deploy:** Vercel (auto-deploy main, región gru1 São Paulo)
- **Repo:** `NicoHernaez/SeedForges`

## Estructura del proyecto
```
src/
├── app/
│   ├── layout.tsx              # Layout global (3 fonts, Navbar, Footer, SEO)
│   ├── page.tsx                # HOME
│   ├── about/page.tsx          # Nosotros
│   ├── portfolio/
│   │   ├── page.tsx            # Grid filtrable
│   │   └── [slug]/page.tsx     # Detalle proyecto (4 slugs)
│   ├── investors/
│   │   ├── page.tsx            # Password gate
│   │   ├── dashboard/page.tsx  # Dashboard inversor
│   │   └── [slug]/page.tsx     # Data room proyecto
│   └── api/auth/
│       ├── route.ts            # POST login (cookie)
│       └── logout/route.ts     # POST logout
├── middleware.ts               # Protege /investors/* (excepto /investors)
├── components/
│   ├── ui/                     # Button, Badge, Card, SectionHeader
│   ├── layout/                 # Navbar, Footer
│   ├── home/                   # ParticleField (canvas), LogoMark (SVG)
│   ├── portfolio/              # ProjectCard, StatusFilter, PortfolioGrid
│   └── investors/              # LogoutButton
├── lib/
│   ├── projects.ts             # Data centralizada de los 4 proyectos
│   ├── constants.ts            # COLORS, SITE config
│   └── utils.ts                # cn(), formatStatus(), getStatusColor()
```

## Design System
- **Identidad:** Orgánico-futurista (semilla + forja)
- **Paleta:** Dark greens (#050e09, #0a1f12, #0d2b18) + emerald (#10b981) + gold (#c9a227) + cream (#f0e6c8)
- **Fonts:** Cormorant Garamond (display), Space Mono (labels/mono), DM Sans (body)
- **No usar:** Inter, Roboto, Arial
- **Tailwind v4:** No hay `tailwind.config.ts`. Todo en `globals.css` con `@theme inline`

## Auth del portal inversores
- Password simple contra env var `INVESTOR_PASSWORD`
- Cookie httpOnly `sf-investor-auth` con 24h de vida
- Middleware redirige a /investors si no hay cookie válida
- **NO** es auth complejo — sin DB de usuarios, sin registro

## Proyectos en portafolio
| Slug | Nombre | Status |
|------|--------|--------|
| gerente-virtual | Gerente Virtual | MVP en desarrollo |
| sexto-sentido | 6to Sentido | En desarrollo |
| cerca | CERCA | En desarrollo |
| abuelo-matias | Abuelo Matías | Concepto avanzado |

Data centralizada en `src/lib/projects.ts` — incluye info pública + placeholders investor.

## Comandos
```bash
npm run dev     # Dev server
npm run build   # Build producción
npm run lint    # ESLint
```

## Env vars necesarias en Vercel
```
INVESTOR_PASSWORD=<clave para inversores>
```

## Convenciones
- Componentes reutilizables — no repetir código
- Server components por defecto, 'use client' solo donde hay interactividad
- Data de proyectos siempre desde `lib/projects.ts`, nunca hardcodeada en páginas
- Mobile-first responsive
- Español en contenido, inglés en código y terminología tech natural
