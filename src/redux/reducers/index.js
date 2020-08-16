import { combineReducers } from 'redux';
import image from './image';
import ingredients from './ingredients';
import list from './list';
import auth from './auth';
import alert from './alert';
import profile from './profile';
import nav from './nav';
import general from './general';

const rootReducer = combineReducers({
  image,
  ingredients,
  list,
  auth,
  alert,
  profile,
  nav,
  general,
});

export default rootReducer;
