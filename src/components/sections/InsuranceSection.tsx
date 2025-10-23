import { siteContent } from '../../content/site';
import { AnimatedCounter } from '../animations/AnimatedCounter';
import { FadeIn } from '../animations/FadeIn';
import { InteractiveCard } from '../ui/InteractiveCard';

const InsuranceSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5" />

      {/* Glow Effect */}
      <div className="absolute left-1/4 top-0 size-96 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="section-container relative">
        <FadeIn className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {siteContent.insurancePartnerships.title}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-primary-100">
            {siteContent.insurancePartnerships.description}
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {siteContent.insurancePartnerships.features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.15} direction="up">
              <div className="group relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <InteractiveCard className="relative border border-primary-700 bg-primary-800/50 backdrop-blur-sm">
                  <div className="mb-4 text-5xl font-bold text-accent-400">
                    <AnimatedCounter
                      end={feature.stat}
                      suffix={feature.title.includes('24/7') ? '/7' : '%'}
                      duration={2}
                    />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-primary-100">
                    {feature.description}
                  </p>
                </InteractiveCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { InsuranceSection };
