import {
  GET_LISTS,
  GET_LIST,
  UPDATE_LIST,
  REMOVE_LIST,
  TOGGLE_LIST_INGREDIENT,
  TO_SUBMIT_LIST,
  SUBMIT_LIST_SUCCESS,
} from '../actions/types';

const initialState = {
  list: null,
  lists: null,
  submittingList: false,
  submitted: false,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LISTS:
      return {
        ...state,
        lists: payload,
        submitted: false,
      };
    case GET_LIST:
      return {
        ...state,
        list: payload,
        loading: false,
      };
    case UPDATE_LIST:
      return {
        ...state,
      };
    case REMOVE_LIST:
      return {
        ...state,
        list: null,
        loading: false,
      };
    case TOGGLE_LIST_INGREDIENT:
      const ingredients = [...state.list.ingredients];
      const newList = {
        ...state.list,
        ingredients: ingredients.map((el) =>
          el.ingredient === payload.ingredient
            ? { ...payload, done: !payload.done }
            : el
        ),
      };
      return {
        ...state,
        list: newList,
      };
    case TO_SUBMIT_LIST:
      return {
        ...state,
        submittingList: payload,
        submitted: false,
      };
    case SUBMIT_LIST_SUCCESS:
      const newLists = state.lists ? [...state.lists, payload] : [payload];
      return {
        ...state,
        lists: newLists,
        submittingList: false,
        submitted: true,
      };
    default:
      return state;
  }
}
