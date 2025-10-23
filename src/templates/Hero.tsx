import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { siteContent } from '../content/site';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { HeaderNav } from './HeaderNav';

const Hero = () => (
  <Background color="bg-gradient-to-b from-[#f7f3ef] via-white to-white">
    <Section yPadding="py-6">
      <HeaderNav />
    </Section>

    <Section yPadding="pt-16 pb-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
          {AppConfig.badgeLine}
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          {siteContent.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
          {siteContent.hero.subtext}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="inline-block"
            href={siteContent.hero.primaryCta.href}
          >
            <Button xl>{siteContent.hero.primaryCta.label}</Button>
          </Link>
          <Link
            className="text-lg font-semibold text-primary-700 transition hover:text-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
            href={siteContent.hero.secondaryCta.href}
          >
            {siteContent.hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
