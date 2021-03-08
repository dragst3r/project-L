import React from "react";
import ListItem from "../list-item/list-item";

import "./shopping-items.css";

const ShoppingItems = (props) => {
  return (
    <div className="shopping-items">
      {props.items.map((item) => (
        <ListItem key={item.name} name={item.name} quantity={item.quantity} />
      ))}
    </div>
  );
};

export default ShoppingItems;
