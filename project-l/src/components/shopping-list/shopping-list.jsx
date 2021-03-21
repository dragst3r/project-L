import React, { useEffect, useState } from "react";
import "./shopping-list.css";
import ShoppingItems from "../shopping-items/shopping-items.jsx";
import SearchInput from "../search/search.jsx";

const ShoppingList = (props) => {
  const [shoppingItems, setShoppingItems] = useState([
    { name: "a", quantity: 1 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");


  const addShoppingItem = (item) => {
    let newItem = true;
    let newShoppingItems = shoppingItems.map((i) => {
      if (i.name.toLowerCase() === item.name.toLowerCase()) {
        newItem = false;
        return { name: i.name, quantity: i.quantity + item.quantity };
      } else return i;
    });
    if (newItem) {
      newShoppingItems = [...shoppingItems, item];
    }
    setShoppingItems(newShoppingItems);
  };

  return (
    <div className="shopping-list">
      <SearchInput
        searchTerm={searchTerm}
        addtoListItems={addShoppingItem}
        setSearchTerm={setSearchTerm}
      />
      <ShoppingItems items={shoppingItems} />
    </div>
  );
};

export default ShoppingList;
