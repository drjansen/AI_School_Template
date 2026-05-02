import type { NextConfig } from "next";

/**
 * Security headers applied to every response from the Next.js app server.
 *
 * NOTE — HSTS (Strict-Transport-Security) is intentionally omitted here.
 * HSTS must be configured at the reverse-proxy layer (Nginx) so it is only
 * sent over verified HTTPS connections and can be managed with proper
 * max-age / preload values. See docs/nginx-security-headers.md for guidance.
 *
 * NOTE — Content-Security-Policy uses 'unsafe-inline' and 'unsafe-eval' for
 * script-src because Next.js App Router emits inline hydration scripts and
 * Three.js (used for the animated background) requires these at runtime.
 * A nonce-based CSP would be the next hardening step; see the docs/ file.
 */
const securityHeaders = [
  // Prevent MIME-type sniffing attacks
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Only send the origin as the referrer when crossing origins
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Disable browser features the site does not use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },

  // Clickjacking protection (also covered by frame-ancestors in CSP below)
  { key: "X-Frame-Options", value: "DENY" },

  // Content Security Policy
  // ─ default-src 'self'       → fallback: only same-origin resources
  // ─ script-src unsafe-inline / unsafe-eval → required by Next.js + Three.js
  // ─ style-src unsafe-inline  → required by Tailwind CSS critical styles
  // ─ font-src gstatic          → Google Fonts delivery CDN
  // ─ object-src 'none'         → block Flash / plugins entirely
  // ─ base-uri 'self'           → prevent <base> tag injection
  // ─ frame-ancestors 'none'    → stronger clickjacking guard (modern browsers)
  // ─ form-action 'self'        → forms may only submit to same origin
  // ─ upgrade-insecure-requests → tell browsers to prefer HTTPS sub-resources
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
