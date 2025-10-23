export const siteContent = {
  meta: {
    siteName: 'RodeoGuardian',
    company: 'Livestock Technologies',
    partner: 'AI Dream Builders LLC',
    badgeLine:
      'By Livestock Technologies in collaboration with AI Dream Builders',
    title:
      'RodeoGuardian — Real-Time Livestock Welfare & Proof-of-Care for Rodeos',
    description:
      'AI-powered monitoring that detects off-feed behavior, stress, and heat risk. AR overlays show live IDs and health status. Insurer-ready proof-of-care.',
    ogImage: '/og-image.svg',
    twitterCard: 'summary_large_image',
  },
  navigation: {
    main: [
      { label: 'Benefits', href: '#benefits' },
      { label: 'How It Works', href: '#how' },
      { label: 'ROI', href: '#roi' },
      { label: 'Offer', href: '#offer' },
      { label: 'Contact', href: '#contact' },
    ],
    partners: [
      { label: 'livestock.tech', href: 'https://livestock.tech' },
      { label: 'aidreambuilders.com', href: 'https://aidreambuilders.com' },
    ],
    ctas: [
      { label: 'Book a Consultation', href: '/contact', style: 'primary' },
      { label: 'Request Pilot', href: '/contact', style: 'secondary' },
      { label: 'Download Brief', href: '/brief.pdf', style: 'ghost' },
    ],
  },
  hero: {
    title: 'Protect Every Champion. Prove Every Care.',
    subtext:
      'Real-time livestock welfare, early health alerts, and insurer-ready proof-of-care—purpose-built for rodeos and high-value stock.',
    primaryCta: { label: 'Book a Consultation', href: '/contact' },
    secondaryCta: { label: 'See How It Works', href: '#how' },
  },
  benefits: {
    title: 'Why RodeoGuardian',
    items: [
      'Early Health Alerts — Instantly flags off-feed behavior, lameness, stress, and heat risk.',
      'AR Welfare View — Point your phone and see IDs and health status over each animal.',
      'Proof-of-Care — Timestamped records for veterinarians, committees, and insurers.',
      'Biosecurity & Tracing — Contact networks and stall/pen histories for fast containment.',
      'Event Continuity — Catch issues early to avoid disruptions and protect sponsors.',
      '10-Year Hardware Life — Ruggedized optical + thermal coverage with minimal maintenance.',
    ],
  },
  howItWorks: {
    title: 'How RodeoGuardian Works',
    steps: [
      'Install once — Overhead and side cameras calibrated to the pen; AprilTag anchors for AR.',
      'Track automatically — AI detects animals and logs feeding, movement, and thermal cues.',
      'Alert instantly — Off-feed, abnormal motion, or heat stress triggers real-time alerts.',
      'See in AR — Open the phone app to view live IDs and tap for each animal’s timeline.',
      'Report with one click — Export insurer-ready proof-of-care and welfare logs.',
    ],
  },
  useCases: {
    title: 'Where It’s Used',
    items: [
      {
        label: 'Major Rodeos (PRCA, PBR, WPRA)',
        description: 'Automated observation and transparent welfare reporting.',
      },
      {
        label: 'Stock Contractors & Breeding',
        description:
          'Year-round oversight for elite bulls and performance horses.',
      },
      {
        label: 'Insurers & Vets',
        description: 'Objective data for faster claims and clinical decisions.',
      },
      {
        label: 'Universities & Research',
        description:
          'High-resolution behavior datasets for trials and DNA studies.',
      },
    ],
  },
  roi: {
    title: 'ROI & Impact',
    points: [
      'Prevent a single major loss or avoid one event disruption and the system can pay for itself.',
      'Faster insurer decisions with structured proof-of-care.',
      'Fewer overnight checks and manual logs with automated monitoring.',
    ],
  },
  offer: {
    title: 'Offer & Pricing',
    details: [
      'Installation: $50,000 per facility (design, calibration, setup, training).',
      'Hardware Life: 10 years (IP-rated cameras; low maintenance).',
      'Optional SaaS: Live dashboards, alerting, and cloud archive.',
      'Pilot Programs: Short-term event kits available.',
    ],
  },
  partnership: {
    title: 'Partnership',
    description:
      'Built by Livestock Technologies in collaboration with AI Dream Builders LLC—merging animal science and AI to make welfare measurable, visible, and profitable.',
  },
  finalCta: {
    title: 'Bring RodeoGuardian to your next event.',
    buttons: [
      { label: 'Request Pilot', href: '/contact', style: 'primary' },
      { label: 'Download Rodeo Brief', href: '/brief.pdf', style: 'secondary' },
    ],
  },
  contact: {
    title: 'Book a Consultation or Request a Pilot',
    description:
      'Share a few details and our team will schedule a walkthrough. Prefer email? Reach out at hello@livestock.tech.',
    submitLabel: 'Send Request',
    placeholderEndpoint: 'https://formplaceholder.example.com/submit',
    mailto: 'mailto:hello@livestock.tech',
  },
  footer: {
    links: [
      { label: 'livestock.tech', href: 'https://livestock.tech' },
      { label: 'aidreambuilders.com', href: 'https://aidreambuilders.com' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
    copyright:
      '© 2025 RodeoGuardian • Livestock Technologies × AI Dream Builders',
  },
} as const;

export type SiteContent = typeof siteContent;
