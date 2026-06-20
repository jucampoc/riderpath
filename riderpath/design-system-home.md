# Riderpath · Homepage Design Reference

Permanent reference for `app/page.tsx` — the full visual spec for each section, adapted from the original `Hero.jsx`, `Featured.jsx`, `HowItWorks.jsx`, and `Community.jsx` source files.

---

## HERO

**Layout:** `position: relative`, `overflow: hidden`, `min-height: 100vh`, flex align-center.  
**Background:** `var(--rp-asphalt-900)` as base.

**Layer stack (all `position: absolute, inset: 0, pointer-events: none`):**

1. **Atmosphere** — background gradient:
   ```
   radial-gradient(120% 90% at 78% -10%, rgba(208,33,39,0.30), transparent 55%),
   radial-gradient(80% 70% at 10% 110%, rgba(232,163,59,0.10), transparent 60%),
   linear-gradient(180deg, #0E0E10 0%, #141417 100%)
   ```

2. **Route grid overlay** — repeating-linear-gradient:
   ```
   repeating-linear-gradient(115deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 84px)
   ```
   opacity: 0.5

3. **Watermark helmet** — `/images/logos/logo-icon.png`  
   `position: absolute`, `right: -2%`, `top: 50%`, `transform: translateY(-50%)`, `height: 118%`, `opacity: 0.06`, `filter: grayscale(1) brightness(2)`

**Content** (position: relative, max-width: var(--container)):

- `rp-stripe` → `rp-eyebrow` "Comunidad biker · México"
- `h1` font-display, fs-display, tight line-height, max-width 14ch:
  ```
  Cada camino
  cuenta una <span color=var(--rp-red)>historia</span>
  ```
- `p` font-sans, fs-lead, color text-body, max-width 46ch:
  > Crea tu rodada, difunde la ruta y deja que la comunidad la coleccione. Riderpath es el mapa vivo de los motociclistas viajeros.
- **CTA row** (flex, gap-4, flex-wrap):
  - Primary: bg var(--rp-red), glow-red shadow, font-display bold, fs-h4 → `/community#join` "Crear mi rodada →"
  - Secondary: border border-default, font-display bold, fs-h4 → `/benefits` "Explorar el mapa"
- **Stats row** (flex, flex-wrap, gap-8, border-top border-subtle, padding-top space-7):

  | Value   | Label           | Color              |
  |---------|-----------------|---------------------|
  | 12.4k   | Riders activos  | `var(--accent)` amber |
  | 3,200+  | Rodadas creadas | `var(--text-strong)` |
  | 148k km | Trazados        | `var(--text-strong)` |
  | 31      | Estados         | `var(--text-strong)` |

  Value: `rp-mono`, `fs-h3`, bold. Label: font-sans, `fs-eyebrow`, semibold, text-muted, uppercase, tracking-eyebrow.

---

## FEATURED (Rodadas destacadas)

**Background:** `var(--rp-asphalt-850)`  
**Padding:** `var(--space-10) var(--gutter)`

**Header row** (flex, items-end, justify-between, flex-wrap, gap-6, mb space-7):
- Left: `rp-stripe` → `rp-eyebrow` "Rodadas destacadas" → `h2` "Pinta el mapa"
- Right: ghost button → `/community` "Ver todas →"  
  Style: border border-default, font-sans semibold, fs-sm, color text-muted, radius-sm

**Filter tags** (`<FilterTabs />` — `'use client'` component):  
Tags: Todas (default active/red), Montaña, Costa, Desierto, Pueblos mágicos  
Active: bg var(--rp-red), color text-on-red, border var(--rp-red)  
Inactive: bg transparent, color text-muted, border border-default  
Style: border-radius pill, padding space-2 × space-5, font-sans fs-sm, transition dur-base ease-out

**Card grid:**
```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
gap: 24px;
```

**RodadaCard data:**

| Field        | Sierra Gorda Loop        | Ruta del Tequila | Transpeninsular Baja |
|--------------|--------------------------|------------------|-----------------------|
| location     | Querétaro                | Jalisco          | Baja California       |
| distance     | 320km                    | 148km            | 1,710km               |
| duration     | 2 días                   | 1 día            | 6 días                |
| difficulty   | Alta                     | Media            | Extrema               |
| rider        | Diego Salinas            | María Cruz       | El Tijuas             |
| cover        | /images/covers/cover-sierra.jpg | /images/covers/cover-tequila.jpg | /images/covers/cover-baja.jpg |
| live         | true                     | —                | —                     |

### RodadaCard component spec

- `article`, bg `surface-card`, radius-lg, border border-subtle, overflow-hidden, shadow-md, flex-col
- **Cover** — `position: relative`, `aspect-ratio: 16/9`, `overflow: hidden`; `Image fill, objectFit: cover`
- **Live badge** — `position: absolute, top space-3, left space-3`; bg var(--rp-red), font-mono, fs-xs, bold, uppercase, tracking-eyebrow, pill; white pulse dot (6px circle)
- **Body** — padding space-6, flex-col, gap space-4
  - Title: font-display, fs-h4, bold, uppercase, tracking-display
  - Location: font-sans, fs-sm, color text-muted
  - Stats row (flex, gap-6, flex-wrap): distance + duration in rp-mono bold fs-sm; difficulty in font-sans fs-xs bold (color by level); label in fs-xs text-faint uppercase eyebrow
    - Media → `var(--rp-success)` (green)
    - Alta → `var(--rp-amber)` (amber)
    - Extrema → `var(--rp-red)`
  - Rider row: border-top border-subtle, 32px avatar circle (bg asphalt-600, initials), font-sans fs-sm text-muted name

---

## HOW IT WORKS

**Background:** `var(--rp-asphalt-900)`

**Header:**
- `rp-eyebrow` "Cómo funciona"
- `h2` "Tres pasos, mil caminos"

**Grid:**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
gap: 28px;
```

**Steps:**

| Num | Title      | Border top               | Body copy                                                                                      |
|-----|------------|--------------------------|-----------------------------------------------------------------------------------------------|
| 01  | Crea       | 2px solid var(--rp-red)  | Diseña tu rodada con punto de partida, ruta, duración y nivel de dificultad. Tu aventura empieza aquí. |
| 02  | Difunde    | 2px solid var(--border-strong) | Comparte toda la información desde un único enlace. Llega a miles de motociclistas en segundos. |
| 03  | Colecciona | 2px solid var(--border-strong) | Guarda cada kilómetro, foto y momento. Tu historial de rodadas siempre disponible y ordenado. |

Step style: padding-top space-6 above border; number in `rp-mono`, fs-h2, bold, color var(--rp-red); h3 font-display, fs-h3, bold, uppercase; body font-sans, fs-body, text-muted.

---

## COMMUNITY CTA

**Background:** `var(--rp-red-deep)`, `overflow: hidden`, `position: relative`

**Layer stack:**

1. **Radial gradients** (`position: absolute, inset: 0`):
   ```
   radial-gradient(90% 120% at 90% 0%, rgba(208,33,39,0.85), transparent),
   radial-gradient(70% 90% at 0% 100%, rgba(94,18,26,0.9), transparent)
   ```

2. **Diagonal line texture** (`position: absolute, inset: 0, opacity: 0.5`):
   ```
   repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 20px)
   ```

**Content** (position: relative, max-width: container-prose, text-center):

- **5 overlapping avatar circles:** 46px, -12px margin-left overlap (except first), `box-shadow: 0 0 0 3px var(--rp-red-deep)`, initials D/M/R/T/E
- `h2` white, fs-h1, bold, line-height snug:
  ```
  Tu próxima rodada
  ya tiene quién la ruede
  ```
- `p` rgba(255,255,255,0.75), fs-lead, max-width 44ch:
  > Únete gratis a la comunidad de motociclistas viajeros más grande de México.
- **Amber button** → `/community#join` "Unirme a Riderpath"  
  bg `var(--rp-amber)`, color `var(--rp-asphalt-900)`, font-display bold, fs-h4, tracking-wide uppercase, radius-sm, shadow `0 4px 20px rgba(232,163,59,0.4)`

---

## Component files

| File | Type | Purpose |
|------|------|---------|
| `app/page.tsx` | Server Component | Main homepage assembly |
| `components/sections/FilterTabs.tsx` | `'use client'` | Interactive filter state for Featured |
| `components/sections/RodadaCard.tsx` | Server Component | Featured card, reusable |
