export const ADD_ITEM_TO_LIST = "ADD_ITEM_TO_LIST";
export const ADD_RECIPE_TO_LIST = "ADD_RECIPE_TO_LIST";
export const APPLY_SHOPPING_LIST_FILTER = "APPLY_SHOPPING_LIST_FILTER";

export const add_item_to_list = (item) => ({
  type: ADD_ITEM_TO_LIST,
  payload: item,
});

export const add_recipe_to_list = (item) => ({
  type: ADD_RECIPE_TO_LIST,
  payload: item,
});

export const apply_shopping_list_filter = (item) => ({
  type: APPLY_SHOPPING_LIST_FILTER,
  payload: item,
});
