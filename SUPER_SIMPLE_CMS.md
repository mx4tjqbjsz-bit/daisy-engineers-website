# Super Simple CMS - No Accounts Needed!
## Edit a Text File, Upload to Netlify - Done!

---

## 🎯 THE EASIEST OPTION

**No Google account. No CMS. No complexity.**

Just edit a text file and upload your website. That's it!

---

## 📁 WHERE YOUR CONTENT LIVES

All your website content is in ONE file:

```
src/hooks/useGoogleSheets.ts
```

**Lines 21-127** contain all your content.

---

## ✏️ HOW TO EDIT YOUR CONTENT

### Step 1: Open the File

Find this file in your website folder:
```
daisy-engineers-website/
└── src/
    └── hooks/
        └── useGoogleSheets.ts
```

### Step 2: Find What You Want to Change

Look for sections like this:

```typescript
hero: {
  label: 'CIVIL ENGINEERING CONSULTANTS',
  headline: 'Engineering clarity. Delivered.',
  subheadline: 'Roads, stormwater, structures...',
  ctaText: 'Explore services',
  secondaryCtaText: 'View projects',
},
```

### Step 3: Edit the Text

**Just change what's between the quotes!**

**Example - Change Phone Number:**

| Before | After |
|--------|-------|
| `phone: '+27 (0)11 000 0000',` | `phone: '+27 (0)11 123 4567',` |

**Example - Change Headline:**

| Before | After |
|--------|-------|
| `headline: 'Engineering clarity. Delivered.',` | `headline: 'Building South Africa\'s Future.',` |

### Step 4: Save the File

Press **Cmd+S** (Mac) or **Ctrl+S** (Windows)

---

## 🔨 REBUILD YOUR WEBSITE

After editing, you need to rebuild:

### Option A: Using Terminal (If you have Node.js)

1. Open Terminal
2. Go to your website folder:
   ```bash
   cd /path/to/daisy-engineers-website
   ```
3. Run:
   ```bash
   npm run build
   ```
4. Upload the `dist/` folder to Netlify

### Option B: Ask Me to Rebuild

1. Tell me what you changed
2. I'll rebuild for you
3. Give you the new files to upload

---

## 📋 QUICK REFERENCE: WHAT TO EDIT

### Change Hero Text (Main Banner)

Find this section (around line 21):
```typescript
hero: {
  label: 'CIVIL ENGINEERING CONSULTANTS',
  headline: 'Engineering clarity. Delivered.',
  subheadline: 'Roads, stormwater...',
```

**Edit:** `label`, `headline`, `subheadline`

---

### Change Services

Find this section (around line 33):
```typescript
services: {
  label: 'SERVICES',
  headline: 'What we deliver',
  description: 'We plan, design...',
  items: [
    {
      title: 'Roads & Earthworks',
      description: 'Alignment, pavement...',
```

**Edit:** `title` and `description` for each service

---

### Change Contact Info

Find this section (around line 118):
```typescript
contact: {
  label: 'CONTACT',
  headline: "Let's build something solid.",
  email: 'hello@daisyconsulting.co.za',
  phone: '+27 (0)11 000 0000',
  location: 'Johannesburg / Pretoria',
```

**Edit:** `email`, `phone`, `location`

---

## 🖼️ CHANGING IMAGES

Images are stored in the `public/` folder.

### To Change an Image:

1. **Add your new image** to the `public/` folder
2. **Rename it** to something simple (e.g., `new-project.jpg`)
3. **Edit the code** to point to the new image

**Example - Change a Project Image:**

Find this (around line 96):
```typescript
projects: {
  items: [
    {
      title: 'Daveyton NMT',
      image: '/project_daveyton.jpg',  // <-- Change this
```

Change to:
```typescript
      image: '/new-project.jpg',
```

---

## ⚠️ IMPORTANT RULES

When editing, follow these rules:

| Rule | Example |
|------|---------|
| Keep the quotes | `'Your Text'` not `Your Text` |
| Keep the comma at end | `'Text',` not `'Text'` |
| Don't delete brackets | Keep `{` and `}` |
| Don't delete square brackets | Keep `[` and `]` |

**Good:**
```typescript
headline: 'My New Headline',
```

**Bad:**
```typescript
headline: My New Headline    // Missing quotes!
headline: 'My New Headline'   // Missing comma!
```

---

## 🆘 IF YOU BREAK SOMETHING

Don't worry! If the website stops working:

1. **Undo your changes** (Cmd+Z or Ctrl+Z)
2. **Save again**
3. **Rebuild**

Or just ask me - I have a backup! 😊

---

## 📞 NEED HELP?

**Just tell me:**
- "I want to change my phone number to +27 123 456 7890"
- "I need to update the hero headline"
- "I want to add a new project"

**I'll tell you exactly what to edit!**

---

## ✅ SUMMARY

| Task | What You Do | How Long? |
|------|-------------|-----------|
| Change text | Edit file, save, rebuild | 5 minutes |
| Change images | Add image, edit path, rebuild | 10 minutes |
| Add content | Edit file, save, rebuild | 5 minutes |

**No accounts. No CMS. Just edit and upload!**

---

## 🎯 MY RECOMMENDATION

**Start with this method** - it's the simplest!

**When to upgrade to Google Sheets:**
- You update content weekly or more
- You want to edit from your phone
- You have a team helping you

**For now, just edit the file!** 😊
