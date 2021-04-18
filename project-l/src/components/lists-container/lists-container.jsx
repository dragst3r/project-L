import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../list/list";

import "./lists-container.css";

const ListsContainer = () => {
  const [lists, setLists] = useState([{ listName: "New list" }]);
  useEffect(() => {
    const fetchedLists = axios
      .get("http://localhost:5000/mylists")
      .then((response) =>
        setLists([{ listName: "New list" }, ...response.data])
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="list-container">
      {lists.map((l) => (
        <List listName={l.listName} item={l} />
      ))}
    </div>
  );
};

export default ListsContainer
