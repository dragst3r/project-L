import * as actionTypes from "../store/actions/actions";
import * as utility from "./utility";

const initialState = {
  shoppingItems: [
    {
      name: "test",
      unit: "x",
      quantityTotal: 2,
      source: [{ itemSource: "list", quantity: 2 }],
    },
  ],
  shoppingItemsFiltered: [],
  isFilterOn: false,
  selectedRecipes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_LIST:
      return utility.updateListItems(state, action.payload);
    case actionTypes.ADD_RECIPE_TO_LIST:
      return utility.updateRecipesList(state, action.payload);
    case actionTypes.APPLY_SHOPPING_LIST_FILTER:
      return utility.filterShoppingItems(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
