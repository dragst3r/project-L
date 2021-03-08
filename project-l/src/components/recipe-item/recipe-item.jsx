import React from "react";
import "./recipe-item.css";

const RecipeItem = (props) => {
  return <div className="recipe-item" key={props.name}>{props.name}</div>;
};

export default RecipeItem;
