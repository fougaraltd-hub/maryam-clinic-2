# Quick Start Guide - Dr. Maryam Messai-Ahmed Website

## 🚀 Getting Started in 3 Minutes

### Step 1: Extract the Files
1. Unzip the `psychotherapist-website.zip` file
2. You should see these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `QUICKSTART.md` (this file)
   - `images/` folder with all images

### Step 2: Test Locally
**Easiest Method:**
- Simply double-click `index.html`
- The website will open in your browser

### Step 3: Explore the Website
- Click the language buttons (العربية, Français, English) at the top right
- Navigate through all sections
- Try the booking form
- Test on your phone (responsive design)

## ✏️ Essential Customizations

### 1. Update Contact Information (5 minutes)

Open `index.html` and find these sections:

**Email Address** (appears multiple times):
```html
Search for: contact@drmaryammessai.com
Replace with: your-actual-email@example.com
```

**Phone Number**:
```html
Search for: +213 XXX XXX XXX
Replace with: your-actual-phone-number
```

**Save the file** and refresh your browser.

### 2. Add Your Social Media Links (3 minutes)

In `index.html`, find the footer section and update:

```html
<!-- Facebook -->
<a href="#" aria-label="Facebook">
Change # to: https://facebook.com/yourpage

<!-- Instagram -->
<a href="#" aria-label="Instagram">
Change # to: https://instagram.com/yourprofile

<!-- LinkedIn -->
<a href="#" aria-label="LinkedIn">
Change # to: https://linkedin.com/in/yourprofile
```

### 3. Replace Blog Placeholder Images (Optional)

1. Add your blog post images to the `images/` folder
2. Name them clearly (e.g., `blog-mental-health.jpg`)
3. In `index.html`, update:
```html
<img src="images/blog-placeholder-1.jpg" alt="...">
to
<img src="images/blog-mental-health.jpg" alt="...">
```

## 🌐 Making It Live (Deploy to Internet)

### Option 1: Netlify (Easiest - Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your website folder
4. Your site is live in 30 seconds!
5. Netlify gives you a free URL: `yoursite.netlify.app`

### Option 2: GitHub Pages (Free)

1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Your site will be live at: `username.github.io/repository-name`

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up for free
3. Import your project
4. Deploy automatically

### Option 4: Traditional Hosting (Paid)

If you have hosting with cPanel:
1. Connect via FTP (use FileZilla or similar)
2. Upload all files to `public_html` folder
3. Ensure `index.html` is in the root
4. Visit your domain

## 📝 How to Add New Content

### Add a New Blog Post

1. Open `index.html`
2. Find the blog section (search for `class="blog-grid"`)
3. Copy one of the existing blog cards
4. Paste it and modify the content
5. Update the three language versions (data-ar, data-fr, data-en)

**Example:**
```html
<article class="blog-card">
    <div class="blog-image">
        <img src="images/your-new-image.jpg" alt="Blog post">
    </div>
    <div class="blog-content">
        <span class="blog-category" 
              data-ar="التصنيف الجديد" 
              data-fr="Nouvelle catégorie" 
              data-en="New Category">التصنيف الجديد</span>
        <h3 data-ar="عنوان المقال بالعربي" 
            data-fr="Titre de l'article en français" 
            data-en="Article Title in English">عنوان المقال بالعربي</h3>
        <p data-ar="وصف قصير بالعربي..." 
           data-fr="Description courte en français..." 
           data-en="Short description in English...">وصف قصير بالعربي...</p>
        <a href="#" class="read-more" 
           data-ar="اقرأ المزيد" 
           data-fr="Lire plus" 
           data-en="Read more">اقرأ المزيد →</a>
    </div>
</article>
```

### Add a New Activity/Event

1. Open `index.html`
2. Find activities section (search for `class="activities-grid"`)
3. Choose "upcoming" or "past" tab content
4. Copy an existing activity card
5. Update date, title, description, location

**Example:**
```html
<div class="activity-card">
    <div class="activity-date">
        <span class="day">25</span>
        <span class="month" 
              data-ar="فبراير 2025" 
              data-fr="Février 2025" 
              data-en="February 2025">فبراير 2025</span>
    </div>
    <div class="activity-info">
        <span class="activity-type" 
              data-ar="ندوة" 
              data-fr="Séminaire" 
              data-en="Seminar">ندوة</span>
        <h3 data-ar="عنوان الفعالية" 
            data-fr="Titre de l'événement" 
            data-en="Event Title">عنوان الفعالية</h3>
        <p data-ar="وصف الفعالية..." 
           data-fr="Description de l'événement..." 
           data-en="Event description...">وصف الفعالية...</p>
        <div class="activity-meta">
            <span>📍 <span data-ar="المكان" 
                           data-fr="Lieu" 
                           data-en="Location">المكان</span></span>
            <span>⏰ <span data-ar="الوقت" 
                           data-fr="Horaire" 
                           data-en="Time">الوقت</span></span>
        </div>
    </div>
</div>
```

## 🔧 Common Adjustments

### Change Website Colors

Open `styles.css` and find the `:root` section at the top:

```css
:root {
    --primary-color: #2c5f6f;    /* Main color (teal) */
    --secondary-color: #c9a167;  /* Accent color (gold) */
    --accent-color: #e8c5a5;     /* Soft accent (beige) */
}
```

Use a color picker tool online to find your preferred colors, then replace the hex codes.

### Adjust Font Sizes

In `styles.css`:
```css
/* Hero title */
.hero-title { font-size: 56px; }  /* Make bigger or smaller */

/* Section titles */
.section-title { font-size: 42px; }  /* Adjust as needed */

/* Body text */
body { font-size: 16px; }  /* Base text size */
```

### Change Spacing

```css
:root {
    --section-padding: 100px 0;  /* Space between sections */
}
```

Change `100px` to `80px` for tighter spacing or `120px` for more space.

## 📧 Connect the Booking Form

The form currently shows a success message but doesn't send emails. To make it functional:

### Option 1: Formspree (Easiest - Free)

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free
3. Create a new form
4. You'll get a form endpoint: `https://formspree.io/f/xxxxx`
5. Open `script.js`
6. Find the `showFormMessage('success')` line in the `initBookingForm` function
7. Add before that line:

```javascript
// Send to Formspree
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
});
```

Replace `YOUR_FORM_ID` with your actual Formspree ID.

### Option 2: EmailJS (Free)

Similar to Formspree but with different setup. Check their documentation at [emailjs.com](https://emailjs.com).

## 📱 Testing Checklist

Before going live, test:

- ✅ All three languages work
- ✅ All links in navigation work
- ✅ Mobile menu opens and closes
- ✅ Images load correctly
- ✅ Form validates required fields
- ✅ Email address is correct
- ✅ Phone number is correct
- ✅ Social media links work
- ✅ Scroll-to-top button appears
- ✅ Test on mobile phone
- ✅ Test on tablet
- ✅ Test on desktop

## 🆘 Troubleshooting

### Problem: Images don't show
**Solution**: 
- Check that images are in the `images/` folder
- Check file names match exactly (including .jpg extension)
- Check for spaces in file names (avoid them)

### Problem: Language switching doesn't work
**Solution**:
- Open browser console (F12)
- Look for JavaScript errors
- Ensure `script.js` is in the same folder as `index.html`

### Problem: Website looks broken on mobile
**Solution**:
- Clear browser cache
- Check if `styles.css` loaded correctly
- Try a different browser

### Problem: Form doesn't submit
**Solution**:
- Check browser console for errors
- Ensure all required fields are filled
- If using Formspree/EmailJS, check your API key

## 📞 Need Help?

- Check the full `README.md` file for detailed documentation
- Search for your issue online (include "HTML CSS JavaScript")
- Contact a web developer for custom modifications

## 🎉 You're Ready!

Your website is now ready to deploy. Follow the deployment steps above to make it live on the internet.

**Good luck with your practice! 🌟**

---

**Last Updated**: December 2024
