import React from 'react';
import { motion, useCycle } from 'framer-motion';

// Components
import SelectColor from './SelectColor';

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <aside className="col-span-1 pt-8 px-5 min-h-screen text-center border-r-2 border-gray-100">
      <span className="text-primary font-semibold">Notes Manager</span>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="flex flex-col mt-10"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleOpen}
          className="block py-2 w-full text-center text-white font-semibold bg-primary rounded-full focus:outline-none"
        >
          {!isOpen ? 'Create Note' : 'Cancel'}
        </motion.button>
        <div className="w-full">
          <motion.textarea
            variants={{
              open: {
                y: 0,
                opacity: 1,
                cursor: 'text',
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
            }}
            className="mt-10 p-1 w-full border border-gray-400 rounded-lg focus:outline-none transition-colors duration-300 ease-in-out"
            rows={10}
          />
          <SelectColor />
        </div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
