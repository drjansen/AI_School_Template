# Eldarin School — Marketing Website

A modern, AI-forward K–12 academy marketing website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

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
│   │       └── route.ts       ← Form submission API endpoint
│   ├── globals.css             ← Tailwind base + custom utilities
│   ├── layout.tsx              ← Root layout with metadata
│   └── page.tsx                ← Landing page composition
├── components/
│   ├── Navbar.tsx              ← Sticky responsive navigation
│   ├── Hero.tsx                ← Hero section with CTA
│   ├── Mission.tsx             ← Mission pillars + portrait of graduate
│   ├── Pathway.tsx             ← K–12 pathway (Elementary/Middle/High)
│   ├── Curriculum.tsx          ← AI-integrated course cards
│   ├── Outcomes.tsx            ← University outcomes & counseling
│   ├── Portfolio.tsx           ← Student portfolio timeline
│   ├── Testimonials.tsx        ← Fictional placeholder testimonials
│   ├── FAQ.tsx                 ← Accordion FAQ
│   ├── CTASection.tsx          ← Prospectus request form
│   └── Footer.tsx              ← Footer with links & contact
└── config/
    └── brand.ts                ← Central brand/domain config
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

### 1. Install Node.js on Ubuntu

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # should be 20.x
```

### 2. Install PM2 (process manager)

```bash
sudo npm install -g pm2
```

### 3. Clone and build the project

```bash
cd /var/www
sudo git clone https://github.com/drjansen/operation_juggernaut.git eldarin
cd eldarin
sudo npm install
sudo npm run build
```

### 4. Start with PM2

```bash
pm2 start npm --name "eldarin-school" -- start
pm2 save
pm2 startup   # follow the printed command to enable autostart
```

### 5. Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/eldarinschool
```

Paste the following configuration block into the file:

```nginx
server {
    listen 80;
    server_name eldarinschool.ai www.eldarinschool.ai;

    location / {
        proxy_pass         http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/eldarinschool /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 6. HTTPS with Certbot

> **Note:** Replace `eldarinschool.ai` below with your actual registered domain before running.

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d eldarinschool.ai -d www.eldarinschool.ai
```

### Updating the site

```bash
cd /var/www/eldarin
sudo git pull
sudo npm install
sudo npm run build
pm2 restart eldarin-school
```

---

## Notes

- The prospectus form is fully functional client-side (validation + success state). The `/api/prospectus` route logs submissions server-side — hook it to your email/CRM in production.
- All testimonials, statistics, and program details are **fictional placeholders**.
- The school accreditation process runs in parallel with [ICS (ics.kr)](https://www.ics.kr).
- Replace placeholder contact details in `src/config/brand.ts` with real info when available.
