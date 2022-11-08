import React from "react";
import "./ItemDisplay.css";
import Singlelisting from "../screens/Singlelisting/Singlelisting";

const ItemDisplay = ({ item }) => {
  return (
    <div className="Display">
      <Singlelisting item={item} />
      <img src={item.image[0].image} />
      <h2>{item.name}</h2>
      <h3>{item.price} BTC</h3>
    </div>
  );
};
export default ItemDisplay;
