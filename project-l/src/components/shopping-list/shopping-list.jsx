import React, { useEffect, useState } from "react";
import "./shopping-list.css";
import ShoppingItems from "../shopping-items/shopping-items.jsx";
import SearchInput from "../search/search.jsx";
import ShoppingRecipesList from "../shopping-recipes/shopping-recipes";
import { connect } from "react-redux";

const ShoppingList = ({ selectedRecipes, isFilterOn, filteredRecipe }) => {
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
      <div style={filterStyle} className="shopping-list-only">
        {/* <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
        <ShoppingItems />
      </div>
      <ShoppingRecipesList items={selectedRecipes} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedRecipes: state.shoppingList.selectedRecipes,
  isFilterOn: state.shoppingList.isFilterOn,
  filteredRecipe: state.shoppingList.filteredRecipe,
});

export default connect(mapStateToProps)(ShoppingList);
