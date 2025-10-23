import { motion } from 'framer-motion';

import { FadeIn } from '../components/animations';
import {
  EvidenceLockerSection,
  HeroSection,
  InsuranceSection,
  PartnersSection,
  SecuritySection,
  StatsSection,
  TestimonialsSection,
} from '../components/sections';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import { InteractiveCard } from '../components/ui/InteractiveCard';
import { StickyChat } from '../components/ui/StickyChat';
import { siteContent } from '../content/site';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { HeaderNav } from './HeaderNav';

const splitCopy = (text: string) => {
  const separator = ' — ';
  if (!text.includes(separator)) {
    return { headline: text, body: '' };
  }

  const [headline, body] = text.split(separator);
  return { headline, body };
};

const Base = () => (
  <div className="bg-white text-gray-900 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* Navigation */}
    <div className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <Section yPadding="py-4">
        <HeaderNav />
      </Section>
    </div>

    {/* Hero Section - Full Screen */}
    <HeroSection />

    {/* Partners Logo Bar */}
    <PartnersSection />

    {/* Stats Section - White Background */}
    <StatsSection />

    {/* Benefits Section - Gray Background with Circuit Pattern */}
    <div className="relative bg-gray-50 bg-circuit-pattern">
      <Section id="benefits" title={siteContent.benefits.title}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.benefits.items.map((item, index) => {
            const { headline, body } = splitCopy(item);
            return (
              <FadeIn key={item} delay={index * 0.1} direction="up">
                <InteractiveCard className="h-full">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {headline}
                  </h3>
                  {body && (
                    <p className="text-base leading-relaxed text-gray-600">
                      {body}
                    </p>
                  )}
                </InteractiveCard>
              </FadeIn>
            );
          })}
        </div>
      </Section>
    </div>

    {/* How It Works Section - White Background */}
    <div className="bg-white">
      <Section
        id="how"
        title={siteContent.howItWorks.title}
        description="Every deployment combines proven animal science, rugged hardware, and explainable AI."
      >
        <ol className="mx-auto max-w-4xl space-y-4">
          {siteContent.howItWorks.steps.map((step, index) => (
            <FadeIn key={step} delay={index * 0.1} direction="left">
              <motion.li
                className="group rounded-xl border-l-4 border-primary-500 bg-gradient-to-r from-primary-50 to-white p-6 shadow-sm transition-all hover:shadow-lg"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-700 text-xl font-bold text-white transition-transform group-hover:scale-110">
                    {index + 1}
                  </span>
                  <p className="pt-2 text-lg leading-relaxed text-gray-700">
                    {step}
                  </p>
                </div>
              </motion.li>
            </FadeIn>
          ))}
        </ol>
      </Section>
    </div>

    {/* Insurance Partnerships Section - Dark Background with Glow */}
    <InsuranceSection />

    {/* Evidence Locker Section - Dark with Grid */}
    <EvidenceLockerSection />

    {/* Use Cases Section - Light Background */}
    <div className="bg-white">
      <Section title={siteContent.useCases.title}>
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.useCases.items.map((useCase, index) => (
            <FadeIn key={useCase.label} delay={index * 0.1}>
              <InteractiveCard className="border-l-4 border-primary-500">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {useCase.label}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {useCase.description}
                </p>
              </InteractiveCard>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>

    {/* Testimonials Section - Light Background */}
    <TestimonialsSection />

    {/* ROI Section - White Background */}
    <div className="bg-white">
      <Section id="roi" title={siteContent.roi.title}>
        <ul className="mx-auto max-w-3xl space-y-4">
          {siteContent.roi.points.map((point, index) => (
            <FadeIn key={point} delay={index * 0.1}>
              <motion.li
                className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-primary-50"
                whileHover={{ x: 4 }}
              >
                <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-600 font-bold text-white">
                  ✓
                </span>
                <span className="text-lg leading-relaxed text-gray-700">
                  {point}
                </span>
              </motion.li>
            </FadeIn>
          ))}
        </ul>
      </Section>
    </div>

    {/* Security Section - Gray Background */}
    <SecuritySection />

    {/* Offer & Pricing Section - White Background */}
    <div className="bg-white">
      <Section id="offer" title={siteContent.offer.title}>
        <ul className="mx-auto max-w-3xl space-y-4">
          {siteContent.offer.details.map((detail, index) => (
            <FadeIn key={detail} delay={index * 0.1}>
              <motion.li
                className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-gray-50"
                whileHover={{ x: 4 }}
              >
                <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-700 font-bold text-white">
                  $
                </span>
                <span className="text-lg leading-relaxed text-gray-700">
                  {detail}
                </span>
              </motion.li>
            </FadeIn>
          ))}
        </ul>
      </Section>
    </div>

    {/* Partnership Section - Light Gray Background */}
    <div className="bg-gray-100">
      <Section title={siteContent.partnership.title}>
        <FadeIn>
          <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-gray-700">
            {siteContent.partnership.description}
          </p>
        </FadeIn>
      </Section>
    </div>

    {/* Final CTA Section - Dark Gradient with Glow */}
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      <div className="absolute right-1/4 top-0 size-96 rounded-full bg-accent-500/20 blur-3xl" />

      <Section id="contact" yPadding="py-24">
        <FadeIn className="text-center text-white">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            {siteContent.finalCta.title}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-primary-100">
            Transform your rodeo operations with AI-powered livestock monitoring
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {siteContent.finalCta.buttons.map((button, index) => (
              <motion.div
                key={button.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              >
                <InteractiveButton
                  href={button.href}
                  variant={button.style === 'primary' ? 'accent' : 'outline'}
                  size="xl"
                >
                  {button.label}
                </InteractiveButton>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </div>

    {/* Sticky Chat Button */}
    <StickyChat />

    <Footer />
  </div>
);

export { Base };
