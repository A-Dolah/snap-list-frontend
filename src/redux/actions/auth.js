import api from '../../utils/api';
import { setAlert } from './alert';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  CLEAR_PROFILE,
} from './types';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch(logout());
  }
};
export const register = ({ name, email, password }) => async (dispatch) => {
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await api.post('/users', body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    const token = res.data.token;
    api.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await api.post('/auth', body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    const token = res.data.token;
    api.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  delete api.defaults.headers.common['x-auth-token'];
  localStorage.removeItem('token');
};
