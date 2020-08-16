import { SET_MODAL, REMOVE_MODAL } from './types';

export const setModal = (boolean, timeout = 3000) => (dispatch) => {
  dispatch({
    type: SET_MODAL,
    payload: boolean,
  });
  setTimeout(
    () => dispatch({ type: REMOVE_MODAL, payload: !boolean }),
    timeout
  );
};
