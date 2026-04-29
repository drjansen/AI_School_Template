# Eldarin School — Marketing Website

A modern, AI-forward K–12 academy marketing website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and a **Three.js WebGL animated background**.

---

## Brand

| Field | Value |
|-------|-------|
| School name | Eldarin School |
| Domain (placeholder) | eldarinschool.ai |
| Tagline | Raising AI-literate global leaders. |
| Audience | South Korea-based families seeking Western university pathways |

All brand values are centralised in [`src/config/brand.ts`](src/config/brand.ts).

---

## Animated Background (Three.js / WebGL)

### Overview

The site features a **site-wide animated star dome + nebula cloud backdrop** implemented with Three.js. It renders as a `position: fixed` layer behind all page content so the animation is visible through all sections.

The component lives at [`src/components/NebulaBackground.tsx`](src/components/NebulaBackground.tsx) and is loaded via a Client Component wrapper ([`src/components/GlobalBackground.tsx`](src/components/GlobalBackground.tsx)) so Three.js is never included in the server-side bundle.

### How to tweak background parameters

Open `src/components/NebulaBackground.tsx` and edit the constants block at the top of the `useEffect`:

```typescript
const STAR_COUNT = 2500;      // Number of star particles (more = denser sky)
const NEBULA_COUNT = 80;      // Number of large nebula blob particles
const ROTATION_SPEED = 0.022; // Radians/s for the slow star-sphere drift
const TWINKLE_SPEED = 0.6;    // Multiplier for the star-twinkle oscillation
const MAX_PIXEL_RATIO = 1.5;  // Cap for devicePixelRatio (mobile protection)
```

To change nebula colors, edit the `auroraColors` array in the same file:

```typescript
const auroraColors = [
  [0.18, 0.28, 0.72], // deep aurora blue — adjust R, G, B (0.0–1.0)
  [0.08, 0.45, 0.65], // aurora teal-blue
  [0.30, 0.18, 0.65], // aurora violet
  [0.05, 0.38, 0.52], // deep teal
  [0.22, 0.20, 0.80], // indigo-violet
];
```

### Reduced motion / WebGL fallback behavior

| Condition | Behaviour |
|-----------|-----------|
| `prefers-reduced-motion: reduce` | Three.js is **not loaded at all**. The mount `<div>` shows a static CSS deep-space radial gradient. |
| WebGL unavailable (old browsers, some VMs) | Same as above — static CSS gradient fallback. |
| Browser tab hidden (`visibilitychange`) | `requestAnimationFrame` loop is **paused** and resumes when the tab becomes visible again. |
| Mobile / high-DPI screen | Pixel ratio is **capped at 1.5** to protect GPU performance. |

The static CSS fallback gradient (deep indigo + violet + teal aurora tones) is always present on the container `div`, so it is visible instantly before Three.js initialises and as the permanent fallback.

### Performance notes

- Three.js is dynamically imported — it is **not included in the initial JS bundle**.
- The WebGL renderer uses `powerPreference: "low-power"` to prefer integrated GPUs on mobile.
- The animation uses `requestAnimationFrame` with a delta-time cap of 50 ms to prevent large jumps after background tabs resume.
- Only ~2500 star + 80 nebula particles are used; no textures or heavy assets are loaded.

---

## Design System

### Palette

The visual theme is **"clean spacecraft UI / Apple-like minimal"** — futuristic, premium, high clarity. Palette is defined as CSS custom properties in `src/app/globals.css`:

| Variable | Value | Use |
|----------|-------|-----|
| `--aurora-blue` | `#6399ff` | Primary accent |
| `--aurora-violet` | `#a78bfa` | Secondary accent |
| `--aurora-cyan` | `#67e8f9` | Highlight accent |
| `--aurora-teal` | `#2dd4bf` | Data/success accent |
| `--surface-0` | `#05080f` | Deepest background |
| `--surface-1` | `#090d18` | Section base |
| `--surface-2` | `#0d1221` | Elevated card |

### Utility classes

| Class | Description |
|-------|-------------|
| `.text-gradient` | Gradient text (blue → violet → cyan) |
| `.card-glass` | Frosted-glass card style |
| `.eyebrow` | Small-caps section label |
| `.badge-aurora` | Pill badge with aurora border |
| `.btn-primary` | Primary gradient button |
| `.btn-ghost` | Ghost/outline button |
| `.section-dark` | Semi-transparent dark section (lets background breathe through) |
| `.section-mid` | Slightly lighter semi-transparent section |
| `.aurora-divider` | Gradient horizontal divider |

---

## New Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `three` | `^0.184.0` | WebGL 3D scene for animated background |
| `@types/three` | `^0.184.0` | TypeScript types for Three.js |

---

## Local Development

### Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** ≥ 9

### Quickstart

```bash
# Clone
git clone https://github.com/drjansen/operation_juggernaut.git
cd operation_juggernaut

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── prospectus/
│   │       └── route.ts           ← Form submission API endpoint
│   ├── globals.css                 ← Tailwind base + spacecraft UI design system
│   ├── layout.tsx                  ← Root layout with metadata + GlobalBackground
│   └── page.tsx                    ← Landing page composition
├── components/
│   ├── GlobalBackground.tsx        ← Client-component wrapper for NebulaBackground
│   ├── NebulaBackground.tsx        ← Three.js WebGL star dome / nebula backdrop
│   ├── StarfieldCanvas.tsx         ← Legacy Canvas 2D starfield (kept as reference)
│   ├── Navbar.tsx                  ← Sticky frosted-glass navigation
│   ├── Hero.tsx                    ← Hero section with CTA (transparent — shows backdrop)
│   ├── Mission.tsx                 ← Mission pillars + portrait of graduate
│   ├── Pathway.tsx                 ← K–12 pathway (Elementary/Middle/High)
│   ├── Curriculum.tsx              ← AI-integrated course cards
│   ├── Outcomes.tsx                ← University outcomes & counseling
│   ├── Portfolio.tsx               ← Student portfolio timeline
│   ├── Testimonials.tsx            ← Fictional placeholder testimonials
│   ├── FAQ.tsx                     ← Accordion FAQ
│   ├── CTASection.tsx              ← Prospectus request form
│   └── Footer.tsx                  ← Footer with links & contact
└── config/
    └── brand.ts                    ← Central brand/domain config
```

---

## API Route

`POST /api/prospectus` accepts:

```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "childGrade": "string (optional)",
  "message": "string (optional)"
}
```

Returns `{ success: true }` on valid submission. In production, connect this to your CRM or email service of choice.

---

## Ubuntu + Nginx Deployment (Production)

### Updating the site (standard workflow)

```bash
cd /opt/eldarinschool
git checkout main
git pull
npm install
npm run build
pm2 restart eldarinschool
```

### Initial setup

#### 1. Install Node.js on Ubuntu

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # should be 20.x
```

#### 2. Install PM2 (process manager)

```bash
sudo npm install -g pm2
```

#### 3. Clone and build the project

```bash
cd /opt
sudo git clone https://github.com/drjansen/operation_juggernaut.git eldarinschool
cd eldarinschool
npm install
npm run build
```

#### 4. Start with PM2

```bash
pm2 start npm --name "eldarinschool" -- start
pm2 save
pm2 startup   # follow the printed command to enable autostart
```

#### 5. HTTPS with Certbot

> **Note:** Replace `eldarinschool.icsportals.org` below with your actual domain.

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d eldarinschool.icsportals.org
```

---

## Notes

- The prospectus form is fully functional client-side (validation + success state). The `/api/prospectus` route logs submissions server-side — hook it to your email/CRM in production.
- All testimonials, statistics, and program details are **fictional placeholders**.
- The school accreditation process runs in parallel with [ICS (ics.kr)](https://www.ics.kr).
- Replace placeholder contact details in `src/config/brand.ts` with real info when available.
