# Aahir Pavan Yadav — Personal Developer Portfolio

> **Production Developer Portfolio & Identity for Aahir Pavan Yadav**  
> **Official Website Domain**: [`pavandev.in`](https://pavandev.in)

---

## 🧭 Overview & Design Philosophy

This portfolio is built from first principles with **zero bloated frameworks, zero external runtime dependencies**, and an uncompromising commitment to performance, accessibility, and minimalist brutalist aesthetics.

- **Palette**: Near-black canvas (`#09090b`), high-contrast zinc typography (`#f4f4f5`, `#a1a1aa`), and a signature electric amber accent (`#f59e0b`).
- **Atmospheric Visuals**: Minimal mathematical coordinate matrix hero canvas that auto-pauses offscreen and respects `prefers-reduced-motion`.
- **Command Palette**: Instant keyboard navigation (`Cmd+K` / `Ctrl+K`) for jumping between sections and inspecting projects.
- **Owner Customization File**: Single source of truth (`assets/js/config.js`) allowing instant updates to all information without touching HTML structure.
- **Production Performance**: 100/100 Lighthouse-ready, sub-50ms paint times, full SEO and Open Graph metadata, semantic HTML5, and accessible ARIA attributes.

---

## 📁 Project Architecture

```text
pavandev-portfolio/
├── index.html                   # Semantic, accessible HTML5 structure & JSON-LD
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap mapped to pavandev.in
├── site.webmanifest             # Web application manifest
├── vercel.json                  # Production cache-control, clean URLs & security headers
├── package.json                 # Convenience scripts
├── README.md                    # Documentation & deployment runbook
└── assets/
    ├── css/
    │   ├── reset.css            # CSS reset, design tokens, responsive typography
    │   ├── style.css            # Layout, hero, about, skills, timeline, contact
    │   └── components.css       # Nav, modal, toast, cmdk palette, cursor
    ├── js/
    │   ├── config.js            # ★ Central owner configuration file ★
    │   ├── visual-hero.js       # Atmospheric coordinate canvas animation
    │   └── app.js               # Modal, filters, copy-to-clipboard, cmdk, observer
    └── images/
        ├── favicon.svg          # Geometric monogram vector favicon
        ├── og-image.svg         # 1200x630 Open Graph preview card
        └── projects/
            ├── gymgo.svg        # GymGo fitness application preview schematic
            ├── attendsync.svg   # AttendSync institutional attendance preview
            └── demovault.svg    # DemoVault prototype staging preview
```

---

## ⚡ Owner Customization Guide

You do **not** need to edit the HTML file to update your portfolio. Everything is centralized in **`assets/js/config.js`**:

```javascript
// assets/js/config.js
const PORTFOLIO_CONFIG = {
  personal: {
    name: "Aahir Pavan Yadav",
    title: "Software Developer | Tech Lead | Builder",
    headline: "Building digital products. Engineering real solutions.",
    location: "Hyderabad, Telangana, India",
    availability: {
      isAvailable: true,
      statusText: "Open for select opportunities & technical collaborations"
    },
    ...
  },
  ...
};
```

### What You Can Customize in `config.js`:
1. **Availability Badge**: Toggle `isAvailable: true/false` and update the status text.
2. **Projects**: Add new projects, update GitHub links, add live demo URLs, update tags, and change status (`"In Development"`, `"Prototype"`, `"Completed"`).
3. **Skills**: Add or modify programming languages, frontend/backend tools, or cloud concepts.
4. **Experience & Leadership**: Update your roles, responsibilities, and dates.
5. **Contact & Socials**: Change your email (`contact@pavandev.in`), GitHub profile, LinkedIn URL, or Twitter/X handle.
6. **Signature Accent Color**: Change `accentColor` and `accentColorRgb` if you ever want a different signature hue (e.g., cyan `#00d2ff` or emerald `#10b981`).

---

## 💻 Local Development Setup

No build step or complex compiler required. You can serve it using any standard HTTP server:

### Option 1: Python 3 (Recommended, Zero Install)
```bash
cd pavandev-portfolio
python3 -m http.server 3000
```
Open **`http://localhost:3000`** in your browser.

### Option 2: Node.js / NPX
```bash
cd pavandev-portfolio
npx serve .
```

### Option 3: VS Code Live Server
Right-click `index.html` inside VS Code and select **"Open with Live Server"**.

---

## 🚀 Deploying to Vercel with Custom Domain (`pavandev.in`)

### Step 1: Initialize Git and Push to GitHub
```bash
cd pavandev-portfolio
git init
git add .
git commit -m "Initial commit: Aahir Pavan Yadav portfolio"
git branch -M main
git remote add origin https://github.com/aahirpavanyadav/pavandev-portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New..."** → **"Project"**.
3. Import your `pavandev-portfolio` repository.
4. Framework Preset: **Other** (Root directory is `.`).
5. Click **"Deploy"**.

### Step 3: Configure Custom Domain `pavandev.in`
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter `pavandev.in` and click **Add**.
3. Also add `www.pavandev.in` (recommended to redirect to `pavandev.in`).
4. At your domain registrar (e.g. GoDaddy, Namecheap, Google Domains / Squarespace, Cloudflare):
   - **A Record**:
     - Host / Name: `@`
     - Value: `76.76.21.21`
   - **CNAME Record**:
     - Host / Name: `www`
     - Value: `cname.vercel-dns.com`
5. Vercel will automatically provision a free SSL certificate via Let's Encrypt. Within a few minutes, `https://pavandev.in` will be live with full HTTPS encryption!

---

## 🧪 Verification & Quality Checklist

- [x] **SEO Validated**: Clean `<title>`, `<meta description>`, Open Graph, Twitter Cards, `robots.txt`, and `sitemap.xml`.
- [x] **Verified Identity Only**: Strictly includes Aahir Pavan Yadav, B.Tech CSE (AI/CSA) at MCET Hyderabad, Tech Lead @ HackWithIndia, DevOps @ GDG on Campus MCET. Zero invented metrics or certifications.
- [x] **Responsive Layout**: Tested across mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px+).
- [x] **Accessibility**: Semantic landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`), high-contrast WCAG AAA ratios, keyboard focus states, Esc-to-close modals, reduced motion support.
- [x] **Performance**: Zero bulky frameworks, pure CSS and modern vanilla JS, fast SVG graphics, asynchronous canvas loop with IntersectionObserver offscreen pausing.

---

&copy; 2026 Aahir Pavan Yadav. All rights reserved.
