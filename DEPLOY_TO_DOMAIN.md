# Deploy to Your Domain: daisyconsulting.co.za

---

## 🎯 WHAT YOU NEED

1. Your domain: **daisyconsulting.co.za** (already bought ✓)
2. Netlify account (already created ✓)
3. Website files (ready ✓)

---

## 🚀 STEP-BY-STEP DEPLOYMENT

### STEP 1: Download Your Website Files

**Option A: From This Chat**
I can provide you with a ZIP file of your website - just ask!

**Option B: From GitHub**
If you uploaded to GitHub:
1. Go to https://github.com/YOUR_USERNAME/daisy-engineers-website
2. Click the green "Code" button
3. Click "Download ZIP"
4. Extract the ZIP on your computer

---

### STEP 2: Upload to Netlify

1. Go to https://app.netlify.com
2. Log in with your GitHub account
3. Click **"Add new site"** → **"Deploy manually"**

**OR** if you already have a site:
1. Click on your existing site
2. Go to **"Deploys"** tab
3. Drag and drop your `dist/` folder

---

### STEP 3: Connect Your Domain

1. In Netlify dashboard, click on your site
2. Go to **"Domain settings"**
3. Click **"Add custom domain"**
4. Enter: `daisyconsulting.co.za`
5. Click **"Verify"** → **"Add domain"**

---

### STEP 4: Configure DNS

Netlify will give you nameservers. You need to update these at your domain registrar (where you bought daisyconsulting.co.za).

**Netlify Nameservers (example):**
```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

**To update at your registrar:**
1. Log into your domain account (HOSTAFRICA, Domains.co.za, etc.)
2. Find "DNS Management" or "Nameservers"
3. Replace existing nameservers with Netlify's
4. Save changes

---

### STEP 5: Enable HTTPS (SSL)

1. In Netlify, go to Domain settings → HTTPS
2. Netlify will auto-provision SSL certificate
3. Enable **"Force HTTPS"**
4. Your site will be secure: `https://daisyconsulting.co.za`

---

### STEP 6: Wait for DNS Propagation

- Usually takes **5 minutes to 48 hours**
- Test: Open `https://daisyconsulting.co.za`

---

## ✅ VERIFICATION

Your website is live when:
- [ ] Website loads at `https://daisyconsulting.co.za`
- [ ] You see the padlock icon (HTTPS)
- [ ] Your logo appears in the navigation
- [ ] All sections display correctly

---

## 🔄 FUTURE UPDATES

When you want to update your website:

1. Make changes to files
2. Run: `npm run build`
3. Upload new `dist/` folder to Netlify
4. Changes appear instantly!

---

## 🆘 NEED HELP?

If you get stuck:
1. Tell me which step you're on
2. Share any error messages
3. I'll guide you through!

---

## 📞 YOUR WEBSITE DETAILS

**Current temporary URL:** https://t6tpvhqr433zi.ok.kimi.link

**Your domain:** daisyconsulting.co.za

**Ready to deploy?** Follow the steps above!
