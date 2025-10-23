import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
  glowOnHover?: boolean;
}

const InteractiveCard = ({
  children,
  className = '',
  hoverScale = true,
  glowOnHover = false,
}: InteractiveCardProps) => {
  const baseClasses =
    'rounded-xl bg-white p-6 shadow-md transition-all duration-300';
  const hoverClasses = hoverScale ? 'hover:-translate-y-2 hover:shadow-xl' : '';
  const glowClasses = glowOnHover ? 'hover:shadow-glow' : '';

  const classes = `${baseClasses} ${hoverClasses} ${glowClasses} ${className}`;

  // Respect prefers-reduced-motion
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
      className={classes}
    >
      {children}
    </motion.div>
  );
};

export { InteractiveCard };
