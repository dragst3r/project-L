export const ADD_ITEM_TO_LIST = "ADD_ITEM_TO_LIST";
export const ADD_RECIPE_TO_LIST = "ADD_RECIPE_TO_LIST";
export const APPLY_SHOPPING_LIST_FILTER = "APPLY_SHOPPING_LIST_FILTER";
export const SET_LIST = "SET_LIST";
export const ITEM_ON_OFF = "ITEM_ON_OFF";
export const SHOW_ITEMS_TO_ADD = "SHOW_ITEMS_TO_ADD";
export const HIDE_ITEMS_TO_ADD = "HIDE_ITEMS_TO_ADD";

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

export const set_list = (item) => ({
  type: SET_LIST,
  payload: item,
});

export const item_on_off =(item)=>({
  type: ITEM_ON_OFF,
  payload: item,
})

export const show_items_to_add = (item)=>({
  type: SHOW_ITEMS_TO_ADD,
  payload: item
})

export const hide_items_to_add = ()=>({
  type: HIDE_ITEMS_TO_ADD,
})