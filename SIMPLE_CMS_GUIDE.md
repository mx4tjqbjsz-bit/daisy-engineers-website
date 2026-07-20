# Simple CMS Guide for Daisy Consulting Engineers
## For Non-Coders - Easy Content Management

---

## 🎯 YOUR OPTIONS (Easiest to Most Complex)

### OPTION 1: No CMS (Easiest) ⭐ RECOMMENDED FOR YOU
Just edit a simple file and re-upload to Netlify.

**Pros:**
- No accounts to manage
- No learning curve
- Just edit text in a file
- Free forever

**Cons:**
- Need to re-upload when you change content
- Can't edit from your phone

---

### OPTION 2: Google Sheets as CMS (Very Easy)
Store your content in a Google Sheet, website reads from it.

**Pros:**
- Edit from anywhere (phone, computer)
- Familiar interface (like Excel)
- Free
- Changes appear instantly

**Cons:**
- Slightly more setup
- Images still need to be uploaded

---

### OPTION 3: Sanity CMS (What We Started)
Professional headless CMS.

**Pros:**
- Very powerful
- Professional solution
- Images + text in one place

**Cons:**
- Steeper learning curve
- More complex setup
- Overkill for a small site

---

## ✅ MY RECOMMENDATION FOR YOU

**Use OPTION 1 (No CMS) for now.**

Here's why:
- Your website content doesn't change daily
- You mainly need to update: projects, contact info, maybe services
- Re-uploading takes 2 minutes
- No new accounts or passwords to remember

**Later, if you need frequent updates**, we can add Google Sheets CMS.

---

## 📝 HOW TO EDIT CONTENT (No CMS Method)

### Step 1: Find the Content File
All your website content is in one file:
```
src/hooks/useSanityData.ts
```

### Step 2: Edit What You Need
Open the file and you'll see sections like:

```typescript
hero: {
  label: 'CIVIL ENGINEERING CONSULTANTS',
  headline: 'Engineering clarity. Delivered.',
  subheadline: 'Roads, stormwater, structures...',
  ctaText: 'Explore services',
  secondaryCtaText: 'View projects',
},
```

**Just change the text between quotes!**

### Step 3: Rebuild and Re-upload
1. Run: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Done!

---

## 🔧 WHAT YOU CAN EASILY CHANGE

| Section | What to Edit | File Location |
|---------|--------------|---------------|
| Hero text | Headline, subheadline, button text | useSanityData.ts |
| Services | 4 service cards | useSanityData.ts |
| Projects | Project names, descriptions | useSanityData.ts |
| Contact info | Email, phone, address | useSanityData.ts |
| About section | Company description | useSanityData.ts |

---

## 🖼️ CHANGING IMAGES

### For Project Images:
1. Add new image to `public/` folder
2. Update the image path in `useSanityData.ts`
3. Rebuild and re-upload

### Example:
```typescript
projects: {
  items: [
    {
      title: 'New Project Name',
      subtitle: 'Project description',
      image: '/new-project-image.jpg',  // <-- Change this
    },
  ],
}
```

---

## 📱 GOOGLE SHEETS CMS (If You Want It Later)

### How It Works:
1. Create a Google Sheet with your content
2. Website reads from the sheet automatically
3. Edit the sheet = website updates instantly

### Setup:
1. Create Google Sheet
2. Share it publicly (view-only)
3. Add a small script to read the data
4. Website pulls content from sheet

**Want me to set this up?** Just ask!

---

## 🤔 WHICH SHOULD YOU CHOOSE?

### Choose NO CMS if:
- You update content monthly or less
- You want simplicity
- You don't mind a 2-minute upload process

### Choose Google Sheets if:
- You update content weekly
- You want to edit from your phone
- You prefer spreadsheet interface

### Choose Sanity if:
- You have a team managing content
- You need complex content relationships
- You want a professional enterprise solution

---

## 🚀 QUICK START (No CMS)

### To Change Your Contact Email:

1. Open `src/hooks/useSanityData.ts`
2. Find:
```typescript
contact: {
  email: 'hello@daisyengineers.co.za',
```
3. Change to:
```typescript
contact: {
  email: 'info@daisyconsulting.co.za',
```
4. Save file
5. Run: `npm run build`
6. Upload `dist/` folder to Netlify

**Done!** Your new email is live.

---

## 📞 NEED HELP?

Just tell me:
- "I want to change my phone number"
- "I need to add a new project"
- "I want to update the hero text"

I'll tell you exactly what to edit! 

---

## 💡 BOTTOM LINE

For a small business website like yours:
- **No CMS = Simple, free, easy**
- **Updates take 2 minutes**
- **No learning curve**
- **No monthly fees**

**Start with this, upgrade later if needed!**
