import React, { createContext, useReducer } from 'react';

// Reducer
import NotesReducer from './NotesReducer';
// Types
import {
  CLEAR_MESSAGE,
  CREATE_MESSAGE,
  CREATE_NOTE,
  REMOVE_NOTE
} from '../constants';
// Context
export const NotesContext = createContext();

const NotesProvider = props => {
  const initialState = {
    message: null,
    active: null,
    notes: []
  };

  const [state, dispatch] = useReducer(NotesReducer, initialState);

  // create a message for alerts
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

  // clear the message
  const fnClearMessage = () => {
    dispatch({
      type: CLEAR_MESSAGE
    });
  };

  // create note
  const fnCreateNote = note => {
    dispatch({
      type: CREATE_NOTE,
      payload: note
    });
  };

  // remove note
  const fnRemoveNote = id => {
    dispatch({
      type: REMOVE_NOTE,
      payload: id
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
        fnSetMessage,
        fnCreateNote,
        fnRemoveNote
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
