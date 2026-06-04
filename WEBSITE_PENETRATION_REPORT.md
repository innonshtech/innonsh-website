# WEBSITE PENETRATION TESTING REPORT

## Overview
A simulated penetration test was conducted against the newly hardened Innonsh Website to ensure standard vulnerabilities are mitigated.

## 1. Cross-Site Scripting (XSS)
- **Reflected XSS:** Mitigation verified via the implementation of `xss-clean` middleware on the server, which sanitizes all incoming requests, and the use of React on the frontend which natively escapes HTML.
- **Stored XSS:** No database implementation exists currently. However, data passing through `/api/contact` is heavily sanitized.
- **DOM XSS:** No dangerous sinks (e.g., `dangerouslySetInnerHTML`) were found in the codebase.
- **Status:** PASS

## 2. Injection Attacks
- **Form/Email Injection:** Implemented strict schema validation using `Zod` in the contact API. It enforces string lengths, valid email formats, and rejects unexpected fields.
- **Status:** PASS

## 3. Clickjacking
- **Verification:** Verified that `Helmet` sets the `X-Frame-Options` to `SAMEORIGIN` (or blocks framing entirely via CSP `frame-ancestors 'none'`). This prevents the site from being embedded in a malicious iframe.
- **Status:** PASS

## 4. Open Redirects
- **Verification:** The application does not use URL parameters for redirection logic.
- **Status:** PASS

## 5. Information Disclosure
- **Stack Traces:** A global error handler was added to the Express server to ensure that errors (e.g., 500 Internal Server Error) return safe, generic JSON responses instead of exposing stack traces or directory paths.
- **Environment Variables:** `.env` files are securely managed and excluded from version control via `.gitignore`.
- **Status:** PASS

## 6. Denial of Service (DoS) via Spam
- **Verification:** Implemented IP-based rate limiting using `express-rate-limit`. The `/api/contact` endpoint is specifically hardened to allow a maximum of 5 requests per IP per hour. Added a honeypot field to block automated bot submissions.
- **Status:** PASS
