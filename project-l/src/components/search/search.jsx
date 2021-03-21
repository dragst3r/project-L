import React, { useRef } from "react";
import { connect } from "react-redux";
import "./search.css";

const SearchInput = ({ setSearchTerm, addtoListItems, searchTerm,addListItem }) => {
  const inputRef = useRef(null);

  const setFocus = ()=> inputRef.current.focus();
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
          addListItem({ name: searchTerm, quantity: 1 });
          setSearchTerm("");
          setFocus()
        }}
      >
        Add
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addListItem: (itemToAdd) => dispatch({type: 'ADD_ITEM_TO_LIST', payload: itemToAdd})
})  

export default connect(null, mapDispatchToProps)(SearchInput);
