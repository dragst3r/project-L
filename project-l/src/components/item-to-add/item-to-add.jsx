import React, { useEffect, useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./item-to-add.css";

const ItemToAdd = (props) => {
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    setQuantity(props.item.quantity);
  }, [props.item]);

  const onClickIcon = () =>
    props.onItemChange({
      ...props.item,
      shouldBeAdded: !props.item.shouldBeAdded || false,
    });
  return (
    <div
      key={props.item.name}
      className={`item-to-add ${
        props.item.shouldBeAdded ? "remove-item" : "add-item"
      }`}
    >
      {props.item.shouldBeAdded ? (
        <AddIcon onClick={onClickIcon} className="add-icon icon" />
      ) : (
        <RemoveIcon onClick={onClickIcon} className="remove-icon icon" />
      )}

      <div className="item-to-add-name">
        {props.item.name}
        {props.item.shouldBeAdded}
      </div>
      <input
        disabled={props.item.shouldBeAdded}
        type="number"
        className={`item-to-add-quantity ${
          props.item.shouldBeAdded ? "remove-item" : "add-item"
        }`}
        value={quantity}
        onChange={(e) => {
          if (Number(e.target.value) >= 0) setQuantity(Number(e.target.value));
        }}
        onBlur={() => {
          if (quantity !== props.item.quantity)
            props.onItemChange({ ...props.item, quantity: quantity });
        }}
      />
      <div className="item-to-add-unit">{props.item.unit}</div>
    </div>
  );
};

export default React.memo(ItemToAdd);
