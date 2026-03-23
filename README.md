# Alpha Grid - Website

A modern, fully responsive, and SEO-optimized business website built with React, TypeScript, Vite, and TailwindCSS.

## 🌟 Features

### ✨ Modern Design
- Responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- Professional color scheme and typography
- Dark and light theme support ready

### 📱 Responsive & Mobile-First
- Mobile-first development approach
- Touch-friendly interface (48x48px minimum buttons)
- Responsive images with srcset
- Optimized for all screen sizes
- Hamburger menu for mobile navigation

### 🔍 SEO Optimization
- Dynamic page titles and meta descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Schema.org structured data (JSON-LD)
- Sitemap.xml and robots.txt
- Semantic HTML structure
- Proper heading hierarchy

### ♿ Accessibility
- WCAG 2.1 AA compliant
- Proper ARIA labels
- Keyboard navigation support
- Focus visible states
- Alt text for all images
- Semantic HTML elements

### ⚡ Performance
- Code splitting with vendor chunks
- Lazy loading for images
- CSS and JS minification
- Gzip compression
- CDN-ready asset hashing
- Optimized bundle size (~190KB gzipped)

### 📄 Pages Included
1. **Home** - Hero, services, stats, portfolio, testimonials, CTA
2. **Services** - Service cards, descriptions, tags, CTA
3. **About** - Company story, team, values, mission
4. **Portfolio** - Project case studies, technologies, categories
5. **Blog** - Post listing, search, category filtering, pagination
6. **Contact** - Contact form, information, hours, newsletter
7. **Blog Detail** - Full blog post with metadata
8. **404** - Not found page

---

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Wouter** - Lightweight routing
- **React Query** - Data fetching
- **React Hook Form** - Form management
- **Radix UI** - Accessible components

### Backend
- **Node.js** - Runtime
- **Express** - Server framework
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database

### Tools
- **ESBuild** - Fast bundler
- **PostCSS** - CSS processing
- **Tailwind CSS** - Utility-first CSS

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL 12+ (for database)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/technocrat-horizons.git
   cd technocrat-horizons
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Setup database**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   The site will be available at:
   - Client: http://localhost:5000 (if running client dev server)
   - Server: http://localhost:3000 (production-like)

---

## 📖 Usage

### Development

Start the development server:
```bash
npm run dev
```

Watch for TypeScript errors:
```bash
npm run check
```

### Building

Build for production:
```bash
npm run build
```

This generates:
- `dist/public/` - Frontend assets
- `dist/index.cjs` - Backend server

### Deployment

Run the production build:
```bash
npm run start
```

---

## 📋 File Structure

```
technocrat-horizons/
├── client/
│   ├── src/
│   │   ├── App.tsx                 # Main app component
│   │   ├── main.tsx                # Entry point
│   │   ├── index.css               # Global styles
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx      # Navigation bar
│   │   │   │   └── Footer.tsx      # Footer component
│   │   │   ├── sections/           # Page sections
│   │   │   └── ui/                 # UI components
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── BlogDetail.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── not-found.tsx
│   │   ├── hooks/
│   │   │   ├── use-seo.ts          # SEO management
│   │   │   ├── use-toast.ts        # Toast notifications
│   │   │   ├── use-mobile.tsx      # Mobile detection
│   │   │   └── use-responsive.ts   # Responsive utilities
│   │   └── lib/
│   │       ├── constants.ts        # Constants
│   │       ├── utils.ts            # Utilities
│   │       └── queryClient.ts      # React Query setup
│   ├── public/
│   │   ├── favicon.png
│   │   ├── manifest.json           # PWA manifest
│   │   ├── robots.txt              # SEO robots
│   │   └── sitemap.xml             # XML sitemap
│   └── index.html                  # HTML template
├── server/
│   ├── index.ts                    # Server entry
│   ├── routes.ts                   # API routes
│   ├── vite.ts                     # Vite config
│   └── storage.ts                  # Data storage
├── shared/
│   └── schema.ts                   # Shared types
├── .env.example                    # Environment template
├── DEPLOYMENT_CHECKLIST.md         # Launch checklist
├── PRE_LAUNCH_GUIDE.md            # Deployment guide
├── package.json                    # Dependencies
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript config
└── drizzle.config.ts               # Drizzle config
```

---

## 🎨 Styling

### Color Scheme
- **Primary:** `#ff6b35` (Orange)
- **Secondary:** `#1a1a2e` (Dark Blue)
- **Text:** `#ffffff` (White on dark), `#1a1a2e` (Dark on light)
- **Gray:** `#f0f0f0` - `#4a4a4a`

### Responsive Breakpoints
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px

### Typography
- **Primary Font:** Plus Jakarta Sans
- **Fallback:** Inter
- **Sizes:** text-sm to text-7xl with responsive scaling

---

## 🔐 Security

### Best Practices Implemented
- ✅ HTTPS/TLS ready
- ✅ CSRF protection ready
- ✅ Content Security Policy ready
- ✅ Input validation
- ✅ Environment variables for secrets
- ✅ Secure session configuration
- ✅ SQL injection prevention (ORM)

### To Configure
1. Enable HTTPS in production
2. Set strong JWT/SESSION secrets
3. Configure CORS properly
4. Use environment variables for all secrets
5. Regular dependency updates

---

## 📊 Performance Metrics

### Current Bundle Sizes (Gzipped)
- CSS: 19.04 KB
- JS (vendor-react): 4.07 KB
- JS (vendor-ui): 16.81 KB
- JS (vendor-animation): 39.86 KB
- JS (main): 110.02 KB
- **Total:** ~190 KB

### Target Lighthouse Scores
- Performance: >85
- SEO: >90
- Accessibility: >90
- Best Practices: >85

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works (desktop & mobile)
- [ ] Forms submit without errors
- [ ] Images load properly
- [ ] Animations work smoothly
- [ ] Mobile responsive (test at 375px, 768px, 1440px)
- [ ] SEO meta tags present
- [ ] Links work correctly
- [ ] No console errors
- [ ] Keyboard navigation works

### Performance Testing
- Run Lighthouse audit: DevTools → Lighthouse
- Check Core Web Vitals: Web Vitals Chrome extension
- Test 4G throttling: DevTools → Network

---

## 🚀 Deployment

### Quick Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Self-Hosted Deployment
1. Build: `npm run build`
2. Upload `dist/` to server
3. Run: `npm start`
4. Configure reverse proxy (Nginx/Apache)
5. Setup SSL certificate

### Docker Deployment
```bash
docker build -t technocrat-horizons .
docker run -p 3000:3000 technocrat-horizons
```

### Environment Variables to Set
```
NODE_ENV=production
DATABASE_URL=your_database_url
SESSION_SECRET=secure_random_string
```

---

## 📝 SEO Checklist

- ✅ Meta tags on all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap.xml
- ✅ robots.txt
- ✅ Schema.org JSON-LD
- ✅ Alt text on images
- ✅ Semantic HTML
- ✅ Mobile responsive
- ✅ Fast loading time

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly
4. Commit: `git commit -am 'Add your feature'`
5. Push: `git push origin feature/your-feature`
6. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 📞 Support

For issues, questions, or suggestions:
1. Check the PRE_LAUNCH_GUIDE.md
2. Review DEPLOYMENT_CHECKLIST.md
3. Check existing issues on GitHub


---

## 🎯 Roadmap

### Version 1.1 (Future)
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Advanced search with filters
- [ ] User accounts and profiles
- [ ] Email notifications
- [ ] Admin dashboard

### Version 2.0 (Future)
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] AI-powered features
- [ ] Real-time chat support
- [ ] Video integration

---

## 👨‍💻 Author

**Alpha Grid Team**
- Website: https://alpha-grid.com
- Email: info@alpha-grid.com

---

## 🙏 Acknowledgments

- React team for an amazing library
- TailwindCSS for utility-first CSS
- Framer Motion for smooth animations
- Radix UI for accessible components
- Vite for blazing-fast builds

---

**Last Updated:** January 28, 2026
**Version:** 1.0.0
**Status:** Production Ready ✅
