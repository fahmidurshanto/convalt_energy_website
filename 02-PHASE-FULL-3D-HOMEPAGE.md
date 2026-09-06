# Phase 2 — Full 3D Homepage

Read `00-MASTER-GUIDELINE.md` first. Only start this phase after Phase 1's prototype is approved.

## Goal
Expand the approved prototype into the complete 5-section homepage experience.

## Tasks

1. **Add remaining scenes to `content/landing.ts`**
   - `power` (0.40–0.60), `dataCenter` (0.60–0.80), `recycling` (0.80–1.00, includes CTA)
   - Each scene config must include camera position/target and (if available) a `.glb` model path

2. **Build remaining scene components**
   - `PowerScene.tsx`, `DataCenterScene.tsx`, `RecyclingScene.tsx`
   - Abstract/architectural/stylized style — consistent visual language with hero/solar
   - If real `.glb` assets aren't ready yet, use clearly-labeled placeholder geometry and flag this to the user

3. **Smooth transitions**
   - Ensure `SceneController.tsx` crossfades or transitions cleanly between all 5 sections, not just 2
   - Content blocks (text overlays) should fade/reveal in sync with scroll progress per Section 7 ranges in the master guideline

4. **Full performance tier implementation**
   - Flesh out `lib/performance-tier.ts`: runtime FPS sampling in addition to WebGL/screen-size/reduced-motion checks
   - Tier 1: full effects. Tier 2: reduced effects, capped pixel ratio. Tier 3: `WebGLFallback` static/CSS version
   - Pause the render loop on `visibilitychange` (hidden tab)

5. **Asset optimization pass**
   - Convert all models to `.glb` with Draco or Meshopt compression
   - Compress/resize all textures appropriately
   - Use instancing for any repeated geometry
   - Add LOD where scenes have complex geometry
   - Lazy-load each scene's assets only as scroll approaches its range — do not load all 4 scenes' assets on initial page load

6. **Accessibility pass on homepage**
   - `aria-hidden` on decorative canvas content
   - Ensure hero/hero message text exists in real HTML (not canvas-only) for screen readers and SEO
   - Verify keyboard navigation reaches nav/CTA without needing to interact with canvas
   - Verify `prefers-reduced-motion` fully disables camera animation/parallax, not just reduces it slightly

7. **Cross-device QA**
   - Test scroll smoothness and frame rate on: desktop (high-end), mid-range laptop, modern mobile, low-end mobile
   - Test WebGL-disabled scenario explicitly (disable via browser flags or a debug toggle)

## Definition of Done
- All 4 business themes + hero are represented and scroll smoothly in sequence
- 60 FPS desktop, 30-60 FPS mobile achieved or documented if not achievable with current assets
- Tier 3 fallback confirmed working and fully navigable
- No 3D bundle weight regression — confirm via build output that scenes lazy-load
- Passes the "Homepage" acceptance criteria in Section 10 of the master guideline
