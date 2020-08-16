import { HAMBURGER_OPEN, HAMBURGER_CLOSE } from './types';

export const openHamburgerMenu = () => (dispatch) => {
  dispatch({
    type: HAMBURGER_OPEN,
  });
};

export const closeHamburgerMenu = () => (dispatch) => {
  dispatch({
    type: HAMBURGER_CLOSE,
  });
};
