import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between gap-4">
    <div className="text-gray-900">
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="navbar flex flex-wrap items-center justify-end gap-4 text-base font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
