import React from 'react';

// Components
import Note from './Note';

const NotesContainer = () => {
  return (
    <main className="pt-10 px-16 w-full">
      <h1 className="text-primary text-5xl font-bold">Notes</h1>
      <div className="mt-12">
        <ul className="grid gap-6 grid-cols-3">
          <Note />
        </ul>
      </div>
    </main>
  );
};

export default NotesContainer;
