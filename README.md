# Eldarin Institute — Marketing Website

A modern, AI-forward alternative educational institution marketing website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and a **Three.js WebGL animated background**.

---

## Brand

| Field | Value |
|-------|-------|
| Institute name | Eldarin Institute |
| Domain | eldarin.ai |
| Tagline | Advancing K-culture for the AI era. |
| Audience | South Korea-based families seeking domestic AI/K-culture university pathways |

All brand values are centralised in [`src/config/brand.ts`](src/config/brand.ts).

---

## Animated Background (Three.js / WebGL)

### Overview

The site features a **site-wide animated star dome + nebula cloud backdrop** implemented with Three.js. It renders as a `position: fixed` layer behind all page content so the animation is visible through all sections.

The component lives at [`src/components/NebulaBackground.tsx`](src/components/NebulaBackground.tsx) and is loaded via a Client Component wrapper ([`src/components/GlobalBackground.tsx`](src/components/GlobalBackground.tsx)) so Three.js is never included in the server-side bundle.

### How to tune nebula intensity

Open `src/components/NebulaBackground.tsx` and edit the constants block at the top of the `useEffect`:

```typescript
const STAR_COUNT = isMobile ? 1500 : 3500; // More = denser sky (auto-reduced on mobile)
const NEBULA_COUNT = isMobile ? 60 : 140;  // More = more cloud blobs
const ROTATION_SPEED = 0.070;       // Radians/s for the star-sphere drift (raise for more motion)
const TWINKLE_SPEED  = 1.2;         // Multiplier for star-twinkle oscillation
const NEBULA_ALPHA   = 0.32;        // Peak nebula blob opacity — raise to 0.50 for dramatic look
const NEBULA_PULSE_SPEED = 0.22;    // Frequency of nebula blob pulse cycle
const CAMERA_DRIFT_SPEED_X = 0.07;  // Camera sway frequency on X axis
const CAMERA_DRIFT_SPEED_Y = 0.05;  // Camera sway frequency on Y axis
const CAMERA_DRIFT_AMOUNT_X = 2.5;  // Peak camera displacement on X (units)
const CAMERA_DRIFT_AMOUNT_Y = 1.8;  // Peak camera displacement on Y (units)
const MAX_PIXEL_RATIO = 1.5;        // Cap for devicePixelRatio (mobile GPU protection)
```

To change nebula/aurora colors, edit the `auroraColors` array in the same file:

### Debug indicator

Add `?debug=bg` to any page URL to show a small overlay confirming whether **WebGL is active** or the **CSS fallback** is being used. Example: `https://yourdomain.com/?debug=bg`

### Reduced motion / WebGL fallback behavior

| Condition | Behaviour |
|-----------|-----------|
| `prefers-reduced-motion: reduce` | Three.js is **not loaded at all**. The mount `<div>` shows a static CSS deep-space radial gradient (vibrant aurora visible). |
| WebGL unavailable (old browsers, some VMs) | Same as above — static CSS gradient fallback. |
| Browser tab hidden (`visibilitychange`) | `requestAnimationFrame` loop is **paused** and resumes when the tab becomes visible again. |
| Mobile / high-DPI screen | Pixel ratio is **capped at 1.5** and star/nebula counts are automatically halved. |

### Performance notes

- Three.js is dynamically imported — it is **not included in the initial JS bundle**.
- The WebGL renderer uses `powerPreference: "low-power"` to prefer integrated GPUs on mobile.
- The animation uses `requestAnimationFrame` with a delta-time cap of 50 ms to prevent large jumps after background tabs resume.
- Star/nebula particle counts scale down automatically on `window.innerWidth < 768`.

---

## Design System

### Gold & Aurora tokens (new)

The visual theme is **"People of the Stars"** — elegant, futuristic, professional; explicitly NOT fantasy. Deep space + vivid aurora + premium gold. Palette is defined as CSS custom properties in `src/app/globals.css`:

| Variable | Value | Use |
|----------|-------|-----|
| `--aurora-blue` | `#6399ff` | Primary accent |
| `--aurora-violet` | `#a78bfa` | Secondary accent |
| `--aurora-cyan` | `#67e8f9` | Highlight accent |
| `--aurora-teal` | `#2dd4bf` | Data/success accent |
| `--gold-warm` | `#d4af37` | Premium gold accent (trim/hairline) |
| `--gold-bright` | `#f0c850` | Bright gold highlight |
| `--gold-muted` | `#a08228` | Muted/deep gold |
| `--surface-0` | `#05080f` | Deepest background |
| `--surface-1` | `#090d18` | Section base |
| `--surface-2` | `#0d1221` | Elevated card |

### Utility classes

| Class | Description |
|-------|-------------|
| `.text-gradient` | Gradient text (blue → violet → cyan) |
| `.text-gradient-gold` | Gradient text (amber → gold) |
| `.card-glass` | Frosted-glass card — gold hairline on hover |
| `.card-gold-trim` | Frosted-glass card with permanent gold hairline |
| `.eyebrow` | Small-caps section label (aurora blue) |
| `.eyebrow-gold` | Small-caps section label (gold) |
| `.badge-aurora` | Pill badge with aurora border |
| `.badge-gold` | Pill badge with premium gold border |
| `.btn-primary` | Primary gradient button (blue/violet) |
| `.btn-gold` | Premium gold gradient button |
| `.btn-ghost` | Ghost/outline button — gold border on hover |
| `.section-dark` | Semi-transparent dark section (lets backdrop breathe) |
| `.section-mid` | Slightly lighter semi-transparent section |
| `.aurora-divider` | Gradient horizontal divider (aurora) |
| `.gold-divider` | Gradient horizontal divider (gold hairline) |
| `.gold-trim` | 1px gold border on all sides |
| `.gold-trim-top` | 1px gold border on top only |
| `.gold-trim-bottom` | 1px gold border on bottom only |

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
cd /opt/eldarin
git checkout main
git pull
npm install
npm run build
pm2 restart eldarin
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
sudo git clone https://github.com/drjansen/operation_juggernaut.git eldarin
cd eldarin
npm install
npm run build
```

#### 4. Start with PM2

```bash
pm2 start npm --name "eldarin" -- start
pm2 save
pm2 startup   # follow the printed command to enable autostart
```

#### 5. HTTPS with Certbot

> **Note:** Replace `eldarin.ai` below with your actual domain.

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d eldarin.ai
```

---

## Notes

- The prospectus form is fully functional client-side (validation + success state). The `/api/prospectus` route logs submissions server-side — hook it to your email/CRM in production.
- All testimonials, statistics, and program details are **fictional placeholders**.
- The accreditation process runs in parallel with [ICS (ics.kr)](https://www.ics.kr).
- Replace placeholder contact details in `src/config/brand.ts` with real info when available.
