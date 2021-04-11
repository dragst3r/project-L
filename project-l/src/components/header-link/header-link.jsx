import React from "react";
import { Link } from "react-router-dom";
import "./header-link.css";


const HeaderLink = (props) => (
  <Link className="link" to={props.to}>
    {props.icon}
    {props.name}
  </Link>
);

export default HeaderLink;
