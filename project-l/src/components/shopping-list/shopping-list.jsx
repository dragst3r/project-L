import React, { useEffect, useState } from "react";
import "./shopping-list.css";
import ShoppingItems from "../shopping-items/shopping-items.jsx";
import SearchInput from "../search/search.jsx";
import ShoppingRecipesList from "../shopping-recipes/shopping-recipes";
import { connect } from "react-redux";

const ShoppingList = ({selectedRecipes}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="shopping-list">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ShoppingItems />
      <ShoppingRecipesList items={selectedRecipes}/>
    </div>
  );
};

const mapStateToProps = (state) => ({ selectedRecipes: state.selectedRecipes });

export default connect(mapStateToProps)(ShoppingList);
