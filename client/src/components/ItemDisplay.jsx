import React from 'react'
import './ItemDisplay.css';
import { NavLink, useNavigate } from "react-router-dom";

const ItemDisplay = ({ item }) => {
  return (
    <div className="Display">
      <NavLink to={`/details/${item._id}`}>
          <div className="navLinks">More Details</div>
        </NavLink>
      <img src={item.image[0].image} />
      <h2>{item.name}</h2>
      <h3>{item.price} BTC</h3>
    </div>
  );
};
export default ItemDisplay;
