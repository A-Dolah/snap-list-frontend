import api from './api';

import { loadUser, logout } from '../redux/actions/auth';
import store from '../redux/store';

const checkAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
    store.dispatch(loadUser());
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    store.dispatch(logout());
  }
};

export default checkAuthToken;
