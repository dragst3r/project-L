import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/shop-list">List view</Link>
      <Link to="/">Recipes view</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
