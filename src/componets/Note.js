import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Note = ({ note }) => {
  const { content, color, date } = note;

  return (
    <motion.li
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`flex flex-col p-4 h-56 text-primary font-medium bg-${color}-400 rounded-xl shadow-md`}
    >
      <div className="mb-auto">{content}</div>
      <div className="flex items-center justify-between">
        <p className="font-normal">Oct 12, 2020</p>
        <button className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      </div>
    </motion.li>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
