import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

// context
import { NotesContext } from '../context/NotesProvider';

const Note = ({ note }) => {
  // Object destructing
  const { content, color, date, id } = note;

  // access to the context
  const NotesState = useContext(NotesContext);
  const { fnRemoveNote } = NotesState;

  const handleRemove = id => {
    fnRemoveNote(id);
  };

  return (
    <motion.li
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`flex flex-col p-4 h-56 text-primary font-medium bg-${color}-400 rounded-xl shadow-md h-auto`}
    >
      <div className="prose mb-auto">
        <ReactMarkdown source={content} />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-normal">{moment(Number(date)).format('ll')}</p>
        <div className="flex items-center">
          <button className="flex items-center justify-center mr-2 w-8 h-8 bg-primary rounded-full">
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
          <button
            onClick={() => handleRemove(id)}
            className="flex items-center justify-center w-8 h-8 bg-primary rounded-full"
          >
            <svg
              className="w-4 h-4 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.li>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
