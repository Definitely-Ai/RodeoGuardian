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

## License

This project inherits the original permissive license. Review `LICENSE` for details before distributing.
