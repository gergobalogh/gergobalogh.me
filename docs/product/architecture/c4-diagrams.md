# C4 Diagrams — gergobalogh.me

## System Context

```mermaid
graph TB
    Visitor[Visitor / Builder / Collaborator] --> Site[gergobalogh.me]
    Site --> CF[Cloudflare Pages CDN]
    Site --> Umami[Umami Analytics]

    style Visitor fill:#0891b2,color:#fff
    style Site fill:#7c3aed,color:#fff
    style CF fill:#f59e0b,color:#000
    style Umami fill:#f59e0b,color:#000
```

## Container

```mermaid
graph TB
    subgraph Cloudflare Pages
        AstroSSR[Astro SSR Runtime]
        StaticHTML[Cached Static HTML]
    end

    subgraph i18n Layer
        UITS[src/i18n/ui.ts<br/>Translation keys: EN, RO, HU]
    end

    subgraph Content Layer
        NotesMDX[src/content/notes/*.mdx<br/>Per-note MDX files]
        ContentConfig[src/content.config.ts<br/>Collection schema]
    end

    subgraph Components
        BaseLayout[BaseLayout.astro<br/>title, desc, OG meta]
        Hero[Hero.astro<br/>headline, subhead, CTAs]
        About[About.astro<br/>aboutBody]
        Projects[Projects.astro<br/>project cards]
        Notes[Notes.astro<br/>note list]
        Elsewhere[Elsewhere.astro<br/>links]
    end

    AstroSSR --> BaseLayout
    BaseLayout --> Hero
    BaseLayout --> About
    BaseLayout --> Projects
    BaseLayout --> Notes
    BaseLayout --> Elsewhere

    Hero --> UITS
    About --> UITS
    Projects --> UITS
    Notes --> UITS
    Notes --> NotesMDX
    NotesMDX --> ContentConfig

    style AstroSSR fill:#7c3aed,color:#fff
    style UITS fill:#0891b2,color:#fff
    style NotesMDX fill:#0891b2,color:#fff
```

## Component — i18n Subsystem

```mermaid
graph TB
    subgraph src/i18n/ui.ts
        Langs[languages const<br/>en, ro, hu]
        TransType[Lang type]
        Default[defaultLang: en]
        TransObj[translations object<br/>en{}, ro{}, hu{}]
        TransKey[TranslationKey type]
        UseTrans[useTranslations fn<br/>returns t key lookup]
        GetLang[getLangFromUrl fn<br/>extracts lang prefix]
    end

    subgraph Consumers
        BaseLayout2[BaseLayout.astro]
        TopBar2[TopBar.astro]
        Hero2[Hero.astro]
        About2[About.astro]
        Projects2[Projects.astro]
        Notes2[Notes.astro]
        Elsewhere2[Elsewhere.astro]
        ProjectPages[Project detail pages<br/>×9 files]
        NotePages[Note detail pages<br/>×6 files]
    end

    Consumers --> UseTrans
    UseTrans --> TransObj
    GetLang --> Langs

    style TransObj fill:#0891b2,color:#fff
    style UseTrans fill:#7c3aed,color:#fff
```
