# Phase 3 — 2D Internal Pages

Read `00-MASTER-GUIDELINE.md` first. Can be built in parallel with Phase 2 since these pages have zero 3D dependency.

## Goal
Build all remaining 2D pages using the shared design system established on the homepage. No WebGL/Three.js/R3F imports allowed anywhere in this phase.

## Tasks

1. **Shared components first**
   - `Header.tsx` / `Footer.tsx` used consistently across homepage and internal pages (confirm homepage's header component is reused, not duplicated)
   - `ui/Button.tsx`, `SectionHeading.tsx`, `Card.tsx`, `Container.tsx` — extract design tokens (`styles/tokens.css`) so both 3D and 2D pages pull from the same source

2. **Build each page:**
   - `/projects` — listing with cards, filters/categories
   - `/projects/[slug]` — detail template: overview, facts, images, CTA
   - `/team` — finalize from Phase 1 mockup
   - `/media` — news/media items, downloadable materials
   - `/press-releases` — listing
   - `/press-releases/[slug]` — detail template
   - `/resources` — documents/reports listing
   - `/contact` — see Task 3 below

3. **Contact page specifics**
   - Accessible form: required-field validation, success/error states, spam protection (e.g. honeypot field or rate limiting)
   - Confirm with user which backend to wire up (SMTP/Resend/SendGrid, and/or DB save) — do not hardcode a guess; use `lib/validation.ts` with Zod schema regardless of backend choice
   - Display contact details, address, email/phone as real HTML text

4. **Content layer**
   - Populate `content/projects.ts`, `content/team.ts`, `content/media.ts`, `content/press-releases.ts` with placeholder data structured to match final client data shape (confirm shape from Section 8 unresolved items if not yet provided)
   - Clearly comment placeholder content as `// PLACEHOLDER — replace with client-supplied data`

5. **SEO per page**
   - Unique title + meta description per page (use `lib/seo.ts` helper)
   - Canonical URL, OG tags, Twitter card tags
   - Semantic heading hierarchy (one `h1` per page)
   - `sitemap.xml` and `robots.txt` generation

6. **Responsive QA**
   - Test all 7 pages at mobile/tablet/desktop breakpoints

## Definition of Done
- All 8 routes (7 pages + dynamic slugs) render correctly with zero 3D bundle weight
- Verify via bundle analyzer that Three.js/R3F is NOT included in any internal page's JS bundle
- Contact form validates, shows success/error states, and submits to the confirmed backend
- Visual consistency with homepage's design system confirmed side-by-side
- Passes the "Internal pages" acceptance criteria in Section 10 of the master guideline
