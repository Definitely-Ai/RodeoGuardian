import { motion } from 'framer-motion';

import { siteContent } from '../../content/site';
import { FadeIn } from '../animations/FadeIn';

const PartnersSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="section-container">
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {siteContent.partners.title}
          </h2>
        </FadeIn>

        {/* Logo Carousel */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {siteContent.partners.logos.map((logo, index) => (
            <FadeIn key={logo.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                {/* Logo Placeholder - in production, replace with actual logo images */}
                <div className="flex h-16 items-center justify-center rounded-lg px-8 transition-all">
                  <span className="text-2xl font-bold text-gray-400 transition-colors group-hover:text-primary-700">
                    {logo.name}
                  </span>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 -z-10 rounded-lg bg-primary-100 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PartnersSection };
