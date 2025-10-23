import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';
  const badgeSize = props.xl ? 'h-12 w-12' : 'h-10 w-10';

  return (
    <span className={`inline-flex items-center text-current ${fontStyle}`}>
      <span
        className={`mr-3 flex ${badgeSize} items-center justify-center rounded-lg bg-primary-600 shadow-sm ring-1 ring-inset ring-primary-700/30`}
      >
        <svg
          aria-label="RodeoGuardian shield logo"
          className="size-7 text-white"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 4c-.9 0-1.8.23-2.6.67L10 15.4v17.8c0 13.7 9.9 25.9 22 29.9 12.1-4 22-16.2 22-29.9V15.4L34.6 4.67C33.8 4.23 32.9 4 32 4z"
            fill="currentColor"
          />
          <path d="M38 18h-6v-6h-4v6h-6v4h6v6h4v-6h6z" fill="#fff" />
          <path
            d="M18.5 34c-2.8 0-5 2.4-5 5.6v7.6c0 2 1.5 3.8 3.6 3.8h4.8l2.2 8h5.6l1.7-6.8h11.8l1.7 6.8h5.6l2.2-8h4.8c2.1 0 3.6-1.8 3.6-3.8v-6.4c0-6.3-5.1-11.4-11.4-11.4h-1.1l-7.2-5.8H26.6l-4.6 6.8c-3 .4-5.3 3-5.5 6.4z"
            fill="#fff"
          />
        </svg>
      </span>
      <span className="tracking-tight text-current">{AppConfig.site_name}</span>
    </span>
  );
};

export { Logo };
