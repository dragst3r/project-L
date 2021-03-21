export const updateListItems = (currentState, item) => {
  let addItem = true;
  const newShoppingItems = currentState.shoppingItems.map((i) => {
    if (i.name === item.name) {
      addItem = false;
      return {
        ...i,
        quantityTotal: i.quantityTotal + item.source.quantity,
        source: [...i.source, item.source],
      };
    } else return i;
  });
  if (!addItem) {
    return {
      ...currentState,
      shoppingItems: newShoppingItems,
    };
  } else {
    return {
      ...currentState,
      shoppingItems: [...currentState.shoppingItems, {...item, quantityTotal: item.source.quantity, source: [item.source]} ],
    };
  }
};
