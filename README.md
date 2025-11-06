# Plant Business Suite

Professional tools for landscaping and plant installation businesses.

## Features

- **Plant Compendium**: Browse 30+ curated NC native and ornamental plants
- **Quote Estimator**: Generate professional landscaping quotes
- **Material Calculator**: Quick cubic yard calculations for soil, mulch, and compost

## Tech Stack

- Vue 3 (CDN)
- Vanilla JavaScript
- CSS3 (Grid, Flexbox, Custom Properties)
- HTML5
- LocalStorage for data persistence

## Structure

```
plant-business-suite/
├── index.html              # Dashboard
├── assets/
│   ├── css/
│   │   ├── global.css      # Shared styles
│   │   ├── dashboard.css   # Dashboard styles
│   │   ├── compendium.css  # Compendium styles
│   │   └── estimator.css   # Estimator styles
│   └── js/
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

Built for professional use. © 2025
