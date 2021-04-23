import React from "react";
import "./list-item-recipe.css";

const ListItemRecipe = (props) => {
  return (
    <div className="list-item-recipe">
      <div className="list-item-recipe-name">{props.name}</div>
      <div className="list-item-recipe-quantity">{(props.quantity || "") + " " + (props.unit || "")}</div>
    </div>
  );
};

export default ListItemRecipe