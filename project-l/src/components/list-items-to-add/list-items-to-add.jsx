import React from "react";
import { connect } from "react-redux";
import ItemToAdd from "../item-to-add/item-to-add";

import "./list-items-to-add.css";

const ListItemsToAdd = ({ itemsToAdd, recipe }) => {
  return (
    <div className="list-items-to-add">
      <div>
        <img className="recipe-image" src={recipe.image} />
        <div className="recipe-name">{recipe.name}</div>
        <hr />
      </div>
      <div className="list-items-to-add-container">
        {itemsToAdd.map((i) => (
          <ItemToAdd name={i.name} quantity={i.quantity} unit={i.unit} />
        ))}
      </div>
      <div>
        <button>Dodaj składniki</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingList }) => ({
  itemsToAdd: shoppingList.itemsToAdd,
  recipe: shoppingList.itemsToAddRecipe,
});
export default connect(mapStateToProps)(ListItemsToAdd);
