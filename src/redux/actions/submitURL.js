import { SUBMIT_URL, SUBMIT_URL_FAIL } from './types';

export const submitURL = (url) => (dispatch) => {
  if (url) {
    dispatch({
      type: SUBMIT_URL,
      payload: url,
    });
  } else {
    dispatch({
      type: SUBMIT_URL_FAIL,
    });
  }
};
