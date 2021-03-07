import React from "react";
import ListItem from "../list-item/list-item";

import "./shopping-list.css";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [
        { name: "12x", quantity: 0 },
        { name: "12x", quantity: 0 },
        { name: "12x", quantity: 0 }
      ],
    };
  }
  render() {
    return (
      <div className="shopping-list">
        {this.state.shoppingList.map((item) => (
          <ListItem name={item.name} quantity={item.quantity} />
        ))}
      </div>
    );
  }
}

export default ShoppingList;
/*{
            this.state.shoppingList.forEach(item=><ListItem name={item.name} quantity={item.quantity} />)
        }*/
