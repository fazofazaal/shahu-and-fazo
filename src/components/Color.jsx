import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function Color({ value }) {
  return (
    <motion.svg
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      height="100"
      width="100"
      className={`transform scale-75 lg:scale-90 cursor-pointer`}
      variants={item}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        fill={value}
        stroke={`${value === '#FBFBFA' ? '#333745' : '#FFFFFF'}`}
      />
    </motion.svg>
  );
}
