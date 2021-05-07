import React from "react";
import "./shopping-recipe-item.css";
import { connect } from "react-redux";
import { apply_shopping_list_filter } from "../../redux/shopping-list/shopping-list.actions";

const RecipeItemShop = ({ item, ...props }) => {
  const handleClick = () => {
    props.filterShoppingItems({
      id: item._id,
      name: item.name,
      image: item.image,
    });
  };
  return (
    <div
      style={{ backgroundImage: `url(${item.image})` }}
      onClick={handleClick}
      className={`shopping-recipe${
        props.mobile ? " shopping-recipe-item-mobile" : ""
      }`}
      key={item._id}
    >
      <div
        className={`shopping-recipe-name${
          props.mobile ? " shopping-recipe-item-mobile" : ""
        }`}
      >
        {item.name}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterShoppingItems: (filterRecipe) =>
    dispatch(apply_shopping_list_filter(filterRecipe)),
});

export default connect(null, mapDispatchToProps)(RecipeItemShop);
