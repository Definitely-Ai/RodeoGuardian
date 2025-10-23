import Link from 'next/link';

import { Background } from '../background/Background';
import { siteContent } from '../content/site';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-900">
    <Section yPadding="py-12">
      <div className="text-center text-gray-200">
        <div className="flex flex-col items-center gap-4 text-white">
          <Logo />
          <p className="text-sm text-gray-300">
            {AppConfig.company} × {AppConfig.partner}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="mt-8 flex flex-wrap justify-center gap-6 text-base font-medium">
            {siteContent.footer.links.map((link) => (
              <li key={link.label}>
                <Link
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 text-sm text-gray-400">
          {siteContent.footer.copyright}
        </p>
      </div>
    </Section>
  </Background>
);

export { Footer };
