import React from 'react';
import { motion, useCycle } from 'framer-motion';

// Components
import SelectColor from './SelectColor';

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <aside className="pt-8 px-5 min-h-screen text-center border-r-2 border-gray-100">
      <span className="text-primary font-semibold">NM</span>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="flex flex-col mt-10"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleOpen}
          className="flex items-center justify-center w-10 h-10 text-center bg-primary rounded-full focus:outline-none"
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
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </motion.button>
        <SelectColor />
      </motion.div>
    </aside>
  );
};

export default Sidebar;
