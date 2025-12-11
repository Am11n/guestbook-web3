# Title
Implement FantomUI-style landing page with custom content

# Objective
Create a dark, high-end landing page inspired by the structure, colors, and animation style of fantomui.webflow.io, but fully adapted to this project's branding and text content.

The goal is:
- Same type av layout og "feeling" som FantomUI
- Ingen kopiert tekst, logoer eller grafikk
- Ren, moderne kode med fokus på lesbarhet og videreutvikling

---

# Requirements

## Tech and structure
- Detect current stack:
  - If project uses Next.js with App Router, use `app/`-struktur
  - If project uses Next.js Pages Router eller ren React SPA, tilpass struktur tilsvarende
- Use:
  - TypeScript for alle nye filer
  - TailwindCSS for styling hvis tilgjengelig
  - Hvis Tailwind ikke finnes: bruk modulbasert CSS med tydelig struktur
- Optional (hvis allerede i prosjektet):
  - Bruk Framer Motion til animasjoner
  - Hvis Framer Motion ikke finnes, implementer enkle CSS-baserte animasjoner

## Design language
- Global stil:
  - Mørk bakgrunn
  - Neon-aktig aksentfarge
  - Sterk kontrast på typografi
- Definer egne design tokens (via Tailwind config eller lokale variabler):
  - `bg-body`: svært mørk, f.eks. `#050015`
  - `bg-surface`: litt lysere, f.eks. `#09001c`
  - `accent-primary`: magenta/rosa-lilla, f.eks. `#e041ff`
  - `accent-secondary`: kald blå/lilla, f.eks. `#3b82f6`
  - `text-primary`: nesten hvit, f.eks. `#f9fafb`
  - `text-muted`: gråblå, f.eks. `#a1a1b5`
- Typografi:
  - Store overskrifter med tydelig, ren sans-serif
  - Gjerne all-caps + letter-spacing for små labels
  - Maks bredde på brødtekst for god lesbarhet

## Content
- Ikke kopier tekst fra FantomUI
- Bruk eksisterende tekst/branding fra dette prosjektet der det finnes
- Hvis tekst mangler:
  - Bruk tydelige placeholders med `TODO:`-markering
  - Eksempel: `TODO: Replace with product-specific hero headline`
- Alle steder hvor du lager midlertidig tekst:
  - Gjør det lett å søke etter senere (`TODO:` eller `DUMMY:` i kommentarfelt eller tekst)

## Animations
- Bruk få, konsistente animasjonsmønstre:
  - Hero-objekt med subtil "floating" animasjon (loop)
  - Seksjoner som fader inn og beveger seg lett opp når de kommer i viewport
  - Knapp-hover med lett scale + lysere bakgrunn
- Animasjonspreferanser:
  - Ikke overdriv
  - Bruk 150–250 ms for vanlige transitions
  - Bruk smooth cubic-bezier, f.eks. `cubic-bezier(0.22, 0.61, 0.36, 1)`
- Implementasjon:
  - Hvis Framer Motion brukes:
    - Lag små, gjenbrukbare motion-varians (f.eks. `fadeInUp`, `floatLoop`)
  - Hvis bare CSS:
    - Bruk `@keyframes` for floating og `transition` for hover

## Code quality
- Ingen hardkodet tekst inne i layout-komponenter som ikke kan byttes senere
  - Flytt tekst til egne constants/konfig hvor naturlig
- Del opp i små komponenter:
  - `Header`
  - `HeroSection`
  - `ExplainerSection`
  - `FeaturesSection`
  - `CtaSection`
  - `Footer`
- Bruk tydelige prop-navn og TypeScript-typer for komponenter
- Ingen døde imports, ingen console.logs igjen

---

# Steps

## Step 1: Analyse project and prepare
- [x] Oppdag hvilken frontend stack prosjektet bruker (Next.js / React, App Router / Pages Router)
- [x] Finn eksisterende layout-struktur (root layout, theme-provider, etc.)
- [x] Bekreft om Tailwind er satt opp
- [x] Bekreft om Framer Motion er installert
- [x] Opprett en kort intern kommentarfil `docs/landing-fantom-style-notes.md` med:
  - [x] Kort beskrivelse av målet
  - [x] Notat om hvilke teknologier du faktisk bruker til animasjon

## Step 2: Define design tokens
- [x] Opprett eller oppdater fargestøtte:
  - [x] Hvis Tailwind:
    - Legg til custom farger i `tailwind.config.*` under `theme.extend.colors`
  - [ ] Hvis CSS:
    - Definer CSS-variabler på root, f.eks.:
      - `--color-bg-body`
      - `--color-bg-surface`
      - `--color-accent-primary`
      - `--color-accent-secondary`
      - `--color-text-primary`
      - `--color-text-muted`
- [x] Sørg for at landing-siden bruker disse tokenene konsekvent
- [x] Dokumenter valgene i `docs/landing-fantom-style-notes.md`

## Step 3: Implement page layout structure
Opprett eller oppdater landing page-fil:

- App Router:
  - [ ] `app/page.tsx`
- Pages Router:
  - [x] `pages/index.tsx`
- Ren React:
  - [ ] Egen `LandingPage.tsx` og sørg for at den brukes på root route

Implementer seksjoner i denne rekkefølgen:

1) Header
- [x] Logo-område venstre (bruk eksisterende prosjektlogo/tekst)
- [x] En enkel primærknapp høyre ("Join waitlist", "Get access" eller prosjektets CTA)
- [x] Minimal høyde, sticky-følelse hvis det passer prosjektet
- [x] Bakgrunn følger hovedbakgrunn (ikke hvit bar)

2) Hero section
- [x] Stor tittel med prosjektets navn / hovedverdi
- [x] Kort undertittel med klar verdi for brukeren
- [x] Kort forklaringstekst (2–3 setninger, `TODO:` hvis tekst mangler)
- [x] Primær CTA-knapp + sekundær tekst eller link
- [x] Hero-visual:
  - [x] Lag en placeholder-komponent for 3D/illustrasjon (kan være et kort med gradient og pseudo-UI)
  - [x] Ikke hardkod ekstern FantomUI-grafikk

3) Explainer section ("Just tell him what you need"-type)
- [x] Lag en seksjon med:
  - [x] Eyebrow-label (liten all-caps label)
  - [x] Seksjonstittel (forklar hvordan produktet fungerer)
  - [x] Kort beskrivelse
- [x] Ved siden av / under:
  - [x] Ett eller flere UI-kort som illustrerer bruksscenario
  - [x] Design i samme stil som hero (gradients, border, shadow)

4) Features section (3 blokker)
- [x] Lag tre underseksjoner som beskriver nøkkelfunksjoner:
  - Feature 1: "Input / prompt / beskrive behov"
  - Feature 2: "Komponent-/resultatvariasjoner"
  - Feature 3: "Inspirasjon / bruk av tidligere design / outputs"
- [x] For hver feature:
  - [x] Tittel
  - [x] Beskrivelse (2–3 linjer)
  - [x] Lite visual/kort, kan være:
    - [x] Mini UI mock
    - [x] Kort med tekst
- [x] Vurder å variere layout:
  - [x] Feature 1: tekst venstre, bilde høyre
  - [x] Feature 2: bilde venstre, tekst høyre
  - [x] Feature 3: fullbredde kort under

5) CTA section (waitlist)
- [x] Sterk CTA med kort, direkte tekst
- [x] Skjema:
  - [x] E-postfelt
  - [x] CTA-knapp
- [x] UI-tilstand:
  - [x] Idle
  - [x] Loading
  - [x] Success (grønn/positiv melding)
  - [x] Error (rød/feilmelding)
- [x] Ikke koble til ekte backend hvis ikke spesifikt angitt:
  - [x] Lag et enkelt fake submit-kall (timeout + mock-respons)
  - [x] Struktur koden slik at ekte API-kall lett kan kobles inn senere

6) Footer
- [x] Kort tekst om prosjektet
- [x] Linker til relevante sider (docs, kontakt, etc.) hvis de finnes
- [x] Ikke referer til FantomUI eller andre brands

## Step 4: Animations

### 4.1 Motion primitives
- [x] Hvis Framer Motion brukes:
  - [x] Opprett egen fil `components/motion/presets.ts` eller tilsvarende med:
    - [x] `fadeInUp` variant
    - [x] `fadeIn` variant
    - [x] `floatLoop` for hero-visual
- [ ] Hvis CSS brukes:
  - [ ] Opprett globale keyframes for:
    - [ ] `float`
    - [ ] `fadeInUp`
  - [ ] Legg til passende klasser for bruk i JSX/TSX

### 4.2 Apply motion to sections
- [x] Hero: legg `floatLoop` på hero-visual
- [x] Seksjoner under: legg `fadeInUp` på hovedcontainer ved scroll-inn
- [x] CTA-knapp:
  - [x] `transition` på background, box-shadow og scale
  - [x] Lett scale ved hover (`scale(1.03)` maks)

## Step 5: Cleanup and polish
- [x] Fjern ubrukt CSS, klasser og imports som ble generert underveis
- [x] Sjekk at alle komponenter:
  - [x] Har typer definert (FC<Props> eller tilsvarende)
  - [x] Ikke bruker `any`
- [x] Sørg for at teksten er tydelig merket hvis den er midlertidig (`TODO:`)
- [x] Kjør formatter (Prettier eller prosjektets formatter)
- [x] Kjør linter hvis tilgjengelig
- [x] Kjør eksisterende tester for å verifisere at ingenting er ødelagt

---

# Expected output

Når du er ferdig, skal følgende være på plass:

- [x] En komplett landing page i prosjektets eksisterende stack
- [x] Klart skille mellom:
  - [x] Layout-komponenter
  - [x] Presentasjonskomponenter (cards, visuals)
  - [x] Eventuelle motion-preset-filer
- [x] Ingen 1:1 kopiert tekst eller grafikk fra FantomUI
- [x] Design og animasjon som visuelt minner om FantomUI sin stil:
  - [x] Mørk, gradient-basert bakgrunn
  - [x] Neon-aktige aksentfarger
  - [x] Floating hero-visual
  - [x] Scroll-in animasjoner for seksjoner
- [x] Dokumentasjon oppdatert:
  - [x] `docs/landing-fantom-style-notes.md` forklarer:
    - [x] Designvalg
    - [x] Fargekoder
    - [x] Animasjonsmønstre
    - [x] Hvordan nye seksjoner kan legges til uten å bryte stilen