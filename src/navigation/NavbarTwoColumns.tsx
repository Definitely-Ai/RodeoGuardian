import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex items-center justify-between gap-4">
    <div className="shrink-0 text-gray-900">
      <Link href="/">{props.logo}</Link>
    </div>

    <nav className="flex-1">
      <ul className="navbar flex items-center justify-end gap-2 text-sm font-medium text-gray-800 lg:gap-4 lg:text-base">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
