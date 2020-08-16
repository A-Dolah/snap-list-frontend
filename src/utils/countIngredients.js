export const countIngredientsToBuy = (lists) =>
  lists
    ? lists
        .map((el) => {
          return el.ingredients.filter((ingredient) => !ingredient.done);
        })
        .flat().length
    : 0;
