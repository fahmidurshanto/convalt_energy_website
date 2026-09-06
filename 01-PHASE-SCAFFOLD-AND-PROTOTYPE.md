# Phase 1 — Scaffold + Prototype (Proof of Concept)

Read `00-MASTER-GUIDELINE.md` first. This phase builds only a proof-of-concept, not the full site.

## Goal
Prove the 3D scroll-driven concept works technically and visually before investing in all 4 scenes and 7 internal pages.

## Tasks

1. **Scaffold the Next.js project**
   - App Router, TypeScript strict mode
   - Install: `three`, `@react-three/fiber`, `@react-three/drei`, `gsap` (or `framer-motion`), `zod`, Tailwind CSS
   - Set up the full folder structure from Section 6 of the master guideline, even if most files are empty stubs

2. **Build the SceneConfig system**
   - Create `types/scenes.ts` with the exact `SceneConfig` type from Section 7
   - Create `content/landing.ts` with 2 scene configs only: `hero` and `solar`

3. **Build the 3D landing shell**
   - `LandingExperience.tsx` — the client-only wrapper (`dynamic(..., { ssr: false })`)
   - `LandingCanvas.tsx` — the R3F `<Canvas>` setup
   - `CameraRig.tsx` — reads normalized scroll progress (0–1) and moves the camera per active scene's config
   - `SceneController.tsx` — decides which scene is active based on progress and the configs' `startProgress`/`endProgress`
   - `HeroScene.tsx` and `SolarScene.tsx` — simple abstract/stylized geometry only (no photorealism, no need for final assets yet — placeholder primitives are fine at this stage)
   - `WebGLFallback.tsx` — renders a static image/CSS version when WebGL is unavailable or `prefers-reduced-motion` is set

4. **Scroll mechanism**
   - Implement normalized scroll progress tracking (0.00–1.00) — do NOT wire directly to raw scroll pixel values in the components; convert once and pass progress down

5. **Nav/CTA overlay**
   - Build `Header.tsx` with sticky logo, nav, mobile menu, primary CTA — as real HTML positioned over the canvas, always readable regardless of scene background

6. **One internal page mockup**
   - Build `/team` (or another simple one) as a fully 2D page using the shared design tokens, to prove the visual language carries over

7. **Fallback/device detection stub**
   - `lib/device-capabilities.ts` — detect WebGL support
   - `lib/performance-tier.ts` — stub that returns Tier 1/2/3 based on WebGL + screen size + reduced-motion (refine in later phase)

## Explicitly Out of Scope for This Phase
- Power/data center/recycling scenes
- All other internal pages
- Real client content/assets
- Contact form backend
- SEO metadata polish
- Cross-browser QA

## Definition of Done
- Homepage scrolls smoothly between hero and solar scene with camera movement
- Nav is visible and clickable at every scroll position
- WebGL-disabled fallback renders instead of a blank/broken page
- `/team` page renders with matching typography/color/spacing
- No console errors in dev build
