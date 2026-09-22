# second-legacy.com

Persoonlijke portfolio-site voor Martijn Jansen (Second Legacy). Next.js 14 App Router, TypeScript, Tailwind CSS, framer-motion.

## Lokaal draaien

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content uitbreiden

Alle projectcopy staat in **`content/projects.ts`**. Voeg een object toe aan de `projects`-array met het `Project`-type (slug, title, tagline, summary, problem, solution, result, optioneel metrics, tech, year, role, featured).

Site-brede instellingen (e-mail, LinkedIn-placeholder, domein): **`content/site.ts`**.

Detailpagina’s worden automatisch gegenereerd op `/work/[slug]` via `generateStaticParams`.

## Structuur

- `app/page.tsx` — home (hero, use cases, over, contact)
- `app/work/[slug]/page.tsx` — projectdetail
- `app/sitemap.ts` & `app/robots.ts` — SEO
- `components/` — Header, Footer, ThemeToggle, ProjectCard, enz.

## Thema

Donker/licht volgt standaard systeemvoorkeur; de toggle slaat de keuze op in `localStorage` (`second-legacy-theme`).

## Deploy op Vercel

1. Importeer de repo in Vercel.
2. Framework preset: **Next.js** (geen `output: 'export'` nodig — standaard static/SSR hybrid werkt goed).
3. Domein `second-legacy.com` koppelen in project settings.

```bash
pnpm build
```

Plausible-analytics blijft in `app/layout.tsx` (domain `second-legacy.com`).

## LinkedIn

Vervang `linkedInUrl` in `content/site.ts` door je echte profiel-URL.
