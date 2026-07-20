# Manual Deployment with CMS - Daisy Consulting Engineers
## For Netlify Manual Upload + Sanity CMS

---

## 🎯 WHAT YOU'RE SETTING UP

**Manual Deployment** = Upload files directly to Netlify (no GitHub)
**Sanity CMS** = Edit content through a web dashboard

These work together perfectly!

---

## 📋 HOW IT WORKS

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Sanity CMS    │────▶│  Your Website   │◀────│   Netlify       │
│  (Content)      │     │  (Code + Images)│     │  (Hosting)      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                                               │
        │                                               │
        ▼                                               ▼
   You edit content                              You upload files
   in web dashboard                              when code changes
```

**Key Point:** 
- Content (text, images) comes from Sanity CMS
- Code (design, layout) comes from your uploaded files
- They connect via your Project ID

---

## 🚀 SETUP STEPS

### STEP 1: Sanity CMS (Already Done!)

You already created:
- ✅ Sanity account
- ✅ Project: "Daisy Consulting Engineers"
- ✅ Project ID (save this!)

**Your Sanity Studio URL:**
`https://your-project-id.sanity.studio`

---

### STEP 2: Configure Website for Your Sanity Project

#### Option A: Hardcode Your Project ID (Easiest for Manual Deploy)

Edit this file: `src/lib/sanity.ts`

Change line 7-8 from:
```typescript
const projectId = (import.meta as any).env?.VITE_SANITY_PROJECT_ID || 'your-project-id';
const dataset = (import.meta as any).env?.VITE_SANITY_DATASET || 'production';
```

To:
```typescript
const projectId = 'YOUR-ACTUAL-PROJECT-ID';  // Replace with your real ID
const dataset = 'production';
```

**Example:**
```typescript
const projectId = 'abc123de';  // Your actual Project ID
const dataset = 'production';
```

#### Option B: Use Environment Variables (More Flexible)

Create a file called `.env` in the root folder:

```
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

---

### STEP 3: Rebuild with Your Project ID

1. Open Terminal
2. Navigate to your website folder:
   ```bash
   cd /path/to/your/website-folder
   ```
3. Run:
   ```bash
   npm run build
   ```
4. This creates a new `dist/` folder with your Project ID embedded

---

### STEP 4: Upload to Netlify (Manual Deploy)

1. Go to https://app.netlify.com
2. Click on your site
3. Go to **Deploys** tab
4. Drag and drop your `dist/` folder
5. Wait for deploy to finish

**Your site now connects to Sanity CMS!**

---

## 📝 ADDING CONTENT TO SANITY

### 1. Open Sanity Studio
Go to: `https://your-project-id.sanity.studio`

### 2. Create Documents

For each section, create a document:

#### Hero Section
- Click **"Create new document"**
- Select **"Hero Section"**
- Fill in:
  - Label: `CIVIL ENGINEERING CONSULTANTS`
  - Headline: `Engineering clarity. Delivered.`
  - Subheadline: `Roads, stormwater...`
  - CTA Text: `Explore services`
  - Secondary CTA: `View projects`
- Click **"Publish"**

#### Services Section
- Create document type: **"Services Section"**
- Add your 4 services with images

#### Contact Section
- Create document type: **"Contact Section"**
- Add your email, phone, location

**Repeat for all sections!**

---

## 🔄 WORKFLOW: UPDATING YOUR WEBSITE

### Scenario 1: Change Content Only (Text, Images)

1. Go to Sanity Studio
2. Edit the document
3. Click **"Publish"**
4. **Done!** Changes appear instantly

**No need to re-upload to Netlify!**

---

### Scenario 2: Change Design/Code

1. Edit code files (HTML, CSS, React)
2. Run: `npm run build`
3. Upload new `dist/` folder to Netlify
4. **Done!**

---

### Scenario 3: Change BOTH Content AND Code

1. Edit code, run `npm run build`
2. Upload to Netlify
3. Edit content in Sanity Studio
4. **Done!**

---

## 📁 FILE STRUCTURE FOR MANUAL DEPLOY

Your website folder should have:

```
daisy-engineers-website/
├── dist/                    ← Upload THIS folder to Netlify
│   ├── index.html
│   ├── assets/
│   └── *.jpg (images)
│
├── src/                     ← Source code (edit here)
│   ├── components/
│   ├── sections/
│   ├── hooks/
│   └── lib/
│       └── sanity.ts        ← Edit your Project ID here
│
├── public/                  ← Static files (images)
│   └── *.jpg
│
├── package.json
└── ...config files
```

**Only upload `dist/` to Netlify!**

---

## 🆘 TROUBLESHOOTING

### Website Shows Old Content
- Check Sanity Studio - is content published?
- Clear browser cache (Cmd+Shift+R on Mac)
- Check browser console for errors

### CMS Content Not Loading
- Verify Project ID in `sanity.ts` is correct
- Check Sanity dataset name (should be `production`)
- Check browser console for CORS errors

### Images Not Showing in CMS
- Upload images directly in Sanity Studio
- Or use image URLs from your website

---

## 💡 PRO TIPS

### 1. Keep a Backup
Before making big changes:
- Copy your `dist/` folder
- Or zip the entire project

### 2. Test Locally First
```bash
npm run dev
```
Opens website at `http://localhost:5173`
Test changes before uploading!

### 3. Version Your Uploads
Name your uploads:
- `dist-v1.zip` (initial)
- `dist-v2.zip` (after changes)
- etc.

---

## 🎯 SUMMARY

| What You Want | What To Do |
|---------------|------------|
| Change text/content | Edit in Sanity Studio |
| Change design/layout | Edit code, rebuild, re-upload |
| Add new project | Add in Sanity Studio |
| Change colors/fonts | Edit code, rebuild, re-upload |
| Update contact info | Edit in Sanity Studio |

---

## ✅ CHECKLIST

- [ ] Sanity project created
- [ ] Project ID saved
- [ ] Project ID added to `sanity.ts`
- [ ] Website rebuilt with `npm run build`
- [ ] `dist/` folder uploaded to Netlify
- [ ] Sanity content documents created
- [ ] All content published in Sanity
- [ ] Website tested and working

---

## 📞 NEED HELP?

Stuck on any step? Just tell me:
- What you're trying to do
- What error you see
- What step you're on

I'll guide you through! 🚀
