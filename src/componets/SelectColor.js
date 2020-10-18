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
    cursor: 'pointer',
    zIndex: 10,
    transition: {
      y: { stiffness: 1000, velocity: 100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    cursor: 'default',
    zIndex: -40,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const SelectColor = () => {
  return (
    <div className="flex items-center justify-between mt-6 w-full">
      <motion.ul
        variants={variants}
        className="flex flex-row items-center justify-center"
      >
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className="w-6 h-6 bg-red-500 rounded-full focus:outline-none"></button>
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-2"
        >
          <button className="w-6 h-6 bg-blue-500 rounded-full focus:outline-none"></button>
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-2 mr-2"
        >
          <button className="w-6 h-6 bg-orange-500 rounded-full focus:outline-none"></button>
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mr-2"
        >
          <button className="w-6 h-6 bg-teal-500 rounded-full focus:outline-none"></button>
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className="w-6 h-6 bg-pink-500 rounded-full focus:outline-none"></button>
        </motion.li>
      </motion.ul>
      <div>
        <motion.button
          className="flex items-center justify-center w-8 h-8 bg-primary rounded-full focus:outline-none"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default SelectColor;
