import React, { useRef } from "react";
import "./search.css";

const SearchInput = ({ setSearchTerm, addtoListItems, searchTerm }) => {
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
          addtoListItems({ name: searchTerm, quantity: 1 });
          setSearchTerm("");
          setFocus()
        }}
      >
        Add
      </button>
    </div>
  );
};
export default SearchInput;
