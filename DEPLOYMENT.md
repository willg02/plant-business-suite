# Plant Business Suite - Deployment Guide

## ✅ What's Complete

Your Plant Business Suite is now fully functional with:

1. **Dashboard** (`index.html`) - Central hub with navigation to all tools
2. **Plant Compendium** (`tools/compendium.html`) - 30 plants with search/filter
3. **Quote Estimator** (`tools/estimator.html`) - Full quote generator
4. **Material Calculator** (`tools/calculator.html`) - Quick cubic yard calculator
5. **Shared Assets**:
   - `assets/js/plants-database.js` - Shared plant data
   - `assets/css/global.css` - Consistent branding
   - Tool-specific CSS and JS files

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `plant-business-suite`
3. Description: "Professional tools for landscaping and plant installation businesses"
4. Public repository
5. **DON'T** initialize with README (you already have one)
6. Click "Create repository"

### Step 2: Push Your Code

Run these commands in your terminal:

```powershell
cd "c:\Users\jendg\OneDrive\Documents\Digital Design Projects\plant-business-suite"

# Set your remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/plant-business-suite.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes, then refresh the page
7. Your site will be live at: `https://YOUR_USERNAME.github.io/plant-business-suite/`

## 🔗 Your Live URLs

Once deployed:

- **Dashboard**: `https://YOUR_USERNAME.github.io/plant-business-suite/`
- **Compendium**: `https://YOUR_USERNAME.github.io/plant-business-suite/tools/compendium.html`
- **Estimator**: `https://YOUR_USERNAME.github.io/plant-business-suite/tools/estimator.html`
- **Calculator**: `https://YOUR_USERNAME.github.io/plant-business-suite/tools/calculator.html`

## 🎨 Custom Domain (Optional)

To use a custom domain like `planttools.yourdomain.com`:

1. In GitHub Pages settings, enter your custom domain
2. Add a CNAME record in your DNS settings:
   - Type: CNAME
   - Name: planttools (or subdomain of your choice)
   - Value: YOUR_USERNAME.github.io

## 📱 Testing Before Deploy

Open `index.html` locally in your browser to test:

```powershell
cd "c:\Users\jendg\OneDrive\Documents\Digital Design Projects\plant-business-suite"
start index.html
```

## 🔄 Future Updates

When you make changes:

```powershell
cd "c:\Users\jendg\OneDrive\Documents\Digital Design Projects\plant-business-suite"
git add .
git commit -m "Your update description"
git push
```

GitHub Pages will automatically rebuild your site within 1-2 minutes.

## 📊 What's Saved Where

- **Quotes**: Saved in browser localStorage (per device, per browser)
- **Plant Data**: Hardcoded in `assets/js/plants-database.js`
- **User Preferences**: Not persisted (resets on page reload)

## 🚀 Next Phase: SaaS Platform

For the multi-user SaaS version, create a technical spec document in a new conversation covering:
- User authentication (Firebase/Supabase)
- Cloud database migration
- Multi-tenancy architecture
- Payment integration
- Custom plant libraries per user

---

**Congratulations!** Your unified Plant Business Suite is complete and ready to deploy! 🎉
