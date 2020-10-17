import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const SelectColor = () => {
  return (
    <motion.ul
      variants={variants}
      className="flex flex-col items-center justify-center mt-6"
    >
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mb-2"
      >
        <button className="w-6 h-6 bg-orange-500 rounded-full"></button>
      </motion.li>
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mb-2"
      >
        <button className="w-6 h-6 bg-pink-500 rounded-full"></button>
      </motion.li>
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mb-2"
      >
        <button className="w-6 h-6 bg-red-500 rounded-full"></button>
      </motion.li>
    </motion.ul>
  );
};

export default SelectColor;
