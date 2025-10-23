import { motion } from 'framer-motion';

import { siteContent } from '../../content/site';
import { FadeIn } from '../animations/FadeIn';

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-accent-500"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 12l3 3 5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EvidenceLockerSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="inline-block rounded-full border border-accent-500 bg-accent-600/20 px-4 py-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">
                  Always On
                </span>
              </div>

              <h2 className="text-4xl font-bold text-white md:text-5xl">
                {siteContent.evidenceLocker.title}
              </h2>

              <p className="text-2xl font-semibold text-primary-300">
                {siteContent.evidenceLocker.subtitle}
              </p>

              <p className="text-xl leading-relaxed text-gray-300">
                {siteContent.evidenceLocker.description}
              </p>

              <ul className="space-y-4 pt-4">
                {siteContent.evidenceLocker.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-lg text-gray-200">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right: Dashboard Mockup */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/30 to-accent-500/30 blur-2xl" />

              {/* Dashboard Frame */}
              <div className="relative rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-2xl">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between border-b border-gray-700 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-3 animate-glow-pulse rounded-full bg-accent-500" />
                    <span className="text-sm font-semibold text-gray-300">
                      LIVE RECORDING
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">24/7 Active</span>
                </div>

                {/* Video Thumbnail Grid */}
                <div className="mb-4 grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="relative aspect-video overflow-hidden rounded-lg border border-gray-700 bg-gray-900"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-2">
                        <div className="size-2 animate-glow-pulse rounded-full bg-accent-500" />
                        <span className="text-xs font-medium text-white">
                          Cam {i}
                        </span>
                      </div>
                      {/* Simulated timestamp */}
                      <div className="absolute right-2 top-2">
                        <span className="rounded bg-black/50 px-2 py-1 text-xs text-gray-400">
                          {new Date().toLocaleTimeString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="rounded-lg bg-gray-900 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">
                      TIMELINE
                    </span>
                    <span className="text-xs text-primary-400">
                      Export Ready
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-600 to-accent-600"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { EvidenceLockerSection };
