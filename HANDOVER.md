# Convalt Energy Website — Handover Documentation

This handover guide provides instructions for operating, updating, and deploying the Convalt Energy Next.js WebGL & 2D corporate website.

---

## 1. Project Architecture Overview

- **Framework**: Next.js (App Router, TypeScript strict mode)
- **3D WebGL Engine**: React Three Fiber (`@react-three/fiber`), Three.js, `@react-three/drei`
- **Styling**: Tailwind CSS
- **Form Validation**: Zod
- **Icons**: Lucide React / Inline SVG

---

## 2. Key Architecture Rules

1. **WebGL Isolation**: WebGL rendering exists **only on the homepage (`/`)**. Internal pages (`/projects`, `/team`, `/media`, `/press-releases`, `/resources`, `/contact`) are pure 2D with zero Three.js bundle overhead.
2. **Data-Driven 3D Scenes**: All homepage 3D scenes are defined in `src/content/landing.ts` using the `SceneConfig` interface. Adding or re-ordering scenes does not require changing camera rig or canvas components.
3. **Accessibility & SEO**: Essential text, headlines, and CTAs exist as semantic HTML overlaid on top of the WebGL canvas. All 3D meshes are marked `aria-hidden="true"`.
4. **Device Tiering & Fallbacks**: If WebGL is unavailable or `prefers-reduced-motion` is enabled, the homepage automatically renders `WebGLFallback.tsx`.

---

## 3. Local Setup & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build

# Start production server locally
npm start
```

---

## 4. How to Update Content (Non-Developer Guide)

### Adding or Updating Projects
Open `src/content/projects.ts` and add or modify entries in the `PROJECTS_DATA` array:
```ts
{
  slug: 'new-facility',
  title: 'New Facility Name',
  category: 'Solar Manufacturing',
  location: 'City, Country',
  capacity: '500 MW',
  status: 'Operational',
  description: 'Detailed project description...',
  highlights: ['Highlight 1', 'Highlight 2']
}
```

### Adding Press Releases
Open `src/content/press-releases.ts` and add or modify entries in `PRESS_RELEASES_DATA`:
```ts
{
  slug: 'press-release-title',
  title: 'Official Title',
  date: '2026-09-01',
  summary: 'Brief summary for listing view.',
  content: 'Full press release content...'
}
```

### Adding a New 3D Homepage Scene
Open `src/content/landing.ts` and append a new `SceneConfig` object to `LANDING_SCENES`:
```ts
{
  id: 'newScene',
  title: 'Scene Headline',
  eyebrow: 'Category Eyebrow',
  description: 'Section description...',
  startProgress: 0.8,
  endProgress: 1.0,
  camera: {
    position: [0, 4, 8],
    target: [0, 0, 0],
  },
  enabled: true,
}
```

---

## 5. Contact Form Backend Configuration

The contact form uses Zod for validation in `src/components/contact/ContactForm.tsx`.
To connect an email provider (e.g. Resend, SendGrid, or custom API route):
1. Create an API route at `src/app/api/contact/route.ts`.
2. Update `handleSubmit` in `ContactForm.tsx` to send a POST payload to `/api/contact`.

---

## 6. Deployment Guide

### Vercel Deployment (Recommended)
1. Push repository to GitHub/GitLab.
2. Import project into Vercel dashboard.
3. Set environment variable `NEXT_PUBLIC_SITE_URL` to your production domain (e.g., `https://www.convaltenergy.com`).
4. Click **Deploy**.
