import React, { useEffect, useState } from "react";
import "./shopping-list.css";
import ShoppingItems from "../shopping-items/shopping-items.jsx";
import SearchInput from "../search/search.jsx";

const ShoppingList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="shopping-list">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ShoppingItems items={props.shoppingItems} />
    </div>
  );
};

export default ShoppingList;
