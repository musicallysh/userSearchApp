
import { USER_LOADING, SET_USER } from '../actions/types';

const initialState = {
  users: null,
  loading: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_USER:
      return {
        ...state,
        users: action.payload.userData,
        loading: false
      };

    default:
      return state;
  }
};

export default userReducer;
