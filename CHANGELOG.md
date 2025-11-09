# Greenline Business Suite - Changelog

All notable changes to the Greenline Landscaping Business Suite.

---

## [2.0.0] - 2025-11-09

### 🎨 Branding & Identity
- **Rebranded entire suite** for Greenline Landscaping
- Updated company name, tagline, and contact information across all pages
- Implemented new color scheme:
  - Primary: Deep forest green (#2d5016)
  - Secondary: Fresh leaf green (#7cb342)
  - Accent: Earthy brown (#8d6e63)
- Enhanced header design with subtle pattern overlay
- Updated all meta descriptions and page titles

### ✨ Major Features Added
- **Saved Quotes Manager** (`tools/quotes.html`)
  - View all saved quotes in organized card layout
  - Search and filter quotes by client, project, or number
  - Multiple sort options (date, client, total amount)
  - Detailed quote viewer with professional layout
  - Export individual quotes or all quotes as JSON
  - Delete quotes with confirmation
  - Print-ready quote format
  
- **Configuration System** (`assets/js/config.js`)
  - Centralized business settings
  - Company information and contact details
  - Customizable pricing for all services
  - Business defaults (tax rate, labor rate, etc.)
  - Terms and conditions
  - Brand colors and styling variables

- **Quote Export/Backup**
  - Export individual quotes as JSON
  - Export all quotes with one click
  - Automatic quote numbering system
  - Backup and restore capabilities

### 🔧 Improvements
- **Enhanced Quote Generator**
  - Integrated with config system for dynamic pricing
  - Improved quote preview with Greenline branding
  - Better quote numbering
  - Enhanced contact information in footer
  - Automatic migration from legacy storage

- **Better Data Management**
  - New storage key: `greenlineQuotes`
  - Automatic migration from old `landscapingQuotes`
  - Quote metadata (company, quote number, timestamps)
  - Backward compatible with existing data

- **Improved Navigation**
  - Added "Saved Quotes" to main navigation
  - Dashboard links to saved quotes viewer
  - Consistent navigation across all pages
  - Better mobile navigation support

- **Enhanced Dashboard**
  - Saved quotes counter with link to full viewer
  - Updated statistics display
  - Greenline branding and messaging
  - Feature highlights

### 📚 Documentation
- **NEW:** `GREENLINE-ENHANCEMENTS.md` - Complete enhancement guide
- **NEW:** `QUICK-START-GREENLINE.md` - Quick start guide for users
- **NEW:** `CHANGELOG.md` - This file
- **UPDATED:** `README.md` - Greenline branding and current features
- **EXISTING:** `SAAS-ROADMAP.md` - Future platform plans

### 🎨 CSS/Styling
- **NEW:** `assets/css/quotes-viewer.css` - Saved quotes styling
- **UPDATED:** `assets/css/global.css` - Greenline colors and branding
- Improved responsive design
- Better print styles for quotes
- Enhanced card layouts and shadows
- Modal overlay improvements

### 🐛 Bug Fixes
- Fixed localStorage key consistency
- Improved quote preview modal scrolling
- Better mobile responsive layouts
- Fixed navigation active states

### 🔄 Migration
- Automatic quote data migration from v1.x
- Preserves all existing quotes
- Maintains backward compatibility
- No data loss during upgrade

---

## [1.0.0] - 2025-11 (Previous Version)

### Initial Release - Plant Business Suite
- Plant Compendium with 30+ NC plants
- Quote Estimator with site prep, materials, plants, labor
- Material Calculator for cubic yards
- Dashboard with statistics
- localStorage persistence
- Vue 3 integration
- Responsive design
- Print-ready quote preview

### Core Features
- Plant database with search and filters
- Professional quote generation
- Material cost calculations
- Print-optimized quote layouts
- LocalStorage data persistence

---

## Future Versions

### [2.1.0] - Planned
- [ ] Client management database
- [ ] Project tracking system
- [ ] Quote status workflow (draft, sent, approved)
- [ ] Enhanced PDF export with logo
- [ ] Photo attachments

### [2.2.0] - Planned
- [ ] IndexedDB migration for unlimited storage
- [ ] Seasonal planting calendar
- [ ] Plant combination designer
- [ ] Advanced search and filtering
- [ ] Quote templates

### [3.0.0] - SaaS Platform (Future)
- [ ] Multi-user authentication
- [ ] Cloud data sync
- [ ] Team collaboration
- [ ] Client portal
- [ ] Payment processing
- [ ] Mobile apps
- [ ] API integrations

See `SAAS-ROADMAP.md` for detailed future plans.

---

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality (backward compatible)
- **PATCH** version for bug fixes (backward compatible)

---

## Upgrade Notes

### From 1.x to 2.0
1. Open `index.html` - data migrates automatically
2. Review `assets/js/config.js` and customize for your business
3. Check `QUICK-START-GREENLINE.md` for new features
4. Existing quotes are preserved and accessible in new format

### Backup Recommendation
Always export your quotes before major updates:
1. Go to Saved Quotes page
2. Click "Export All"
3. Save the JSON file before updating

---

## Support & Feedback

For questions, customization help, or feature requests regarding the Greenline Business Suite, refer to:
- `GREENLINE-ENHANCEMENTS.md` - Comprehensive feature guide
- `QUICK-START-GREENLINE.md` - Getting started tutorial
- `SAAS-ROADMAP.md` - Future development plans

---

**Current Version:** 2.0.0  
**Last Updated:** November 9, 2025  
**Status:** Production Ready ✅
