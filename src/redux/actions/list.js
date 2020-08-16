import {
  GET_LISTS,
  REMOVE_LIST,
  GET_LIST,
  UPDATE_LIST,
  TOGGLE_LIST_INGREDIENT,
  TO_SUBMIT_LIST,
  SUBMIT_LIST_SUCCESS,
  RESET_INGREDIENTS,
} from './types';
import { setAlert } from './alert';

import api from '../../utils/api';

export const getList = (id) => async (dispatch) => {
  try {
    const list = await api.get(`/lists/${id}`);
    dispatch({
      type: GET_LIST,
      payload: list.data,
    });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.message, 'danger'));
  }
};

export const toggleListIngredient = (ingredient) => (dispatch) => {
  dispatch({
    type: TOGGLE_LIST_INGREDIENT,
    payload: { ...ingredient },
  });
};

export const updateList = (list) => async (dispatch) => {
  try {
    const body = JSON.stringify(list);
    const res = await api.put(`/lists/${list._id}`, body);
    dispatch({
      type: UPDATE_LIST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.message, 'danger'));
  }
};

export const getLists = () => async (dispatch) => {
  const lists = await api.get('/lists');
  if (lists.data.length > 0) {
    dispatch({
      type: GET_LISTS,
      payload: lists.data,
    });
    dispatch({
      type: RESET_INGREDIENTS,
    });
  } else {
    dispatch({
      type: GET_LISTS,
      payload: null,
    });
  }
};

export const toSubmitList = (bool) => async (dispatch) => {
  dispatch({ type: TO_SUBMIT_LIST, payload: bool });
};

export const submitList = (
  listName,
  pickedIngredients,
  cloudinaryUri
) => async (dispatch) => {
  const ingredientsAsObjects = pickedIngredients.map((ingredient) => ({
    ingredient,
    done: false,
  }));
  const body = JSON.stringify({
    name: listName,
    list: ingredientsAsObjects,
    image_url: cloudinaryUri,
  });
  try {
    const res = await api.post('/lists', body);
    dispatch({
      type: SUBMIT_LIST_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('List successfully submitted!', 'success'));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.message, 'danger'));
  }
};

export const removeList = (list) => async (dispatch) => {
  try {
    const res = await api.delete(`/lists/${list._id}`);
    dispatch({
      type: REMOVE_LIST,
      payload: res.data,
    });
    dispatch(setAlert('List successfully removed!', 'success'));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.message, 'danger'));
  }
};
