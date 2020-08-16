import {
  INGREDIENTS_FETCHED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_INGREDIENTS,
} from '../actions/types';

const initialState = {
  suggestedIngredients: null,
  pickedIngredients: null,
  submittingList: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case INGREDIENTS_FETCHED:
      return {
        ...state,
        suggestedIngredients: payload,
      };
    case ADD_INGREDIENT:
      const newSuggestedIngredients = state.suggestedIngredients.filter(
        (e) => e !== payload
      );
      const newPickedIngredients = state.pickedIngredients
        ? [...state.pickedIngredients, payload]
        : [payload];
      return {
        ...state,
        suggestedIngredients: newSuggestedIngredients,
        pickedIngredients: newPickedIngredients,
      };
    case REMOVE_INGREDIENT:
      const resetPickedIngredients =
        state.pickedIngredients.length === 1
          ? null
          : state.pickedIngredients.filter((e) => e !== payload);
      const resetSuggestedIngredients = state.suggestedIngredients
        ? [...state.suggestedIngredients, payload]
        : [payload];
      return {
        ...state,
        suggestedIngredients: resetSuggestedIngredients,
        pickedIngredients: resetPickedIngredients,
      };
    case RESET_INGREDIENTS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
