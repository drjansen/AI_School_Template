# Architecture Guide (Where to Edit What)

This site is a **Next.js (App Router) + React + TypeScript** marketing site.
If you mostly edit homepage content, start with:

- `src/app/page.tsx` (homepage section order)
- `src/components/*` (section UI/structure)
- `src/lib/i18n/en.ts` and `src/lib/i18n/ko.ts` (text content)

---

## Top-level structure (practical view)

| Area | What it controls | Main files |
|---|---|---|
| Homepage composition | Which sections appear, and in what order | `src/app/page.tsx` |
| Section content/markup | Hero, About, Mission, FAQ, etc. layout and component structure | `src/components/*.tsx` |
| Navigation/footer labels | Menu labels and footer link labels (via translations) + link targets | `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/lib/i18n/en.ts`, `src/lib/i18n/ko.ts` |
| Bilingual text (EN/KO) | All user-facing copy per section | `src/lib/i18n/en.ts`, `src/lib/i18n/ko.ts`, `src/lib/i18n/types.ts` |
| Brand identity | Site name, tagline, domain, contact details, social links | `src/config/brand.ts` |
| Global styling/theme | Colors, typography, utility classes, design tokens | `src/app/globals.css` |
| Images/static assets | Logos, portraits, other static files | `public/` (e.g. `public/leadership/`, `public/brand/`) |

---

## Where do I edit what?

| I want to edit… | Primary file(s) | Notes |
|---|---|---|
| Homepage section ordering/layout | `src/app/page.tsx` | Reorder/add/remove section components in `<main>`. |
| Hero section content | `src/components/Hero.tsx`, `src/lib/i18n/en.ts`, `src/lib/i18n/ko.ts` | Structure is in `Hero.tsx`; text values are under `hero` in i18n files. |
| About/Leadership section content | `src/components/LeadershipSpotlight.tsx`, `src/lib/i18n/en.ts`, `src/lib/i18n/ko.ts`, `public/leadership/` | Section is anchored at `id="about"`; text is under `leadership`; photo path is in `LeadershipSpotlight.tsx`. |
| Footer links/content | `src/components/Footer.tsx`, `src/lib/i18n/en.ts`, `src/lib/i18n/ko.ts`, `src/config/brand.ts` | Link targets are in `Footer.tsx`; labels are in `footer.*` i18n keys; contact/domain comes from `brand.ts`. |
| Navigation labels | `src/components/Navbar.tsx`, `src/lib/i18n/en.ts`, `src/lib/i18n/ko.ts` | Links are defined in `navLinks` in `Navbar.tsx`; labels come from `navbar.links.*`. |
| English/Korean text | `src/lib/i18n/en.ts`, `src/lib/i18n/ko.ts`, `src/lib/i18n/types.ts` | Keep both language files in sync; add type fields in `types.ts` for new keys. |
| Brand/site-wide identity values | `src/config/brand.ts` | Name, tagline, domain, email, phone, address, social URLs. |
| Images and where to store them | `public/` | Use folders like `public/leadership/` and reference with `/leadership/filename.png`. |
| Styling/global theme | `src/app/globals.css` | Theme tokens and shared utility classes live here. |

---

## Common tasks

### 1) Change homepage headline
- [ ] Edit hero text in `src/lib/i18n/en.ts` (`hero.tagline`, `hero.subheadline`)
- [ ] Edit matching Korean text in `src/lib/i18n/ko.ts`
- [ ] If layout needs changes, adjust `src/components/Hero.tsx`

### 2) Change director bio/title/photo (About)
- [ ] Edit leadership text fields in both i18n files under `leadership.*`
- [ ] Replace/add image in `public/leadership/`
- [ ] Update image path in `src/components/LeadershipSpotlight.tsx` (`<Image src="..." />`)

### 3) Add a footer link
- [ ] Add/update link object in `src/components/Footer.tsx` (`footerLinks`)
- [ ] Add/update the label key text in both i18n files under `footer.links.*`
- [ ] Ensure target section ID exists (example: `#about`, `#faq`)

### 4) Update contact info
- [ ] Edit `src/config/brand.ts` (`contact.email`, `contact.phone`, `contact.address`)
- [ ] Footer and CTA contact displays will pick this up automatically

### 5) Add a new section to the homepage
- [ ] Create/update a component in `src/components/` (for example `NewSection.tsx`)
- [ ] Add translations in `src/lib/i18n/en.ts` and `src/lib/i18n/ko.ts` (+ type updates in `types.ts` if needed)
- [ ] Import and place the component in `src/app/page.tsx` where you want it rendered
- [ ] Add nav/footer link targets if needed (`Navbar.tsx` / `Footer.tsx`)

---

## Quick rule of thumb

- **Layout/order problem?** `src/app/page.tsx`
- **Text problem?** `src/lib/i18n/en.ts` + `src/lib/i18n/ko.ts`
- **Brand/contact problem?** `src/config/brand.ts`
- **Image problem?** `public/...` + matching `src` in the component
- **Look-and-feel problem?** `src/app/globals.css`
