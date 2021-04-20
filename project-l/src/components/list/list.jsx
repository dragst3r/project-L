import React from "react";
import AddIcon from "@material-ui/icons/Add";
import {connect} from 'react-redux'
import "./list.css";

const List = (props) => {
  const newList = (
    <div onClick={()=>props.setList()} className="new=list list">
      <AddIcon />
    </div>
  );
  const existingList = (
    <div onClick={()=>props.setList(props.item)} className="existing-list list">{props.listName}</div>
  );
  if (props.listName === "New list") {
    return newList;
  } else {
    return existingList;
  }
};

const mapDispatchToProps = (dispatch)=>({
    setList: (list)=>dispatch({type: 'SET_LIST', payload: list})
})

export default connect(null, mapDispatchToProps)(List);
