import { motion } from 'framer-motion';
import Link from 'next/link';

import { siteContent } from '../../content/site';
import { AppConfig } from '../../utils/AppConfig';
import { InteractiveButton } from '../ui/InteractiveButton';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary-600/20 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Light Orbs (AI in Action Visual) */}
      <motion.div
        className="absolute left-1/4 top-1/4 size-64 rounded-full bg-primary-400/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 size-96 rounded-full bg-accent-500/10 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <motion.p
            className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {AppConfig.badgeLine}
          </motion.p>

          <motion.h1
            className="mb-6 text-balance text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1] as const,
            }}
          >
            {siteContent.hero.title}
          </motion.h1>

          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-primary-100 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1] as const,
            }}
          >
            {siteContent.hero.subtext}
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1] as const,
            }}
          >
            <InteractiveButton
              href={siteContent.hero.primaryCta.href}
              variant="accent"
              size="xl"
            >
              {siteContent.hero.primaryCta.label}
            </InteractiveButton>

            <Link
              href={siteContent.hero.secondaryCta.href}
              className="group inline-flex items-center gap-2 text-lg font-semibold text-white transition-all hover:text-primary-100"
            >
              {siteContent.hero.secondaryCta.label}
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M4 10h12m-6-6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-primary-100"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M12 5v14m-7-7l7 7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { HeroSection };
