import React, { createContext, useReducer } from 'react';

// Reducer
import NotesReducer from './NotesReducer';

// Context
export const NotesContext = createContext();

const NotesProvider = props => {
  const initialState = {
    active: {},
    notes: []
  };

  const [state, dispatch] = useReducer(NotesReducer, initialState);

  return (
    <NotesContext.Provider value={{ active: state.active, notes: state.notes }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
