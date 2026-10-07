# Mwasalaty (مواصلاتي)

A product landing page for Mwasalaty, a smart transportation platform concept for daily commuters in Greater Cairo — built for the InnovEgypt Aspire Youth program.

Mwasalaty brings transportation options (microbus, bus, metro, shared ride) together in one place so commuters can compare time, cost, and pickup point before they leave.

## Structure

```
mwasalaty-project/
├── index.html     — markup and content
├── css/
│   └── styles.css — design system, layout, and all animation
├── js/
│   └── main.js    — language/RTL toggle, interactive route demo, pilot form, and all scroll/motion logic
└── README.md
```

## Features

- Full English / Arabic toggle with true RTL layout switching (not just translated text)
- Working interactive route-comparison demo with mock data (no backend)
- Scroll-synced animation system: staggered reveals, a persistent "journey rail" navigator, a hero with continuously-animated route motion, ambient depth in dark sections, and a custom cursor — all gated behind `prefers-reduced-motion` and pointer-type detection
- Accessible by default: semantic landmarks, skip link, live regions on dynamic content, inline form validation, WCAG AA–checked color contrast throughout
- Mobile-first responsive layout, sticky mobile CTA
- No fabricated statistics, testimonials, or user counts — all example data and market figures are clearly labeled as such

## Running locally

This is a static site with no build step and no dependencies beyond two CDN font requests. Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Stack

Plain HTML, CSS, and JavaScript — no frameworks, no build tooling. Fonts (Outfit, Inter, Cairo) are loaded from Google Fonts.
