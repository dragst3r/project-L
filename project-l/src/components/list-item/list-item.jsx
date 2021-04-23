import React, { useState } from "react";
import "./list-item.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import DoneIcon from "@material-ui/icons/Done";
import { connect } from "react-redux";
import { item_on_off } from "../../redux/shopping-list/shopping-list.actions";
import ListItemRecipe from "./list-item-recipe/list-item-recipe";
const ListItem = (props) => {
  const icon = {
    className: "list-item-checkbox",
    onClick: () => {props.itemOnOff(props.name);setIsVisible(false)},
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className={`list-item-div list-item-${props.bought ? "off" : "on"}`}>
        {props.bought ? (
          <DoneIcon {...icon} />
        ) : (
          <CheckBoxOutlineBlankIcon {...icon} />
        )}
        <p onClick={() => setIsVisible(!isVisible)} className="list-item-name">
          {props.name}
        </p>
        <p
          onClick={() => setIsVisible(!isVisible)}
          className="list-item-quantity"
        >
          {(props.quantity || "") + " " + (props.unit || "")}
        </p>
      </div>

      {isVisible ? (
        <div>
          {props.source.map((i) => (
            <ListItemRecipe
              name={i.itemSourceName}
              quantity={i.quantity}
              unit={props.unit}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  itemOnOff: (item) => dispatch(item_on_off(item)),
});

export default connect(null, mapDispatchToProps)(React.memo(ListItem));
