import {
  INGREDIENTS_FETCHED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from './types';
import { setAlert } from './alert';
import api from '../../utils/api';

export const fetchIngredients = (url) => async (dispatch) => {
  try {
    const body = JSON.stringify({ input: url });
    const res = await api.post('/ingredients', body);
    dispatch({
      type: INGREDIENTS_FETCHED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch(setAlert(error.message, 'danger'));
  }
};

export const addIngredientToSuggested = (ingredient) => async (dispatch) => {
  dispatch({ type: ADD_INGREDIENT, payload: ingredient });
};

export const removeIngredientFromPicked = (ingredient) => async (dispatch) => {
  dispatch({ type: REMOVE_INGREDIENT, payload: ingredient });
};
