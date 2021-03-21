import * as actionTypes from "../store/actions/actions";
import * as utility from "./utility";

const initialState = {
  shoppingItems: [
    {
      name: "test",
      unit: 'x',
      quantityTotal: 2,
      source: [{ itemSource: "list", quantity: 2 }],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_LIST:
      return utility.updateListItems(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
