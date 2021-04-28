import React, { useEffect, useState } from "react";
import "./item-to-add.css";

const ItemToAdd = (props) => {
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    setQuantity(props.quantity);
  }, [props]);

  return (
    <div className="item-to-add">
      <div className="item-to-add-name">{props.name}</div>
      <input
        className="item-to-add-quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <div className="item-to-add-unit">{props.unit}</div>
    </div>
  );
};

export default ItemToAdd;
