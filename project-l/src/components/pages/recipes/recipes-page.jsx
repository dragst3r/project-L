import React from "react";
import RecipesList from "../../recipes-list/recipes-list";
import ShoppingList from "../../shopping-list/shopping-list";
import "./recipes-page.css";

const RecipesPage = () => (
  <div className="recipes-page">
    <div style={{ width: "500px" }}>
      <ShoppingList />
    </div>
    <RecipesList />
  </div>
);

export default RecipesPage;
