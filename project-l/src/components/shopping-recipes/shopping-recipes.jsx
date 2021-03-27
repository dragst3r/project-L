import React from "react";
import RecipeItemShop from '../shopping-recipe-item/shopping-recipe-item'
import "./shopping-recipes.css";
import { connect } from "react-redux";

const ShoppingRecipesList = ({ items }) => {
  return (
    <div className='shopping-recipe-list'>
      {items.map((r) => (
        <RecipeItemShop name={r.name} key={r._id} id={r._id}/>
      ))}
    </div>
  );
};

const mapStateToProps =(state)=>({
  items: state.selectedRecipes
})
export default connect(mapStateToProps)(ShoppingRecipesList);
