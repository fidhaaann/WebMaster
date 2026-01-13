# LINK CAMP 2025 - IEEE LINK Event Website

![IEEE LINK](https://img.shields.io/badge/IEEE-LINK-EA7B7B?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)

A fully responsive, interactive event website for **LINK CAMP 2025** - an immersive tech experience conducted by IEEE LINK.

## ✨ Features

- 🎨 **Modern Design** - Professional UI with IEEE-style branding
- 🌓 **Dark/Light Theme** - Smooth animated theme toggling
- 🎬 **GSAP Animations** - Scroll-triggered, parallax, and stacking effects
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Performance Optimized** - Smooth 60fps animations
- ♿ **Accessible** - WCAG compliant with proper focus states
- 🔍 **SEO Friendly** - Semantic HTML and meta tags

## 🎯 Sections

1. **Hero** - Parallax background, animated title, CTA button
2. **About** - Event description with text reveal animations
3. **Schedule** - GSAP stacked cards with day-by-day breakdown
4. **Registration** - Pricing tiers with hover effects
5. **Footer** - Contact info and social links

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.17.0
- npm >= 9.0.0 (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/link-camp-2025.git
cd link-camp-2025

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#EA7B7B` | Buttons, accents, highlights |
| Accent Red | `#D25353` | Hover states, secondary elements |
| Deep Red | `#9E3B3B` | Text (light mode), backgrounds (dark mode) |
| Soft Background | `#FFEAD3` | Background (light mode), text (dark mode) |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind config
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Main page component
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Navigation with animations
│   │   └── Footer.tsx   # Footer component
│   ├── sections/
│   │   ├── Hero.tsx     # Hero with parallax
│   │   ├── About.tsx    # About section
│   │   ├── Schedule.tsx # Schedule with stacked cards
│   │   └── Registration.tsx # Registration section
│   ├── providers/
│   │   └── ThemeProvider.tsx # Theme context
│   └── ui/
│       ├── Button.tsx   # Reusable button component
│       ├── Card.tsx     # Card with tilt effect
│       └── ...
├── hooks/
│   └── useAnimations.ts # Custom GSAP hooks
└── lib/
    └── utils.ts         # Utility functions
```

## 🎬 Animations Included

- ✅ Parallax Background
- ✅ Sticky Section Layout
- ✅ GSAP Stacked Cards
- ✅ Text Scroll-Reveal
- ✅ Zoom + Blur Background on Scroll
- ✅ Image Hover Effects (tilt, scale)
- ✅ Animated Underline Navigation
- ✅ Hide/Reveal Navbar on Scroll
- ✅ Mobile Menu Slide Animation
- ✅ Active Section Indicator
- ✅ Floating Particles
- ✅ Pulse Glow Effects

## 📦 Dependencies

### Core
- `next` - React framework with App Router
- `react` & `react-dom` - UI library
- `typescript` - Type safety

### Animation
- `gsap` - GreenSock Animation Platform
- `@gsap/react` - GSAP React hooks

### Styling
- `tailwindcss` - Utility-first CSS
- `clsx` & `tailwind-merge` - Class utilities

### Icons
- `lucide-react` - Modern icon library

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 📄 License

This project is created for IEEE LINK educational purposes.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with ❤️ by IEEE LINK Team**