import React from "react";
import "./list-item.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import DoneIcon from "@material-ui/icons/Done";
import { connect } from "react-redux";
import { item_on_off } from "../../redux/shopping-list/shopping-list.actions";
const ListItem = (props) => {
  const icon = {
    className:"list-item-checkbox",
    onClick:()=>props.itemOnOff(props.name)
  }

  return (
    <div className={`list-item-div list-item-${props.bought ?"off": "on"}`}>
      {props.bought ? (
        <DoneIcon {...icon}/>
      ) : (
        <CheckBoxOutlineBlankIcon {...icon}/>
      )}
      <p className="list-item-name">{props.name}</p>
      <p className="list-item-quantity">
        {(props.quantity || "") + " " + (props.unit || "")}
      </p>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  itemOnOff: (item) => dispatch(item_on_off(item)),
});

export default connect(null, mapDispatchToProps)(React.memo(ListItem));
