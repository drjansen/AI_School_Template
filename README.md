# Nexus Academy — Marketing Website

An original, modern landing page for **Nexus Academy**, an AI/education program.

---

## Local Development

No build step required — this is a plain HTML / CSS / JavaScript site.

### Quickstart

```bash
# Clone the repo
git clone https://github.com/drjansen/operation_juggernaut.git
cd operation_juggernaut

# Open in your browser (any of these work)
open index.html                         # macOS
xdg-open index.html                     # Linux
start index.html                        # Windows

# Or serve with a local dev server for proper font loading
npx serve .                             # Node.js (one-time install)
python3 -m http.server 8080             # Python 3
php -S localhost:8080                   # PHP
```

Then visit **http://localhost:8080** (or whichever port your server uses).

---

## Project Structure

```
operation_juggernaut/
├── index.html   ← Single-page landing page (all sections)
├── styles.css   ← All styles (custom properties, responsive, accessible)
├── main.js      ← Interactivity (nav, FAQ accordion, form validation)
└── README.md
```

---

## Sections

| Section | ID |
|---------|----|
| Hero | `#hero` |
| Value Propositions | `#value-props` |
| Curriculum / Tracks | `#curriculum` |
| Outcomes | `#outcomes` |
| Testimonials | `#testimonials` |
| FAQ | `#faq` |
| Waitlist / CTA Form | `#waitlist` |

---

## Notes

- The waitlist form is **client-side only** — it validates fields and shows a success state but does not post data anywhere. Hook it up to a real endpoint (e.g. Formspree, Netlify Forms) when ready.
- All testimonials, statistics, and program details are **fictional placeholder content**.
- Fonts are loaded from Google Fonts (`Inter`, `Fira Code`). The site remains readable without them (system-font fallbacks are in place).
