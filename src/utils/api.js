import axios from 'axios';
import store from '../redux/store';
import { LOGOUT, CLEAR_PROFILE } from '../redux/actions/types';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/api'
      : 'https://snap-list-backend.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
      store.dispatch({ type: CLEAR_PROFILE });
    }
    return Promise.reject(err);
  }
);

export default api;
