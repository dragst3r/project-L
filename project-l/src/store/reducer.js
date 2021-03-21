
const initialState = {
  shoppingItems: [{ name: "test", quantity: 2 }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_LIST":
      return {
        ...state,
        shoppingItems: [...state.shoppingItems, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
