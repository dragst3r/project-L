import React from "react";
import RecipesList from "../../recipes-list/recipes-list";
import ShoppingList from "../../shopping-list/shopping-list";
import "./recipes-page.css";

const RecipesPage = () => (
  <div className="recipes-page">
    <div className="left-pane">
      <ShoppingList />
    </div>
    <div className="right-pane">
      <RecipesList />
    </div>
  </div>
);

export default RecipesPage;
