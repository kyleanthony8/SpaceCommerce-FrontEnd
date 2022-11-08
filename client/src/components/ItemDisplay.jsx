import React from "react";
import "./ItemDisplay.css";
import { NavLink } from "react-router-dom";

const ItemDisplay = ({ item }) => {
  return (
    <NavLink to={`/details/${item._id}`}>
      <div className="Display">
        <img src={item.image[0].image} />
        <h2>{item.name}</h2>
        <h3>{item.price} BTC</h3>
      </div>
    </NavLink>
  );
};
export default ItemDisplay;
