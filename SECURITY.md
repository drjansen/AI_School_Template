# Security Policy

## Supported Versions

The current version of the Eldarin Institute website (main branch) is actively maintained. Only the most recent deployment receives security fixes.

## Reporting a Vulnerability

If you discover a security vulnerability in this repository or the eldarin.ai website, **please do not open a public GitHub issue**.

Instead, report it privately:

**Email:** info@eldarin.ai  
**Subject line:** `[SECURITY] <brief description>`

Please include:
- A clear description of the vulnerability and its potential impact
- Steps to reproduce the issue (proof-of-concept if applicable)
- Any suggested mitigations or patches

We aim to acknowledge all valid reports within **5 business days** and to release a fix or mitigation within **30 days** of confirmed impact, depending on severity.

We appreciate responsible disclosure and will credit researchers in the release notes unless anonymity is requested.

## Scope

In scope for this policy:
- The eldarin.ai website and its web application (Next.js frontend + API routes)
- API endpoints (e.g., `/api/prospectus`)

Out of scope:
- Third-party services (Google Fonts, Instagram, LinkedIn, ICS) — please report those to the respective vendors
- Social-engineering attacks against staff
- Denial-of-service attacks

## Security Practices

This repository applies the following controls:

- **Security headers** — `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, and a `Content-Security-Policy` are set in `next.config.ts` and applied to all responses.
- **Rate limiting** — The inquiry form API (`/api/prospectus`) limits submissions to 5 per IP per minute to prevent abuse.
- **Input validation** — All form inputs are validated server-side before processing.
- **HSTS** — Recommended at the Nginx reverse-proxy layer (see `docs/nginx-security-headers.md`).
- **No unnecessary data collection** — See our Privacy Policy at `/legal/privacy`.

## DMCA / Copyright Takedown

If you believe content on eldarin.ai infringes your copyright, please follow the DMCA takedown procedure described in our [Terms of Service](/legal/terms) (Section 8) and send your notice to **info@eldarin.ai**.
