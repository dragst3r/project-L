import React from "react";
import ListItem from "../list-item/list-item";
import { connect } from "react-redux";
import "./shopping-items.css";

const ShoppingItems = (props) => {
  return (
    <div className="shopping-items">
      {props.shoppingItems.map((item) => (
        <ListItem key={item.name} {...item} quantity={item.quantityTotal} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoppingItems: state.shoppingItems,
});

export default connect(mapStateToProps)(React.memo(ShoppingItems));
