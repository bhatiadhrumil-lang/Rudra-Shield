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

## Official contact information

| Purpose | Contact |
| --- | --- |
| Company | RudraShield Cyber Systems |
| General enquiries | rudrashieldcybersystems@gmail.com |
| Hiring & recruitment | hiring.rudrashield@gmail.com |
| Phone | +91 9714207205 |
| Website owner | Keval Mehta |

These details are centralized in `src/data/site.ts` and rendered on the Contact page and footer. Recruitment and partnership calls to action use the relevant email address.

## Environment variables

Copy `.env.example` to `.env.local` for local development or set the values in the deployment environment.

```dotenv
VITE_CONTACT_ENDPOINT=https://script.google.com/macros/s/AKfycbzxaS-hplCfx9UpTM81U2ItnuJKm1pXzNKQMfKxmYeL7vV_bV6Vhzs92f2n1X8_1dub/exec
SITE_URL=https://your-domain.example
```

- `VITE_CONTACT_ENDPOINT` is public and must never contain a secret. `.env.example` contains the verified Apps Script `/exec` URL built from the deployment ID. The shorter Web App URL in the original brief contained `U2I2tnu` instead of `U2Itnu` and returned a Google 404; use the URL in `.env.example`. If the endpoint is empty, the form shows a configuration notice instead of pretending to send.
- `SITE_URL` is used by the production SEO script to generate `dist/sitemap.xml` and `dist/robots.txt` and to make the static Open Graph, Twitter and organization-schema URLs absolute. It must be the final absolute origin, without a trailing slash.

### Contact endpoint contract

The form sends a simple `POST` with `Content-Type: text/plain;charset=utf-8` and this JSON body:

```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "organization": "string",
  "designation": "string",
  "enquiryType": "University Partnership | Cybersecurity Training | Internship Opportunities | Industry Collaboration | General Enquiry",
  "message": "string"
}
```

Timestamp and Status are not sent from the browser. The Apps Script endpoint generates the timestamp and writes `Pending`.

`text/plain` is used because a JSON content type triggers a CORS preflight that Google Apps Script web apps do not answer. The client does not use `no-cors`; it requires this service-specific confirmation from the supplied Apps Script source:

```json
{ "ok": true, "service": "rudrashield-contact", "status": "accepted" }
```

An already-received enquiry returns `status: "duplicate"` instead. A generic `{ "result": "success" }`, a bare `{ "ok": true }`, or any other `2xx` response without the service marker is treated as a failure. This prevents the frontend from showing success when an old deployment returns a placeholder response without writing a row. Errors return `ok: false` with a `code`.

Client-side handling maps `VALIDATION_ERROR`/`INVALID_REQUEST`/`400`/`422` to a validation message, `RATE_LIMITED`/`429` to a rate-limit message, `SERVICE_UNAVAILABLE`/`BUSY`/`5xx` to a temporary-unavailability message, and network failures or the 15-second timeout to retry guidance. The form resets only after a confirmed success.

## Google Apps Script backend

The deployable backend is in `apps-script/Code.gs`, with the public web-app manifest in `apps-script/appsscript.json`.

The target sheet must contain these headers in the first row:

| Column | Header | Written by |
| --- | --- | --- |
| A | Timestamp | Apps Script |
| B | Full name | Website |
| C | E-mail | Website |
| D | Phone number | Website |
| E | Organization / University | Website |
| F | Designation | Website |
| G | Enquiry type | Website |
| H | Message | Website |
| I | Status | Apps Script (`Pending`) |

Deployment steps for the owner:

1. Open the existing Apps Script project that owns deployment `AKfycbzxaS-hplCfx9UpTM81U2ItnuJKm1pXzNKQMfKxmYeL7vV_bV6Vhzs92f2n1X8_1dub`. Do not create a new spreadsheet.
2. Replace the project code with `apps-script/Code.gs`. Open **Project Settings → Show “appsscript.json” manifest file** and replace the manifest with `apps-script/appsscript.json`. If the existing project depends on the script library at `https://script.google.com/macros/library/d/1UPFXbHOHxgpMvA4lINYum8EOxg0wHAdzCuL1Qe049XY2WH1weF9xGTvT/1`, preserve its `dependencies.libraries` entry; this backend does not require that library.
3. For a standalone script, confirm Script Properties include `SPREADSHEET_ID` and, preferably, `CONTACT_SHEET_NAME`. A bound script uses the active spreadsheet and its first sheet when no name is set. The repository does not contain the existing spreadsheet ID or sheet-tab name.
4. Confirm the header row exactly matches the table above. Header matching ignores case, spaces and punctuation, but a missing or reordered column stops writes.
5. Choose **Deploy → Manage deployments → edit the existing deployment**. Select **New version**, set **Execute as: Me** and **Who has access: Anyone**, then deploy. Updating the existing deployment preserves the `/exec` URL; creating a new deployment can produce a different URL.
6. Open the `/exec` URL in a browser. It must return JSON with `ok: true`, `service: "rudrashield-contact"` and `status: "ready"`. If it reports `Script function not found: doGet`, the latest code has not been deployed.
7. Submit one labelled test enquiry, verify the new row in the spreadsheet, then delete the test row.

The backend validates required fields, email, phone, enquiry type and message length. It uses a script lock and a two-minute duplicate check across the last ten rows, a per-email-hash cache limit of five attempts per ten minutes, formula-injection escaping for text cells, and structured JSON responses. It does not log submitted personal data and does not expose an endpoint for changing Status. Only the spreadsheet owner should edit the sheet or change `Pending` to `Complete`.

The Apps Script execution log records the request content type, JSON property names, missing field names, validation result, populated-field count, spreadsheet name, worksheet name, and append outcome. It never records field values. If the log shows `parse=failed` or `email` under `missing fields`, the deployed script is not running the JSON request contract in this repository. The current deployment must be updated before testing; a timestamp-only row plus a notification email is not produced by `apps-script/Code.gs`. This backend writes the spreadsheet row but does not send an email notification; add that separately if the owner requires it.

## Before launch

- [ ] Set `SITE_URL` in the deployment environment and rebuild.
- [ ] Confirm `VITE_CONTACT_ENDPOINT` is the working Apps Script `/exec` URL in the deployment environment.
- [ ] Deploy `apps-script/Code.gs`, send one clearly labelled test enquiry, confirm the row contains the correct fields with `Pending`, then delete the test row.
- [ ] Verify the deployed site can read the Apps Script confirmation without a CORS error; the local implementation uses a simple `text/plain` request for this reason.
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
- Official contact details are rendered from `src/data/site.ts`; no physical address, social accounts or registration details are published.

## Project structure

```text
apps-script/
  Code.gs           Google Apps Script contact endpoint
  appsscript.json   Web-app manifest
src/
  components/       Shared UI, navigation, form and page sections
  data/             Site content, programs, labs, learning framework and navigation
  layouts/          Application shell
  lib/              Contact delivery layer
  pages/            Route-level pages
  styles/           Tailwind import, design tokens and responsive styling
public/
  brand/            Cropped logo assets, favicon and Open Graph image
  images/           Local responsive WebP photography
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
