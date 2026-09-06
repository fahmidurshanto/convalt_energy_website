# Phase 4 — QA, Content Integration & Handover

Read `00-MASTER-GUIDELINE.md` first. Final phase before delivery.

## Goal
Replace placeholders with real content, verify everything against acceptance criteria, and produce handover documentation.

## Tasks

1. **Content integration**
   - Replace all `// PLACEHOLDER` content with client-supplied copy, project data, logo, brand assets, images, contact details, press/media info
   - If any client content is still missing, flag explicitly in a `CONTENT-GAPS.md` file rather than shipping with silent placeholders

2. **Cross-browser testing**
   - Test on current + previous major version of Chrome, Safari, Edge, Firefox
   - Log any WebGL/CSS inconsistencies found and fix or document as known limitation

3. **Performance verification**
   - Re-run FPS checks across performance tiers (desktop, mid-tier, low-end mobile)
   - Confirm hidden-tab render pausing works
   - Confirm no critical console errors in production build (`next build && next start`)

4. **Accessibility audit**
   - Run an automated pass (e.g. axe or Lighthouse) plus manual keyboard-only navigation test across all 8 pages + homepage
   - Verify WCAG-AA contrast on all overlay text against every 3D scene background
   - Verify full site is usable with WebGL disabled

5. **SEO verification**
   - Confirm sitemap.xml, robots.txt, meta tags, and structured data (where relevant) are present and correct
   - Confirm homepage's key message is present in real HTML, not canvas-only

6. **Deployment**
   - Set up staging + production environments (per hosting decision — confirm from Section 8 unresolved items)
   - Document environment variables, domain/DNS connection steps, build/deploy commands

7. **Handover documentation** — produce a `HANDOVER.md` covering:
   - Local setup instructions
   - Development commands
   - Production build steps
   - How to replace assets/images
   - How to add a new 3D scene (config-driven — reference Section 7 of master guideline)
   - How to update content (projects, team, press releases, etc.)
   - Contact form configuration (backend, env vars)
   - Performance testing instructions
   - Known limitations

## Definition of Done
- All items in Section 11 "Technical" acceptance criteria of the master guideline pass
- `HANDOVER.md` and `CONTENT-GAPS.md` (if applicable) delivered alongside source code
- Client team can update basic content/assets without developer help (verify this claim, don't assume it)
