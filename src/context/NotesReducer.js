import { v4 } from 'uuid';

// Types
import {
  CLEAR_ACTIVE_NOTE,
  CLEAR_MESSAGE,
  CREATE_MESSAGE,
  CREATE_NOTE,
  REMOVE_NOTE,
  SET_ACTIVE_NOTE,
  UPDATE_NOTE
} from '../constants';

export default (state, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        message: {
          body: action.payload.body,
          type: action.payload.type
        }
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null
      };
    case CREATE_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          { ...action.payload, date: Date.now(), id: v4() }
        ]
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? action.payload : note
        )
      };
    case SET_ACTIVE_NOTE:
      return {
        ...state,
        active: action.payload
      };
    case CLEAR_ACTIVE_NOTE:
      return {
        ...state,
        active: null
      };
    default:
      return state;
  }
};
