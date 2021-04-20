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
    (i) => i.source.every((j) => j.itemSource === item.id)
    // add updating quantityTotal if filtered
  );
  let filteredRecipe = null;
  if (!currentState.isFilterOn) {
    filteredRecipe = item;
  }
  return {
    ...currentState,
    shoppingItemsFiltered: filterShoppingItems,
    filteredRecipe: filteredRecipe,
    isFilterOn: !currentState.isFilterOn,
  };
};

export const setShoppingList = (currentState, item) => {
  let newState = { shoppingListVisible: true };
  if (typeof item === undefined) {
    newState = {
      shoppingItems: item.shoppingItems,
      selectedRecipes: item.selectedRecipes,
    };
  }
  return {
    ...currentState,
    ...newState,
  };
};
