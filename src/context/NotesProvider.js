import React, { createContext, useReducer } from 'react';

// Reducer
import NotesReducer from './NotesReducer';
// Types
import { CLEAR_MESSAGE, CREATE_MESSAGE } from '../constants';
// Context
export const NotesContext = createContext();

const NotesProvider = props => {
  const initialState = {
    message: null,
    active: null,
    notes: []
  };

  const [state, dispatch] = useReducer(NotesReducer, initialState);

  const fnSetMessage = (body, type) => {
    dispatch({
      type: CREATE_MESSAGE,
      payload: {
        body,
        type
      }
    });
    setTimeout(() => fnClearMessage(), 2000);
  };

  const fnClearMessage = () => {
    dispatch({
      type: CLEAR_MESSAGE
    });
  };

  return (
    <NotesContext.Provider
      value={{
        // State
        message: state.message,
        active: state.active,
        notes: state.notes,
        // Functions
        fnSetMessage
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
