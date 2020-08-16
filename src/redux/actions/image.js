import {
  SET_DATA_URI,
  REMOVE_DATA_URI,
  SET_CLOUDINARY_URI,
  SUBMITTED_IMAGE,
  RESET_SUBMITTED_IMAGE,
} from './types';
import { setAlert } from './alert';
import { fetchIngredients } from './ingredients';
import cloudinaryRequest from '../../utils/cloudinaryApi';

export const setDataUri = (dataUri) => (dispatch) => {
  dispatch({ type: SET_DATA_URI, payload: dataUri });
};

export const removeDataUri = () => (dispatch) => {
  dispatch({ type: REMOVE_DATA_URI });
};

export const uploadImage = (dataUri) => async (dispatch) => {
  try {
    dispatch({
      type: SUBMITTED_IMAGE,
    });
    const data = new FormData();
    data.append('file', dataUri);
    data.append('upload_preset', 'snap-list');
    const res = await fetch(cloudinaryRequest(data));
    const cloudinaryUri = await res.json();
    const url = cloudinaryUri.secure_url;
    dispatch({
      type: SET_CLOUDINARY_URI,
      payload: url,
    });
    dispatch(fetchIngredients(url));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.message, 'danger'));
  }
};

export const resetSubmittedState = () => (dispatch) => {
  dispatch({ type: RESET_SUBMITTED_IMAGE });
};
