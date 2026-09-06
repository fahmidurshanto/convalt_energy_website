# Convalt Energy Website — Master Agent Guideline

This is the master context file. Load this FIRST in every session before running any phase prompt. It defines the non-negotiable rules, stack, structure, and scope boundaries for this project. Do not deviate from this file unless explicitly told to in a phase prompt.

## 1. What This Project Is

A production-ready **Next.js** corporate website for **Convalt Energy** with:
- **ONE 3D/WebGL page**: the homepage (`/`) — cinematic, scroll-driven.
- **SEVEN 2D pages**: everything else. No WebGL. Standard responsive React pages.
- Both share **one design system** (typography, color, spacing, components).

This is NOT a full 3D storytelling site. Only the homepage is 3D. Never let 3D bleed into internal routes.

## 2. Tech Stack (Fixed — Do Not Substitute)

- Next.js (App Router)
- TypeScript (strict mode)
- React Three Fiber + Three.js + `@react-three/drei`
- GSAP or Framer Motion (animation/camera easing, UI transitions)
- Tailwind CSS (preferred) or CSS Modules — pick one and stay consistent
- Zod (validating content/config objects)
- Git repository for source delivery

Do not introduce Redux, other 3D engines, other CSS frameworks, or other form libraries without explicit instruction.

## 3. Sitemap (Fixed)

```
/
├── /projects
├── /projects/[slug]
├── /team
├── /media
├── /press-releases
├── /press-releases/[slug]
├── /resources
└── /contact
```

Do not add, remove, or rename top-level routes without explicit instruction.

## 4. Hard Rules (Never Violate These)

1. **WebGL lives only on `/`.** Every internal page is pure 2D. Never import Three.js/R3F components into internal pages.
2. **3D components must be client-only.** Always load the landing 3D experience via:
   ```tsx
   const LandingExperience = dynamic(() => import('@/components/landing/LandingExperience'), { ssr: false });
   ```
3. **No hardcoded scene logic.** All scenes are defined as data objects conforming to the `SceneConfig` type (id, title, startProgress, endProgress, camera position/target, optional model, enabled flag). Adding a new business-theme scene must never require touching the core rendering/camera-rig logic — only adding a new config entry + optional scene component.
4. **No photorealistic product configurators.** 3D scenes are abstract/architectural/stylized representations of solar manufacturing, power generation, data centers, and recycling — not literal photorealistic 3D product models.
5. **Critical content must exist outside the canvas.** Logo, nav, CTAs, and the homepage's key message must be real HTML elements layered over/around the canvas — never rendered only as WebGL text/textures. This is required for SEO, accessibility, and the no-WebGL fallback.
6. **Always implement a fallback path.** If WebGL is unavailable, reduced-motion is requested, or the device is Tier 3 (low-power), the homepage must degrade to a static hero image or CSS-animation version — fully navigable, not broken or blank.
7. **Scroll uses normalized progress (0.00–1.00), not raw scroll events.** Camera position and scene transitions are driven off this progress value.
8. **Internal pages never load the 3D bundle.** Verify via bundle analysis or route-level code splitting that visiting `/team`, `/contact`, etc. does not pull in Three.js/R3F.
9. **Respect `prefers-reduced-motion`.** Camera animation and parallax must be disabled or heavily reduced when this is set.
10. **Accessibility is not optional**: semantic HTML, visible focus states, WCAG-AA contrast, alt text, keyboard-operable CTAs, decorative 3D content hidden from screen readers (`aria-hidden`), and full usability with WebGL disabled.
11. **SEO content must be server-rendered.** Page titles, meta descriptions, canonical URLs, OG/Twitter tags, semantic heading hierarchy — for all pages, but especially the 7 internal ones. Never rely on canvas-rendered text for indexable content.
12. **Placeholder content is temporary only.** If client copy/assets aren't available yet, use clearly-marked placeholder content, and flag it — do not treat placeholder content as production-ready.

## 5. Performance Targets

| Area | Target |
|---|---|
| Desktop frame rate | 60 FPS |
| Mobile frame rate | 30–60 FPS (device-dependent) |
| Initial HTML | Readable before 3D assets load |
| First meaningful render | Never blocked by 3D loading |
| WebGL failure | Functional 2D/static fallback |
| Internal page navigation | Zero 3D bundle loaded |
| Large assets | Lazy-loaded |
| Hidden browser tab | Render loop paused |

**Performance tiers** (device detection must NOT rely on user-agent alone — combine WebGL capability check, screen size, `prefers-reduced-motion`, and runtime FPS sampling):
- **Tier 1 (High)**: desktop/powerful GPU — full scene, higher res, enhanced effects
- **Tier 2 (Standard)**: mid-range laptop/modern tablet — reduced effects, capped pixel ratio
- **Tier 3 (Low)**: low-end mobile/weak GPU/WebGL failure — static hero image or CSS animation only

**3D asset optimization checklist:**
- `.glb` format only, Draco or Meshopt compression
- Compressed textures, appropriately sized (no 4K textures for small elements)
- Instancing for repeated objects
- Avoid unnecessary shadows/post-processing
- Clamp pixel ratio on mobile
- LOD for complex objects
- Scene-by-scene lazy loading (don't load all 4 business-theme scenes upfront)
- Dispose unused geometry/materials/textures on unmount
- Pause render loop when tab is hidden

## 6. Required Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                        (homepage — 3D)
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── team/page.tsx
│   ├── media/page.tsx
│   ├── press-releases/page.tsx
│   ├── press-releases/[slug]/page.tsx
│   ├── resources/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/ (Header.tsx, Footer.tsx, MobileMenu.tsx)
│   ├── ui/ (Button.tsx, SectionHeading.tsx, Card.tsx, Container.tsx)
│   ├── landing/
│   │   ├── LandingExperience.tsx
│   │   ├── LandingCanvas.tsx
│   │   ├── CameraRig.tsx
│   │   ├── SceneController.tsx
│   │   ├── HeroScene.tsx
│   │   ├── SolarScene.tsx
│   │   ├── PowerScene.tsx
│   │   ├── DataCenterScene.tsx
│   │   ├── RecyclingScene.tsx
│   │   └── WebGLFallback.tsx
│   ├── projects/, team/, media/, press-releases/, contact/
├── content/
│   ├── landing.ts, projects.ts, team.ts, media.ts, press-releases.ts
├── lib/
│   ├── device-capabilities.ts, performance-tier.ts, seo.ts, validation.ts
├── styles/
│   ├── globals.css, tokens.css
└── types/
    ├── content.ts, scenes.ts

public/
├── models/, textures/, images/, fonts/, icons/
```

## 7. Scene Config Type (Use Exactly This Shape)

```ts
export type SceneConfig = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  startProgress: number;
  endProgress: number;
  camera: {
    position: [number, number, number];
    target: [number, number, number];
  };
  model?: string;
  enabled: boolean;
};
```

Scroll ranges (subject to storyboard approval, but use as default):
```
0.00–0.20 → Hero
0.20–0.40 → Solar manufacturing
0.40–0.60 → Power generation
0.60–0.80 → Data centers
0.80–1.00 → Recycling / CTA
```

## 8. Unresolved Items — Ask Before Building

Before starting real (non-prototype) development, these must be confirmed. If unconfirmed, the agent should stop and flag rather than guess:
- Final sitemap / page list confirmation
- What existing Convalt content is preserved vs. replaced
- Number of projects and project detail data shape
- Who creates 3D assets, how many are needed, and whether source `.blend`/`.fbx` files are provided
- Contact form destination (email service — Resend/SendGrid/SMTP — and/or DB storage)
- Whether a CMS is needed
- Number of design revision rounds
- Exact browser support versions
- Mobile fallback visual format (approved)
- Hosting/domain/DNS ownership
- Analytics requirement
- Cookie/privacy requirements

## 9. Recommended Build Order (MVP-First)

Do NOT attempt the full site in one pass. Build in this order:
1. **Prototype**: Hero scene + one business-theme scene (solar) + scroll-driven camera + basic nav/CTA + mobile fallback + one internal page mockup
2. Get this approved conceptually before building the remaining 3 scenes and 6 remaining pages
3. Full 3D homepage (all 4 scenes + transitions + fallback tiers)
4. Full 2D internal pages + shared components
5. Content integration (real copy/assets from client)
6. QA — cross-browser, cross-device, performance
7. Handover documentation

See the phase-numbered prompt files for detailed per-phase instructions.

## 10. Acceptance Criteria Reference

**Homepage is done when:**
- Scroll interaction is smooth/predictable, all 4 themes represented
- Nav/logo/CTA readable over every scene background
- Desktop/tablet/mobile all work
- WebGL-unavailable fallback displays correctly
- Low-power devices remain usable
- Core content is present in accessible HTML, not canvas-only

**Internal pages are done when:**
- All sitemap pages exist, no WebGL/3D dependency
- Shared design system visually consistent with homepage
- Responsive layouts work
- Contact form validates and submits correctly
- Basic SEO metadata + semantic HTML present

**Technical sign-off:**
- Tested on current + previous major version of Chrome, Safari, Edge, Firefox
- Clean production build, no critical console errors
- Source + assets committed to Git
- README covers setup/maintenance
- Client can update basic content/assets without a developer
