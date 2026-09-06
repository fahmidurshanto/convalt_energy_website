# Convalt Energy — Modern 3D & 2D Corporate Web Application

A production-ready, high-impact corporate web application for **Convalt Energy** built with **Next.js (App Router)**, **React Three Fiber (R3F)**, **Three.js**, and **Tailwind CSS**.

This website pairs a cinematic, scroll-driven **3D WebGL homepage (`/`)** with **seven clean 2D internal pages**, sharing a unified modern design system.

---

## 🌟 Key Features

### 1. Cinematic 3D Scroll-Driven Homepage (`/`)
- **Normalized Scroll Interpolation**: Smooth camera lerping and scene transitions driven by a normalized `0.00 – 1.00` scroll progress bar across 500vh scroll height.
- **5 Core Business Scenes**:
  1. `Hero`: Core brand statement with abstract glowing energy core.
  2. `Solar Manufacturing`: High-efficiency solar module array geometry.
  3. `Power Generation`: Utility-scale renewable energy power tower.
  4. `Green Data Centers`: Hyper-scale zero-carbon computing server grid.
  5. `Recycling & Partner CTA`: Circular solar panel recovery loop and call-to-action block.
- **Data-Driven Architecture**: All scenes are declaratively configured in `src/content/landing.ts` via the `SceneConfig` interface. Adding or modifying scenes requires zero changes to core camera or canvas components.

### 2. Intelligent Performance Tiering & WebGL Fallbacks
- **Runtime FPS Sampling**: `src/lib/performance-tier.ts` dynamically monitors device frame rates to adjust rendering fidelity across Tier 1 (High), Tier 2 (Standard), and Tier 3 (Fallback).
- **Graceful Fallback (`WebGLFallback.tsx`)**: Automatically displays a static CSS/hero image layout if WebGL is unsupported, low-end mobile devices are detected, or `prefers-reduced-motion` is requested.
- **Tab Visibility Handler**: Render loop automatically pauses when browser tab is inactive to save GPU/battery resources.

### 3. Pure 2D Internal Pages (Zero WebGL Leakage)
- All seven internal sitemap routes are strictly 2D with **zero Three.js or R3F bundle overhead**:
  - `/projects`: Clean energy portfolio listing with category tags and specs.
  - `/projects/[slug]`: Dynamic project detail page with key highlights and facts.
  - `/team`: Executive leadership and engineering team showcase.
  - `/media`: Official press relations contacts and downloadable brand media kit.
  - `/press-releases`: Listing of corporate news and announcements.
  - `/press-releases/[slug]`: Dynamic press article detail view.
  - `/resources`: Technical whitepapers and downloadable ESG report hub.
  - `/contact`: Interactive contact portal.

### 4. Interactive Zod Form Validation & Anti-Spam
- Client-side form validation built with **Zod** in `src/components/contact/ContactForm.tsx`.
- Hidden honeypot field to block automated spam submissions without requiring intrusive CAPTCHAs.

### 5. SEO & Accessibility (WCAG-AA)
- **Accessible Overlays**: Logo, navigation, headlines, and CTAs exist as real HTML elements overlaid above the 3D canvas for maximum SEO indexability and screen-reader support.
- **Decorative Canvas Isolation**: All 3D canvas meshes are tagged with `aria-hidden="true"`.
- **Dynamic SEO Metadata**: `src/lib/seo.ts` generates canonical URLs, title templates, OpenGraph cards, and Twitter summary tags across all routes.
- **Search Engine Indexing**: Dynamic `sitemap.xml` and `robots.txt` generated automatically.

---

## 🎯 Target Use Cases

### 1. Enterprise Partner & Municipal Engagement
- **Use Case**: Educating public utility leaders, corporate energy buyers, and municipal partners on Convalt Energy's utility-scale renewable generation and domestic manufacturing capacities.
- **Key Touchpoint**: The 3D scroll story on the homepage visualizes full supply-chain capabilities from solar manufacturing to grid generation.

### 2. Hyperscale Data Center & AI Workload Inquiries
- **Use Case**: Attracting technology companies seeking 100% clean, dedicated on-site solar microgrids for energy-intensive AI workloads.
- **Key Touchpoint**: The `/projects` portfolio and `/resources` technical whitepapers detailing zero-carbon data center integration frameworks.

### 3. Investor & ESG Relations
- **Use Case**: Providing institutional investors and sustainability auditors with transparent corporate metrics and environmental commitments.
- **Key Touchpoint**: The `/resources` hub offering downloadable ESG reports and sustainability specification sheets.

### 4. Media & Journalist Inquiries
- **Use Case**: Supplying journalists and clean energy industry analysts with verified corporate updates, executive press contacts, and downloadable brand assets.
- **Key Touchpoint**: The `/media` and `/press-releases` sections featuring downloadable media kits (`.zip`) and official releases.

### 5. High-Intent Business Lead Capture
- **Use Case**: Converting interested enterprise clients into qualified project leads.
- **Key Touchpoint**: Accessible CTAs on every section leading to the Zod-validated `/contact` form.

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router, TypeScript strict mode)
- **3D / Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei`
- **Styling**: Tailwind CSS
- **Form Validation**: Zod
- **Icons**: Lucide React / SVG
- **Animations**: GSAP / Framer Motion

---

## 🚀 Getting Started

### Installation
```bash
# Clone the repository
git clone https://github.com/fahmidurshanto/convalt_energy_website.git
cd convalt_energy_website

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## 📖 Handover & Maintenance

For detailed instructions on adding new 3D scenes, updating project listings, modifying press releases, and deploying to Vercel/Netlify, refer to [HANDOVER.md](HANDOVER.md) and [CONTENT-GAPS.md](CONTENT-GAPS.md).
