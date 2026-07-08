# Nginx Security Headers Guide

This document describes the recommended Nginx-level security headers for a
production deployment of the Eldarin Institute demo site. These headers **complement** the
application-level headers set in `next.config.ts` but must be configured at
the reverse-proxy layer because:

1. **HSTS** must only be sent over verified HTTPS connections — Nginx is where
   TLS is terminated and can guarantee the connection is secure before sending
   this header. If Next.js were to send HSTS over HTTP (e.g., during initial
   Certbot HTTP-01 challenge or misconfiguration), browsers could get into an
   irrecoverable HSTS loop.
2. Nginx applies headers before the response reaches the client, allowing
   consistent enforcement even for static assets and error pages.

---

## Recommended Nginx server block additions

Add the following directives inside the `server` block that handles HTTPS
(port 443) for your public hostname (the examples below use `eldarin.example` as a placeholder):

```nginx
# ─── Security Headers ────────────────────────────────────────────────────────

# HSTS — tell browsers to always use HTTPS for the next 2 years.
# Only send on the HTTPS vhost. Omit 'preload' until you are sure you want
# the domain added to browser preload lists (irreversible without waiting).
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;

# The following headers are also set by Next.js (next.config.ts) but
# setting them here too ensures they appear even on 4xx/5xx Nginx error pages.
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header X-Frame-Options "DENY" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()" always;
```

---

## Recommended full HTTPS server block template

```nginx
server {
    listen 443 ssl http2;
    server_name eldarin.example www.eldarin.example;

    ssl_certificate     /etc/letsencrypt/live/eldarin.example/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/eldarin.example/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    # ── Security Headers ──────────────────────────────────────────────────
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
    add_header X-Content-Type-Options    "nosniff" always;
    add_header Referrer-Policy           "strict-origin-when-cross-origin" always;
    add_header X-Frame-Options           "DENY" always;
    add_header Permissions-Policy        "camera=(), microphone=(), geolocation=(), interest-cohort=()" always;

    location / {
        proxy_pass         http://127.0.0.1:3000;
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

# ── HTTP → HTTPS redirect ────────────────────────────────────────────────────
server {
    listen 80;
    server_name eldarin.example www.eldarin.example;
    return 301 https://$host$request_uri;
}
```

---

## Notes

- **`X-Forwarded-For`** — The Next.js rate limiter in `/api/prospectus`
  reads `X-Forwarded-For` to identify client IPs. Ensure Nginx is setting
  this header (shown above) so rate limiting works correctly in production.
- **Content-Security-Policy** — The CSP is set at the Next.js layer
  (`next.config.ts`) because it includes nonce-capable directives in future
  upgrades. You do not need to duplicate it in Nginx.
- **Testing headers** — Use [securityheaders.com](https://securityheaders.com)
  or `curl -I https://eldarin.example` to verify headers are being sent correctly
  after deployment.
- **HSTS preload** — Only submit to the HSTS preload list
  (https://hstspreload.org) once the site has been stable on HTTPS for
  several months and you are certain all subdomains support HTTPS.
