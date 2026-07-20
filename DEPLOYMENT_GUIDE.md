# Daisy Consulting Engineers - Deployment Guide

## Table of Contents
1. [Quick Start (Netlify)](#quick-start-netlify)
2. [Setting Up Sanity CMS](#setting-up-sanity-cms)
3. [Custom Domain Setup](#custom-domain-setup)
4. [Managing Content](#managing-content)
5. [Troubleshooting](#troubleshooting)

---

## Quick Start (Netlify)

### Option A: Deploy via Netlify UI (Recommended for Beginners)

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Name it `daisy-engineers-website`
   - Make it public or private
   - Don't initialize with README

2. **Upload your files**
   ```bash
   # In your project folder
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/daisy-engineers-website.git
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize
   - Select your repository
   - Build settings should auto-detect:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Your site is live!** 🎉
   - Netlify will give you a URL like `https://daisy-engineers-123.netlify.app`

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

---

## Setting Up Sanity CMS

### Step 1: Create Sanity Account

1. Go to https://www.sanity.io/get-started
2. Sign up with Google or email
3. Create a new project:
   - Project name: `Daisy Engineers Website`
   - Dataset: `production`

### Step 2: Get Your Project ID

1. In Sanity dashboard, click your project
2. Go to Settings → API
3. Copy the **Project ID**

### Step 3: Set Up Schemas

1. Install Sanity CLI:
   ```bash
   npm install -g @sanity/cli
   ```

2. Initialize Sanity in your project:
   ```bash
   cd /mnt/okcomputer/output/app
   sanity init
   ```
   - Select "Create new project"
   - Use the schemas from `sanity-schema.json`

3. Or manually create schemas in Sanity Studio:
   - Go to your Sanity project dashboard
   - Click "Structure"
   - Create documents for each section (Hero, Services, etc.)

### Step 4: Configure Environment Variables

In Netlify:
1. Go to Site settings → Environment variables
2. Add these variables:
   - `VITE_SANITY_PROJECT_ID` = your-project-id
   - `VITE_SANITY_DATASET` = production

3. Redeploy the site

---

## Custom Domain Setup

### Buy a Domain (if you don't have one)

Recommended registrars:
- **Namecheap**: https://namecheap.com (~$10-15/year)
- **GoDaddy**: https://godaddy.com
- **Google Domains**: https://domains.google

Suggested domains for your business:
- `daisyengineers.co.za` (South African TLD)
- `daisyconsulting.co.za`
- `daisyeng.co.za`
- `daisyengineers.com`

### Connect Domain to Netlify

1. In Netlify dashboard:
   - Go to Domain settings
   - Click "Add custom domain"
   - Enter your domain (e.g., `daisyengineers.co.za`)

2. Configure DNS at your registrar:
   
   **Option 1: Netlify DNS (Recommended)**
   - In Netlify: Go to DNS settings
   - Click "Set up Netlify DNS"
   - Follow the instructions to update nameservers at your registrar
   
   **Option 2: CNAME Record**
   - Create a CNAME record:
     - Host: `@` or `www`
     - Points to: your-netlify-site.netlify.app

3. Wait for DNS propagation (5 minutes to 48 hours)

4. Enable HTTPS:
   - Netlify automatically provisions SSL certificates
   - Go to Domain settings → HTTPS
   - Click "Verify DNS configuration"

---

## Managing Content

### Without CMS (Current Setup)

All content is stored in `/src/hooks/useSanityData.ts` as fallback data.

To update content:
1. Edit the `fallbackData` object in `useSanityData.ts`
2. Rebuild and redeploy

### With Sanity CMS

1. Go to your Sanity Studio URL:
   `https://your-project.sanity.studio`

2. Edit content:
   - Click on any document (Hero, Services, etc.)
   - Make changes
   - Click "Publish"

3. Changes appear on your website automatically!

### Content Structure

| Section | What to Edit |
|---------|-------------|
| Hero | Headline, subheadline, CTA buttons |
| Services | 4 service cards with images |
| Project Stages | 6 stage items |
| Featured Project | Project details and image |
| About | 2 about cards with images |
| Projects Grid | 3 project items |
| Contact | Email, phone, location |

---

## Troubleshooting

### Build Fails on Netlify

1. Check build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

2. Check Node version:
   - Add environment variable: `NODE_VERSION = 20`

3. Check for errors:
   - View deploy log in Netlify

### Images Not Loading

1. Ensure images are in `/public` folder
2. Reference them with `/image-name.jpg`
3. Check case sensitivity

### CMS Not Working

1. Verify environment variables in Netlify
2. Check Sanity project ID is correct
3. Ensure dataset name matches (`production`)
4. Check browser console for errors

### Custom Domain Not Working

1. Verify DNS settings at registrar
2. Check SSL certificate is provisioned
3. Wait for DNS propagation (up to 48 hours)
4. Try clearing DNS cache: `ipconfig /flushdns` (Windows) or `sudo killall -HUP mDNSResponder` (Mac)

---

## Support

Need help? Contact:
- Netlify Support: https://www.netlify.com/support/
- Sanity Support: https://www.sanity.io/contact
- Or ask me to help! 😊
