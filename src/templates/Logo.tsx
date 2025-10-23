import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 40 : 28;
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="RodeoGuardian"
        width={size * 4.5}
        height={size}
        className="h-auto"
        priority
      />
    </span>
  );
};

export { Logo };
