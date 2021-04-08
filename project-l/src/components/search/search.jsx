import React, { useRef } from "react";
import { connect } from "react-redux";
import { add_item_to_list } from "../../redux/shopping-list/shopping-list.actions";
import "./search.css";

const SearchInput = ({
  setSearchTerm,
  addtoListItems,
  searchTerm,
  addListItem,
}) => {
  const inputRef = useRef(null);

  const setFocus = () => inputRef.current.focus();
  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        className="search-input"
        type="text"
        placeholder="Search.."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      ></input>
      <button
        disabled={searchTerm === ""}
        type="button"
        onClick={() => {
          addListItem({
            name: searchTerm,
            unit:'x',
            source: { itemSource: "list", quantity: 1 },
          });
          setSearchTerm("");
          setFocus();
        }}
      >
        Add
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addListItem: (itemToAdd) => dispatch(add_item_to_list(itemToAdd)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
