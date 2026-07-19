# Vetrivel Muthusamy — Portfolio

A clean, hiring-manager-focused personal portfolio for Vetrivel Muthusamy, Solution Architect & Test Lead at Capgemini.

## Stack
- **Frontend:** React 19, TypeScript, Tailwind CSS v4
- **Server:** Express + Vite (dev middleware mode)
- **Build:** Vite + esbuild

## Running the app
```
npm run dev      # development (port 5000)
npm run build    # production build
npm start        # serve production build
```

## Structure
```
src/
  App.tsx        # Entire portfolio — single-page, no external API deps
  main.tsx       # React entry point
  index.css      # Tailwind base styles
server.ts        # Express server + Vite middleware
vite.config.ts   # Vite config (allowedHosts: true for Replit proxy)
```

## Sections
1. **Hero** — Name, title, availability badge, OSS/BSS architecture SVG diagram, 40% achievement callout
2. **Technical Expertise** — Tag-pill rows by domain (Telecom, Backend/Cloud, Frontend, Test Automation)
3. **Experience & Impact** — Capgemini timeline with 3-stat strip (11+ years, 40% faster, 630+ APIs)
4. **Certifications** — CSPO, AWS Cloud Practitioner, Oracle OCWCD
5. **Contact** — Email link, LinkedIn button

## User preferences
- No AI/Gemini chatbot — portfolio is static, no external API dependencies
- No developer tools in the UI (no Export CV, GitHub, Print PDF, System, Console buttons)
- Hiring-manager focused: clean, professional, scannable
