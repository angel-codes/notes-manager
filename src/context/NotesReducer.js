import { v4 } from 'uuid';

// Types
import { CLEAR_MESSAGE, CREATE_MESSAGE, CREATE_NOTE } from '../constants';

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
    default:
      return state;
  }
};
