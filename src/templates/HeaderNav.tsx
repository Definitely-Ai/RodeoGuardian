import Link from 'next/link';

import { siteContent } from '../content/site';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const ctaClasses = {
  primary:
    'rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300',
  secondary:
    'rounded-md border border-primary-600 px-4 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300',
  ghost:
    'rounded-md px-4 py-2 text-sm font-semibold text-primary-700 transition hover:text-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300',
};

const resolveHref = (href: string) => {
  if (href.startsWith('#')) {
    return `/${href}`;
  }

  return href;
};

const HeaderNav = () => (
  <NavbarTwoColumns logo={<Logo xl />}>
    {siteContent.navigation.main.map((item) => (
      <li key={item.href}>
        <Link
          className="text-gray-800 transition hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
          href={resolveHref(item.href)}
        >
          {item.label}
        </Link>
      </li>
    ))}
    {siteContent.navigation.partners.map((item) => (
      <li key={item.href}>
        <Link
          className="text-gray-800 transition hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          {item.label}
        </Link>
      </li>
    ))}
    {siteContent.navigation.ctas.map((item) => (
      <li key={item.label} className="mt-3 md:mt-0">
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
