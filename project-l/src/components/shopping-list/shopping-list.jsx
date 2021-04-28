import React, { useEffect, useState } from "react";
import "./shopping-list.css";
import ShoppingItems from "../shopping-items/shopping-items";
import ListItemsToAdd from "../list-items-to-add/list-items-to-add";
import SearchInput from "../search/search";
import ShoppingRecipesList from "../shopping-recipes/shopping-recipes";
import { connect } from "react-redux";
import { PromiseProvider } from "mongoose";

const ShoppingList = ({ selectedRecipes, isFilterOn, filteredRecipe, showItemsToAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");
  let filterStyle = {};
  if (isFilterOn) {
    filterStyle = {
      backgroundImage: `url(${filteredRecipe.image})`,
      backgroundSize: "auto 100%",
      backgroundColor: "rgb(2,66,0",
    };
  } else {
    filterStyle = {};
  }
  return (
    <div className="shopping-list">
      <div style={filterStyle} className={`shopping-list-only${showItemsToAdd?" list-add-items":""}`}>
        {/* <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
        {showItemsToAdd ? (
          <ListItemsToAdd />
        ) : (
          <ShoppingItems />
        )}
      </div>
      <ShoppingRecipesList items={selectedRecipes} />
    </div>
  );
};

const mapStateToProps = ({ shoppingList }) => ({
  selectedRecipes: shoppingList.selectedRecipes,
  isFilterOn: shoppingList.isFilterOn,
  filteredRecipe: shoppingList.filteredRecipe,
  showItemsToAdd: shoppingList.showItemsToAdd,
});

export default connect(mapStateToProps)(ShoppingList);
