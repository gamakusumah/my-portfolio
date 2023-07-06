export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const slide = {
  hidden: { left: 0, top: 0, right: 0, bottom: 0 },
  visible: {
    right: 0,
    top: 0,
    bottom: 0,
    left: "100%",
    transition: {
      duration: 1.2,
    },
  },
};

export const scale = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};
