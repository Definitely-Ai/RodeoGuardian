import { siteContent } from '../../content/site';
import { AnimatedCounter } from '../animations/AnimatedCounter';
import { FadeIn } from '../animations/FadeIn';

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="section-container">
        <FadeIn className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {siteContent.stats.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {siteContent.stats.items.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="rounded-xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6">
                <div className="text-gradient-primary mb-2 text-5xl font-bold md:text-6xl">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="text-base font-medium text-gray-700 md:text-lg">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { StatsSection };
