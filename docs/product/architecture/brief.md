# Architecture Brief — gergobalogh.me

## Application Architecture

**Pattern:** Static site with SSR hydration (Astro on Cloudflare Pages). Modular monolith with i18n layer.

**Paradigm:** Multi-paradigm TypeScript (Astro's declarative templating + typed i18n layer).

**Tech stack:**
- Runtime: Astro 5.x with SSR output on Cloudflare Pages
- Language: TypeScript
- i18n: Custom inline translation object (`src/i18n/ui.ts`) with 3 locales (EN, RO, HU)
- Content: Astro Content Collections (MDX) for notes; inline translation keys for UI and project copy
- Analytics: Umami (self-hosted, event-driven)
- Deployment: Cloudflare Pages with `@astrojs/cloudflare` adapter

### Component Topology

```
┌─────────────────────────────────────────────────┐
│                   Cloudflare Pages               │
│                                                   │
│  ┌───────────┐  ┌──────────┐  ┌───────────────┐  │
│  │ BaseLayout │  │ TopBar   │  │   Hero        │  │
│  │ (title,    │  │ (nav,    │  │ (headline,    │  │
│  │  desc, OG) │  │  lang)   │  │  subhead,    │  │
│  └─────┬─────┘  └────┬─────┘  │  CTAs)        │  │
│        │              │        └───────┬───────┘  │
│        │              │                │          │
│  ┌─────▼──────────────▼────────────────▼──────┐ │
│  │           useTranslations(lang)              │ │
│  │           src/i18n/ui.ts                     │ │
│  │   ┌─────────┬──────────┬──────────┐          │ │
│  │   │   EN    │    RO    │    HU    │          │ │
│  │   │  keys   │  keys    │  keys    │          │ │
│  │   └─────────┴──────────┴──────────┘          │ │
│  └──────────────────┬──────────────────────────┘ │
│                     │                             │
│  ┌──────────────────▼──────────────────────────┐ │
│  │        Astro Content Collections            │ │
│  │        src/content/notes/*.mdx               │ │
│  │   (per-note MDX files with lang frontmatter) │ │
│  └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Driving Ports (inbound surfaces)

| Port | Type | Description |
|------|------|-------------|
| `src/i18n/ui.ts:translations` | Data surface | All UI copy strings in all 3 languages. The single mutation surface for copy changes. |
| `src/content/notes/*.mdx` | Data surface | Note content (long-form). Filtered by `lang` frontmatter at query time. |
| `src/content.config.ts` | Schema surface | Content collection schema. Defines note structure and validation. |

### Driven Ports (outbound side-effects)

| Port | Adapter | Description |
|------|---------|-------------|
| Analytics | Umami (script tag in BaseLayout) | Event tracking: `hero-cta-primary`, `hero-cta-secondary`, `project-cta`, `note-click`, `social-click` |
| SEO | `<head>` in BaseLayout | `og:title`, `og:description`, `og:locale` derived from translation keys |
| HTTP | Cloudflare Pages | Static HTML served from edge; SSR for dynamic routes |

### Data Flow

```
User request → Cloudflare edge
  → Astro SSR (if dynamic) or cached HTML
    → BaseLayout (title, description from t())
      → Components (Hero, About, Projects, Notes, Elsewhere)
        → t(key) lookup from ui.ts
        → MDX render for notes (if notes page)
      → Umami event tracking (client-side)
```
