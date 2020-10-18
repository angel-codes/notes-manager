import React, { createContext, useReducer } from 'react';

// Reducer
import NotesReducer from './NotesReducer';

// Context
export const NotesContext = createContext();

const NotesProvider = props => {
  const initialState = {
    message: {},
    active: {},
    notes: []
  };

  const [state, dispatch] = useReducer(NotesReducer, initialState);

  return (
    <NotesContext.Provider
      value={{
        message: state.message,
        active: state.active,
        notes: state.notes
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
