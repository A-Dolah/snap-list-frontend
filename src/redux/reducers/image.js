import {
  SET_DATA_URI,
  REMOVE_DATA_URI,
  SET_CLOUDINARY_URI,
  SUBMITTED_IMAGE,
  RESET_SUBMITTED_IMAGE,
} from '../actions/types';

const initialState = {
  dataUri: null,
  cloudinaryUri: null,
  submitted: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DATA_URI:
      return { ...state, dataUri: payload };
    case REMOVE_DATA_URI:
      return { ...state, dataUri: null };
    case SUBMITTED_IMAGE:
      return { ...state, submitted: true };
    case RESET_SUBMITTED_IMAGE:
      return { ...state, submitted: false };
    case SET_CLOUDINARY_URI:
      return { ...state, cloudinaryUri: payload };
    default:
      return state;
  }
};
