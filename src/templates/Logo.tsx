import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 32 : 20;
  const width = props.xl ? 144 : 90;
  return (
    <span className="inline-flex items-center">
      <Image
        src="/logo.png"
        alt="RodeoGuardian"
        width={width}
        height={size}
        className="h-auto object-contain"
        style={{ imageRendering: 'crisp-edges' }}
        priority
        quality={100}
      />
    </span>
  );
};

export { Logo };
