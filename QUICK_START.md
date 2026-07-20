# Quick Start - Daisy Consulting Engineers Website Launch

## 🎯 Your Goal
Launch `daisyconsulting.co.za` with full CMS and email.

---

## 📋 WHAT YOU NEED TO DO

### STEP 1: Create Sanity Account (5 minutes)
1. Go to https://www.sanity.io/get-started
2. Sign up
3. Create project: "Daisy Consulting Engineers"
4. **SAVE:** Your Project ID (looks like `abc123de`)
5. **SAVE:** Your API token

### STEP 2: Create GitHub Repo (5 minutes)
1. Go to https://github.com/new
2. Name: `daisy-engineers-website`
3. Make it **Public**
4. Upload all website files

### STEP 3: Deploy to Netlify (10 minutes)
1. Go to https://app.netlify.com
2. Sign up with GitHub
3. Import your GitHub repo
4. Add environment variables:
   - `VITE_SANITY_PROJECT_ID` = your-project-id
   - `VITE_SANITY_DATASET` = production
5. Deploy!

### STEP 4: Connect Domain (10 minutes)
1. In Netlify: Domain settings → Add custom domain
2. Enter: `daisyconsulting.co.za`
3. Update nameservers at your registrar to:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - `dns3.p01.nsone.net`
   - `dns4.p01.nsone.net`

### STEP 5: Add Content to CMS (20 minutes)
1. Go to: `https://your-project-id.sanity.studio`
2. Create documents for each section
3. Upload images
4. Publish all documents

### STEP 6: Set Up Email (15 minutes)
1. Go to https://www.zoho.com/mail/
2. Sign up for free plan
3. Add domain: `daisyconsulting.co.za`
4. Add MX records to your DNS
5. Create email: `info@daisyconsulting.co.za`

---

## ⏱️ TOTAL TIME: ~65 minutes

---

## 📁 FILES IN THIS FOLDER

| File | Purpose |
|------|---------|
| `LAUNCH_GUIDE.md` | Complete detailed guide |
| `DNS_RECORDS.md` | All DNS records you need |
| `MY_CREDENTIALS.md` | Fill in your credentials |
| `QUICK_START.md` | This file - quick overview |

---

## 🆘 GETTING HELP

If you get stuck:
1. Check the detailed `LAUNCH_GUIDE.md`
2. Tell me exactly which step you're on
3. Share any error messages
4. I'll guide you through it!

---

## ✅ AFTER LAUNCH

Your website will have:
- ✅ Custom domain: `daisyconsulting.co.za`
- ✅ Free hosting on Netlify
- ✅ Free SSL (HTTPS)
- ✅ CMS to edit content anytime
- ✅ Professional email
- ✅ Fast global CDN

---

**Ready to start? Begin with STEP 1 above!** 🚀
