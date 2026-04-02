# Carthic Portfolio - Setup Checklist

Use this checklist to get your portfolio up and running.

---

## ✅ Installation

- [x] Dependencies installed (`npm install`)
- [x] Verification script passes
- [x] Project builds successfully (`npm run build`)

---

## 🖼️ Profile Image

- [ ] Add your professional profile photo to `public/profile.jpg`
- [ ] Recommended: Square aspect ratio, at least 512x512px
- [ ] Test: The 3D profile card in the hero section should display your photo

---

## 📧 EmailJS Configuration (Contact Form)

1. [ ] Sign up at [EmailJS](https://www.emailjs.com/)
2. [ ] Add an email service (connect your Gmail/Outlook)
3. [ ] Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
4. [ ] Copy your Service ID, Template ID, and User ID
5. [ ] Update `src/components/Sections/Contact.jsx` with your IDs (lines with YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID)
6. [ ] Test: Submit the contact form and verify you receive emails

---

## 🚀 Development Testing

- [ ] Run `npm run dev`
- [ ] Open http://localhost:5173
- [ ] Verify 3D hero scene loads and animates
- [ ] Check all sections render correctly
- [ ] Test navigation links
- [ ] Check mobile responsiveness (resize browser or use dev tools)
- [ ] Expand project cards interactively
- [ ] Scroll through timeline smoothly

---

## 🎨 Customization (Optional)

### Content
- [ ] Update personal details in components if needed
- [ ] Add/remove projects in `Projects.jsx`
- [ ] Adjust skills in `Skills.jsx`
- [ ] Modify experience timeline in `Experience.jsx`

### Colors
- [ ] Customize `tailwind.config.js` colors if desired
- [ ] Current theme: Cyan (#00d4ff) / Purple (#a855f7) on dark background

### Typography
- [ ] Fonts are set to Inter (from Google Fonts)
- [ ] Change in `index.html` if needed

---

## ☁️ Deployment

Choose your preferred platform:

### Vercel (Recommended)
- [ ] Push code to GitHub
- [ ] Import project in Vercel
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Deploy
- [ ] Custom domain (optional)

### Netlify
- [ ] Push to GitHub
- [ ] Import in Netlify
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Deploy

### Other (AWS S3, GitHub Pages, etc.)
- [ ] Build project: `npm run build`
- [ ] Upload `dist/` folder contents to hosting service
- [ ] Configure domain and SSL

---

## 📝 Post-Deployment

- [ ] Update contact form email destination (in Contact.jsx) if needed
- [ ] Test live contact form
- [ ] Verify all sections load correctly on production
- [ ] Test on mobile devices
- [ ] Add analytics (Google Analytics, etc.) if desired
- [ ] Add privacy policy if collecting user data

---

## 🎉 Done!

Your portfolio should now be live and showcasing your engineering expertise.

---

## Need Help?

- Review the full README.md for detailed instructions
- Check browser console for errors
- Ensure profile.jpg is in the public folder
- Verify EmailJS configuration for contact form
- Check that all dependencies are installed
