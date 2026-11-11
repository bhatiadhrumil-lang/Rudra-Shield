# RudraShield Cyber Systems

A responsive, multi-page corporate website for RudraShield Cyber Systems and its University Cyber Security Value-Added Program (U-CSVAP). Built with React, TypeScript, Vite, Tailwind CSS 4, React Router and Framer Motion.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About RudraShield |
| `/programs` | U-CSVAP program, six-level competency framework and assessment |
| `/labs` | Cyber security lab ecosystem |
| `/learning-framework` | Learn → Practice → Simulate → Defend → Attack → Deploy journey |
| `/partnerships` | University partnership model, governance, delivery and commercial models |
| `/careers` | Student career readiness and opportunities |
| `/contact` | Enquiry form and contact information |
| `*` | In-app 404 page |

## Local development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run typecheck   # TypeScript strict check
npm run build       # typecheck, production build and SEO file generation
npm run preview     # preview the production build
```

## Environment variables

Copy `.env.example` to `.env` and set the values that apply.

```dotenv
VITE_CONTACT_ENDPOINT=
SITE_URL=https://your-domain.example
```

- `VITE_CONTACT_ENDPOINT` is optional. Without it, the contact form validates normally but displays a configuration notice instead of pretending to send. The value is public and must never contain a secret.
- `SITE_URL` is used by the production SEO script to generate `dist/sitemap.xml` and `dist/robots.txt` and to make the static Open Graph, Twitter and organization-schema URLs absolute. It must be the final absolute origin, without a trailing slash.

### Contact endpoint contract

The form sends `POST` JSON with these fields:

```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "organization": "string",
  "designation": "string",
  "enquiryType": "University Partnership | Cybersecurity Training | Internship Opportunities | Industry Collaboration | General Enquiry",
  "message": "string",
  "consent": true,
  "submittedAt": "ISO-8601 timestamp",
  "source": "rudrashield-website"
}
```

The endpoint must return a `2xx` response and allow requests from the deployed site origin. Add server-side validation, spam/rate-limit controls, secure storage and an owner notification workflow. The current client-side checks are UX controls, not a security boundary.

## Before launch

- [ ] Replace the placeholder email, phone and address in `src/data/site.ts`.
- [ ] Set `SITE_URL` and `VITE_CONTACT_ENDPOINT` in the deployment environment, then rebuild.
- [ ] Connect the contact endpoint and submit a real test enquiry end to end.
- [ ] Confirm the privacy/consent wording with the organisation's legal or compliance owner.
- [ ] Review all program, outcome, certification and partnership statements against approved company language.
- [ ] Replace illustrative stock photography with owned or fully cleared institutional photography if required, and record credits.
- [ ] Confirm the final domain in canonical URLs, `robots.txt` and `sitemap.xml`.
- [ ] Run `npm run build` and a browser/accessibility pass against the production deployment.

## Content and claims

The source company profile uses **U-CSVAP**. The brand is presented consistently as “University Cyber Security Value-Added Program” throughout this implementation. If the approved public name changes, update `src/data/site.ts` and the corresponding copy.

The site deliberately avoids presenting targets as verified achievements:

- The `300+` hours, `50+` scenarios and `10+` projects are labelled **program targets**, as described in the company profile.
- The site states that delivery is **alongside existing degree programs** and does not require modification to an approved curriculum.
- Lab descriptions are presented as learning environments within the framework, not as an existing physical facility, live SOC or operational infrastructure.
- Career support is explicitly distinguished from an employment or placement guarantee.
- Certifications, commercial terms, lab provisioning and delivery scope are stated as items confirmed through institutional agreements.
- Contact details remain visibly marked as placeholders until confirmed.

## Project structure

```text
src/
  components/   Shared UI, navigation, form and page sections
  data/         Site content, programs, labs, learning framework and navigation
  layouts/      Application shell
  lib/          Contact delivery layer
  pages/        Route-level pages
  styles/       Tailwind import, design tokens and responsive styling
public/
  brand/        Cropped logo assets, favicon and Open Graph image
  images/       Local responsive WebP photography
scripts/
  generate-seo.mjs
```

## SEO and deployment

The static `index.html` provides base metadata; the production build makes its social image and organization-schema URLs absolute from `SITE_URL`. Per-route metadata, canonical URLs and schema URLs are then applied client-side by `src/components/Seo.tsx`. Production builds also generate `sitemap.xml` and `robots.txt`.

SPA fallback files are included for common hosts:

- `vercel.json` — Vercel rewrites.
- `public/_redirects` — Netlify-style fallback.

For other static hosts, configure all unknown routes to serve `index.html`. Ensure the final site is served over HTTPS.

## Assets

Brand imagery is derived from the supplied RudraShield emblem and company profile. Photography is stored locally as responsive WebP files under `public/images/`. The illustrative photography used in this build was sourced from Unsplash under the Unsplash License; confirm final usage rights and record photographer/source credits before public launch where required.

## Accessibility notes

The implementation includes semantic landmarks, a skip link, visible focus styling, keyboard-operable navigation and tabs, reduced-motion support, labelled form fields, inline validation messages, ARIA state on interactive controls and a 44px mobile menu target. Re-run accessibility and keyboard testing on the final content and deployment.
