import React from "react";
import "./shopping-recipe-item.css";
import { connect } from "react-redux";
import { apply_shopping_list_filter } from "../../redux/shopping-list/shopping-list.actions";

const RecipeItemShop = (props) => (
  <div
    onClick={() => {
      console.log(props);
      props.filterShoppingItems(props.id);
    }}
    className="shopping-recipe"
    key={props.key}
  >
    {props.name}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filterShoppingItems: (filterRecipe) =>dispatch(apply_shopping_list_filter(filterRecipe)),
});

export default connect(null, mapDispatchToProps)(RecipeItemShop);
