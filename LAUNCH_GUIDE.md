# Daisy Consulting Engineers - Complete Launch Guide
## Domain: daisyconsulting.co.za

---

## 📋 OVERVIEW - What We're Setting Up

1. ✅ **Sanity CMS** - Content management system
2. ✅ **Netlify** - Website hosting  
3. ✅ **Custom Domain** - daisyconsulting.co.za
4. ✅ **Email** - Professional email addresses

---

## 🚀 STEP 1: Create Sanity CMS Account

### 1.1 Sign Up
1. Go to: https://www.sanity.io/get-started
2. Click "Get started free"
3. Sign up with Google or email

### 1.2 Create New Project
1. Click "Create new project"
2. Project name: `Daisy Consulting Engineers`
3. Dataset: `production` (default)
4. Click "Create project"

### 1.3 Get Your Project ID
1. In Sanity dashboard, click your project
2. Go to Settings (gear icon) → API
3. Copy the **Project ID** (looks like: `abc123de`)
4. **SAVE THIS** - you'll need it later

### 1.4 Get Your API Token
1. In API settings, scroll to "Tokens"
2. Click "Add API token"
3. Token name: `Netlify Deployment`
4. Permissions: `Editor`
5. Click "Add token"
6. **COPY AND SAVE THE TOKEN** - it only shows once!

---

## 🚀 STEP 2: Create GitHub Repository

### 2.1 Create Account (if needed)
1. Go to: https://github.com/signup
2. Create your account

### 2.2 Create New Repository
1. Go to: https://github.com/new
2. Repository name: `daisy-engineers-website`
3. Make it **Public**
4. Click "Create repository"

### 2.3 Upload Website Files

**Option A: Using GitHub Web Interface (Easiest)**
1. In your new repo, click "uploading an existing file"
2. Drag and drop ALL files from the `app` folder
3. Click "Commit changes"

**Option B: Using Command Line**
```bash
# Navigate to your website folder
cd /path/to/your/website

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR_USERNAME)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/daisy-engineers-website.git
git push -u origin main
```

---

## 🚀 STEP 3: Deploy to Netlify

### 3.1 Create Netlify Account
1. Go to: https://app.netlify.com/signup
2. Sign up with GitHub (recommended)

### 3.2 Import Your Repository
1. Click "Add new site" → "Import an existing project"
2. Select GitHub
3. Authorize Netlify to access your repos
4. Find and select `daisy-engineers-website`

### 3.3 Configure Build Settings
Netlify should auto-detect these:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

If not, enter them manually.

### 3.4 Add Environment Variables
1. Click "Show advanced" (before deploying)
2. Click "New variable"
3. Add these:
   - `VITE_SANITY_PROJECT_ID` = your-sanity-project-id
   - `VITE_SANITY_DATASET` = production
4. Click "Deploy site"

### 3.5 Wait for Deployment
- Netlify will build your site (2-3 minutes)
- You'll get a temporary URL like: `https://daisy-engineers-123.netlify.app`
- **Test it** - make sure everything works!

---

## 🚀 STEP 4: Connect Your Domain

### 4.1 Add Domain to Netlify
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `daisyconsulting.co.za`
4. Click "Verify" → "Add domain"

### 4.2 Configure DNS at Your Registrar

**Log into your domain registrar** (where you bought daisyconsulting.co.za)

You need to add these DNS records:

#### Option A: Netlify DNS (Recommended)
1. In Netlify Domain settings, click "Set up Netlify DNS"
2. Netlify will show you nameservers like:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - `dns3.p01.nsone.net`
   - `dns4.p01.nsone.net`

3. At your domain registrar, find "Nameservers" or "DNS Management"
4. Replace existing nameservers with Netlify's
5. Save changes

#### Option B: CNAME Record (Alternative)
1. At your domain registrar, go to DNS Management
2. Add a CNAME record:
   - **Host/Name:** `@` or `www`
   - **Points to:** your-netlify-site.netlify.app
   - **TTL:** 3600

### 4.3 Enable HTTPS (SSL)
1. In Netlify, go to Domain settings → HTTPS
2. Click "Verify DNS configuration"
3. Netlify will auto-provision SSL certificate
4. Enable "Force HTTPS" (redirects HTTP to HTTPS)

### 4.4 Wait for Propagation
- DNS changes take 5 minutes to 48 hours
- Test: Open `https://daisyconsulting.co.za`

---

## 🚀 STEP 5: Set Up Sanity Studio

### 5.1 Access Sanity Studio
1. Go to: `https://your-project-id.sanity.studio`
2. Log in with your Sanity account

### 5.2 Create Content Documents

Create a document for each section:

#### Hero Section
```
Document type: hero
Label: CIVIL ENGINEERING CONSULTANTS
Headline: Engineering clarity. Delivered.
Subheadline: Roads, stormwater, structures and project management— from inception to close-out.
CTA Text: Explore services
Secondary CTA Text: View projects
```

#### Services Section
```
Document type: services
Label: SERVICES
Headline: What we deliver
Description: We plan, design and manage infrastructure—on scope, on budget, on time.

Items (4):
1. Roads & Earthworks
   Description: Alignment, pavement design, earthworks, and construction supervision.
   Image: Upload service_card_road.jpg

2. Stormwater Management
   Description: Drainage design, flood mitigation, attenuation systems, and approvals.
   Image: Upload service_card_stormwater.jpg

3. Structures
   Description: Bridges, culverts, retaining walls, and structural assessments.
   Image: Upload service_card_structure.jpg

4. Project Management
   Description: End-to-end delivery across all six work stages.
   Image: Upload service_card_pm.jpg
```

#### Stages Section
```
Document type: stages
Label: PROJECT STAGES
Headline: From idea to handover
Description: We guide projects through six clear stages—so decisions are made early and delivery stays predictable.
Caption: Turnkey delivery available.

Items (6):
01: Inception & Briefing
02: Concept & Viability
03: Design Development
04: Documentation & Procurement
05: Construction Monitoring
06: Close-out & Commissioning
```

#### Featured Project Section
```
Document type: featuredProject
Headline: Middelburg
Subheadline: Roads upgrade programme
Client: Inxuba Yethemba Municipality
Scope: Planning, design, supervision
Value: R18m
CTA Text: Read the case study
Image: Upload featured_middelburg.jpg
```

#### About Section
```
Document type: about
Label: ABOUT DAISY
Headline: Built on precision. Led by experience.
CTA Text: Meet the team

Cards (2):
1. Engineering-first thinking
   Description: We combine technical rigor with practical site knowledge—so designs are buildable and budgets are realistic.
   Image: Upload about_thinking.jpg

2. A partner in delivery
   Description: We work with public and private clients, aligning teams and timelines to keep projects moving.
   Image: Upload about_partner.jpg
```

#### Projects Section
```
Document type: projects
Label: SELECTED WORK
Headline: Projects that speak plainly.
CTA Text: View full portfolio

Items (3):
1. Daveyton NMT
   Subtitle: Non-motorised transport
   Image: Upload project_daveyton.jpg

2. Manningburg Streets
   Subtitle: Street paving & drainage
   Image: Upload project_manningburg.jpg

3. Calfonia Roads
   Subtitle: Gravel-to-paved upgrade
   Image: Upload project_calfonia.jpg
```

#### Contact Section
```
Document type: contact
Label: CONTACT
Headline: Let's build something solid.
Description: Tell us what you're planning. We'll respond within two business days.
Email: hello@daisyconsulting.co.za
Phone: +27 (0)11 000 0000
Location: Johannesburg / Pretoria
CTA Text: Send message
```

### 5.3 Upload Images to Sanity
1. In each document, click the image field
2. Upload the corresponding image
3. Click "Publish" for each document

---

## 🚀 STEP 6: Set Up Professional Email

### Option A: Zoho Mail (FREE - Recommended for Start)

1. Go to: https://www.zoho.com/mail/
2. Click "Sign Up Now" → "Forever Free Plan"
3. Choose "Add your domain"
4. Enter: `daisyconsulting.co.za`
5. Verify domain ownership (follow Zoho's instructions)
6. Create email addresses:
   - `info@daisyconsulting.co.za`
   - `yourname@daisyconsulting.co.za`

**DNS Records to Add:**
Zoho will give you MX records like:
- `mx.zoho.com` (Priority 10)
- `mx2.zoho.com` (Priority 20)
- `mx3.zoho.com` (Priority 50)

Add these at your domain registrar's DNS management.

### Option B: Google Workspace (Paid - Most Professional)

1. Go to: https://workspace.google.com/
2. Click "Get started"
3. Enter your business name
4. Enter: `daisyconsulting.co.za`
5. Follow setup wizard
6. Verify domain ownership
7. Create user accounts

**Cost:** ~$6/month per user

---

## ✅ VERIFICATION CHECKLIST

After completing all steps, verify:

- [ ] Website loads at `https://daisyconsulting.co.za`
- [ ] HTTPS is working (padlock icon)
- [ ] All images load correctly
- [ ] Contact form works
- [ ] Navigation scrolls to sections
- [ ] Sanity CMS shows your content
- [ ] Email sends/receives correctly

---

## 🆘 TROUBLESHOOTING

### Website Shows "Page Not Found"
- Check Netlify build logs
- Ensure `dist` folder is set as publish directory
- Verify `_redirects` file exists

### Images Not Loading
- Check images are in `/public` folder
- Verify image paths in Sanity match
- Check case sensitivity

### CMS Content Not Showing
- Verify `VITE_SANITY_PROJECT_ID` is correct in Netlify
- Check documents are "Published" in Sanity (not just saved)
- Check browser console for errors

### Domain Not Working
- Check DNS propagation: https://dnschecker.org
- Verify nameservers/DNS records are correct
- Wait up to 48 hours for full propagation

### Email Not Working
- Verify MX records are correct
- Check spam folders
- Wait 24-48 hours for DNS propagation

---

## 📞 NEED HELP?

If you get stuck on any step, I can help you:
1. Debug error messages
2. Verify your configuration
3. Walk through specific steps
4. Check if everything is set up correctly

Just tell me which step you're on and what's happening!
