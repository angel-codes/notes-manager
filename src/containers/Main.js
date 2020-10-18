import React, { useContext } from 'react';

// Context
import { NotesContext } from '../context/NotesProvider';
// Componets
import Alert from '../componets/Alert';

const Main = props => {
  // access to the context
  const NotesState = useContext(NotesContext);
  const { message } = NotesState;

  return (
    <div className="relative grid grid-cols-6 min-h-screen">
      {message !== null ? <Alert message={message} /> : null}
      {props.children}
    </div>
  );
};

export default Main;
