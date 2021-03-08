import React from "react";
import "./shopping-list.css";
import ShoppingItems from "../shopping-items/shopping-items.jsx";
import SearchInput from "../search/search.jsx";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingItems: [
        { name: "a", quantity: 0 },
        { name: "b", quantity: 0 },
        { name: "c", quantity: 0 },
      ],
      searchTerm: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState((state) => (state.searchTerm = event.target.value));
  }

  handleClick() {
    let itemAdded = false;
    const itemToAdd = { name: this.state.searchTerm, quantity: 1 };
    this.setState(
      this.state.shoppingItems.map((i) => {
        if (i.name === this.state.searchTerm) {
          itemAdded = true;
          return i.quantity++;
        } else return i;
      })
    );
    if (!itemAdded)
      this.setState({
        shoppingItems: [itemToAdd, ...this.state.shoppingItems],
      });
    this.setState({ searchTerm: "" });
  }

  render() {
    return (
      <div className="shopping-list">
        <SearchInput
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
          addNewItemToList={this.handleClick}
        />
        <ShoppingItems items={this.state.shoppingItems} />
      </div>
    );
  }
}

export default ShoppingList;
