# Carthic Kumar - 3D Portfolio

A premium, visually stunning 3D portfolio website for a Mechanical Engineer built with React, Three.js, and modern web technologies.

## 🚀 Features

- **3D Hero Scene**: Interactive Three.js scene with particles, rotating geometries, and a floating 3D profile card
- **Smooth Animations**: Framer Motion for professional-grade animations and transitions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero with 3D background
  - About with highlights grid
  - Interactive timeline for experience & education
  - Project cards with expandable details
  - Skills visualization with dynamic progress bars
  - Education with course highlights
  - Contact form with EmailJS integration
- **Dark Theme**: Premium dark UI with cyan/purple neon accents
- **Glassmorphism**: Modern glass-style cards with subtle blur effects
- **Performance Optimized**: Lazy loading, optimized rendering

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool
- **Three.js** + **React Three Fiber** - 3D graphics
- **Framer Motion** - Animations
- **Tailwind CSS** - Utility-first styling
- **EmailJS** - Contact form backend
- **Lucide React** - Icon library

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Development Server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

---

## 📧 EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails without a backend. To configure:

1. **Sign up** at [EmailJS](https://www.emailjs.com/) (free tier available)

2. **Add an Email Service**:
   - Go to Dashboard → Email Services → Add Service
   - Connect your email (Gmail, Outlook, etc.)
   - Copy the **Service ID**

3. **Create an Email Template**:
   - Go to Templates → Create New Template
   - Design your email template with variables:
     ```
     {{from_name}}
     {{from_email}}
     {{subject}}
     {{message}}
     ```
   - Copy the **Template ID**

4. **Get your User ID**:
   - Account → API Keys → Copy your **Public Key**

5. **Update the Contact Form** (`src/components/Sections/Contact.jsx`):

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',      // ← Replace
  'YOUR_TEMPLATE_ID',    // ← Replace
  {
    from_name: formState.name,
    from_email: formState.email,
    subject: formState.subject,
    message: formState.message,
    to_email: 'carthic.kumar@purdue.edu',
  },
  'YOUR_USER_ID'         // ← Replace
)
```

6. **For email templates to work properly**, also set up the template variables correctly in the EmailJS dashboard.

---

## 🖼️ Profile Image

The 3D profile card uses a placeholder. To add your own image:

1. Place your profile photo in the `public/` folder
2. Name it `profile.jpg` (or update the path in `src/components/Three/ProfileCard3D.jsx`)
3. Recommended size: 512x512px or higher, square aspect ratio

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

### Netlify

1. Push to GitHub
2. Import in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Build & Deploy

```bash
npm run build
# Upload the contents of dist/ to any static hosting service
```

---

## 📁 Project Structure

```
carthic-portfolio/
├── public/
│   └── profile.jpg          # Your profile image
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── Sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Education.jsx
│   │   │   └── Contact.jsx
│   │   ├── Three/
│   │   │   ├── HeroScene.jsx
│   │   │   ├── GearObject.jsx
│   │   │   ├── ParticleField.jsx
│   │   │   └── ProfileCard3D.jsx
│   │   └── UI/
│   │       └── LoadingScreen.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

```js
colors: {
  cyber: {
    blue: '#00d4ff',
    purple: '#a855f7',
    pink: '#ec4899',
    dark: '#0a0a0f',
    surface: '#12121a',
  },
}
```

Feel free to modify these to match personal branding.

### Content

All content lives in the section components. Edit the data objects in:
- `src/components/Sections/Experience.jsx` - Experience timeline
- `src/components/Sections/Projects.jsx` - Project showcases
- `src/components/Sections/Skills.jsx` - Skill categories
- `src/components/Sections/Education.jsx` - Education details

---

## ⚡ Performance Tips

- The 3D scene is lightweight but may affect performance on low-end devices
- Consider adding `loading="lazy"` to the Three.js canvas if needed
- Optimize images before adding them
- Use Vercel/Netlify's CDN for faster global delivery

---

## 🐛 Known Issues

- The 3D profile card needs an actual image. Place `profile.jpg` in `public/`
- EmailJS requires proper configuration to work
- Some mobile devices may have WebGL limitations for Three.js

---

## 📝 License

MIT License - Feel free to use and modify for your own portfolio.

---

## 🤝 Support

If you encounter issues:
1. Check that all dependencies are installed: `npm install`
2. Clear cache: `rm -rf node_modules/.vite`
3. Verify EmailJS configuration
4. Check browser console for errors
5. Ensure your browser supports WebGL (for Three.js)

---

Built with React, Three.js, and lots of ❤️
