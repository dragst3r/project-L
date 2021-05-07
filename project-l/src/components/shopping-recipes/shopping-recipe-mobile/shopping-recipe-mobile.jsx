import React from "react";
import RecipeItemShop from "../../shopping-recipe-item/shopping-recipe-item";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./shopping-recipe-mobile.css";

const ShoppingRecipeMobile = (props) => {
  return (
    <div className="shopping-recipe-mobile">
      <div className="recipe-mobile-items">
          {props.items.map((i) => (
            <RecipeItemShop item={i} mobile className="test" />
          ))}
      </div>
    </div>
  );
};

export default ShoppingRecipeMobile;
