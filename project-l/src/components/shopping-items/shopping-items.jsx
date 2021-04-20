import React from "react";
import ListItem from "../list-item/list-item";
import { connect } from "react-redux";
import "./shopping-items.css";

const ShoppingItems = (props) => {
  let listToDisplay = props.isFilterOn
    ? [...props.shoppingItemsFiltered]
    : [...props.shoppingItems];
  const filterOn = {backgroundImage: "repeating-linear-gradient(-45deg,#FFF,rgb(241, 241, 241) 5px)"}
 

  return (
    <div style={props.isFilterOn?filterOn:{}} className="shopping-items-container">
      <div className="shopping-items">
        {listToDisplay.map((item) => (
          <ListItem key={item.name} {...item} quantity={item.quantityTotal} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingList }) => ({
  shoppingItems: shoppingList.shoppingItems,
  shoppingItemsFiltered: shoppingList.shoppingItemsFiltered,
  isFilterOn: shoppingList.isFilterOn,
});

export default connect(mapStateToProps)(React.memo(ShoppingItems));
