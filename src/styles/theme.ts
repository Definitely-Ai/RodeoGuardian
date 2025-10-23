/**
 * RodeoGuardian Visual Design System
 *
 * Premium, neuroscience-backed design system for high-engagement user experience.
 * Combines tech trust (deep blue) with rodeo authenticity (bronze/red).
 */

export const theme = {
  colors: {
    // Primary Trust Color: Deep Tech Blue
    // Used for: primary CTAs, navigation, trust elements
    // Psychology: Evokes reliability, professionalism, technological advancement
    primary: {
      main: '#1F4E8C',
      light: '#276DAD',
      lighter: '#3287CD',
      dark: '#163661',
    },

    // Accent: Bronze/Dark Red
    // Used sparingly for: high-value emphasis, rodeo connection
    // Psychology: Ties to rodeo, premium assets, controlled urgency
    accent: {
      main: '#A6381B',
      light: '#CD230F',
      dark: '#7D2A14',
    },

    // Metallic Steel: Secondary accent
    steel: {
      main: '#4B5563',
      light: '#6B7280',
    },

    // Neutral Grays
    neutral: {
      white: '#FFFFFF',
      lightBg: '#FAFAFA',
      border: '#E4E4E7',
      text: '#27272A',
      textLight: '#71717A',
    },
  },

  // Animation Durations (Dopamine-optimized)
  animation: {
    // Quick feedback loops (micro-interactions)
    fast: '200ms',
    // Standard transitions
    normal: '300ms',
    // Section reveals
    slow: '600ms',
    // Ambient animations
    ambient: '2s',
  },

  // Easing Functions
  easing: {
    // Standard easing
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Satisfying bounce for CTAs
    bounceSmooth: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    // Smooth deceleration
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  },

  // Typography Scale
  typography: {
    // Hero headline
    hero: {
      size: 'clamp(2.5rem, 5vw, 5rem)',
      weight: '700',
      lineHeight: '1.1',
    },
    // Section headers
    h2: {
      size: 'clamp(2rem, 4vw, 3rem)',
      weight: '700',
      lineHeight: '1.2',
    },
    // Subsection headers
    h3: {
      size: 'clamp(1.5rem, 3vw, 2rem)',
      weight: '600',
      lineHeight: '1.3',
    },
    // Body text
    body: {
      size: '1.125rem',
      weight: '400',
      lineHeight: '1.7',
    },
    // Small text
    small: {
      size: '0.875rem',
      weight: '400',
      lineHeight: '1.5',
    },
  },

  // Spacing Scale (8px base)
  spacing: {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
    '2xl': '4rem', // 64px
    '3xl': '6rem', // 96px
    '4xl': '8rem', // 128px
  },

  // Section Patterns (Zebra striping for visual rhythm)
  sections: {
    light: {
      bg: '#FFFFFF',
      pattern: 'circuit-pattern',
    },
    lightAlt: {
      bg: '#FAFAFA',
      pattern: null,
    },
    dark: {
      bg: '#0E1F36',
      textColor: '#FFFFFF',
    },
    accent: {
      bg: 'gradient-tech',
      textColor: '#FFFFFF',
    },
  },

  // Micro-interaction States
  interactions: {
    // Button hover
    buttonHover: {
      transform: 'translateY(-2px)',
      shadow: 'glow',
    },
    // Button active (click)
    buttonActive: {
      transform: 'scale(0.98)',
    },
    // Card hover
    cardHover: {
      transform: 'translateY(-4px)',
      shadow: 'lg',
    },
  },
} as const;

// Framer Motion Variants for consistent animations
export const motionVariants = {
  // Fade in from bottom
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  },

  // Fade in from left
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  },

  // Fade in from right
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  },

  // Scale in
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  },

  // Stagger children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Button hover/tap
  buttonInteraction: {
    hover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  },

  // Glow pulse (ambient)
  glowPulse: {
    animate: {
      opacity: [1, 0.6, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
} as const;

// Accessibility: Respect prefers-reduced-motion
export const getMotionProps = (variant: keyof typeof motionVariants) => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return {
      initial: 'visible',
      animate: 'visible',
      variants: {},
    };
  }

  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-50px' },
    variants: motionVariants[variant],
  };
};

export type Theme = typeof theme;
