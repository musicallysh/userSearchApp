
import { GET_ERRORS } from '../actions/types';

// Initial Error State
const initialState = {};

const errorReducer = (state = initialState, action) => {
  if (action.type === GET_ERRORS) {
    return action.payload;
  } else {
    return state;
  }

};

export default errorReducer;
