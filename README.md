# Bamidele Iyiola S. (ASSORTED) – Ikeja Club Campaign Website 2026

![Bamidele 2026 Campaign Banner](https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80)

An official, high-performance, responsive web application for **Bamidele Iyiola S. (ASSORTED)**, candidate for **Premises Secretary** of **Ikeja Club** in 2026. Built with modern web architecture (React 18+, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons), this application communicates campaign vision, leadership history, 100-day action plans, member endorsements, updates, and direct voter engagement.

---

## 🌟 Key Features

1. **Hero & Interactive Manifesto Overview**
   - Candidate banner with key slogans: *"Responsible Leadership. Greener Premises. Uncompromising Service."*
   - Real-time campaign stats ticker (e.g., 5-min office proximity, 100-Day Action Plan, 100% Commitment).
   - Quick Action CTA buttons: *Pledge Your Vote*, *Explore 100-Day Plan*, *Contact Bamidele*.

2. **About Bamidele & Track Record**
   - Professional bio highlighting his CEO tenure at **Bams-Assorted Tech Ltd** and lifelong commitment to Ikeja Club.
   - Core leadership values: Integrity, Proximity, Environmental Excellence, Member Accountability.

3. **Strategic Vision & 4 Pillars Manifesto**
   - Detailed breakdown of the campaign's 4 core pillars:
     1. *Proactive Premises Maintenance & Upkeep*
     2. *Eco-Friendly Landscaping & Greener Gardens*
     3. *Rapid Response & Proximity Secretariat*
     4. *Transparent Member Reporting & Digital Maintenance Logging*

4. **100-Day Action Plan Timeline**
   - Phase 1 (Days 1–30): Deep Clean, Lighting Audit & Drainage Flushing.
   - Phase 2 (Days 31–60): Landscaping Beautification & Garden Upgrades.
   - Phase 3 (Days 61–90): Smart Digital Facilities Maintenance Portal.
   - Phase 4 (Days 91–100): Member Feedback Townhall & Audit Reporting.

5. **Leadership Journey & Track Record**
   - Timeline highlighting achievements, business governance experience, and club service history.

6. **Community Engagement & Gallery**
   - Filterable photo gallery showcasing club walk-throughs, tennis court consultations, garden inspections, and elder discussions.

7. **Member Endorsements & Testimonials**
   - Endorsements from senior club elders, sport club captains, and long-standing members.

8. **Campaign News, Events & Contact Section**
   - Live activity timeline & upcoming events RSVP.
   - Contact form with instant submission state.
   - Google Maps location overlay pointing to Office Address (*No. 1 Adepele Street, Off Medical Road, Computer Village, Ikeja, Lagos*).
   - Direct phone, WhatsApp, and social media connectivity.

9. **Interactive Modals**
   - **Pledge Vote Modal**: Allows members to submit campaign support and pledge their votes directly.
   - **Vision Modal**: Expanded view of the full manifesto document.
   - **Contact Modal**: Rapid message dispatch to campaign leadership.

---

## 🛠️ Technology Stack

- **Framework**: React 18 / Vite / Next.js Ready
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Custom Color Palette: Burgundy `#7A1730`, Forest Green `#0B6B3A`, Gold `#D4AF37`)
- **Animations**: Motion (`motion/react`) with accessible `prefers-reduced-motion` compliance
- **Icons**: Lucide React
- **SEO & Metadata**: Schema.org JSON-LD (Person, Organization, Website, Breadcrumbs), Open Graph, Twitter Cards
- **PWA Ready**: Web App Manifest (`manifest.json`), `robots.txt`, `sitemap.xml`, vector favicon

---

## 🚀 Getting Started & Local Development

### Prerequisites

- Node.js `v18.0.0` or higher
- npm / yarn / pnpm / bun package manager

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-org/bamidele-ikeja-club-2026.git
   cd bamidele-ikeja-club-2026
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:5173`) in your browser.

4. **Lint and Typecheck**
   ```bash
   npm run lint
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📦 Vercel Deployment Guide

Deploying this application to Vercel is seamless:

1. Push your repository to **GitHub** or **GitLab**.
2. Log in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your cloned repository.
4. Framework Preset: Select **Vite** (or **Next.js** if migrated to Next.js App Router).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 📁 Directory Structure

```
.
├── public/
│   ├── favicon.svg          # Custom Campaign Crest Favicon
│   ├── manifest.json        # PWA Web Application Manifest
│   ├── robots.txt           # Search Engine Crawling Instructions
│   └── sitemap.xml          # XML Sitemap for Search Engines
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ActionPlanSection.tsx
│   │   ├── CampaignNewsContactSection.tsx
│   │   ├── CommunityEngagementSection.tsx
│   │   ├── ContactModal.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LeadershipJourneySection.tsx
│   │   ├── Navbar.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── VisionManifestoSection.tsx
│   │   ├── VisionModal.tsx
│   │   ├── VoteModal.tsx
│   │   └── WhyTrustSection.tsx
│   ├── constants/
│   │   └── campaign.ts      # Campaign information, milestones, action plans
│   ├── App.tsx              # Main application shell
│   ├── index.css            # Global Tailwind styles
│   ├── main.tsx             # React DOM entrypoint
│   └── types.ts             # Global TypeScript type declarations
├── index.html               # Main HTML entrypoint with SEO & Schema.org tags
├── metadata.json            # AI Studio applet metadata configuration
├── package.json             # NPM dependencies and scripts
└── README.md                # Technical Documentation
```

---

## 📄 License & Campaign Ownership

© 2026 Bamidele Iyiola S. (ASSORTED) Campaign Organization for Premises Secretary, Ikeja Club. All rights reserved.
