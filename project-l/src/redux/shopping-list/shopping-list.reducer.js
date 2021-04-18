import * as actionTypes from "./shopping-list.actions";
import * as utility from "./shopping-list.utility";

const initialState = {
  shoppingItems: [],
  shoppingListVisible: false,
  shoppingItemsFiltered: [],
  isFilterOn: false,
  selectedRecipes: [],
};

const shoppingList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_LIST:
      return utility.updateListItems(state, action.payload);
    case actionTypes.ADD_RECIPE_TO_LIST:
      return utility.updateRecipesList(state, action.payload);
    case actionTypes.APPLY_SHOPPING_LIST_FILTER:
      return utility.filterShoppingItems(state, action.payload);
    case actionTypes.SET_LIST:
      return utility.setShoppingList(state,action.payload);
    default:
      return state;
  }
};

export default shoppingList;
