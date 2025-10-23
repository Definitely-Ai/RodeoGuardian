import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface InteractiveButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const InteractiveButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  className = '',
  icon,
  disabled = false,
  type = 'button',
}: InteractiveButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const variantClasses = {
    primary:
      'bg-primary-700 text-white hover:bg-primary-600 hover:shadow-glow focus-visible:outline-primary-500',
    secondary:
      'border-2 border-primary-700 text-primary-700 hover:bg-primary-50 focus-visible:outline-primary-500',
    accent:
      'bg-accent-700 text-white hover:bg-accent-600 hover:shadow-accent-glow focus-visible:outline-accent-500',
    outline:
      'border-2 border-white text-white hover:bg-white/10 focus-visible:outline-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -2 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
  };

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

  if (prefersReducedMotion) {
    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <motion.span {...motionProps} className={classes}>
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      className={classes}
    >
      {content}
    </motion.button>
  );
};

export { InteractiveButton };
