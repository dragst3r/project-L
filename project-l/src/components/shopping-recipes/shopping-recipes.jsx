import React from "react";
import RecipeItemShop from '../shopping-recipe-item/shopping-recipe-item'
import "./shopping-recipes.css";
import { connect } from "react-redux";

const ShoppingRecipesList = ({ items }) => {
  return (
    <div className='shopping-recipe-list'>
      {items.map((r) => (
        <RecipeItemShop image={r.image} name={r.name} key={r._id} id={r._id}/>
      ))}
    </div>
  );
};

const mapStateToProps =({shoppingList})=>({
  items: shoppingList.selectedRecipes
})
export default connect(mapStateToProps)(ShoppingRecipesList);
