import React from "react";
import RecipesList from "../../recipes-list/recipes-list";
import ShoppingList from "../../shopping-list/shopping-list";
import ListsContainer from "../../lists-container/lists-container";
import { connect } from "react-redux";
import "./recipes-page.css";

const RecipesPage = ({ shoppingListVisible }) => (
  <div className="recipes-page">
    <div className="left-pane">
      <RecipesList />
    </div>
    <div className="right-pane">
      {shoppingListVisible ? <ShoppingList /> : <ListsContainer />}
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  shoppingListVisible: state.shoppingList.shoppingListVisible,
});
export default connect(mapStateToProps)(RecipesPage);
