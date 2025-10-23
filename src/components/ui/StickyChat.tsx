import { motion } from 'framer-motion';
import { useState } from 'react';

const ChatIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const StickyChat = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const textVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: 'auto',
      opacity: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const handleClick = () => {
    // Open contact page or trigger chat
    window.location.href = '/contact';
  };

  if (prefersReducedMotion) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 rounded-full bg-primary-700 px-6 py-4 text-white shadow-glow transition-colors hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          <ChatIcon />
          <span className="font-semibold">Chat with an Expert</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="flex items-center gap-2 rounded-full bg-primary-700 px-6 py-4 text-white shadow-glow transition-colors hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      >
        <motion.div
          animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <ChatIcon />
        </motion.div>
        <motion.span
          variants={textVariants}
          initial="visible"
          className="overflow-hidden whitespace-nowrap font-semibold"
        >
          Chat with an Expert
        </motion.span>
      </motion.button>
    </div>
  );
};

export { StickyChat };
