import { siteContent } from '../../content/site';
import { FadeIn } from '../animations/FadeIn';
import { InteractiveCard } from '../ui/InteractiveCard';

const SecuritySection = () => {
  const icons = {
    shield: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    lock: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect
          x="3"
          y="11"
          width="18"
          height="11"
          rx="2"
          ry="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11V7a5 5 0 0110 0v4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    server: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="8"
          rx="2"
          ry="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="2"
          y="14"
          width="20"
          height="8"
          rx="2"
          ry="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="6"
          y1="6"
          x2="6.01"
          y2="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="6"
          y1="18"
          x2="6.01"
          y2="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    clock: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="12 6 12 12 16 14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      <div className="section-container">
        <FadeIn className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            {siteContent.security.title}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            {siteContent.security.description}
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.security.features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1} direction="up">
              <InteractiveCard className="h-full text-center" glowOnHover>
                <div className="mb-4 flex justify-center text-primary-600">
                  {icons[feature.icon as keyof typeof icons]}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </InteractiveCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SecuritySection };
