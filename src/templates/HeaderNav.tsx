import Link from 'next/link';

import { siteContent } from '../content/site';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const ctaClasses = {
  primary:
    'inline-block whitespace-nowrap rounded-md bg-primary-700 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 lg:px-5 lg:py-2.5 lg:text-sm',
  secondary:
    'inline-block whitespace-nowrap rounded-md border-2 border-primary-700 px-3 py-2 text-xs font-semibold text-primary-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 lg:px-5 lg:py-2.5 lg:text-sm',
  ghost:
    'inline-block whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold text-primary-700 transition hover:text-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 lg:px-4 lg:py-2 lg:text-sm',
};

const resolveHref = (href: string) => {
  if (href.startsWith('#')) {
    return `/${href}`;
  }

  return href;
};

const HeaderNav = () => (
  <NavbarTwoColumns logo={<Logo />}>
    {siteContent.navigation.main.map((item) => (
      <li key={item.href} className="hidden lg:block">
        <Link
          className="whitespace-nowrap text-gray-800 transition hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
          href={resolveHref(item.href)}
        >
          {item.label}
        </Link>
      </li>
    ))}
    {siteContent.navigation.ctas
      .filter((item) => item.style !== 'ghost')
      .map((item) => (
        <li key={item.label} className="shrink-0">
          <Link
            className={ctaClasses[item.style as keyof typeof ctaClasses]}
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}
  </NavbarTwoColumns>
);

export { HeaderNav };
