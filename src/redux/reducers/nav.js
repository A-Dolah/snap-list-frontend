import { HAMBURGER_OPEN, HAMBURGER_CLOSE } from '../actions/types';

const initialState = {
  isOpen: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case HAMBURGER_OPEN:
      return { isOpen: true };
    case HAMBURGER_CLOSE:
      return { isOpen: false };
    default:
      return state;
  }
}
