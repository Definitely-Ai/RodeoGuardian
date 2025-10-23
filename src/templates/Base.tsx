import Link from 'next/link';

import { siteContent } from '../content/site';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';

const splitCopy = (text: string) => {
  const separator = ' — ';
  if (!text.includes(separator)) {
    return { headline: text, body: '' };
  }

  const [headline, body] = text.split(separator);
  return { headline, body };
};

const finalCtaClasses = {
  primary:
    'inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary-800 transition hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100',
  secondary:
    'inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-lg font-semibold text-white transition hover:border-primary-100 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100',
};

const Base = () => (
  <div className="bg-white text-gray-900 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />

    <div className="bg-white">
      <Section id="benefits" title={siteContent.benefits.title}>
        <div className="grid gap-8 md:grid-cols-2">
          {siteContent.benefits.items.map((item) => {
            const { headline, body } = splitCopy(item);
            return (
              <div
                key={item}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {headline}
                </h3>
                {body && <p className="mt-3 text-base text-gray-600">{body}</p>}
              </div>
            );
          })}
        </div>
      </Section>
    </div>

    <div className="bg-gray-100">
      <Section
        id="how"
        title={siteContent.howItWorks.title}
        description="Every deployment combines proven animal science, rugged hardware, and explainable AI."
      >
        <ol className="mx-auto max-w-3xl space-y-6 text-left text-lg text-gray-700">
          {siteContent.howItWorks.steps.map((step, index) => (
            <li key={step} className="rounded-lg bg-white/70 p-4 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xl font-semibold text-primary-700">
                  {index + 1}
                </span>
                <p className="leading-relaxed">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </div>

    <div className="bg-white">
      <Section title={siteContent.useCases.title}>
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.useCases.items.map((useCase) => (
            <div
              key={useCase.label}
              className="rounded-lg border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {useCase.label}
              </h3>
              <p className="mt-3 text-base text-gray-600">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>

    <div className="bg-gray-50">
      <Section id="roi" title={siteContent.roi.title}>
        <ul className="mx-auto max-w-3xl space-y-4 text-left text-lg text-gray-700">
          {siteContent.roi.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span
                className="mt-2 h-1.5 w-6 shrink-0 rounded-full bg-primary-500"
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>

    <div className="bg-white">
      <Section id="offer" title={siteContent.offer.title}>
        <ul className="mx-auto max-w-3xl space-y-4 text-left text-lg text-gray-700">
          {siteContent.offer.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <span
                className="mt-2 h-1.5 w-6 shrink-0 rounded-full bg-primary-500"
                aria-hidden
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>

    <div className="bg-gray-100">
      <Section title={siteContent.partnership.title}>
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-700">
          {siteContent.partnership.description}
        </p>
      </Section>
    </div>

    <div className="bg-primary-800">
      <Section id="contact" yPadding="py-20">
        <div className="text-center text-white">
          <h2 className="text-3xl font-semibold md:text-4xl">
            {siteContent.finalCta.title}
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {siteContent.finalCta.buttons.map((button) => (
              <Link
                key={button.label}
                className={
                  finalCtaClasses[button.style as keyof typeof finalCtaClasses]
                }
                href={button.href}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>

    <Footer />
  </div>
);

export { Base };
