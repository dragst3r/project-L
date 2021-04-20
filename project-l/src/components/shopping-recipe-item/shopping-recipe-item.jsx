import React from "react";
import "./shopping-recipe-item.css";
import { connect } from "react-redux";
import { apply_shopping_list_filter } from "../../redux/shopping-list/shopping-list.actions";

const RecipeItemShop = (props) => (
  <div
    style={{ backgroundImage: `url(${props.image})` }}
    onClick={() => {
      props.filterShoppingItems({
        id: props.id,
        name: props.name,
        image: props.image,
      });
    }}
    className="shopping-recipe"
    key={props.key}
  >
    <div className="shopping-recipe-name">{props.name}</div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filterShoppingItems: (filterRecipe) =>
    dispatch(apply_shopping_list_filter(filterRecipe)),
});

export default connect(null, mapDispatchToProps)(RecipeItemShop);
