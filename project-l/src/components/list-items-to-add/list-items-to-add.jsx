import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ItemToAdd from "../item-to-add/item-to-add";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CustomButton from "../custom-button/custom-button";
import CloseIcon from "@material-ui/icons/Close";
import {
  add_item_to_list,
  hide_items_to_add,
  set_list,
  add_recipe_to_list,
} from "../../redux/shopping-list/shopping-list.actions";

import "./list-items-to-add.css";

const ListItemsToAdd = (props) => {
  const [itemsToBeAdded, setItemsToBeAdded] = useState();

  useEffect(() => {
    setItemsToBeAdded(props.itemsToAdd);
  }, [props.itemsToAdd]);

  const useItems = (item) => {
    setItemsToBeAdded(
      itemsToBeAdded.map((i) => (i.name === item.name ? item : i))
    );
  };

  const addIngridiens = (ingridiens) => {
    if (!props.listVisible) {
      props.setList();
    }
    ingridiens.forEach((i) => {
      props.addListItem({
        name: i.name,
        unit: i.unit,
        bought: false,
        source: {
          itemSource: props.recipe._id,
          itemSourceName: props.recipe.name,
          quantity: i.quantity,
        },
      });
    });
    props.hideList();
  };

  return (
    <div className="list-items-to-add">
      <div>
        <img className="recipe-image" src={props.recipe.image} />
        <div className="list-item-to-add-header">
          <div className="recipe-name">{props.recipe.name}</div>
          <CloseIcon onClick={props.hideList} className="close-icon"/>
        </div>
        <hr />
      </div>

      <div className="list-items-to-add-container">
        {[...(itemsToBeAdded || props.itemsToAdd)].map((i) => (
          <ItemToAdd onItemChange={useItems} item={i} />
        ))}
      </div>
      <div className="add-items-button-container">
        <CustomButton
          onClick={() => {
            addIngridiens(itemsToBeAdded.filter((i) => !i.shouldBeAdded));
            props.addRecipeItem({
              image: props.recipe.image,
              name: props.recipe.name,
              _id: props.recipe._id,
              quantity: 1,
            });
          }}
          icon={<ShoppingCartIcon />}
          text="Dodaj składniki"
        >
          Dodaj składniki
        </CustomButton>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addRecipeItem: (recipeToAdd) => dispatch(add_recipe_to_list(recipeToAdd)),
  addListItem: (itemToAdd) => dispatch(add_item_to_list(itemToAdd)),
  setList: (list) => dispatch(set_list(list)),
  hideList: () => dispatch(hide_items_to_add()),
});
const mapStateToProps = ({ shoppingList }) => ({
  itemsToAdd: shoppingList.itemsToAdd,
  recipe: shoppingList.itemsToAddRecipe,
  listVisible: shoppingList.shoppingListVisible,
});
export default connect(mapStateToProps, mapDispatchToProps)(ListItemsToAdd);
