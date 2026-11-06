# Penta Freight

## Overview

Penta Freight is a responsive, single-page website presenting logistics services, company information, customer testimonials, certifications, awards, and office locations. It includes six service sections, a video hero, desktop dropdown navigation, and a mobile hamburger menu.

## Project Preview

<img src="public/project-preview.webp" alt="Penta Freight showcase featuring website screens, responsive layouts, and branding mockups" width="100%" />

Website and brand preview.

## Key Features

- Six service cards covering air freight, sea freight, multimodal transport, project cargo, customs broking, and transit warehousing and fleet services.
- Responsive layouts with a desktop side logo and a horizontal logo in the mobile navbar.
- Section navigation, service-specific anchors, desktop dropdowns, and a mobile menu with Contact access.
- Video play/pause and mute controls, poster fallback, and playback-error feedback.
- Animated achievement counters and a scrolling certification strip with reduced-motion support.
- Testimonials, awards, a global footprint map, and India/USA office information.
- Keyboard focus styles, a skip link, and mobile menu focus handling.

This is a frontend presentation website. It does not implement shipment tracking, quotations, form submission, authentication, APIs, or database storage. Industries, Careers, PentaKÜHL product entries, footer legal/social links, and the seven Read More buttons are intentionally retained as inactive controls.

## Live Website & Related Repository

https://pentakuhl.vercel.app/

## Tech Stack

React 19, Vite 8, Tailwind CSS 4, React Icons, ESLint, and Playwright Core.

## Prerequisites

Node.js matching `^20.19.0 || >=22.12.0` and npm. Browser checks additionally require a compatible Chromium installation.

## Installation & Setup

1. Open the repository root.
2. Install the locked dependencies.

   ```sh
   npm ci
   ```

3. No environment variables, API credentials, or database setup are required.

## Running Locally

Start development with `npm run dev` and open the URL printed by Vite, normally `http://localhost:5173/`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Generate the static production build in `dist/`. |
| `npm run preview` | Preview a production build locally. |
| `npm run lint` | Run ESLint. |
| `npm run test:browser` | Check the built application in headless Chromium. |

For browser checks, first build the application and install Chromium with `npx playwright-core install chromium`. The current test harness expects the checkout folder to be named `Pentakuhl - Penta Freight_Code`, with an existing sibling `Pentakuhl - Penta Freight_Docs` folder. It writes results there and screenshots to the sibling `Pentakuhl - Penta Freight_Visuals` folder. Set `PLAYWRIGHT_BROWSERS_PATH` when reusing an existing compatible browser cache.

## Project Structure

```text
public/                 Static images, video, favicon, and README preview
src/
  assets/               Bundled logo
  components/           Page sections and navigation
    ui/                 Shared heading, label, and scroll controls
  data/siteContent.js   Services, reviews, differentiators, and India offices
  App.jsx               Page composition
  index.css             Theme, shared styles, and motion preferences
  main.jsx              React entry point
tests/                  Browser regression check
```
