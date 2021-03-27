import React from "react";
import ListItem from "../list-item/list-item";
import { connect } from "react-redux";
import "./shopping-items.css";

const ShoppingItems = (props) => {
  let listToDisplay = props.isFilterOn? [...props.shoppingItemsFiltered]:[...props.shoppingItems]
  return (
    <div className="shopping-items">
      {listToDisplay.map((item) => (
        <ListItem key={item.name} {...item} quantity={item.quantityTotal} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoppingItems: state.shoppingItems,
  shoppingItemsFiltered: state.shoppingItemsFiltered,
  isFilterOn: state.isFilterOn
});

export default connect(mapStateToProps)(React.memo(ShoppingItems));
