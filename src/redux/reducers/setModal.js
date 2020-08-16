import { SET_MODAL, REMOVE_MODAL } from '../actions/types';

const initialState = {
  setModal: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case SET_MODAL:
      return { setModal: true };
    case REMOVE_MODAL:
      return { setModal: false };
    default:
      return state;
  }
}
