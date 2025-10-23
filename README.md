# RodeoGuardian Marketing Site

A premium, single-page marketing experience for RodeoGuardian — the livestock welfare platform from Livestock Technologies and AI Dream Builders. Built with Next.js 14, Tailwind CSS, and TypeScript for fast iteration and production-ready performance.

## Features

- Centralized copy in `src/content/site.ts` for quick updates across the entire site
- Responsive sections for benefits, workflow, use cases, ROI, pricing, partnership, and final call-to-action
- Contact page with a ready-to-wire form and mailto fallback
- SEO metadata with Open Graph/Twitter cards and configurable canonical URL
- Optional Google Analytics 4 and Vercel Analytics instrumentation
- Deployment-ready configuration for Vercel, including domain canonical support

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to preview the landing page. The contact form at `/contact` posts to a placeholder endpoint until you wire your own service.

## Editing Copy & Branding

1. Update all marketing copy, CTA URLs, and partner references in [`src/content/site.ts`](src/content/site.ts). Every section on both the home and contact pages reads from this single source.
2. Replace the placeholder vector favicon (`public/favicon.svg`) and Open Graph card (`public/og-image.svg`) with production assets when ready.
3. Swap out the text placeholder at [`public/brief.pdf`](public/brief.pdf) with your official PDF before launch.

## SEO & Analytics

- Default `<title>`, meta description, and social sharing tags come from `siteContent.meta`.
- Set `NEXT_PUBLIC_SITE_URL` in your environment to generate canonical URLs and absolute Open Graph paths.
- Optional analytics:
  - Set `NEXT_PUBLIC_GA_ID` to inject Google Analytics 4 (gtag.js) and track client-side route changes.
  - Vercel Analytics is enabled by default; disable it by removing the `<Analytics />` component in `src/pages/_app.tsx` if not needed.

## Deploying to Vercel

1. Create a Vercel project and connect this repository.
2. Configure the following environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL` → `https://your-production-domain.com`
   - `NEXT_PUBLIC_GA_ID` → `G-XXXXXXXXXX` (optional)
3. Assign your custom domain (e.g., `rodeo.guardian` or `rodeo.livestock.tech`) and set it as the production domain so canonical URLs resolve correctly.
4. Trigger a production deployment via Vercel. Preview deployments will automatically inherit the same configuration; adjust the canonical URL if you prefer preview-specific values.

## Customizing the Contact Form

The contact form posts to the placeholder endpoint defined in `siteContent.contact.placeholderEndpoint`. Replace this value with a production form handler (e.g., Formspark, HubSpot, or a serverless function) and optionally connect your CRM. The mailto fallback uses `hello@livestock.tech`; update it in the same file if you prefer a different address.

## Visual Design System

RodeoGuardian features a premium, neuroscience-backed visual design system optimized for trust, engagement, and conversion. The design uses motion, color psychology, and micro-interactions to create dopamine-triggering moments that encourage user action.

### Color Palette

**Primary Trust Blue** — Evokes reliability, professionalism, and technological advancement:
- `primary-700`: `#1F4E8C` (Deep tech blue - main brand color)
- `primary-600`: `#276DAD` (Hover states)
- `primary-500`: `#3287CD` (Accents)

**Accent Bronze/Red** — Ties to rodeo heritage and premium assets (use sparingly):
- `accent-600`: `#A6381B` (Dark red - high-value emphasis)
- `accent-500`: `#CD230F` (Call-to-action highlights)

**Neutral Grays** — Clean, premium feel:
- White/light backgrounds for readability
- Gray-50 to Gray-900 for text hierarchy

### Animation System

All animations respect `prefers-reduced-motion` for accessibility. Key animation components:

**FadeIn** (`src/components/animations/FadeIn.tsx`)
- Scroll-triggered fade with directional entry
- Use for section reveals and content blocks
- Props: `direction`, `delay`, `duration`

**AnimatedCounter** (`src/components/animations/AnimatedCounter.tsx`)
- Number animations that trigger on scroll
- Creates "reward moment" when users see stats increase
- Used in Stats and Insurance sections

**StaggerContainer** (`src/components/animations/StaggerContainer.tsx`)
- Sequential reveals for list items
- Adds rhythm and visual hierarchy

**InteractiveButton** (`src/components/ui/InteractiveButton.tsx`)
- Hover: lifts 2px, slight scale (dopamine trigger)
- Active: subtle press-down effect
- Variants: `primary`, `secondary`, `accent`, `outline`

**InteractiveCard** (`src/components/ui/InteractiveCard.tsx`)
- Hover: lifts 4px with enhanced shadow
- Optional glow effect for emphasis

### Section Patterns (Zebra Striping)

Sections alternate between light and dark backgrounds to reset visual rhythm and maintain attention:

1. **Hero** — Dark gradient with floating light orbs
2. **Partners** — White background
3. **Stats** — White with gradient cards
4. **Benefits** — Light gray with circuit pattern
5. **How It Works** — White background
6. **Insurance** — Dark blue with glow effects
7. **Evidence Locker** — Dark gray with grid
8. **Use Cases** — White background
9. **Testimonials** — Light gray
10. **ROI** — White background
11. **Security** — Light gray
12. **Offer** — White background
13. **Partnership** — Light gray
14. **Final CTA** — Dark gradient

### Customizing Colors

Edit `tailwind.config.js` to change the color palette:

```js
primary: {
  700: '#1F4E8C', // Change this for your main brand color
  // ... other shades
},
accent: {
  600: '#A6381B', // Change this for your accent color
}
```

Color utilities are also documented in `src/styles/theme.ts`.

### Customizing Animation Durations

Edit animation timings in `src/styles/theme.ts`:

```typescript
animation: {
  fast: '200ms',    // Micro-interactions
  normal: '300ms',  // Standard transitions
  slow: '600ms',    // Section reveals
  ambient: '2s',    // Background animations
}
```

### Adding/Replacing Hero Background

The hero uses an animated gradient with floating light orbs. To add a video background:

1. Place video file in `public/videos/hero-bg.mp4`
2. Update `src/components/sections/HeroSection.tsx`:

```tsx
<video 
  autoPlay 
  muted 
  loop 
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30"
>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

### Customizing Sticky Chat Button

Edit `src/components/ui/StickyChat.tsx` to change:
- Button text
- Button position (currently `bottom-6 right-6`)
- Destination URL (currently `/contact`)
- Icon and animation

### Typography Scale

Defined in `tailwind.config.js` and `src/styles/theme.ts`:
- **Hero**: 5-7xl (responsive)
- **Section Headers (h2)**: 4-5xl
- **Subsection Headers (h3)**: xl-2xl
- **Body Text**: lg (1.125rem)
- **Small Text**: sm-base

### Performance Optimization

- Animations use CSS transforms (GPU-accelerated)
- Lazy loading with `whileInView` reduces initial bundle impact
- All animations respect `prefers-reduced-motion`
- Background patterns use inline SVG (no external requests)

### Accessibility Features

✅ **Color Contrast**: All text meets WCAG AA standards  
✅ **Focus Visible**: Clear focus indicators on all interactive elements  
✅ **Keyboard Navigation**: All buttons and links keyboard-accessible  
✅ **Reduced Motion**: Respects `prefers-reduced-motion` system preference  
✅ **Semantic HTML**: Proper heading hierarchy and ARIA labels  
✅ **Alt Text**: Image placeholders include descriptive alt attributes

### Content Management

All copy is centralized in `src/content/site.ts`:

- `hero` — Hero section title and CTAs
- `benefits` — Feature cards
- `howItWorks` — Step-by-step process
- `insurancePartnerships` — Insurance partner features
- `evidenceLocker` — 24/7 monitoring section
- `testimonials` — Customer quotes
- `partners` — Logo carousel
- `stats` — Animated statistics
- `security` — Security features
- `useCases` — Use case cards
- `roi` — ROI bullet points
- `offer` — Pricing details
- `finalCta` — Bottom CTA section

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import in `src/templates/Base.tsx`
3. Add content to `src/content/site.ts`
4. Follow zebra pattern (alternate light/dark backgrounds)

### Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- All animations have static fallbacks

## License

This project inherits the original permissive license. Review `LICENSE` for details before distributing.
