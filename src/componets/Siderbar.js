import React, { useContext, useEffect, useState } from 'react';
import { motion, useCycle } from 'framer-motion';

// Context
import { NotesContext } from '../context/NotesProvider';
// Components
import SelectColor from './SelectColor';

const Sidebar = () => {
  // local state
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [note, setNote] = useState({
    content: '',
    color: ''
  });

  // access to the context
  const NotesState = useContext(NotesContext);
  const {
    fnSetMessage,
    fnCreateNote,
    fnUpdateNote,
    fnClearActiveNote,
    active
  } = NotesState;

  // useEffect to set active note in the values in the state
  useEffect(() => {
    if (active !== null) {
      setNote({
        ...active
      });

      if (!isOpen) {
        toggleOpen();
      }
    }
  }, [active]);

  // clear / close the form
  const handleToggle = () => {
    if (isOpen && active) {
      toggleOpen();
      fnClearActiveNote();
      setNote({
        content: '',
        color: ''
      });
    } else {
      toggleOpen();
    }
  };

  // Get data of the textarea
  const handleChange = e => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  // Create new note
  const handleSubmit = e => {
    e.preventDefault();

    // Validation
    if (
      note.content === '' ||
      note.content === null ||
      note.color === '' ||
      note.color === null
    ) {
      // set message in the ui
      fnSetMessage('Write the content of the note and select a color', 'error');
      return;
    }

    // detect if the user is creating or updating
    if (active) {
      // update note
      fnUpdateNote(note);
    } else {
      // create note
      fnCreateNote(note);
    }

    // restart form
    toggleOpen(); // close the form
    setNote({
      content: '',
      color: ''
    });
  };

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
          onClick={handleToggle}
          className="block py-2 w-full text-center text-white font-semibold bg-primary rounded-full focus:outline-none"
        >
          {!isOpen ? 'Create Note' : 'Cancel'}
        </motion.button>
        <form onSubmit={handleSubmit} className="w-full">
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
            name="content"
            onChange={handleChange}
            value={note.content}
            className="mt-10 p-1 w-full border border-gray-400 rounded-lg focus:outline-none transition-colors duration-300 ease-in-out"
            rows={10}
          />
          <SelectColor setNote={setNote} note={note} />
        </form>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
