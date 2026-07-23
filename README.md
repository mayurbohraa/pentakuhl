# Pentakuhl Landing Page

A modern, responsive marketing/landing page for **Pentakuhl**, a logistics and freight forwarding company offering air freight, sea freight, multimodal transport, project cargo, customs broking, and transit warehousing services.

The site is built as a single-page React application showcasing the company's services, credentials, and global reach — including sections for company overview, philosophy, service offerings, differentiators, achievements, client reviews, certifications, awards, and global footprint.

## Tech Stack

- **[React 19](https://react.dev/)** — Component-based UI library
- **[Vite](https://vitejs.dev/)** — Build tool and dev server with Hot Module Replacement (HMR)
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Utility-first CSS framework
- **[React Icons](https://react-icons.github.io/react-icons/)** — Icon library
- **[ESLint](https://eslint.org/)** — Code linting

## Project Structure

```
pentakuhl-landing/
├── public/                  # Static assets served as-is (favicon, images, video)
│   └── images/               # Service, certification, and section images
├── src/
│   ├── assets/               # Bundled assets (e.g. logo)
│   ├── components/           # Page sections (Hero, Services, AboutUs, etc.)
│   │   └── ui/                # Small reusable UI components
│   ├── data/
│   │   └── siteContent.js    # Centralized content (services, reasons, etc.)
│   ├── App.jsx                # Composes all page sections
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles / Tailwind entry
├── index.html
├── vite.config.js
└── eslint.config.js
```

### Key Sections / Components

| Component | Description |
|---|---|
| `Navbar` / `StickyLogoStrip` | Site navigation and sticky branding strip |
| `Hero` | Landing banner with intro video/content |
| `AboutUs` | Company overview |
| `Philosophy` | Company mission/values |
| `Services` | Air freight, sea freight, multimodal transport, project cargo, custom broking, warehouse & fleet |
| `WhyChooseUs` | Key differentiators |
| `Achievements` | Company milestones/stats |
| `Reviews` | Client testimonials |
| `Certifications` | Industry certifications (IATA, ISO, MTO, etc.) |
| `Awards` | Recognition and awards |
| `GlobalFootprint` | Global presence/reach |
| `Footer` | Contact and site footer |

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (or yarn)

### Setup Steps

1. **Clone/Extract the repository**
   ```bash
   cd pentakuhl-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Available Scripts

### Development Server
```bash
npm run dev
```
Starts the Vite dev server at `http://localhost:5173` with Hot Module Replacement (HMR) for instant updates during development.

### Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder.

### Preview Build
```bash
npm run preview
```
Locally preview the production build before deployment.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## Dependencies

### Production Dependencies
- **react** (^19.2.6): Core library for building UI components
- **react-dom** (^19.2.6): DOM rendering for React components
- **react-icons** (^5.6.0): Icon library for UI elements

### Dev Dependencies
- **vite** (^8.0.12): Fast build tool and dev server
- **@vitejs/plugin-react** (^6.0.1): Fast Refresh plugin for Vite
- **tailwindcss** / **@tailwindcss/vite** (^4.3.0): Utility-first CSS framework
- **eslint** (^10.3.0) + **eslint-plugin-react-hooks** / **eslint-plugin-react-refresh**: Linting and code quality
- **@types/react** / **@types/react-dom**: Type definitions for editor tooling
- **globals**: Shared ESLint global definitions

## Approach

The project is structured as a component-based landing page with:

- **Component Organization**: Modular, reusable components for each page section (Hero, Services, About, etc.)
- **Styling**: Tailwind CSS for responsive, utility-first design
- **State Management**: Local component state with React hooks — no global state library required
- **Performance**: Vite's fast refresh and optimized production bundling
- **Content Management**: Centralized content data in `src/data/siteContent.js` for easy updates without touching component markup

## Assumptions

1. **Modern Browser Support**: Uses ES6+ JavaScript (no IE11 support)
2. **Node.js Availability**: Development requires Node.js v18+
3. **Static Content**: Page content is primarily static (defined in `siteContent.js`)
4. **Client-Side Rendering**: No server-side rendering (CSR approach)
5. **CSS Framework**: Assumes Tailwind CSS knowledge for styling customization

## AI Usage

Minimal AI usage — primarily manual development with minimal AI assistance for:
- Basic component boilerplate structure
- Minor styling suggestions
- Minor responsiveness suggestions

## Vite Plugins

This project uses [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) (powered by [Oxc](https://oxc.rs)) for Fast Refresh. An alternative, [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) (powered by [SWC](https://swc.rs/)), is also available for Vite React projects.
