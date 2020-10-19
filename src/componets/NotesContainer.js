import React, { useContext } from 'react';

// Context
import { NotesContext } from '../context/NotesProvider';
// Components
import Note from './Note';

const NotesContainer = () => {
  const NotesState = useContext(NotesContext);
  const { notes } = NotesState;

  return (
    <main className="col-span-5 pt-10 px-16 w-full">
      <h1 className="text-primary text-5xl font-bold">Notes</h1>
      <div className="mt-12">
        <ul className="grid gap-6 grid-cols-4">
          {notes.map(note => (
            <Note note={note} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default NotesContainer;
