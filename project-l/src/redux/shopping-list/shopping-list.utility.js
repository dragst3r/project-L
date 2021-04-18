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
      shoppingItems: [
        ...currentState.shoppingItems,
        { ...item, quantityTotal: item.source.quantity, source: [item.source] },
      ],
    };
  }
};

export const updateRecipesList = (currentState, item) => {
  let addItem = true;
  const newRecipesList = currentState.selectedRecipes.map((r) => {
    if (r._id === item._id) {
      addItem = false;
      return {
        ...r,
        quantity: r.quantity + item.quantity,
      };
    } else return r;
  });
  if (!addItem) {
    return {
      ...currentState,
      selectedRecipes: newRecipesList,
    };
  } else {
    return {
      ...currentState,
      selectedRecipes: [...currentState.selectedRecipes, item],
    };
  }
};

export const filterShoppingItems = (currentState, item) => {
  const filterShoppingItems = currentState.shoppingItems.filter(
    (i) => i.source.every((j) => j.itemSource === item)
    // add updating quantityTotal if filtered
  );
  console.table(filterShoppingItems);
  return {
    ...currentState,
    shoppingItemsFiltered: filterShoppingItems,
    isFilterOn: !currentState.isFilterOn,
  };
};

export const setShoppingList = (currentState, item) => {
  return {
    ...currentState,
    shoppingListVisible: true,
    shoppingItems: item.shoppingItems,
    selectedRecipes: item.selectedRecipes
  };
};
