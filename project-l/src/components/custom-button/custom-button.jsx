import React from "react";
import "./custom-button.css";

const CustomButton = (props) => (
  <button onClick={props.onClick} className="custom-button">
    {props.icon}
    {props.text}
  </button>
);

export default CustomButton;
