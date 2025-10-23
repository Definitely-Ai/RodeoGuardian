import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';
  return (
    <span
      className={`inline-flex items-center gap-2 text-current ${fontStyle}`}
    >
      <span className="tracking-tight text-current">{AppConfig.site_name}</span>
    </span>
  );
};

export { Logo };
