# Greenline Landscaping - Business Suite

Professional business management platform for Greenline Landscaping - plant installation, design, and landscape services.

## 🌿 About Greenline

Greenline Landscaping is a professional plant installation and landscape design company serving the Raleigh-Durham area and North Carolina Piedmont region. This business suite provides all the tools needed to manage quotes, track projects, and deliver exceptional service to our clients.

## Features

- **Plant Compendium**: Browse 30+ curated NC native and ornamental plants
- **Quote Estimator**: Generate professional landscaping quotes with detailed breakdowns
- **Material Calculator**: Quick cubic yard calculations for soil, mulch, and compost
- **Client Management**: Track client information and project history (coming soon)
- **Project Tracking**: Manage active installations and schedules (coming soon)

## Tech Stack

- Vue 3 (CDN)
- Vanilla JavaScript
- CSS3 (Grid, Flexbox, Custom Properties)
- HTML5
- LocalStorage for data persistence
- Future: IndexedDB for enhanced storage

## Structure

```
plant-business-suite/
├── index.html              # Dashboard (Greenline branded)
├── SAAS-ROADMAP.md         # Future SaaS platform plans
├── assets/
│   ├── css/
│   │   ├── global.css      # Greenline branding & shared styles
│   │   ├── dashboard.css   # Dashboard styles
│   │   ├── compendium.css  # Compendium styles
│   │   └── estimator.css   # Estimator styles
│   └── js/
│       ├── config.js       # Greenline company configuration
│       ├── plants-database.js  # Shared plant data
│       └── estimator.js        # Estimator logic
└── tools/
    ├── compendium.html     # Plant catalog
    ├── estimator.html      # Quote generator
    └── calculator.html     # Material calculator
```

## Getting Started

1. Clone this repository
2. Open `index.html` in a web browser
3. No build process required - runs entirely in the browser

## Deployment

This site is designed for GitHub Pages deployment:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/plant-business-suite.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## License

© 2025 Greenline Landscaping. Professional plant installation & design services.
