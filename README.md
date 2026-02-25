# Downtown Grand Hotel Website

A modern, animated, and fully responsive website for Downtown Grand Hotel & Casino, built with React, Vite, Tailwind CSS, and GSAP animations.

## Features

✨ **Modern Design**
- Contemporary hotel/casino aesthetic inspired by Downtown Grand Las Vegas
- Clean, professional layout with luxury branding

🎬 **Smooth Animations**
- GSAP scroll-triggered animations
- Framer Motion component transitions
- Parallax effects and hover interactions
- Fade-in and slide animations on scroll

📱 **Mobile Responsive**
- Fully responsive design for all devices
- Mobile-first approach
- Touch-friendly navigation
- Optimized performance for mobile devices

🎨 **Beautiful UI**
- Tailwind CSS for styling
- Custom color gradient system (Gold & Dark theme)
- Smooth transitions and hover effects
- Professional typography and spacing

## Sections

- **Header** - Fixed navigation with responsive mobile menu
- **Hero Section** - Eye-catching hero with gradient overlay and CTA
- **Deals Section** - Showcase of special offers and perks
- **Rooms & Suites** - Hotel accommodation options
- **Pool Deck** - Resort amenities
- **Dining** - Restaurant and dining options
- **Location** - Map and contact information
- **Social Gallery** - Instagram feed showcase
- **Newsletter** - Email subscription form
- **Footer** - Comprehensive site navigation and social links

## Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library with ScrollTrigger
- **Framer Motion** - React animation library

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm package manager

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:5173`

## Project Structure

```
src/
├── components/              # Reusable React components
│   ├── Header.jsx          # Navigation bar with mobile menu
│   ├── HeroSection.jsx     # Landing hero section
│   ├── DealsSection.jsx    # Special offers showcase
│   ├── RoomsSection.jsx    # Accommodation options
│   ├── PoolSection.jsx     # Resort pool amenities
│   ├── DiningSection.jsx   # Restaurant showcase
│   ├── LocationSection.jsx # Maps and location info
│   ├── SocialGallery.jsx   # Instagram feed
│   ├── NewsletterSection.jsx # Email signup
│   └── Footer.jsx          # Site footer
├── App.jsx                 # Main application component
├── App.css                 # Component-specific styles
├── index.css               # Tailwind CSS imports
└── main.jsx                # React entry point

public/                     # Static assets
tailwind.config.js          # Tailwind CSS customization
vite.config.js              # Vite bundler configuration
postcss.config.js           # PostCSS configuration
```

## Customization Guide

### Update Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  gold: { 50: '...', 600: '...', 700: '...' },
  dark: { 50: '...', 900: '...' }
}
```

### Modify Animations
Each component uses either:
- **GSAP** with ScrollTrigger for scroll-based animations
- **Framer Motion** for interactive component animations

Edit animation properties directly in component files.

### Update Content
Replace placeholder text and gradients:
- Text content in component JSX
- Gradient colors in inline style props
- Navigation links in component files

## Mobile Responsive Features

✓ Responsive grid layouts (1 col mobile → 3 cols desktop)
✓ Mobile navigation hamburger menu
✓ Touch-optimized button sizes
✓ Adaptive font sizes for readability
✓ Optimized viewport settings
✓ Performance-optimized for mobile devices

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |
| Mobile  | iOS 12+, Android 8+ |

## Performance Optimization

- **Lazy Loading**: Animations trigger only when elements enter viewport
- **GPU Acceleration**: Animations use transform and opacity for smooth performance
- **Code Splitting**: Vite automatically splits code for optimal loading
- **Image Optimization**: Placeholder gradients minimize file size
- **Production Build**: Minified and optimized for fast delivery

## Deployment

Deploy to your favorite platform:

**Netlify**
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

**Vercel**
```bash
npm run build
vercel deploy
```

**GitHub Pages**
```bash
npm run build
# Deploy 'dist' folder to GitHub Pages
```

## Troubleshooting

**Animations not working?**
- Check that GSAP and Framer Motion are installed: `npm list gsap framer-motion`
- Verify scroll trigger plugin is registered in components

**Styling issues?**
- Rebuild Tailwind CSS: `npm run dev`
- Clear browser cache (Ctrl+Shift+Delete)
- Check tailwind.config.js content paths

**Build errors?**
- Delete node_modules and reinstall: `rm -r node_modules && npm install`
- Check Node.js version compatibility: `node --version`

## Learning Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://gsap.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)

## Future Enhancements

- [ ] Add actual images instead of gradients
- [ ] Integrate real booking system
- [ ] Add more interactive features
- [ ] Implement dark mode toggle
- [ ] Add multi-language support
- [ ] Create CMS integration

## License

© 2026 Downtown Grand Hotel Website - Educational Project

## Notes

- **No Backend Required**: Purely frontend static site
- **Production Ready**: Fully optimized and deployable
- **Customizable**: Easy to modify colors, content, and styling
- **Modern Stack**: Uses latest React and web technologies
- **Well Commented**: Code is easy to understand and modify

---

**Built with ❤️ using React, Tailwind CSS, and GSAP**

