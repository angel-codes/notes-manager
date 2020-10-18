// Types
import { CLEAR_MESSAGE, CREATE_MESSAGE } from '../constants';

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
    default:
      return state;
  }
};
