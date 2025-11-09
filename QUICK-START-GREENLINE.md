# Greenline Business Suite - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Open the Suite
1. Navigate to the `plant-business-suite` folder
2. Double-click `index.html` to open the dashboard
3. You'll see the Greenline Landscaping homepage

### Step 2: Customize Your Business Settings (Optional)
1. Open `assets/js/config.js` in a text editor
2. Update company contact information:
   - Email address
   - Phone number
   - Service area
3. Adjust pricing to match your rates:
   - Labor rates
   - Material costs
   - Tax rate
4. Save the file

### Step 3: Browse the Plant Catalog
1. Click **"Plant Catalog"** in the navigation
2. Explore 30+ NC native and ornamental plants
3. Use filters to find plants by:
   - Native status
   - Plant type
   - Sun requirements
   - Water needs
4. Note plant prices for your quotes

### Step 4: Create Your First Quote
1. Click **"Quote Generator"** from the navigation
2. Fill in client information:
   ```
   Client Name: John & Jane Doe
   Project Name: Front Yard Landscape Installation
   Address: 123 Main St, Raleigh, NC
   ```
3. Add site preparation (if needed):
   - Enter planting area in square feet
   - Select prep services (soil test, clearing, grading, edging)
4. Add materials:
   - Topsoil, compost, mulch (cubic yards)
   - Use the quick calculator for automatic calculations
5. Add plants:
   - Click "+ Add Plant" for each plant type
   - Enter name, size, quantity, and unit price
   - Adjust markup percentage (default 30%)
6. Add labor:
   - Installation hours
   - Hourly rate (default $75)
   - Crew size (default 2)
7. Review the **Quote Summary** at the bottom
8. Click **"Save Quote"** to store it locally
9. Click **"Preview Quote"** to see printable version

### Step 5: View and Manage Saved Quotes
1. Click **"Saved Quotes"** in the navigation
2. See all your saved quotes in card format
3. Use the search box to find specific quotes
4. Click **"View Details"** to see full quote
5. Click **"Print"** to create a professional PDF
6. Click **"Export"** to download as JSON backup

### Step 6: Use the Material Calculator
1. Click **"Material Calculator"** in the navigation
2. Enter area dimensions and depth
3. Get instant cubic yard calculations
4. See cost estimates based on your pricing

---

## 💡 Pro Tips

### Creating Better Quotes
- Use descriptive project names: "Smith Residence - Native Garden Installation"
- Include detailed addresses for job site reference
- Add comprehensive notes in Additional Services section
- Review the preview before saving to ensure accuracy

### Managing Plants
- Reference the plant catalog while creating quotes
- Note seasonal availability
- Keep track of which combinations work well together
- Update pricing in `config.js` as supplier rates change

### Staying Organized
- Use consistent naming for clients
- Save quotes even if they're estimates
- Export your quotes monthly as backup
- Use the search feature to find historical quotes

### Professional Presentation
- Always preview quotes before printing
- Ensure terms & conditions are accurate
- Double-check tax calculations
- Include valid-until dates on quotes

---

## 🔧 Configuration Examples

### Updating Your Phone Number
Open `assets/js/config.js`:
```javascript
contact: {
    email: "info@greenlinelandscaping.com",
    phone: "(919) 555-GROW",  // Change this
    phoneFormatted: "(919) 555-4769",  // And this
    // ...
}
```

### Adjusting Labor Rates
```javascript
business: {
    defaultTaxRate: 7.25,  // Your county tax rate
    defaultLaborRate: 75,   // Change to your hourly rate
    defaultCrewSize: 2,     // Typical crew size
    // ...
}
```

### Updating Material Pricing
```javascript
pricing: {
    topsoil: 45,    // $ per cubic yard
    compost: 55,    // $ per cubic yard
    mulch: 40,      // $ per cubic yard
    // Update these to match your supplier prices
}
```

---

## 📱 Keyboard Shortcuts

### In Quote Generator
- `Tab` - Move between fields
- `Enter` - Submit search (in plant catalog)
- `Ctrl+P` - Print quote preview (when preview is open)

### In Saved Quotes
- Type in search box to filter immediately
- Use dropdown to change sort order
- Click anywhere outside modal to close

---

## 🆘 Troubleshooting

### Quote Not Saving?
- Check that you filled in Client Name and Project Name (required)
- Ensure your browser allows localStorage
- Try a different browser if issues persist

### Can't Find Saved Quotes?
- Make sure you're using the same browser
- Check **Saved Quotes** page from navigation
- localStorage is specific to each browser

### Pricing Seems Wrong?
- Review `assets/js/config.js` pricing section
- Ensure you saved changes to config file
- Refresh the browser to load new settings

### Quote Preview Not Showing?
- Ensure Client Name and Project Name are filled
- Check browser console for errors (F12)
- Try refreshing the page

---

## 💾 Backing Up Your Data

### Weekly Backup (Recommended)
1. Go to **Saved Quotes**
2. Click **"Export All"**
3. Save the JSON file to a safe location
4. Keep at least 3 recent backups

### Monthly Archive
1. Export all quotes
2. Rename file with month/year
3. Store in dedicated backup folder
4. Test restore on a backup browser

### Restore from Backup
1. Open browser Developer Tools (F12)
2. Console tab
3. Copy content from backup JSON file
4. Type: `localStorage.setItem('greenlineQuotes', 'PASTE_HERE')`
5. Refresh page

---

## 🎯 Next Steps

### After Your First Week:
- [ ] Create sample quotes for common project types
- [ ] Establish your standard pricing
- [ ] Build a template quote for reference
- [ ] Customize terms & conditions for your business

### After Your First Month:
- [ ] Review quote history and pricing accuracy
- [ ] Adjust material costs based on actual expenses
- [ ] Add any missing plants to the database
- [ ] Consider what additional features you need

### Looking Ahead:
- [ ] Review `SAAS-ROADMAP.md` for future platform plans
- [ ] Provide feedback on what features would help most
- [ ] Consider client management needs
- [ ] Think about project tracking workflow

---

## 📞 Quick Reference

### Navigation
- **Dashboard** - Home page with stats and links
- **Plant Catalog** - Browse all plants with filters
- **Quote Generator** - Create new quotes
- **Saved Quotes** - View and manage all quotes
- **Material Calculator** - Quick cubic yard calculations

### Important Files
- `index.html` - Open this to start
- `assets/js/config.js` - Your business settings
- `tools/quotes.html` - Saved quotes manager
- `tools/estimator.html` - Quote generator
- `tools/compendium.html` - Plant catalog

### Default Settings
- Tax Rate: 7.25%
- Labor Rate: $75/hr
- Crew Size: 2 people
- Plant Markup: 30%
- Quote Validity: 30 days

---

## ✅ Checklist: First Quote

- [ ] Open dashboard
- [ ] Review configuration (optional)
- [ ] Browse plant catalog
- [ ] Open quote generator
- [ ] Fill in client & project info
- [ ] Add site prep (if needed)
- [ ] Add materials
- [ ] Add plants
- [ ] Add labor hours
- [ ] Review quote summary
- [ ] Preview quote
- [ ] Save quote
- [ ] Print or export

---

**Ready to create professional quotes for Greenline Landscaping!** 🌿

Open `index.html` to begin.
