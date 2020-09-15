import axios from 'axios';
import {
  USER_LOADING,
  SET_USER,
  GET_ERRORS
} from './types';


// Get User
export const getUser = () => dispatch => {

  dispatch(setUserLoading());
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      dispatch(setUser(res.data))
      return res.data
    })

    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    })
};


// Set Loading State
export const setUserLoading = () => ({
  type: USER_LOADING
});

export const setUser = (userData) => ({
  type: SET_USER,
  payload: { userData }
});






