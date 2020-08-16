import { SET_WIDTH } from '../actions/types';

const initialState = {
  width: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_WIDTH:
      return { width: payload };
    default:
      return state;
  }
}
