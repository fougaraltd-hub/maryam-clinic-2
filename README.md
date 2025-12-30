# Dr. Maryam Messai-Ahmed - Psychotherapist Website

A professional, trilingual (Arabic, French, English) website for Dr. Maryam Messai-Ahmed, Psychotherapist, Writer, Researcher, and Trainer based in Constantine, Algeria.

## Features

### 🌐 Multilingual Support
- **Arabic (RTL)** - Default language
- **French** - Full translation
- **English (British)** - Full translation
- Seamless language switching without page reload
- Direction (RTL/LTR) automatically handled

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Hamburger menu for mobile devices
- Touch-friendly interface

### 🎨 Professional Design
- Elegant therapeutic color palette
- Sophisticated typography (Amiri, Lora, Playfair Display)
- Smooth animations and transitions
- Modern card-based layouts
- Accessibility-focused

### 📄 Complete Sections

#### 1. **Home/Hero Section**
- Professional hero banner with image
- Call-to-action buttons
- Elegant introduction

#### 2. **About Section**
- Professional biography
- Qualifications and certifications:
  - Bachelor's and Master's in Clinical Psychology
  - Cognitive Behavioral Therapy (CBT) training
  - EMDR specialization
  - Relaxation techniques expertise
- Areas of specialization with visual cards
- Professional experience highlights

#### 3. **Services Section**
- Individual therapy sessions
- Family therapy (featured specialty)
- Online sessions
- Training and supervision
- Session types (in-person and online)
- Detailed service descriptions

#### 4. **Book Section**
- "Narcissism in Family Relationships" book showcase
- Book cover display
- Comprehensive book description
- Key highlights and features
- Call-to-action button

#### 5. **Blog Section**
- Article cards with images
- Category labels
- Read more links
- Grid layout for articles
- Topics include:
  - Mental health
  - Family therapy
  - Self-development

#### 6. **Activities Section**
- Tabbed interface (Upcoming/Past events)
- Seminars and conferences
- Workshops and training sessions
- Event details with dates, times, and locations
- Online and in-person events

#### 7. **Contact/Booking Section**
- Comprehensive booking form with fields:
  - Full name
  - Email
  - Phone number
  - Session type (dropdown)
  - Preferred date
  - Additional message
- Contact information display
- Session information box
- Location: Constantine, Algeria

#### 8. **Footer**
- Quick links navigation
- Contact information
- Social media links (Facebook, Instagram, LinkedIn)
- Copyright information

### ⚙️ Technical Features
- Pure HTML5, CSS3, and JavaScript (Vanilla JS)
- No frameworks or dependencies required
- SEO optimized
- Fast loading
- Cross-browser compatible
- Smooth scroll navigation
- Active link highlighting
- Scroll-to-top button
- Form validation
- Keyboard navigation support
- Accessibility features (ARIA labels, skip links)

## File Structure

```
psychotherapist-website/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── images/             # Image directory
│   ├── profile-main.jpg       # Hero section image
│   ├── profile-about.jpg      # About section image
│   ├── book-cover.jpg         # Book cover image
│   ├── blog-placeholder-1.jpg # Blog post image
│   ├── blog-placeholder-2.jpg # Blog post image
│   └── blog-placeholder-3.jpg # Blog post image
└── README.md           # This file
```

## Setup Instructions

### Option 1: Direct Browser Opening
1. Unzip the downloaded file
2. Navigate to the extracted folder
3. Double-click `index.html`
4. The website will open in your default browser

### Option 2: Local Web Server (Recommended)

#### Using Python (if installed):
```bash
cd psychotherapist-website
python -m http.server 8000
```
Then open: http://localhost:8000

#### Using Node.js (if installed):
```bash
cd psychotherapist-website
npx http-server -p 8000
```
Then open: http://localhost:8000

#### Using PHP (if installed):
```bash
cd psychotherapist-website
php -S localhost:8000
```
Then open: http://localhost:8000

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## Customization Guide

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c5f6f;
    --secondary-color: #c9a167;
    --accent-color: #e8c5a5;
    /* ... more colors */
}
```

### Adding New Blog Posts
In `index.html`, duplicate a blog card and modify:
```html
<article class="blog-card">
    <div class="blog-image">
        <img src="images/your-image.jpg" alt="Description">
    </div>
    <div class="blog-content">
        <span class="blog-category" data-ar="..." data-fr="..." data-en="...">...</span>
        <h3 data-ar="..." data-fr="..." data-en="...">...</h3>
        <p data-ar="..." data-fr="..." data-en="...">...</p>
        <a href="#" class="read-more">...</a>
    </div>
</article>
```

### Adding New Activities
In `index.html`, add to the appropriate tab (upcoming or past):
```html
<div class="activity-card">
    <div class="activity-date">
        <span class="day">15</span>
        <span class="month" data-ar="..." data-fr="..." data-en="...">...</span>
    </div>
    <div class="activity-info">
        <span class="activity-type" data-ar="..." data-fr="..." data-en="...">...</span>
        <h3 data-ar="..." data-fr="..." data-en="...">...</h3>
        <p data-ar="..." data-fr="..." data-en="...">...</p>
        <div class="activity-meta">
            <span>📍 <span data-ar="..." data-fr="..." data-en="...">...</span></span>
            <span>⏰ <span data-ar="..." data-fr="..." data-en="...">...</span></span>
        </div>
    </div>
</div>
```

### Updating Contact Information
1. Open `index.html`
2. Find the contact section
3. Update email, phone, and location information

### Adding Images
1. Place new images in the `images/` folder
2. Update the `src` attribute in HTML:
   ```html
   <img src="images/your-new-image.jpg" alt="Description">
   ```

## Multilingual Translation System

The website uses a data attribute system for translations. Each translatable element has three attributes:
- `data-ar="Arabic text"`
- `data-fr="French text"`
- `data-en="English text"`

Example:
```html
<h1 data-ar="مرحبا" data-fr="Bonjour" data-en="Hello">مرحبا</h1>
```

To add new translatable content:
1. Add the element with default Arabic text
2. Add all three data attributes
3. The JavaScript will handle language switching automatically

## Form Integration

The booking form is currently client-side only. To connect it to a backend:

### Option 1: Email Service (Formspree, EmailJS)
Add to `script.js` after form validation:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
});
```

### Option 2: Custom Backend
Modify the form submission in `script.js`:
```javascript
fetch('/api/booking', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
});
```

## Performance Optimization

### Image Optimization
- Compress images using tools like TinyPNG or ImageOptim
- Recommended formats: WebP for modern browsers, JPEG fallback
- Max width: 1920px for full-width images, 800px for content images

### Minification (for production)
Use tools to minify:
- CSS: cssnano, clean-css
- JavaScript: Terser, UglifyJS
- HTML: html-minifier

## Deployment Options

### 1. GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Enable GitHub Pages in repository settings.

### 2. Netlify
1. Drag and drop the folder to Netlify
2. Or connect your Git repository
3. Deploy automatically

### 3. Vercel
```bash
vercel --prod
```

### 4. Traditional Hosting (cPanel, FTP)
1. Upload all files via FTP
2. Ensure `index.html` is in the root directory
3. Set proper permissions (755 for folders, 644 for files)

## SEO Recommendations

1. **Add favicon**: Create and add `favicon.ico` to root
2. **Add Open Graph tags** for social media sharing
3. **Add structured data** (JSON-LD) for rich snippets
4. **Create sitemap.xml**
5. **Add robots.txt**
6. **Optimize images** with alt text and proper sizing
7. **Add meta keywords** (though less important now)

## Security Considerations

- Form data should be sanitized on the server side
- Implement CAPTCHA to prevent spam submissions
- Use HTTPS in production
- Validate and sanitize all user inputs
- Implement CSRF protection if using a backend

## Future Enhancement Ideas

- 📧 Email newsletter subscription
- 🎥 Video testimonials section
- 📚 Resources/downloads section
- 💬 Live chat integration
- 🗓️ Online booking calendar integration
- 📊 Analytics dashboard
- 🔐 Client portal with login
- 📱 Progressive Web App (PWA) capabilities
- 🌙 Dark mode toggle
- 📄 PDF download for brochures

## Support and Maintenance

### Regular Updates Needed:
- Blog posts (weekly/monthly)
- Activity events (as scheduled)
- Service descriptions (as practice evolves)
- Contact information (if changed)
- Images (professional photos periodically)

### Backup Strategy:
1. Keep backup copies of all files
2. Version control with Git
3. Export database (if using backend)
4. Document all customizations

## Troubleshooting

### Images not loading?
- Check file paths are correct
- Ensure images exist in `images/` folder
- Verify file extensions match (case-sensitive on some servers)

### Language switching not working?
- Check JavaScript console for errors
- Ensure all elements have proper data attributes
- Clear browser cache

### Mobile menu not opening?
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded correctly
- Test on different devices

### Form not submitting?
- Check browser console for validation errors
- Ensure all required fields are filled
- Verify form action is configured

## Credits

**Design & Development**: Custom professional design
**Fonts**: Google Fonts (Amiri, Lora, Playfair Display)
**Icons**: Unicode emoji and custom SVG
**Client**: Dr. Maryam Messai-Ahmed

## License

This website is created for Dr. Maryam Messai-Ahmed. All rights reserved.
Content, images, and design are proprietary.

---

## Contact for Website Support

For technical support or questions about this website:
- Email: contact@drmaryammessai.com
- Location: Constantine, Algeria

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Status**: Production Ready ✅
