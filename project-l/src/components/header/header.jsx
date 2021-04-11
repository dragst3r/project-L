import React from "react";
import HeaderLink from "../header-link/header-link";
import ListIcon from "@material-ui/icons/List";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import User from "../user/user";
import { connect } from "react-redux";
import "./header.css";

const Header = ({ isLoggedIn }) => {
  return (
    <div className="header">
      <HeaderLink
        icon={<ListIcon />}
        to="/shop-list"
        name="List view"
      ></HeaderLink>
      <HeaderLink
        icon={<MenuBookIcon />}
        to="/"
        name="Recipes view"
      ></HeaderLink>
      {isLoggedIn ? (
        <User />
      ) : (
        <HeaderLink
          icon={<PermIdentityIcon />}
          to="/login"
          name="Login"
        ></HeaderLink>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(Header);
