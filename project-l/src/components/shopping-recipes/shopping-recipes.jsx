import React from "react";
import RecipeItemShop from "../shopping-recipe-item/shopping-recipe-item";
import ShoppingRecipeMobile from "./shopping-recipe-mobile/shopping-recipe-mobile";
import { useMediaQuery } from "react-responsive";
import "./shopping-recipes.css";
import { connect } from "react-redux";

const ShoppingRecipesList = ({ items }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <div className="shopping-recipe-list">
      {!isMobile ? (
        items.map((r) => (
          <RecipeItemShop
            image={r.image}
            name={r.name}
            key={r._id}
            id={r._id}
          />
        ))
      ) : (
        <ShoppingRecipeMobile items={items} />
      )}
    </div>
  );
};

const mapStateToProps = ({ shoppingList }) => ({
  items: shoppingList.selectedRecipes,
  isFilterOn: shoppingList.isFilterOn,
  filteredRecipe: shoppingList.filteredRecipe,
});
export default connect(mapStateToProps)(ShoppingRecipesList);
