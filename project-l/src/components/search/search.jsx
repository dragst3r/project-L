import React from "react";
import "./search.css";

const SearchInput = ({ handleSearch, addNewItemToList, ...otherProps }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search.."
        onChange={handleSearch}
        value={otherProps.searchTerm}
      ></input>
      <button
        type="button"
        onClick={otherProps.searchTerm.length > 0 ? addNewItemToList : () => {}}
      >
        Add
      </button>
    </div>
  );
};
export default SearchInput;
